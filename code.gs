/**
 * Specialist Spreadsheet backend.
 */
const SHEET_ID = '16W8Ww12LPx_zIERXYRNdT2VoAsUKqEi3X2edYB291-s';
const SHEET_NAME = 'Form Entries';

// Tabs that accept submissions WITHOUT a passcode (public self-referral form).
// Submitting anywhere else, and all lookups, still require the passcode.
const PUBLIC_TABS = ['Self-Referred'];


// Must match the header row in the sheet, in order.
const COLUMNS = [
  '#',
  'Doctor Name',
  "Rec'd By",
  'Recommendation',
  'Website',
  'Title',
  'Field',
  'Subspecialty',
  'Street',
  'City',
  'State',
  'Email',
  'Phone',
  'Notes',
  'Year',
  'Country',
  "Chase's Notes",
];

function doPost(e) {
  try {
    const body = JSON.parse(e.postData.contents);
    const props = PropertiesService.getScriptProperties();

    // Public, no-passcode path: self-referred specialists adding themselves.
    if (body.action === 'submit' && PUBLIC_TABS.indexOf(body.tab) !== -1) {
      return handleSubmit(body);
    }

    const expected = props.getProperty('ACCESS_PASSCODE');
    if (!expected || body.passcode !== expected) {
      return reply({ ok: false, error: 'Invalid passcode' });
    }

    if (body.action === 'lookup') return handleLookup(body, props);
    if (body.action === 'submit') return handleSubmit(body);
    return reply({ ok: false, error: 'Unknown action' });
  } catch (err) {
    return reply({ ok: false, error: String(err && err.message || err) });
  }
}

// GET is only for a quick "is the server up?" ping from the browser.
function doGet() {
  return reply({ ok: true, service: 'specialist-spreadsheet' });
}

function handleLookup(body, props) {
  const apiKey = props.getProperty('ANTHROPIC_API_KEY');
  if (!apiKey) return reply({ ok: false, error: 'Server is missing ANTHROPIC_API_KEY' });

  const resp = UrlFetchApp.fetch('https://api.anthropic.com/v1/messages', {
    method: 'post',
    contentType: 'application/json',
    headers: {
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    payload: JSON.stringify(body.anthropicRequest || {}),
    muteHttpExceptions: true,
  });

  const code = resp.getResponseCode();
  const text = resp.getContentText();
  let parsed;
  try { parsed = JSON.parse(text); } catch (_) { parsed = { raw: text }; }

  if (code < 200 || code >= 300) {
    return reply({ ok: false, error: (parsed.error && parsed.error.message) || `Anthropic ${code}`, status: code });
  }
  return reply({ ok: true, data: parsed });
}

function handleSubmit(body) {
  const tabName = body.tab || SHEET_NAME;
  const ss = SpreadsheetApp.openById(SHEET_ID);
  let sheet = ss.getSheetByName(tabName);
  if (!sheet) {
    // Create the tab on first use and seed the header row.
    sheet = ss.insertSheet(tabName);
    sheet.appendRow(COLUMNS);
  }

  const row = body.row || {};

  const values = COLUMNS.map(col => {
    const v = row[col];
    return v == null ? '' : String(v);
  });

  sheet.appendRow(values);
  return reply({ ok: true, appended: values, rowNumber: sheet.getLastRow() });
}

function reply(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}


