// Bendy Bodies Podcast — Episode Data
// Auto-generated from RSS feed: https://feeds.megaphone.fm/bendybodies
// 187 episodes loaded
// Last regenerated: 2026-02-20

// Guest name → photo lookup (normalized: strip Dr./Prof., strip credentials, lowercase)
const GUEST_IMAGES = {
  "dacre knight": "Guests/Darce_Knight.jpg",
  "ina stephens": "Guests/Ina_Stephens.jpeg",
  "lawrence afrin": "Guests/Lawrence_Afrin.jpg",
  "larry afrin": "Guests/Lawrence_Afrin.jpg",
  "paldeep atwal": "Guests/Paldeep_Atwal.jpg",
  "patrick agnew": "Guests/Patrick_Agnew.jpeg",
  "linda bluestein": "Guests/Linda_Bluestein.png",
  "tania dempsey": "Guests/Tania_Dempsey.jpg",
  "pradeep chopra": "Guests/Pradeep_Chopra.jpg",
  "clair francomano": "Guests/Clair_Francomano.jpg",
  "adam hansen": "Guests/Adam_Hansen.jpg",
  "adriaan louw": "Guests/Adriaan_Louw.jpg",
  "alan hakim": "Guests/Alan_Hakim.jpg",
  "alan pocinki": "Guests/Alan_Pocinki.jpg",
  "alexis cutchins": "Guests/Alexis_Cutchins.jpg",
  "andrea zujko": "Guests/Andrea_Zujko.jpg",
  "andrew goldstein": "Guests/Andrew_Goldstein.jpg",
  "anne maitland": "Guests/Anne_Maitland.jpg",
  "audrey kershaw": "Guests/Audrey_Kershaw.jpg",
  "beth darnall": "Guests/Beth_Darnall.jpg",
  "betsy grunch": "Guests/Betsy_Grunch.jpg",
  "bonnie robson": "Guests/Bonnie_Robson.jpg",
  "brayden yellman": "Guests/Brayden_Yellman.jpg",
  "brayden p. yellman": "Guests/Brayden_Yellman.jpg",
  "brianna cardenas": "Guests/Brianna_Cardenas.jpg",
  "carrie skony": "Guests/Carrie_Skony.jpg",
  "chelsea pierotti": "Guests/Chelsea_Pierotti.jpg",
  "colin halverson": "Guests/Colin_Halverson.jpg",
  "david kaufman": "Guests/David_Kaufman.jpg",
  "dwight mckee": "Guests/Dwight_Mckee.jpg",
  "emily bohan": "Guests/Emily_Bohan.jpg",
  "emily scherb": "Guests/Emily_Scherb.jpg",
  "eric singman": "Guests/Eric_Singman.jpg",
  "frank feigenbaum": "Guests/Frank_Feigenbaum.jpg",
  "heather tick": "Guests/Heather_Tick.jpg",
  "ilene ruhoy": "Guests/Ilene_Ruhoy.jpg",
  "john pitts": "Guests/John_Pitts.jpg",
  "kristin koskinen": "Guests/Kristin_Koskinen.jpg",
  "laurence kinsella": "Guests/Laurence_Kinsella.jpg",
  "leonard weinstock": "Guests/Leonard_Weinstock.jpg",
  "leslie russek": "Guests/Leslie_Russek.jpg",
  "lilian holm": "Guests/Lilian_Holm.jpg",
  "mandy blackmon": "Guests/Mandy_Blackmon.jpg",
  "matthew watto": "Guests/Matthew_Watto.jpg",
  "monica lorenzo": "Guests/Monica_Lorenzo.jpg",
  "natasha trujillo": "Guests/Natasha_Trujillo.jpg",
  "patty stott": "Guests/Patty_Stott.jpg",
  "patricia stott": "Guests/Patty_Stott.jpg",
  "pejman katiraei": "Guests/Pejman_Katiraei.jpg",
  "petra klinge": "Guests/Petra_Klinge.jpg",
  "rachel rubin": "Guests/Rachel_Rubin.jpg",
  "robert hacker": "Guests/Robert_Hacker.jpg",
  "roger seheult": "Guests/Roger_Seheult.jpg",
  "rudrani banik": "Guests/Rudrani_Banik.jpg",
  "satish raj": "Guests/Satish_Raj.jpg",
  "selina shah": "Guests/Selina_Shah.jpg",
  "shanda dorff": "Guests/Shanda_Dorff.jpg",
  "shimi kang": "Guests/Shimi_Kang.jpg",
  "stephanie greenspan": "Guests/Stephanie_Greenspan.jpg",
  "sue goldstein": "Guests/Sue_Goldstein.jpg",
  "svetlana blitshteyn": "Guests/Svetlana_Blitshteyn.jpg",
  "theoharis theoharides": "Guests/Theoharis_Theoharides.jpg",
  "tina wang": "Guests/Tina_Wang.jpg",
  "zachary spiritos": "Guests/Zachary_Spiritos.jpg",
  "adji cissoko": "Guests/Adji_Cissoko.jpg",
  "aidan leslie": "Guests/Aidan_Leslie.jpg",
  "allysa seely": "Guests/Allysa_Seely.jpg",
  "andrew dettelbach": "Guests/Andrew_Dettelbach.jpg",
  "ashok gupta": "Guests/Ashok_Gupta.jpg",
  "beckanne sisk": "Guests/Beckanne_Sisk.jpg",
  "cailey brandon": "Guests/Cailey_Brandon.jpg",
  "camille schrier": "Guests/Camille_Schrier.jpg",
  "corinne mclees": "Guests/Corinne_McLees.jpg",
  "emily rich": "Guests/Emily_Rich.jpg",
  "gigi robinson": "Guests/Gigi_Robinson.jpg",
  "heather purdin": "Guests/Heather_Purdin.jpg",
  "isabelle ramirez burnett": "Guests/Isabelle_Ramirez_Burnett.jpg",
  "jazz bynum": "Guests/Jazz_Bynum.jpg",
  "jeanice mitchell": "Guests/Jeanice_Mitchell.jpg",
  "jeannie dibon": "Guests/Jeannie_DiBon.jpg",
  "jeevan mann": "Guests/Jeevan_Mann.jpg",
  "jenelle manzi": "Guests/Jenelle_Manzi.jpg",
  "jill brook": "Guests/Jill_Brook.jpg",
  "jill miller": "Guests/Jill_Miller.jpg",
  "jo-anne la flèche": "Guests/Jo-Anne_La_Fleche.jpg",
  "kate colbert": "Guests/Kate_Colbert.jpg",
  "kathleen mcguire gaines": "Guests/Kathleen_McGuire_Gaines.jpg",
  "katie dettelbach": "Guests/Katie_Dettelbach.jpg",
  "keeya steel": "Guests/Keeya_Steel.jpg",
  "lara bloom": "Guests/Lara_Bloom.jpg",
  "lara heimann": "Guests/Lara_Heimann.jpg",
  "lisa ralston": "Guests/Lisa_Ralston.jpg",
  "marimba gold-watts": "Guests/Marimba_Gold-Watts.jpg",
  "melissa dickinson": "Guests/Melissa_Dickinson.jpg",
  "moira mccormack": "Guests/Moira_McCormack.jpg",
  "terry hyde": "Guests/Terry_Hyde.jpg",
  "tiffany lee": "Guests/Tiffany_Lee.jpg",
  "tilly rose": "Guests/Tilly_Rose.jpg",
  "victor montori": "Guests/Victor_Montori.jpg",
  "wendy wagner": "Guests/Wendy_Wagner.jpg",
  "amanda cassil": "Guests/Amanda_Cassil.jpg",
  "cortney gensemer": "Guests/Cortney_Gensemer.jpg",
  "eva nagy": "Guests/Eva_Nagy.jpg",
  "irwin goldstein": "Guests/Irwin_Goldstein.jpg",
  "janet settle": "Guests/Janet_Settle.jpg",
  "jen crane": "Guests/Jen_Crane.jpg",
  "jennifer gaudiani": "Guests/Jennifer_Gaudiani.jpg",
  "jennifer milner": "Guests/Jennifer_Milner.jpg",
  "jessica eccles": "Guests/Jessica_Eccles.jpg",
  "jill carnahan": "Guests/Jill_Carnahan.jpg",
  "jill schofield": "Guests/Jill_Schofield.jpg",
  "joel wells": "Guests/Joel_Wells.jpg",
  "josh spell": "Guests/Josh_Spell.jpg",
  "julie robinson-smith": "Guests/Julie_Robinson-Smith.jpg",
  "kara wada": "Guests/Kara_Wada.jpg",
  "karen herbst": "Guests/Karen_Herbst.jpg",
  "kelly casperson": "Guests/Kelly_Casperson.jpg",
  "paolo bolognese": "Guests/Paolo_Bolognese.jpg",
  "rachel neville": "Guests/Rachel_Neville.jpg",
  "rebekah rotstein": "Guests/Rebekah_Rotstein.jpg",
  "shu das": "Guests/Shu_Das.jpg",
  "skylar brandt": "Guests/Skylar_Brandt.jpg",
  "stacy menton": "Guests/Stacey_Menton.jpg",
  "stacey menton": "Guests/Stacey_Menton.jpg",
  "summer dashe": "Guests/Summer_Dashe.jpg",
  "susan chalela": "Guests/Susan_Chalela.jpg",
  "tara renton": "Guests/Tara_Renton.jpg",
  "aiko callahan": "Guests/Aiko_Callahan.jpg",
  "kaitlin touza": "Guests/Kaitlin_Touza.jpg",
  "lauren vasko": "Guests/Lauren_Vasko.jpg",
  "lisa howell": "Guests/Lisa_Howell.jpg",
  "lorna ryan": "Guests/Lorna_Ryan.jpg",
  "mariaelena ruiz": "Guests/Mariaelena_Ruiz.jpg",
  "victoria daylor": "Guests/Victoria_Daylor.jpg",
  "vita bachman": "Guests/Vita_Bachman.jpg",
  "dwight mckee": "Guests/Dwight_McKee.jpg",
};

// Guest name → professional profile data (normalized key, same as GUEST_IMAGES)
const GUEST_PROFILES = {
  "dacre knight": {
    bio: "Dr. Dacre Knight is the Medical Director of the EDS & Hypermobility Disorders Center at the University of Virginia, where he also serves as Associate Professor of Medicine. He previously founded and directed the Mayo Clinic EDS Clinic for six years and served four years as a U.S. Air Force physician.",
    credentials: "MD, MS, FACP",
    affiliation: "UVA Health",
    website: "https://www.uvahealth.com/providers/dacre-knight-1255695433"
  },
  "lawrence afrin": {
    bio: "Dr. Lawrence Afrin is a hematologist/oncologist and one of the world's foremost experts on Mast Cell Activation Syndrome (MCAS). He is the author of over 73 peer-reviewed articles and the first book about MCAS, 'Never Bet Against Occam.'",
    credentials: "MD",
    affiliation: "AIM Center for Personalized Medicine",
    website: "https://drtaniadempsey.com/lawrence-afrin/"
  },
  "tania dempsey": {
    bio: "Dr. Tania Dempsey is a board-certified internal medicine and integrative medicine physician internationally recognized for her expertise in MCAS, EDS, and autoimmune disease. She founded the AIM Center for Personalized Medicine in Purchase, NY.",
    credentials: "MD",
    affiliation: "AIM Center for Personalized Medicine",
    website: "https://drtaniadempsey.com/tania-dempsey/"
  },
  "pradeep chopra": {
    bio: "Dr. Pradeep Chopra is a Harvard-trained, board-certified pain medicine specialist with over 25 years of experience treating complex chronic pain and multisystem disorders. He specializes in EDS, POTS, MCAS, CRPS, and central sensitization disorders.",
    credentials: "MD, MHCM",
    affiliation: "The Center for Complex Conditions",
    website: "https://www.painri.com/doctors/pradeep-chopra-md"
  },
  "clair francomano": {
    bio: "Dr. Clair Francomano is a medical geneticist and Professor of Medical & Molecular Genetics at Indiana University School of Medicine. She spearheaded a 20+ year longitudinal study on EDS at the NIH and has published over 130 peer-reviewed articles on hereditary connective tissue disorders.",
    credentials: "MD",
    affiliation: "Indiana University School of Medicine",
    website: "https://medicine.iu.edu/faculty/44791/francomano-clair"
  },
  "adam hansen": {
    bio: "Dr. Adam Hansen is a thoracic surgeon at WVU Medicine known for developing the Hansen repair technique for slipping rib syndrome. He has treated close to 1,000 slipping rib syndrome patients, many of whom have Ehlers-Danlos Syndrome.",
    credentials: "MD",
    affiliation: "WVU Medicine United Hospital Center",
    website: "https://www.slippingribsyndrome.org/"
  },
  "adriaan louw": {
    bio: "Adriaan Louw is a physical therapist, pain scientist, and leading authority on pain neuroscience education. He has published over 70 peer-reviewed papers and serves as Senior Faculty and Pain Science Director for Evidence in Motion.",
    credentials: "PT, PhD",
    affiliation: "Evidence in Motion, UNLV",
    website: "https://whyyouhurt.com/"
  },
  "aiko callahan": {
    bio: "Aiko Callahan is a board-certified orthopedic physical therapist with over 13 years of experience treating performing artists and hypermobility-related conditions. She co-created a new hypermobility assessment tool for clinicians.",
    credentials: "DPT, OCS",
    affiliation: "Aiko Callahan Physical Therapy LLC",
    website: "https://www.aikocallahanpt.com/"
  },
  "alan hakim": {
    bio: "Dr. Alan Hakim is a UK-based consultant rheumatologist with over 32 years of experience in connective tissue disorders. He serves as Chief Medical Officer and Director of Research for The Ehlers Danlos Society.",
    credentials: "MA, FRCP",
    affiliation: "The Ehlers Danlos Society",
    website: "https://alanhakim.com/"
  },
  "alan pocinki": {
    bio: "Dr. Alan Pocinki is a general internist and Associate Clinical Professor of Medicine at George Washington University. He has specialized in joint hypermobility syndromes and related autonomic and sleep disorders since the late 1990s.",
    credentials: "MD, FACP",
    affiliation: "George Washington University",
    website: "https://drpocinki.com/"
  },
  "alexis cutchins": {
    bio: "Dr. Alexis Cutchins is a board-certified cardiologist and expert in POTS, dysautonomia, and Long COVID. She founded Cutchins Cardiovascular Medicine specializing in the care of patients with POTS, MCAS, and hypermobility disorders.",
    credentials: "MD",
    affiliation: "Cutchins Cardiovascular Medicine",
    website: "https://cutchinscvm.com/"
  },
  "amanda cassil": {
    bio: "Dr. Amanda Cassil is a licensed clinical psychologist and founder of STEM Psychological Services. She specializes in supporting women in STEM fields and is the author of The Empowered Highly Sensitive Person.",
    credentials: "PhD",
    affiliation: "STEM Psychological Services",
    website: "https://www.stempsychology.com/"
  },
  "andrea zujko": {
    bio: "Andrea Zujko is a board-certified orthopedic physical therapist and dance medicine specialist. She has been the senior physical therapist at Westside Dance Physical Therapy since 2002, providing care for the New York City Ballet.",
    credentials: "PT, DPT, OCS, COMT",
    affiliation: "Westside Dance Physical Therapy",
    website: "https://www.dancemedei.com/"
  },
  "andrew goldstein": {
    bio: "Dr. Andrew Goldstein is a board-certified gynecologist and Director of the Centers for Vulvovaginal Disorders. A past president of ISSWSH, he has published over 100 peer-reviewed articles on vulvodynia and female sexual pain.",
    credentials: "MD, FACOG",
    affiliation: "Centers for Vulvovaginal Disorders",
    website: "https://vulvodynia.com/"
  },
  "anne maitland": {
    bio: "Dr. Anne Maitland is an allergist/immunologist and Medical Director for the Ehlers Danlos Syndrome Institute at MUSC. She is recognized for her expertise in MCAS and its intersection with EDS and hypermobility disorders.",
    credentials: "MD, PhD",
    affiliation: "Medical University of South Carolina",
    website: "https://www.drannemaitland.net/"
  },
  "audrey kershaw": {
    bio: "Dr. Audrey Kershaw is an oral surgeon who founded Oral Surgery Scotland. She has uncovered hundreds of hidden EDS cases through dental presentations, lecturing widely on connective tissue disorders in dentistry.",
    credentials: "BDS, FDS RCSEd",
    affiliation: "Oral Surgery Scotland",
    website: "https://www.oralsurgery.scot/"
  },
  "beth darnall": {
    bio: "Dr. Beth Darnall is a Professor at Stanford University School of Medicine and Director of the Stanford Pain Relief Innovations Lab. She created Empowered Relief, a single-session pain intervention now delivered in 26 countries.",
    credentials: "PhD",
    affiliation: "Stanford University School of Medicine",
    website: "https://bethdarnall.com/"
  },
  "betsy grunch": {
    bio: "Dr. Betsy Grunch is a board-certified neurosurgeon who completed her spine fellowship at Duke University. She specializes in minimally invasive spine surgery and is known for her educational social media presence with over 3 million followers.",
    credentials: "MD, FAANS, FACS",
    affiliation: "Southern Neurosurgery",
    website: "https://www.drgrunch.com/"
  },
  "bonnie robson": {
    bio: "Dr. Bonnie Robson is a retired psychiatrist in Toronto who pioneered performance psychiatry for dancers at the National Ballet of Canada. She received lifetime achievement awards for her contributions to dance medicine.",
    credentials: "MD",
    affiliation: "National Ballet of Canada (retired)",
    website: "https://www.jorgendance.ca/team/bonnie-e-robson/"
  },
  "brayden yellman": {
    bio: "Dr. Brayden Yellman is a board-certified internist and rheumatologist at the Bateman Horne Center. He specializes in ME/CFS, fibromyalgia, and orthostatic intolerance syndromes including POTS.",
    credentials: "MD",
    affiliation: "Bateman Horne Center",
    website: "https://batemanhornecenter.org/about/staff/brayden-yellman-md/"
  },
  "brayden p. yellman": {
    bio: "Dr. Brayden Yellman is a board-certified internist and rheumatologist at the Bateman Horne Center. He specializes in ME/CFS, fibromyalgia, and orthostatic intolerance syndromes including POTS.",
    credentials: "MD",
    affiliation: "Bateman Horne Center",
    website: "https://batemanhornecenter.org/about/staff/brayden-yellman-md/"
  },
  "brianna cardenas": {
    bio: "Brianna Cardenas is a Physician Assistant with a Doctorate in Medical Science, specializing in hypermobility, EDS, MCAS, and dysautonomia. As someone living with hEDS herself, she combines allopathic and functional medicine approaches.",
    credentials: "DMSc, PA-C, ATC",
    affiliation: "Neuroveda Health",
    website: "https://www.healedandempowered.com/"
  },
  "carrie skony": {
    bio: "Dr. Carrie Skony is a Chiropractic Physician and Certified Chiropractic Sports Physician specializing in dance medicine. She has been treating dancers and athletes since 2006 with expertise in hypermobility.",
    credentials: "DC, CCSP",
    affiliation: "PERFORM Active Wellness + Dance Medicine",
    website: "https://www.performactivewellness.com/"
  },
  "chelsea pierotti": {
    bio: "Dr. Chelsea Pierotti is a sport and performance psychologist, Teaching Associate Professor at the University of Colorado Boulder, and former professional dancer. She is a founding member of DanseMedica.",
    credentials: "PhD",
    affiliation: "Passionate Coach LLC",
    website: "https://www.chelseapierotti.com/"
  },
  "colin halverson": {
    bio: "Colin Halverson is a bioethicist and Assistant Professor of Medicine at Indiana University School of Medicine. His research focuses on the ethical care of patients with rare diseases, particularly Ehlers-Danlos Syndrome.",
    credentials: "PhD",
    affiliation: "Indiana University Center for Bioethics",
    website: "https://bioethics.iu.edu/people/colin-halverson.html"
  },
  "cortney gensemer": {
    bio: "Dr. Cortney Gensemer is a postdoctoral scholar at MUSC researching the genetic basis of hypermobile EDS. As a person living with hEDS herself, she co-discovered a gene mutation associated with the condition.",
    credentials: "PhD",
    affiliation: "Medical University of South Carolina",
    website: "https://www.drgensemer.com/"
  },
  "david kaufman": {
    bio: "Dr. David Kaufman is an internal medicine specialist and founder of the Center for Complex Diseases, with expertise in ME/CFS, Long Covid, dysautonomia, POTS, MCAS, and autoimmune disease.",
    credentials: "MD",
    affiliation: "Center for Complex Diseases",
    website: "https://www.centerforcomplexdiseases.com/"
  },
  "dwight mckee": {
    bio: "Dr. Dwight McKee is a board-certified oncologist-hematologist also certified in nutrition and integrative/holistic medicine, with over 45 years of medical experience. He authored After Cancer Care.",
    credentials: "MD",
    affiliation: "Independent practice",
    website: "https://re-enliven.info/dwight-mckee/"
  },
  "emily bohan": {
    bio: "Dr. Emily Bohan is a physical therapist specializing in pelvic floor and orthopedic rehabilitation, with expertise in hypermobility and EDS. She has worked with the U.S. Olympic Rowing Team and founded Pelvic Wisdom.",
    credentials: "PT, DPT",
    affiliation: "Pelvic Wisdom",
    website: "https://www.pelvicwisdom.com/"
  },
  "emily scherb": {
    bio: "Dr. Emily Scherb is a physical therapist and circus arts specialist known as 'The Circus Doc.' She wrote the bestselling Applied Anatomy of Aerial Arts, the first book on biomechanics of circus training.",
    credentials: "PT, DPT",
    affiliation: "Pure Motion Physical Therapy",
    website: "https://www.thecircusdoc.com/"
  },
  "eric singman": {
    bio: "Dr. Eric Singman is a neuro-ophthalmologist and Division Chief of General Eye Services at the Wilmer Eye Institute at Johns Hopkins. He has particular expertise in the impact of Ehlers-Danlos Syndromes on vision.",
    credentials: "MD, PhD",
    affiliation: "Wilmer Eye Institute, Johns Hopkins",
    website: "https://www.umms.org/find-a-doctor/profiles/dr-eric-lowell-singman-md-1881654804"
  },
  "eva nagy": {
    bio: "Dr. Eva Nagy is a breast surgeon based in Sydney, Australia, specializing in breast implant illness and its connection to mast cell activation syndrome. She is recognized as a leading surgeon for explant surgery.",
    credentials: "MD, PhD",
    affiliation: "Sydney Oncoplastic Surgery",
    website: "https://www.oncoplasticsurgery.com.au/"
  },
  "frank feigenbaum": {
    bio: "Dr. Frank Feigenbaum is a Board-Certified Neurosurgeon who has treated over 2,000 Tarlov and meningeal cyst patients. He developed refined surgical techniques with proven outcomes and serves on the Tarlov Cyst Foundation advisory board.",
    credentials: "MD, FACS, FAANS",
    affiliation: "Feigenbaum Neurosurgery",
    website: "https://www.frankfeigenbaum.com/"
  },
  "heather tick": {
    bio: "Dr. Heather Tick holds the Gunn-Loke Endowed Professorship of Integrative Pain Medicine at the University of Washington. She specializes in non-pharmacologic pain treatments and authored Holistic Pain Relief.",
    credentials: "MD, MA",
    affiliation: "University of Washington",
    website: "https://heathertickmd.com/"
  },
  "ilene ruhoy": {
    bio: "Dr. Ilene Ruhoy is a board-certified neurologist and founder of the Center for Healing Neurology. She serves as Medical Director at the Chiari EDS Center at Mount Sinai South Nassau.",
    credentials: "MD, PhD",
    affiliation: "Chiari EDS Center at Mount Sinai South Nassau",
    website: "https://chiarieds.com/ilene-s-ruhoy-md-phd/"
  },
  "ina stephens": {
    bio: "Dr. Ina Stephens is a Professor of Pediatrics at UVA School of Medicine, specializing in integrative medicine and medical yoga. She co-directs the Autonomic Dysfunction clinic and serves as Interim Medical Director for the EDS Center at UVA Health.",
    credentials: "MD, e-RYT, C-IAYT",
    affiliation: "University of Virginia Health",
    website: "https://uvahealth.com/findadoctor/Ina-Stephens-1043251499"
  },
  "irwin goldstein": {
    bio: "Dr. Irwin Goldstein is a pioneer in sexual medicine and founder of San Diego Sexual Medicine. He is a Clinical Professor of Urology at UC San Diego with over 360 publications and multiple lifetime achievement awards.",
    credentials: "MD",
    affiliation: "San Diego Sexual Medicine",
    website: "https://www.sdsm.info/meet-dr-goldstein"
  },
  "janet settle": {
    bio: "Dr. Janet Settle is an integrative psychiatrist in Denver with over 35 years of experience, board certified in psychiatry, holistic medicine, and integrative medicine. She draws from a broad range of modalities to address root causes of psychiatric symptoms.",
    credentials: "MD",
    affiliation: "Integrative Psychiatric Care",
    website: "https://janetsettle.com/"
  },
  "jen crane": {
    bio: "Dr. Jen Crane is a physical therapist and athletic trainer specializing in circus arts, pelvic floor therapy, and hypermobility. She herself scores 9/9 on the Beighton hypermobility scale.",
    credentials: "PT, DPT, OCS, ATC",
    affiliation: "Cirque Physio",
    website: "https://www.cirquephysio.com"
  },
  "jennifer gaudiani": {
    bio: "Dr. Jennifer Gaudiani is the Founder and Medical Director of the Gaudiani Clinic, specializing in medical complications of eating disorders. She is one of the only outpatient internists in the U.S. who is a Certified Eating Disorder Specialist-Consultant.",
    credentials: "MD, CEDS-S, FAED",
    affiliation: "Gaudiani Clinic",
    website: "https://www.gaudianiclinic.com"
  },
  "jennifer milner": {
    bio: "Jennifer Milner is a Nationally Certified Pilates Teacher and former professional ballet and musical theatre performer who specializes in training dancers and hypermobile populations. She is a co-founder and co-host of the Bendy Bodies Podcast.",
    credentials: "NCPT",
    affiliation: "Bodies In Motion, Bendy Bodies Podcast",
    website: "https://www.jennifer-milner.com/"
  },
  "jessica eccles": {
    bio: "Dr. Jessica Eccles is a Reader in Brain-Body Medicine at Brighton and Sussex Medical School and a Consultant Neurodevelopmental Psychiatrist who co-leads the world's first Neurodivergent Brain-Body Clinic.",
    credentials: "MB ChB, MRCPsych, PhD",
    affiliation: "Brighton and Sussex Medical School",
    website: "https://www.bsms.ac.uk/about/contact-us/staff/dr-jessica-eccles.aspx"
  },
  "jill carnahan": {
    bio: "Dr. Jill Carnahan is a functional medicine physician and founder of Flatiron Functional Medicine. A survivor of both breast cancer and Crohn's disease, she is board certified in Integrative Holistic Medicine.",
    credentials: "MD, ABIHM, IFMCP",
    affiliation: "Flatiron Functional Medicine",
    website: "https://www.jillcarnahan.com/"
  },
  "jill schofield": {
    bio: "Dr. Jill Schofield is a physician and researcher who founded the Center for Multisystem Disease. She is one of the first physicians to complete fellowship training in multi-specialty autoimmune disease, specializing in dysautonomia and MCAS.",
    credentials: "MD",
    affiliation: "Center for Multisystem Disease",
    website: "https://www.centerformultisystemdisease.com/"
  },
  "joel wells": {
    bio: "Dr. Joel Wells is a fellowship-trained hip surgeon and orthopedic specialist. He specializes in hip preservation, periacetabular osteotomy, and hip dysplasia, with expertise in hip care for hypermobile patients.",
    credentials: "MD, MPH, FAAOS",
    affiliation: "Baylor Scott & White Health",
    website: "https://www.bswhealth.com/physician/joel-wells"
  },
  "josh spell": {
    bio: "Josh Spell is a licensed clinical social worker who specializes in eating disorders and the mental health of performing artists. He is the consulting mental health therapist for Pacific Northwest Ballet and owner of Flexible Mind Counseling.",
    credentials: "MSW, LICSW",
    affiliation: "Flexible Mind Counseling",
    website: "https://flexiblemindcounseling.org/"
  },
  "julie robinson-smith": {
    bio: "Dr. Julie Robinson-Smith is a dentist specializing in orofacial pain and oral medicine, with diplomate status from the American Board of Oral Medicine and American Board of Orofacial Pain. She treats TMJ/TMD, neuropathic pain, and headaches.",
    credentials: "DDS",
    affiliation: "Orofacial Pain Associates of Colorado Springs",
    website: "https://www.ofpcos.com/"
  },
  "kaitlin touza": {
    bio: "Dr. Kaitlin Touza is a pain psychologist and Acting Assistant Professor at the University of Washington School of Medicine. She completed training in Clinical Pain Psychology at Stanford.",
    credentials: "PhD",
    affiliation: "University of Washington Medicine",
    website: "https://www.uwmedicine.org/bios/kaitlin-touza"
  },
  "kara wada": {
    bio: "Dr. Kara Wada is a board-certified allergist, immunologist, and lifestyle medicine physician. She founded The Immune Confidence Institute and lives with Sjogren's disease and dysautonomia herself.",
    credentials: "MD",
    affiliation: "The Immune Confident MD",
    website: "https://www.drkarawada.com/"
  },
  "karen herbst": {
    bio: "Dr. Karen Herbst is an endocrinologist and leading researcher in lipedema and rare adipose tissue disorders. She led the NIH-sponsored conference establishing the U.S. standard of care for lipedema.",
    credentials: "PhD, MD",
    affiliation: "The Roxbury Institute",
    website: "https://www.advancedlipedematreatment.com/karen-herbst-phd-md"
  },
  "kelly casperson": {
    bio: "Dr. Kelly Casperson is a board-certified urologic surgeon and founder of The Casperson Clinic. She is the host of the podcast 'You Are Not Broken' and a bestselling author on hormones and sexual health.",
    credentials: "MD",
    affiliation: "The Casperson Clinic",
    website: "https://kellycaspersonmd.com/"
  },
  "kristin koskinen": {
    bio: "Kristin Koskinen is a registered dietitian nutritionist specializing in nutrition for dancers, artistic athletes, and hypermobile individuals. She focuses on connective tissue recovery and inflammation-related gut issues.",
    credentials: "RDN, LDN, LD, CD",
    affiliation: "Eat Well, Live Well, LLC",
    website: "https://eatwellpros.com/"
  },
  "laurence kinsella": {
    bio: "Dr. Laurence Kinsella is a board-certified neurologist specializing in autonomic dysfunction, neuropathy, and complex neurological issues at the intersection of dysautonomia, hypermobility, and MCAS.",
    credentials: "MD",
    affiliation: "SSM Neuroscience Institute, Saint Louis University",
    website: "https://psnmo.net/member-providers/dr-laurence-kinsella-neurology/"
  },
  "leonard weinstock": {
    bio: "Dr. Leonard Weinstock is a board-certified gastroenterologist recognized as a leading expert on MCAS and SIBO. He is an associate professor at Washington University School of Medicine with over 80 publications.",
    credentials: "MD",
    affiliation: "Specialists in Gastroenterology",
    website: "https://www.gidoctor.net/leonard-weinstock/"
  },
  "leslie russek": {
    bio: "Dr. Leslie Russek is Professor Emeritus of Physical Therapy at Clarkson University with over 30 years of clinical experience, including 25 years working with patients with hypermobile EDS.",
    credentials: "PT, DPT, PhD, OCS",
    affiliation: "Clarkson University",
    website: "https://www.clarkson.edu/people/leslie-russek"
  },
  "lilian holm": {
    bio: "Lilian Holm is a physical therapist with over 30 years of experience who has focused exclusively on patients with hypermobility spectrum disorders and Ehlers-Danlos syndromes.",
    credentials: "PT, DPT, CHC",
    affiliation: "Lilian Holm Wellness",
    website: "https://www.lilianholm.com/"
  },
  "mandy blackmon": {
    bio: "Mandy Blackmon is a board-certified orthopaedic physical therapist serving as head physical therapist for the Atlanta Ballet. She specializes in treating performing artists and the hypermobile population.",
    credentials: "PT, DPT, OCS, CMTPT",
    affiliation: "Atlanta Dance Medicine",
    website: "https://www.mandydancept.com/"
  },
  "matthew watto": {
    bio: "Dr. Matthew Watto is a Clinical Assistant Professor at the University of Pennsylvania and co-founder of The Curbsiders, a weekly internal medicine podcast with over 100,000 active monthly listeners.",
    credentials: "MD, FACP",
    affiliation: "University of Pennsylvania, The Curbsiders",
    website: "https://www.mattwattomd.com"
  },
  "monica lorenzo": {
    bio: "Monica Lorenzo is a certified athletic trainer and founder of ROMO Fit who developed the first Athletic Training Program for NBA entertainment teams at Madison Square Garden. She has served as athletic trainer for the Radio City Rockettes and Cirque du Soleil.",
    credentials: "MS, ATC, CES",
    affiliation: "ROMO Fit, Inc.",
    website: "https://doctorsfordancers.com/directory/monica-lorenzo/"
  },
  "natasha trujillo": {
    bio: "Dr. Natasha Trujillo is a licensed counseling and sport psychologist specializing in chronic illness, grief and loss, eating disorders, and performance concerns for athletes. She is on the U.S. Olympic and Paralympic Committee Mental Health Registry.",
    credentials: "PhD",
    affiliation: "Natasha P. Trujillo, PhD",
    website: "https://npttherapy.com/"
  },
  "paldeep atwal": {
    bio: "Dr. Paldeep Atwal is a board-certified clinical and medical biochemical geneticist and director of Atwal Clinic for Genomic and Personalized Medicine. He has co-discovered two new genetic connective tissue syndromes and published over 100 publications.",
    credentials: "MD",
    affiliation: "Atwal Clinic for Genomic & Personalized Medicine",
    website: "https://atwalclinic.com/"
  },
  "patrick agnew": {
    bio: "Dr. Patrick Agnew is a podiatric surgery specialist board certified in foot and ankle surgery. He serves on the Medical and Scientific Board of The Ehlers-Danlos Society.",
    credentials: "DPM",
    affiliation: "The Ehlers-Danlos Society",
    website: "https://www.ehlers-danlos.com/patrick-agnew/"
  },
  "patty stott": {
    bio: "Patricia Stott is a physical therapist, athletic trainer, and certified hand therapist who treats primarily those with HSD/EDS. She is the co-author of 'Taming the Zebra,' a definitive physical therapy guide to managing HSD/EDS.",
    credentials: "PT, DPT, MS, ATC, CHT",
    affiliation: "Elevation Wellness",
    website: "https://www.ehlers-danlos.com/patricia-stott/"
  },
  "patricia stott": {
    bio: "Patricia Stott is a physical therapist, athletic trainer, and certified hand therapist who treats primarily those with HSD/EDS. She is the co-author of 'Taming the Zebra,' a definitive physical therapy guide to managing HSD/EDS.",
    credentials: "PT, DPT, MS, ATC, CHT",
    affiliation: "Elevation Wellness",
    website: "https://www.ehlers-danlos.com/patricia-stott/"
  },
  "pejman katiraei": {
    bio: "Dr. Pejman Katiraei is a board-certified pediatrician fellowship-trained in integrative and holistic medicine. He founded Wholistic Kids and Wholistic Minds in Santa Monica, specializing in children with complex conditions.",
    credentials: "DO",
    affiliation: "Wholistic Kids, Wholistic Minds",
    website: "https://wholistickids.com/people/dr-pejman-katiraei/"
  },
  "petra klinge": {
    bio: "Dr. Petra Klinge is a neurosurgeon and professor of neurosurgery at Brown University, specializing in Chiari malformation, tethered cord syndrome, and spinal malformations in EDS patients.",
    credentials: "MD, PhD",
    affiliation: "Brown University, Rhode Island Hospital",
    website: "https://www.brownhealth.org/providers/petra-m-klinge-md-phd"
  },
  "rachel rubin": {
    bio: "Dr. Rachel Rubin is a board-certified urologist with fellowship training in sexual medicine for all genders. She completed her sexual medicine fellowship with Dr. Irwin Goldstein and serves as education chair for ISSWSH.",
    credentials: "MD",
    affiliation: "Rachel Rubin MD Urology and Sexual Medicine",
    website: "https://www.rachelrubinmd.com/"
  },
  "robert hacker": {
    bio: "Dr. Robert Hacker is a double board-certified vascular surgeon specializing in MALS, Nutcracker Syndrome, May-Thurner Syndrome, and pelvic venous congestion syndrome affecting EDS patients.",
    credentials: "MD",
    affiliation: "St. Louis Vascular Surgical Specialists",
    website: "https://stlvascular.com/about/dr-robert-hacker/"
  },
  "roger seheult": {
    bio: "Dr. Roger Seheult is a quadruple board-certified physician specializing in pulmonary medicine, critical care, internal medicine, and sleep medicine. He co-founded MedCram, a medical education platform with over 1 million YouTube subscribers.",
    credentials: "MD",
    affiliation: "MedCram",
    website: "https://www.medcram.com"
  },
  "rudrani banik": {
    bio: "Dr. Rudrani Banik is a Board-certified Ophthalmologist, fellowship-trained Neuro-Ophthalmologist, and Functional Medicine expert. She is fully trained in ophthalmic surgery and Botox, and she has a special interest in treating Headache and Migraine. Dr. Banik manages a wide spectrum of conditions affecting vision, as well as the complex connections between the eye and brain.",
    credentials: "MD, IFMCP",
    affiliation: "enVision Health NYC",
    website: "https://www.drranibanik.com"
  },
  "satish raj": {
    bio: "Dr. Satish Raj is a Professor of Cardiac Science at the University of Calgary and a global leader in POTS research. He founded the Calgary Autonomic Investigation & Management Clinic and was named Dysautonomia International Physician of the Year.",
    credentials: "MD, MSCI, FRCPC",
    affiliation: "University of Calgary, Libin Cardiovascular Institute",
    website: "https://libin.ucalgary.ca/node/240"
  },
  "selina shah": {
    bio: "Dr. Selina Shah is a board-certified sports medicine physician and Director of Dance Medicine at the Center for Sports Medicine in San Francisco. She serves as team physician for USA Synchronized Swimming, USA Weight Lifting, and USA Figure Skating.",
    credentials: "MD, FACP, FAMSSM",
    affiliation: "BASS Medical Group",
    website: "https://selinashah.com"
  },
  "shanda dorff": {
    bio: "Dr. Shanda Dorff is a board-certified family medicine physician who founded Complex Cares LLC to focus on treating EDS, MCAS, and POTS. She practices in the Minneapolis/St. Paul area.",
    credentials: "MD, FAAFP",
    affiliation: "Complex Cares LLC",
    website: "https://www.complexcaresmn.com"
  },
  "shimi kang": {
    bio: "Dr. Shimi Kang is an award-winning psychiatrist, Clinical Associate Professor at UBC, and bestselling author of 'The Dolphin Parent' and 'The Tech Solution.' She received the Queen Elizabeth II Diamond Jubilee Medal.",
    credentials: "MD",
    affiliation: "University of British Columbia",
    website: "https://www.drshimikang.com"
  },
  "stephanie greenspan": {
    bio: "Dr. Stephanie Greenspan is a physical therapist specializing in circus artists and dancers, and founder of Artletic Science. She co-authored clinical guidelines for management of hypermobility in performing artists.",
    credentials: "PT, DPT, OCS, NCS",
    affiliation: "Artletic Science",
    website: "https://artleticscience.com/about"
  },
  "sue goldstein": {
    bio: "Sue Goldstein is a certified sexuality educator and Clinical Research Manager at San Diego Sexual Medicine. She is President-Elect of ISSWSH and managing editor of Sexual Medicine Reviews.",
    credentials: "AASECT Certified",
    affiliation: "San Diego Sexual Medicine",
    website: "https://www.sdsm.info"
  },
  "svetlana blitshteyn": {
    bio: "Dr. Svetlana Blitshteyn is a neurologist and founder of the Dysautonomia Clinic, specializing in POTS, small fiber neuropathy, and related conditions. She is a Clinical Associate Professor of Neurology at the University at Buffalo.",
    credentials: "MD, FAAN",
    affiliation: "Dysautonomia Clinic",
    website: "http://www.dysautonomiaclinic.com"
  },
  "theoharis theoharides": {
    bio: "Dr. Theoharis Theoharides is the world's foremost mast cell researcher with 493 publications. He is Professor and Executive Director of the Institute for Neuro-Immune Medicine at Nova Southeastern University.",
    credentials: "MD, PhD",
    affiliation: "Nova Southeastern University",
    website: "https://www.mastcellmaster.com"
  },
  "tina wang": {
    bio: "Dr. Tina Wang is a Physical Medicine & Rehabilitation physician specializing in fascia and founder of Tupelo Pointe Healing Arts. Her research focuses on ultrasound diagnostics for fascial dysfunction in EDS patients.",
    credentials: "MD",
    affiliation: "Tupelo Pointe Healing Arts",
    website: "https://tupelopointe.com"
  },
  "zachary spiritos": {
    bio: "Dr. Zachary Spiritos is a neurogastroenterologist and founder of EverBetter Medicine, treating complex digestive conditions, dysautonomia, and MCAS. He specializes in GI complications of hypermobility syndromes.",
    credentials: "MD, MPH",
    affiliation: "EverBetter Medicine",
    website: "https://everbettermedicine.health"
  },
  "john pitts": {
    bio: "Dr. John Pitts is a Physical Medicine & Rehabilitation physician specializing in regenerative medicine and interventional orthopedics at the Centeno-Schultz Clinic. He is the chief editor of the Atlas of Interventional Orthopedics.",
    credentials: "MD",
    affiliation: "Centeno-Schultz Clinic",
    website: "https://centenoschultz.com/our-staff/john-pitts-md/"
  },
  "adji cissoko": {
    bio: "Adji Cissoko is a German-born dancer and Associate Artistic Director at Alonzo King LINES Ballet, where she has originated many central roles and guested at galas worldwide since joining in 2014. She trained at the Ballet Academy Munich and the Jacqueline Kennedy Onassis School at American Ballet Theatre on full scholarship.",
    credentials: "Diploma in Dance (Ballet Academy Munich)",
    affiliation: "Alonzo King LINES Ballet",
    website: "https://linesballet.org/person/adji-cissoko/"
  },
  "aidan leslie": {
    bio: "Aiden Leslie is an American pop singer, songwriter, and two-time Billboard-charting artist best known for his hit 'World's Away,' which reached No. 1 on Logo TV's Click List. He is an LGBT advocate who works with the organization Live Out Loud connecting LGBTQ youth with mentorship.",
    credentials: null,
    affiliation: "Ashea Records",
    website: "https://www.instagram.com/aidenleslie/"
  },
  "allysa seely": {
    bio: "Allysa Seely is a two-time Paralympic gold medalist in paratriathlon (Rio 2016, Tokyo 2020) and three-time World Paratriathlon Champion. She was diagnosed with Chiari II Malformation, basilar invagination, and Ehlers-Danlos Syndrome, which led to a below-knee amputation in 2013.",
    credentials: null,
    affiliation: "Team USA, US Paralympics Triathlon",
    website: "https://www.teamusa.com/profiles/allysa-seely-817537"
  },
  "andrew dettelbach": {
    bio: "Andrew Dettelbach is the co-founder of Whealth, a coaching program that has helped over 22,000 people overcome chronic pain since 2012. He has hypermobile Ehlers-Danlos Syndrome and recovered from a severe disc herniation without surgery.",
    credentials: "BS in Kinesiology, FRCms",
    affiliation: "Whealth",
    website: "https://spreadwhealth.com"
  },
  "ashok gupta": {
    bio: "Ashok Gupta is the founder of the Gupta Program, a neuroplasticity-based brain retraining program for chronic conditions including ME/CFS, fibromyalgia, and long COVID. He contracted ME/CFS while studying economics at Cambridge University and developed recovery techniques he has taught for over 15 years.",
    credentials: "MA (Cantab), MSc",
    affiliation: "Gupta Program, Harley Street Solutions",
    website: "https://guptaprogram.com"
  },
  "beckanne sisk": {
    bio: "Beckanne Sisk is a principal ballet dancer now with the National Ballet of Canada, having previously spent 12 years at Ballet West. She has scoliosis and hypermobility that have both challenged and shaped her career, and her accolades include the Jerome Robbins Award and a Princess Grace Dance Fellowship.",
    credentials: null,
    affiliation: "National Ballet of Canada",
    website: "https://www.instagram.com/beckannesisk/"
  },
  "bonnie moore southgate": {
    bio: "Bonnie Moore Southgate is a former elite ballet dancer who performed as a soloist with American Ballet Theatre and the Royal Ballet, winning the Prix de Lausanne. After being diagnosed with Ehlers-Danlos Syndrome, she transitioned into a career as a neurokinetic therapist and Pilates trainer specializing in hypermobility.",
    credentials: "Sports Therapist, Neurokinetic Therapist",
    affiliation: "Movement Anatomy Essentials, SEDSConnective",
    website: "https://movementanatomyessentials.co.uk"
  },
  "cailey brandon": {
    bio: "Cailey Brandon is the founder of Verb Movement Rehabilitation, bridging physical therapy and Pilates methodology for clients with chronic pain and neurological conditions. She founded Verb after her own diagnosis with a connective tissue disorder and autonomic disease.",
    credentials: "MS Cognitive Neuroscience, NCPT",
    affiliation: "Verb Movement Rehabilitation",
    website: "https://www.verb-madetomove.com"
  },
  "camille schrier": {
    bio: "Camille Schrier is Miss America 2020, a Doctor of Pharmacy, and an EDS advocate who was diagnosed with Ehlers-Danlos Syndrome at age 11. She won the Miss America title with a chemistry demonstration and has used her platform to raise awareness of EDS and promote STEM education.",
    credentials: "PharmD, BS in Biochemistry",
    affiliation: "The Ehlers Danlos Society",
    website: "https://www.camilleschrier.com"
  },
  "corinne mclees": {
    bio: "Corinne McLees is an occupational therapist turned hand coach specializing in helping people with chronic hand pain and hypermobility. She has nearly 8 years of experience in hand therapy, including 5 years in a Level 1 trauma hospital, and has a connective tissue disorder herself.",
    credentials: "MS in Occupational Therapy, OTR/L",
    affiliation: "Hand Coach Corinne, Mobile OT & Wellness Group",
    website: "https://www.handcoachcorinne.com"
  },
  "delaney kenney": {
    bio: "Delaney Kenney is a neuroscience graduate from Haverford College diagnosed with hypermobile Ehlers-Danlos Syndrome. She conducted EDS research at the University of Colorado Anschutz Medical Campus, working on reprogramming hEDS patient fibroblasts into induced pluripotent stem cells.",
    credentials: "BA in Neuroscience (Haverford College)",
    affiliation: "Haverford College",
    website: "https://www.linkedin.com/in/delaneykenney/"
  },
  "emily rich": {
    bio: "Emily Rich is an occupational therapist, researcher, and educator specializing in POTS, Ehlers-Danlos syndromes, and chronic conditions at Tucson Medical Center. She earned her PhD studying POTS rehabilitation and is also a patient with hypermobile EDS and POTS.",
    credentials: "PhD, MOT, OTR/L",
    affiliation: "Tucson Medical Center, Dysautonomia International, The Ehlers-Danlos Society",
    website: "https://www.otemily.com"
  },
  "gigi robinson": {
    bio: "Gigi Robinson is a content creator, chronic illness advocate, and Sports Illustrated Swim model diagnosed with Ehlers-Danlos Syndrome and endometriosis. She founded Hosts of Influence and works with organizations including The Trevor Project and UN Women.",
    credentials: "MS, BFA (University of Southern California)",
    affiliation: "Hosts of Influence, Endometriosis Foundation of America",
    website: "https://www.gigirobinson.com"
  },
  "heather purdin": {
    bio: "Heather Purdin is a physical therapist and owner of Good Health Physical Therapy & Wellness in Portland, Oregon, specializing in hypermobility spectrum disorders and EDS. She is President of the Oregon Area Ehlers-Danlos Society and co-authored the book 'Taming the Zebra.'",
    credentials: "MS, PT, CMPT",
    affiliation: "Good Health Physical Therapy & Wellness, Oregon Area Ehlers-Danlos Society",
    website: "https://goodhealthphysicaltherapy.com/"
  },
  "isabelle ramirez burnett": {
    bio: "Isabel Ramirez-Burnett is a systems engineer, board-certified health coach, and CEO of Renegade Research, a patient-led nonprofit focused on complex multi-system chronic conditions like ME/CFS and long COVID. Diagnosed with ME/CFS at age 7, she also serves as Project Director of Remission Biome.",
    credentials: "Systems Engineer, Board-Certified Health Coach",
    affiliation: "Renegade Research, Remission Biome",
    website: "https://www.remissionbiome.org/"
  },
  "jazz bynum": {
    bio: "Jazz Khai Bynum is a professional ballet dancer with Ballet West who was diagnosed with hypermobile Ehlers-Danlos Syndrome. She graduated from The Boston Conservatory with a BFA in Contemporary Performance with an emphasis in Ballet, cum laude.",
    credentials: "BFA (Boston Conservatory)",
    affiliation: "Ballet West",
    website: "https://www.balletwest.org/dancers/detail/jazz-khai-bynum"
  },
  "jeanice mitchell": {
    bio: "Jeanice Mitchell is a pelvic health physical therapist and president of Integrity Rehab & Home Health in Texas, specializing in pelvic floor rehabilitation with particular expertise in the hypermobile population. She founded myPFM, a nonprofit pelvic health public service campaign.",
    credentials: "PT, MPT, WCS, BCB-PMD",
    affiliation: "Integrity Rehab & Home Health, myPFM",
    website: "https://integrityrehab.net/"
  },
  "jeannie dibon": {
    bio: "Jeannie Di Bon is an internationally recognized movement therapist specializing in hypermobility, EDS, and chronic pain with over 16 years of experience. She is the creator of the Integral Movement Method and founder of The Zebra Club app, drawing from her own diagnoses of hEDS, MCAS, POTS, and CFS.",
    credentials: "MSc (Pain Management)",
    affiliation: "The Zebra Club, London Hypermobility Network of Excellence, The Ehlers Danlos Society",
    website: "https://jeanniedibon.com"
  },
  "jeevan mann": {
    bio: "Jeevan Mann is a professional research assistant at the University of Colorado Anschutz Medical Campus diagnosed with classical-like Ehlers-Danlos Syndrome, an ultra-rare form affecting approximately 1 in 1 million people. He graduated from UC Davis in 2.5 years and plans to pursue a dual MD-PhD in regenerative medicine.",
    credentials: "BS (Psychology/Biology, UC Davis)",
    affiliation: "University of Colorado Anschutz Medical Campus",
    website: "https://chronicdiseasecoalition.org/get-involved/ambassadors/jeevan-mann"
  },
  "jenelle manzi": {
    bio: "Jenelle Manzi is a professional ballet dancer with the New York City Ballet who was diagnosed with Ehlers-Danlos syndrome at age 18. She launched a recipe blog and founded Get Golden, a snack bar company, after re-evaluating her nutrition approach.",
    credentials: null,
    affiliation: "New York City Ballet, Get Golden",
    website: "http://ballerinajournal.com/"
  },
  "jill brook": {
    bio: "Jill Brook is a nutritionist, POTS patient, host of The POTScast, and volunteer research assistant to several POTS experts. She earned degrees from Princeton University and UCLA and serves as nutrition consultant to the Dysautonomia Clinic.",
    credentials: "MA",
    affiliation: "Standing Up to POTS, Dysautonomia Clinic, PatientsCount.org",
    website: "https://www.standinguptopots.org/"
  },
  "jill miller": {
    bio: "Jill Miller is the co-founder of Tune Up Fitness Worldwide and creator of Yoga Tune Up and The Roll Model Method. With over 30 years of study in anatomy and movement, she is the author of the bestselling books 'The Roll Model' and 'Body by Breath.'",
    credentials: "C-IAYT, ERYT",
    affiliation: "Tune Up Fitness Worldwide",
    website: "https://www.tuneupfitness.com/"
  },
  "jo-anne la flèche": {
    bio: "Jo-Anne La Flèche is a clinical and performance psychologist with an MA in Dance and graduate studies in Somatics, based in Montreal. She is the resident psychologist at L'Ecole Superieure de Ballet du Quebec and has worked across the dance field for over 25 years.",
    credentials: "MA (Dance), Clinical Psychologist",
    affiliation: "L'Ecole Superieure de Ballet du Quebec, Healthy Dancer Canada",
    website: "https://www.esbq.ca/en/profiles/jo-anne-lafleche/"
  },
  "kate colbert": {
    bio: "Kate Colbert is the founder, executive director, and board president of EDS Guardians, Inc., the world's first patient-to-patient pay-it-forward organization for EDS patients. Diagnosed with hEDS at age 45, she is also CEO of Silver Tree Communications and a bestselling author.",
    credentials: "MA, MBA",
    affiliation: "EDS Guardians Inc., Silver Tree Communications",
    website: "https://www.edsguardians.org/"
  },
  "kathleen mcguire gaines": {
    bio: "Kathleen McGuire Gaines is a former professional ballet dancer and the founder of Minding the Gap, an organization dedicated to making dancers' mental health as important as their physical health. Her 2017 Dance Magazine article 'Why Are We Still So Bad at Addressing Dancers' Mental Health?' went viral.",
    credentials: "BA (Writing, University of Pittsburgh)",
    affiliation: "Minding the Gap",
    website: null
  },
  "katie dettelbach": {
    bio: "Katie Dettelbach is a former critical care cardiac registered nurse and co-founder of Whealth, helping people with hypermobility and chronic pain build strength and manage their conditions. Diagnosed with hEDS, she combined her nursing background with movement to develop specialized programming.",
    credentials: "RN, Certified Pilates Instructor, FRCms",
    affiliation: "Whealth",
    website: "https://spreadwhealth.com/"
  },
  "keeya steel": {
    bio: "Keeya Steel is a chronic illness advocate and creator of Hell's Bells and Mast Cells, raising awareness about MCAS, EDS, and dysautonomia through humor and education. She lives with hEDS, POTS, and MCAS, and achieved MCAS remission in 2021.",
    credentials: null,
    affiliation: "Hell's Bells and Mast Cells",
    website: "https://hellsbellsandmastcells.com/"
  },
  "kyle thompson": {
    bio: "Kyle Thompson is a professional dancer who appeared on the Bendy Bodies Podcast in the round table episode 'Conquering the Wall,' discussing struggles with anxiety and the importance of supporting mental health as a hypermobile performer.",
    credentials: null,
    affiliation: null,
    website: null
  },
  "lara bloom": {
    bio: "Lara Bloom is the President and CEO of The Ehlers-Danlos Society, leading global efforts in awareness, research funding, and medical collaboration for EDS and hypermobility spectrum disorders. She is an Academic Affiliate Professor of Practice at Penn State College of Medicine and a Fellow of the Royal Society of Medicine.",
    credentials: "Fellow of the Royal Society of Medicine",
    affiliation: "The Ehlers-Danlos Society, Penn State College of Medicine",
    website: "https://www.larabloom.com/"
  },
  "lara heimann": {
    bio: "Lara Heimann is a physical therapist and the founder of the LYT Yoga Method, combining physiology, kinesiology, neurology, and functional movement into a cohesive yoga practice. She has over 25 years of teaching experience and has trained thousands of students in more than 50 countries.",
    credentials: "PT, E-RYT 500, MS Physical Therapy (Duke University)",
    affiliation: "LYT Yoga",
    website: "https://lytyoga.com/"
  },
  "lauren vasko": {
    bio: "Lauren Vasko is an EDS patient advocate and the very first patient of Dr. Linda Bluestein. She navigated life in a wheelchair due to cranial-cervical instability and POTS before regaining independence and earning a degree in entrepreneurship and marketing from Marquette University.",
    credentials: null,
    affiliation: "West Nairobi School",
    website: "https://laurenvasko.substack.com/"
  },
  "lisa howell": {
    bio: "Lisa Howell is a physiotherapist, author, and creator of The Ballet Blog, revolutionizing how dancers approach injury prevention and performance enhancement. She founded Perfect Form Physiotherapy in Sydney and has authored over 20 programs translated into more than five languages.",
    credentials: "B.Phty (Otago University)",
    affiliation: "The Ballet Blog, Perfect Form Physiotherapy",
    website: "https://theballetblog.com/"
  },
  "lisa ralston": {
    bio: "Lisa Ralston is a physical therapist with over 32 years of experience specializing in orthopedics, sports medicine, and connective tissue disorders. She served as the physical therapist for Team USA figure skating at the 2022 Winter Olympics in Beijing.",
    credentials: "PT",
    affiliation: "Ralston Physical Therapy and Wellness, Jackson County Physical Therapy",
    website: "https://lisaralstonpt.janeapp.com/"
  },
  "lorna ryan": {
    bio: "Lorna Ryan is an internationally recognized specialist in clinical nutrition and lifestyle medicine for hypermobility and EDS, and the founder of Lorna Ryan Health. She chairs the Diet and Nutrition Working Group of the International Consortium on EDS and HSD.",
    credentials: "DipION, mBANT, rCNHC",
    affiliation: "Lorna Ryan Health, The London Hypermobility Network, The Ehlers-Danlos Society",
    website: "https://lornaryanhealth.com/"
  },
  "mariaelena ruiz": {
    bio: "Mariaelena Ruiz is the Director of the Professional Training Program at Cary Ballet Conservatory and recipient of the 2019 Youth America Grand Prix Outstanding Teacher Award. Born in Caracas, Venezuela, she trained under Prima Ballerina Nina Novak and at the School of American Ballet.",
    credentials: "2019 YAGP Outstanding Teacher Award",
    affiliation: "Cary Ballet Conservatory, Cary Ballet Company",
    website: "https://www.mariaelenaruiz.com/"
  },
  "mariana j. plick": {
    bio: "Mariana J. Plick is a contortionist, fire dancer, aerialist, actor, and director based in New York and Montreal. She trained in the Circus Warehouse professional program and has performed worldwide.",
    credentials: null,
    affiliation: null,
    website: "https://www.youtube.com/watch?v=2j9NZsq9dUw"
  },
  "marimba gold-watts": {
    bio: "Marimba Gold-Watts is an award-winning Pilates trainer on Apple Fitness+ and a former professional dancer who has taught Horton technique at the Ailey School since 2005. She won the 2018 Pilates Anytime Next Instructor Competition and founded Articulating Body Inc.",
    credentials: "PMA Certified, BA Art History (Barnard College, Columbia University)",
    affiliation: "Apple Fitness+, Articulating Body Inc., The Ailey School",
    website: "https://www.pilatesanytime.com/instructor-bio/233/Marimba-Gold-Watts-Pilates-Teacher"
  },
  "melissa dickinson": {
    bio: "Melissa Dickinson is a Licensed Professional Counselor specializing in gender and sexuality counseling, chronic illness, and EDS-informed psychotherapy. After being diagnosed with EDS herself, she founded the Georgia EDS and Hypermobility Network serving over 1,500 people.",
    credentials: "LPC",
    affiliation: "Wellspring Counseling Coaching & Transitions Center, Georgia EDS and Hypermobility Network",
    website: "https://www.melissadickinson.com/"
  },
  "moira mccormack": {
    bio: "Moira McCormack is a physiotherapist and former professional ballet dancer who served as Head of Physiotherapy at The Royal Ballet Company for eighteen years. She holds a PhD from UCL researching young dancer profiling and lectures internationally on dance injuries and hypermobility.",
    credentials: "MS, PhD, MCSP",
    affiliation: "The Royal Ballet Company, Institute of Sport Exercise and Health",
    website: "https://www.bapam.org.uk/practitioner-search/dr-moira-mccormack/"
  },
  "paolo bolognese": {
    bio: "Dr. Paolo Bolognese is a neurosurgeon and Surgical Director of the Chiari EDS Center, specializing in Chiari malformation, craniocervical instability, and tethered cord surgery. He co-founded The Chiari Institute and is a global authority on the surgical management of EDS-related neurological conditions.",
    credentials: "MD",
    affiliation: "Chiari EDS Center",
    website: "https://chiarieds.com/dr-paolo-a-bolognese/"
  },
  "rachel neville": {
    bio: "Rachel Neville is an award-winning dance and movement photographer based in New York City with over two decades of experience shooting for companies including Boston Ballet, Atlanta Ballet, and Dance Theatre of Harlem.",
    credentials: null,
    affiliation: "Rachel Neville Studios",
    website: "https://rachelneville.com/"
  },
  "rebekah rotstein": {
    bio: "Rebekah Rotstein is a movement educator and certified Pilates instructor who created the medically-endorsed Buff Bones system for bone health, now offered in over 30 countries. Diagnosed with osteoporosis at age 28, she serves on the Ambassador Leadership Council for the Bone Health and Osteoporosis Foundation.",
    credentials: null,
    affiliation: "Buff Bones",
    website: "https://rebekahrotstein.com/"
  },
  "scott borjeson": {
    bio: "Scott Borjeson is an executive at Bauerfeind USA with over 30 years of international medical device and management experience. Bauerfeind is the founding sponsor of the Bendy Bodies Podcast, working to increase awareness of hypermobility spectrum disorders.",
    credentials: null,
    affiliation: "Bauerfeind USA",
    website: "https://www.linkedin.com/in/scott-borjeson-ab228411/"
  },
  "shu das": {
    bio: "Dr. Subinoy (Shu) Das is a board-certified otolaryngologist, Fellow of the American College of Surgeons, and CEO of the U.S. Institute for Advanced Sinus Care and Research. He has expertise in how EDS impacts the ears, nose, throat, vocal cords, and hearing.",
    credentials: "MD, FACS",
    affiliation: "U.S. Institute for Advanced Sinus Care and Research",
    website: "http://www.usasinus.org/meet-dr-das"
  },
  "skylar brandt": {
    bio: "Skylar Brandt is a principal dancer with the American Ballet Theatre who joined ABT's Studio Company at age 14 and rose through the ranks to principal in 2020. A two-time Youth America Grand Prix silver medalist and Princess Grace Fellowship recipient.",
    credentials: null,
    affiliation: "American Ballet Theatre",
    website: "https://www.skylarbrandt.com/"
  },
  "stacy menton": {
    bio: "Stacey Menton is a speech-language pathologist and classically trained soprano specializing in voice disorders, with particular expertise in treating patients with EDS and hypermobility spectrum disorders.",
    credentials: "MS, CCC-SLP",
    affiliation: "Mayo Clinic Jacksonville",
    website: "https://staceymenton.com/"
  },
  "summer dashe": {
    bio: "Summer Dashe is an Emmy-winning former news anchor turned chronic illness advocate after POTS derailed her broadcasting career. She works in science communications for the U.S. Department of Energy and teaches journalism at the University of Tennessee.",
    credentials: null,
    affiliation: "Emmy-winning news anchor",
    website: "https://www.summerdashe.com/"
  },
  "susan chalela": {
    bio: "Susan Chalela is a physical therapist with over 30 years of experience and founder of the Chalela Physical Therapy Institute for EDS and Cervical Instabilities. Living with hypermobile EDS herself, she created the Finding Functional Foundations program.",
    credentials: "MPT",
    affiliation: "Chalela Physical Therapy Institute",
    website: "https://www.chalelapt.com/"
  },
  "tara renton": {
    bio: "Professor Tara Renton is an Emeritus Professor of Oral Surgery at King's College London and a leading international authority on trigeminal nerve injuries and chronic orofacial pain. She has published over 250 peer-reviewed articles.",
    credentials: "BDS, MDSc, PhD",
    affiliation: "King's College London",
    website: "https://tararenton.co.uk/"
  },
  "terry hyde": {
    bio: "Terry Hyde is a psychotherapist and former professional ballet dancer who performed for 22 years with the Royal Ballet, English National Ballet, and in London's West End. He is the CEO of STEPPS, a charity improving access to mental health support in dance.",
    credentials: "MA, MBACP",
    affiliation: "Counselling for Dancers, STEPPS Charity",
    website: "https://www.counsellingfordancers.com/"
  },
  "tiffany lee": {
    bio: "Tiffany Lee is an adjunct professor of law at Washington and Lee University School of Law, teaching disability law, healthcare law, and bioethics. She lives with hypermobile Ehlers-Danlos Syndrome, POTS, and chronic migraines.",
    credentials: "JD",
    affiliation: "Washington and Lee University School of Law",
    website: "https://law.wlu.edu/faculty/adjunct-faculty/tiffany-lee"
  },
  "tilly rose": {
    bio: "Tilly Rose is an author and patient advocate who spent 20 years searching for a diagnosis before being identified with hypermobile Ehlers-Danlos Syndrome. Her debut memoir 'Be Patient' offers an account of her patient journey, and she founded @thatpatientcollective.",
    credentials: null,
    affiliation: "The Patient Collective",
    website: "https://linktr.ee/bepatientbook"
  },
  "tom query": {
    bio: "Tom Query is a psychotherapist and change agent with 30 years of professional counseling experience, including expertise in chronic illness, substance abuse, and grief counseling. He appeared on Bendy Bodies to discuss how EDS can test and transform a relationship.",
    credentials: null,
    affiliation: "Wellspring Counseling Coaching and Transitions Center",
    website: "https://www.tomquery.com/"
  },
  "victor montori": {
    bio: "Dr. Victor M. Montori is an endocrinologist, health services researcher, and care activist at the Mayo Clinic. He is the author of more than 750 peer-reviewed publications and a pioneer in shared decision making and minimally disruptive medicine.",
    credentials: "MD",
    affiliation: "Mayo Clinic",
    website: "https://www.mayoclinic.org/biographies/montori-victor-m-m-d/bio-20054635"
  },
  "victoria daylor": {
    bio: "Victoria Daylor is a patient scientist with hEDS who graduated from the Boston Conservatory and Columbia University's Postbac Premed Program. She serves as a Clinical Research Coordinator in the Norris Lab at MUSC and co-authored the 'Hope for Hypermobility' CME series.",
    credentials: null,
    affiliation: "The Norris Lab",
    website: "https://www.thenorrislab.com/meet-the-lab"
  },
  "vita bachman": {
    bio: "Vita Bachman is a former international Ukrainian rhythmic gymnast and coach who trained with Natalia Kiseleva in Kiev. She is the owner and head coach of Stretching Beyond Limits, a cross-training program for dancers, gymnasts, aerialists, and contortionists.",
    credentials: "MBA",
    affiliation: "Stretching Beyond Limits",
    website: "http://www.stretchingbeyondlimits.com/"
  },
  "wendy wagner": {
    bio: "Dr. Wendy Wagner Franklin is a board-certified physical therapist specializing in connective tissue disorders and hypermobility. She personally manages hEDS, POTS, and MCAS, and trains medical providers to recognize and treat hypermobility spectrum disorders.",
    credentials: "DPT",
    affiliation: "Wendy4Therapy",
    website: "https://www.wendy4therapy.com/"
  },
};

const EPISODES = [
  {
    "num": 184,
    "title": "Why Doctors Miss EDS, POTS, and MCAS with Dr. Dacre Knight (Ep 184)",
    "date": "2026-02-19",
    "duration": "1h 7m",
    "description": "Why are people with Ehlers-Danlos syndromes, POTS, and mast cell disorders so frequently misdiagnosed, or dismissed entirely? In this episode of Bendy Bodies, Dr. Linda Bluestein is joined by Dr. Dacre Knight, Medical Director of the UVA Health EDS and Hypermobility Disorders Center, for a wide-ranging conversation about why complex, multisystem conditions continue to fall through the cracks of modern medicine. Together, they explore how siloed healthcare systems, time-limited visits, and overreliance on “normal” labs and imaging contribute to years of delayed diagnosis and unnecessary suffering.\n\nThe discussion unpacks why patients are often labeled as anxious, functional, or “too complex,” how pattern recognition breaks down when symptoms span multiple systems, and why early diagnosis could prevent much of the downstream complexity clinicians later struggle to manage. Dr. Knight also explains how diagnostic frameworks like the EDS–POTS–MCAS triad can be helpful and where they risk oversimplifying reality.\n\nThis episode offers a candid look at the gaps in current diagnostic thinking and a more thoughtful, patient-centered approach to evaluating complex chronic illness, one that prioritizes listening, curiosity, and clinical humility.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Nutrition",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4736670647.mp3?updated=1771010180",
    "videoUrl": "https://youtu.be/S8vAk9Pc3F4",
    "snippets": ["https://www.youtube.com/shorts/RbsiYjHytko","https://www.youtube.com/shorts/R_pHQWLpyWU"],
    "transcript": "This is a test Transcript",
    "guests": [
      "Dr. Dacre Knight"
    ],
    "guestImages": [
      "Guests/Darce_Knight.jpg"
    ]
  },
  {
    "num": 183,
    "title": "Pelvic Pain in EDS: What Doctors Miss and Why It Matters with Dr Rachel Rubin (Ep 183)",
    "date": "2026-02-12",
    "duration": "55m",
    "description": "Pelvic pain, bladder symptoms, and sexual health concerns are incredibly common in people with Ehlers-Danlos Syndromes, yet they’re often misunderstood, dismissed, or treated in isolation.\n\nIn this episode of Bendy Bodies, Dr. Linda Bluestein is joined by Dr. Rachel Rubin, a board-certified urologist and nationally recognized leader in sexual medicine, to unpack why connective tissue disorders, mast cell activation, dysautonomia, and hormonal shifts so often collide in the pelvis. Together, they explore why bladder symptoms can occur without infection, why pelvic floor therapy alone may not be enough, and how hormones influence tissue health, inflammation, and pain.\n\nThe conversation dives into underrecognized drivers of symptoms, like vestibular pain, nerve involvement, mast cell activity, and hormonal suppression from birth control, while also addressing why many patients are left searching for answers for years. Dr. Rubin explains why sexual health is inseparable from overall health and how multidisciplinary, patient-centered care can dramatically improve quality of life.\n\nFor anyone living with a connective tissue disorder who has been told “everything looks normal” despite ongoing pelvic or bladder symptoms, this episode offers clarity, validation, and a new framework for understanding what may actually be happening.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Nutrition",
      "Treatment",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5565702306.mp3?updated=1770409093",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Rachel Rubin"
    ],
    "guestImages": []
  },
  {
    "num": 182,
    "title": "The Biggest Mistake in EDS Care and How to Fix It with Dr. Ina Stephens & Dr. Dacre Knight (Ep 182)",
    "date": "2026-02-05",
    "duration": "1h 11m",
    "description": "What would it look like if people with Ehlers-Danlos Syndrome finally had a true medical home?\n\nIn this episode of Bendy Bodies, Dr. Linda Bluestein is joined by Dr. Ina Stephens and Dr. Dacre Knight to share the story behind the newly launched University of Virginia Ehlers-Danlos Syndrome Center, how it came to be, why it was urgently needed, and what makes it fundamentally different from traditional models of care.\n\nThe conversation explores the power of integrative, multidisciplinary care, the consequences of fragmented systems, and why early recognition, especially in pediatric patients, can profoundly change lifelong outcomes. Dr. Stephens and Dr. Knight discuss what patients can expect when seeking care at UVA, how research and clinical care are being built together, and why clinician education is essential to closing long-standing gaps in EDS care.\n\nThe episode also features a major announcement: a new collaboration between Bendy Bodies and the UVA EDS Center, uniting global patient education with academic medicine to help reshape how connective tissue disorders are understood, taught, and treated worldwide.\n\nFor anyone searching for what meaningful progress in EDS care could look like, this conversation offers a glimpse of what’s possible.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7964925138.mp3?updated=1769803310",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Ina Stephens",
      "Dr. Dacre Knight"
    ],
    "guestImages": [
      "Guests/Ina_Stephens.jpeg",
      "Guests/Darce_Knight.jpg"
    ]
  },
  {
    "num": 181,
    "title": "Mast Cell Activation Syndrome: The Diagnosis Most Doctors Miss with Dr. Lawrence Afrin (Ep 181)",
    "date": "2026-01-29",
    "duration": "1h 33m",
    "description": "Mast Cell Activation Syndrome is one of the most misunderstood, and underrecognized, conditions in modern medicine. In this episode, Dr. Linda Bluestein is joined by Dr. Lawrence Afrin, one of the world’s leading experts on mast cell disease, to unpack why MCAS is so often missed, why tryptase alone is not enough to diagnose it, and how this condition may be driving chronic inflammation, neurologic symptoms, psychiatric symptoms, and even hypermobile Ehlers-Danlos Syndrome (hEDS) in some patients.\n\nThey talk about why MCAS can look completely different from one person to the next, how mast cells influence nearly every system in the body, and why so many patients are told “nothing is wrong” despite being profoundly unwell. We also explore emerging treatments, including GLP-1 medications, and what the future of MCAS research may hold.\n\nIf you or your patients live with complex, multisystem symptoms that don’t fit neatly into one diagnosis, this conversation may change how you see everything.",
    "tags": [
      "EDS",
      "MCAS",
      "Nutrition",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4721950629.mp3?updated=1769461191",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Lawrence Afrin"
    ],
    "guestImages": [
      "Guests/Lawrence_Afrin.jpg"
    ]
  },
  {
    "num": 180,
    "title": "When Eye Exams Miss the Real Problem in EDS with Dr. Eric Singman (Ep 180)",
    "date": "2026-01-22",
    "duration": "1h 20m",
    "description": "In this episode, Dr. Linda Bluestein is joined by Dr. Eric Singman, a neuro-ophthalmologist who lives at the intersection of the eyes, the brain, and the complex symptoms so many people with Ehlers-Danlos Syndrome experience. They dig into why EDS patients often struggle with vision even when everything looks “normal,” why convergence problems and visual fatigue are so common, and how conditions like POTS, mast cell activation, Chiari malformation, and cervical instability quietly affect how we see.\n\nThey also talk about dry eye, visual snow, glare sensitivity, elevated intracranial pressure without papilledema, and why so many EDS patients are sent down expensive treatment paths that may not actually help. This conversation is part science, part myth-busting, and part reality check for anyone who’s been told their symptoms don’t make sense.\n\nIf you’ve ever felt dismissed, confused, or overwhelmed by eye and vision issues in connective tissue disorders, this one’s for you.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Nutrition",
      "Treatment",
      "Neurology",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8332901963.mp3?updated=1768940596",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Eric Singman"
    ],
    "guestImages": []
  },
  {
    "num": 179,
    "title": "Chronic Pain, Focus, and the Brain Shift Psychedelics Reveal with Dr. Shimi Kang (Ep 179)",
    "date": "2026-01-15",
    "duration": "1h 19m",
    "description": "In this expansive and deeply affirming conversation, Linda Bluestein and Shimi Kang explore a powerful idea: true healing comes from connection, not control—especially when living with chronic pain, nervous system dysregulation, or complex, overlapping conditions.\n\nThey unpack the neuroscience of emotional regulation and why chronic pain so often disrupts attention, focus, and cognitive flexibility—issues frequently labeled as “brain fog” or misattributed solely to mood or motivation. The discussion also dives into the growing recognition of overlap between neurodivergence and Ehlers-Danlos Syndromes, exploring how sensory sensitivity, pain, autonomic stress, and dopamine dysregulation may be biologically intertwined.\n\nThe conversation examines how constant tech stimulation and dopamine overload can further impair resilience, focus, and emotional regulation, particularly in already taxed nervous systems. They also explore emerging research on psychedelic-assisted therapies, including how substances like psilocybin may help unlock stored trauma, shift pain pathways, and support nervous system recalibration.\n\nFrom the culture of medicine to the lived experience of chronic illness, they name the often-unspoken role of shame in blocking connection, care, and recovery—inviting listeners to rethink how we relate to our bodies, our brains, and what it truly means to heal.",
    "tags": [
      "EDS",
      "Pain",
      "Nutrition",
      "Mental Health",
      "Neurology",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2727428501.mp3?updated=1768939139",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Shimi Kang"
    ],
    "guestImages": []
  },
  {
    "num": 178,
    "title": "What If It’s Not IBS or Anxiety? A Vascular Surgeon Explains with Dr. Robert Hacker (Ep 178)",
    "date": "2026-01-08",
    "duration": "1h 14m",
    "description": "What if your chronic pain, bloating, or fatigue wasn’t in your head, but in your blood vessels? In this episode, Dr. Linda Bluestein sits down with vascular surgeon Dr. Robert Hacker, who’s on the front lines of diagnosing and treating complex conditions like MALS (Median Arcuate Ligament Syndrome), Nutcracker Syndrome, May-Thurner Syndrome, and pelvic venous congestion syndrome, conditions that disproportionately affect women and often go undiagnosed for years.\n\nTogether, they dive into the frustrating diagnostic delays, the overlap between vascular compression and syndromes like POTS (Postural Orthostatic Tachycardia Syndrome) and EDS  (Ehlers-Danlos Syndrome), and how new surgical approaches are offering hope. Whether you're navigating chronic pelvic pain, unexplained GI symptoms, or fainting episodes, this conversation breaks down the misunderstood links between your veins, nerves, and connective tissue—and what to do about them.",
    "tags": [
      "EDS",
      "POTS",
      "Pain",
      "Nutrition",
      "Mental Health",
      "Diagnosis",
      "Treatment",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3632999015.mp3?updated=1766180525",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Robert Hacker"
    ],
    "guestImages": []
  },
  {
    "num": 177,
    "title": "Rectal Prolapse, Dyscalculia & Dyspraxia: The Connective Tissue Connection | Office Hours (Ep 177)",
    "date": "2025-12-30",
    "duration": "47m",
    "description": "In this Office Hours episode, Dr. Linda Bluestein tackles some of the most challenging questions from our listeners and dive deep into the overlooked intersections of hypermobility, surgical complications, and neurodiversity. What happens when five rectal prolapse surgeries fail? Dr. Bluestein breaks down why so many surgical interventions fall short for people with hypermobile Ehlers-Danlos Syndrome (hEDS) and what you must consider before your next procedure, including essential imaging, anesthesia concerns, pelvic floor support, and mesh alternatives. Then, she explores a lesser-known but increasingly discussed connection: how vision dyspraxia and dyscalculia often go hand-in-hand with hypermobility, and why challenges with balance, motor planning, and even math might be far more physical than we think. Plus, you'll hear my own hypermobility hack for surviving the dreaded shampoo bowl at the salon. Whether you're navigating chronic pain, misunderstood learning challenges, or a body that just won’t follow the rules, this episode is packed with the nuanced insight you’ve been waiting for.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7183851258.mp3",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 176,
    "title": "The Roadmap That Could Change EDS Forever with Lara Bloom (Ep 176)",
    "date": "2025-12-23",
    "duration": "1h 6m",
    "description": "In this episode, Dr. Linda Bluestein sits down with Lara Bloom, President and CEO of The Ehlers-Danlos Society, for a revealing look behind the curtain of the Society’s ambitious global roadmap to 2026. What will it take to finally change the trajectory for people with EDS (Ehlers-Danlos Syndromes) and HSD (Hypermobility Spectrum Disorders)? Why have progress and awareness lagged for so long? And what is happening right now around the world that could shift everything?\n\nTogether, they unpack the systemic obstacles still tripping up patients, from years-long diagnostic delays and rampant misinformation to critical gaps in research, policy, and clinical education. Lara shares the driving force behind her vision for global change and the monumental international effort unfolding to move EDS and HSD into the spotlight they’ve long deserved.\n\nIf you’ve ever wondered why the system feels stuck, or what it might take to finally break through, this conversation offers rare insight and genuine hope.",
    "tags": [
      "EDS",
      "Nutrition",
      "Diagnosis",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8126463728.mp3?updated=1764792459",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Lara Bloom"
    ],
    "guestImages": []
  },
  {
    "num": 175,
    "title": "POTS Revisited: Embolization, GLP-1 & Daily Management with Dr. Alexis Cutchins (Ep 175)",
    "date": "2025-12-18",
    "duration": "1h 11m",
    "description": "In this info-packed episode, Dr. Linda Bluestein sits down with cardiologist Dr. Alexis Cutchins, an expert in pelvic venous disease (PVD) and POTS (postural orthostatic tachycardia syndrome), to tackle one of the most misunderstood vascular conditions in complex patients. From treatment options and expected outcomes to what really happens after embolization procedures, they unpack the physiology and the myths. Plus, they dive into GLP-1 medications like semaglutide and tirzepatide, long COVID symptom overlaps, heat intolerance, and why certain movement strategies backfire for patients with hypermobility, POTS, and other connective tissue conditions. They also trade tips on hydration, travel, pelvic support, and how to build movement back into your life, even when your nervous system fights you at every step.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5251139063.mp3?updated=1764622671",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Alexis Cutchins"
    ],
    "guestImages": []
  },
  {
    "num": 174,
    "title": "What No One Tells You About Pregnancy with EDS | Office Hours (Ep 174)",
    "date": "2025-12-11",
    "duration": "49m",
    "description": "Think EDS and pregnancy is a straightforward conversation? Think again. In this jam-packed Office Hours episode, I dig into everything I wish someone had told me and everything I’ve since learned from patients, research, and my own pregnancies. From racing heart rates and failed epidurals to postpartum complications and misunderstood mental health shifts, we’re laying it all out. We explore rapid labor, prolapse risk, anesthetic resistance, dysautonomia flares, pelvic floor fragility, and why some babies bruise easier than doctors expect. Whether you're prepping for pregnancy, navigating birth, or recovering afterward, this is your roadmap for a more informed journey.",
    "tags": [
      "EDS",
      "POTS",
      "Nutrition",
      "Mental Health",
      "Surgery",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8944944796.mp3",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 173,
    "title": "Why Are So Many People Misdiagnosed With TMJ Disorders? With Professor Renton (Ep 173)",
    "date": "2025-12-04",
    "duration": "1h 17m",
    "description": "In this episode, Dr. Linda Bluestein is joined by Professor Tara Renton, a globally recognized expert in orofacial pain, to explore the nuanced world of facial pain, temporomandibular joint (TMJ) dysfunction, and migraine disorders. Together, they unpack why so many patients suffer from persistent facial, jaw, or head pain despite “normal” scans and what magnetic resonance neurography (MRN) can reveal that traditional imaging might miss. They also dig into local anesthetic reactions, the limitations of pain scales, and how to distinguish between healthy vs. unhealthy pain. .",
    "tags": [
      "MCAS",
      "Nutrition",
      "Diagnosis",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5110513289.mp3?updated=1764607047",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Professor Tara Renton"
    ],
    "guestImages": []
  },
  {
    "num": 172,
    "title": "The Truth About Ballet Bodies with ABTs Skylar Brandt (Ep 172)",
    "date": "2025-11-25",
    "duration": "1h 15m",
    "description": "In this raw and uncompromising conversation, Dr. Linda Bluestein and co-host Jennifer Milner sit down with Skylar Brandt, principal dancer with American Ballet Theatre, for a gripping look at what it truly takes to perform at the highest level. Skylar pulls back the curtain on the physical and psychological demands of elite ballet—the toll it takes, the constant adaptations required to avoid breakdown, and the pressure of sustaining a career where your body, your art, and your livelihood are inseparably intertwined.\n\nShe speaks candidly about navigating the challenges of less-flexible feet in an industry that glorifies extreme range, and why the dance world must rethink the “more is better” mentality. But one of Skylar’s most powerful messages is the importance of listening to your body—learning when to push, when to modify, and when to stop—wisdom that applies not only to dancers, but to anyone striving for longevity in a demanding field.\n\nThis episode dives into the high-stakes intersection of artistry, athleticism, body awareness, and survival, offering a rare and riveting look behind the curtain of one of the world’s most unforgiving professions.",
    "tags": [
      "Nutrition",
      "Mental Health",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7894021948.mp3?updated=1764013384",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Skylar Brandt"
    ],
    "guestImages": []
  },
  {
    "num": 171,
    "title": "From Nitrous to Nerves: MTHFR, CRPS  & Cervical Collars Unpacked | Office Hours (EP 171)",
    "date": "2025-11-20",
    "duration": "41m",
    "description": "In this solo episode, Dr. Linda Bluestein brings on her producers to help unpack the hidden complications that can follow seemingly routine medical procedures. From the lingering effects of breast surgery to the controversial use of nitrous oxide, Dr. Bluestein explores how standard treatments can backfire, especially for patients with EDS, MCAS, or complex regional pain syndrome (CRPS). She also dives into the surprising risks of cervical collars, and why something that feels stabilizing may actually worsen pain over time. If you’ve ever been told your symptoms “shouldn’t be happening,” this episode might finally connect the dots.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1791614670.mp3",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 170,
    "title": "When Surgery Isn’t Simple: What hEDS Patients Should Know Before Going Under | Office Hours (Ep 170)",
    "date": "2025-11-13",
    "duration": "40m",
    "description": "In this solo episode, Dr. Linda Bluestein brings on her producers to ask your most pressing questions about what it’s really like to live with and treat Ehlers-Danlos Syndromes (EDS) and Mast Cell Activation Syndrome (MCAS). From the pitfalls of internet misinformation to the hidden ways MCAS impacts medication tolerance, Dr. Bluestein shares her unique perspective as both a physician and a patient. With honesty and a touch of humor, she tackles everything from her least favorite diagnosis to how she manages confusing or contradictory advice. Whether you’re new to these conditions or deep in the weeds, this conversation brings clarity to complexity.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Nutrition",
      "Mental Health",
      "Diagnosis",
      "Treatment",
      "Surgery",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7698486791.mp3",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 169,
    "title": "Could Psychiatric Symptoms Be Hiding a Physical Illness? with Dr. Janet Settle (Ep 169)",
    "date": "2025-11-06",
    "duration": "1h 12m",
    "description": "In this eye-opening conversation, Dr. Linda Bluestein sits down with psychiatrist Dr. Janet Settle to unpack the medical mystery that is mast cell activation syndrome (MCAS) and why it may be hiding in plain sight as depression, anxiety, panic attacks, or even psychosis. Together, they explore how immune system dysregulation can masquerade as psychiatric illness, and why so many patients are misdiagnosed, medicated, and misunderstood. With deep expertise in trauma-informed psychiatry, Dr. Settle explains how MCAS and other overlooked conditions could be the real cause behind persistent mental health symptoms and what it takes to finally get the right diagnosis.",
    "tags": [
      "MCAS",
      "Nutrition",
      "Mental Health",
      "Diagnosis",
      "Treatment",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4856994000.mp3?updated=1761421389",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Janet Settle"
    ],
    "guestImages": []
  },
  {
    "num": 168,
    "title": "From Palliative Care to Purpose: The Tilly Rose Story (Ep 168)",
    "date": "2025-10-30",
    "duration": "1h 21m",
    "description": "In this emotionally charged episode, Dr. Linda Bluestein talks with Tilly Rose, the founder of That Oxford Girl and the author of Be Patient, about what it’s like to face palliative care as a young adult and come out the other side fighting for change. They explore how Tilly transformed her private pain into public advocacy, why chronic illness is so often misunderstood in young people, and what happens when you rewrite your identity in the face of a diagnosis. This is a story of resilience, reinvention, and the radical act of showing up when the world doesn’t know what to do with you.",
    "tags": [
      "Nutrition",
      "Mental Health",
      "Exercise",
      "Diagnosis",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4181059148.mp3?updated=1761368314",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Tilly Rose"
    ],
    "guestImages": []
  },
  {
    "num": 167,
    "title": "The Diagnosis Hiding In Your Pelvis with Dr. Alexis Cutchins (Ep 167)",
    "date": "2025-10-23",
    "duration": "53m",
    "description": "In this eye-opening episode, Dr. Linda Bluestein speaks with Dr. Alexis Cutchins, a cardiologist passionate about uncovering missed and misunderstood diagnoses. One of those? Pelvic Venous Disease, a condition affecting countless patients but rarely identified. They explore how PVD can mimic or exacerbate conditions like dysautonomia, MCAS, and chronic pelvic pain and how many patients are left cycling through specialists without answers. From diagnostic challenges to emerging treatments, this episode will change the way you think about pelvic pain and complex multisystem illness.",
    "tags": [
      "POTS",
      "MCAS",
      "Nutrition",
      "Diagnosis",
      "Treatment",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2570919031.mp3?updated=1760666021",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Alexis Cutchins"
    ],
    "guestImages": []
  },
  {
    "num": 166,
    "title": "What If Your Spine Surgery Wasn't Necessary? with Dr. Betsy Grunch (Ep 166)",
    "date": "2025-10-16",
    "duration": "1h 11m",
    "description": "In this episode of Bendy Bodies, Dr. Linda Bluestein is joined by neurosurgeon and social media educator Dr. Betsy Grunch to tackle complex questions around spine health, chronic pain, and the unique challenges faced by people with hypermobility and connective tissue disorders like Ehlers-Danlos Syndromes (EDS). Together, they explore why “normal” MRIs don’t always tell the whole story, when surgery is (and isn’t) the right option, and how the healthcare system sometimes overlooks the needs of patients living with invisible or misunderstood conditions. Dr. Grunch shares what she’s seeing in the OR, what she’s hearing from patients online, and how she’s trying to change the narrative, one compassionate conversation at a time.",
    "tags": [
      "EDS",
      "Pain",
      "Nutrition",
      "Diagnosis",
      "Surgery",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3310630015.mp3?updated=1760468643",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Betsy Grunch"
    ],
    "guestImages": []
  },
  {
    "num": 165,
    "title": "Dancing Stronger: Smarter Training for Bendy Bodies with Jennifer Milner  (BEN 165)",
    "date": "2025-10-09",
    "duration": "1h 15m",
    "description": "In this empowering episode, Dr. Linda Bluestein is joined by OG Bendy Bodies cohost, Jennifer Milner.  Jen is a ballet coach, Pilates trainer, and specialist in working with hypermobile bodies. Together they explore why traditional movement cues don’t always work for bendy bodies, how dancers and athletes can train smarter (not harder), and what it really takes to move with strength when your body doesn’t follow the rules. From injury prevention to body awareness and emotional recovery, this conversation is a must-listen for anyone living in or coaching a flexible, fragile, or frequently misunderstood body.",
    "tags": [
      "Nutrition",
      "Exercise",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3066906209.mp3?updated=1759534305",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jennifer Milner"
    ],
    "guestImages": []
  },
  {
    "num": 164,
    "title": "Are You Being Gaslit About Hormones and Health? | Office Hours (Ep 164)",
    "date": "2025-10-02",
    "duration": "48m",
    "description": "In this raw and reflective Office Hours episode, Dr. Linda Bluestein responds to listener feedback and dives deep into the cultural and clinical gaslighting faced by people, especially women, navigating complex health conditions. From the dismissal of perimenopause to the rise of so-called “TikTok diseases,” Dr. Bluestein explores the dangerous disconnect between lived experiences and clinical skepticism. She also unpacks a now-infamous comment involving tuna, and what it reveals about how the medical community sometimes chooses ridicule over reflection. This episode is equal parts fiery and thoughtful, a must-listen for anyone tired of being misunderstood.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Nutrition",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4948972377.mp3",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 163,
    "title": "Hidden Causes of Abdominal Pain in EDS with Dr. Pradeep Chopra (Ep 163)",
    "date": "2025-09-25",
    "duration": "1h 10m",
    "description": "Abdominal pain in EDS can be a puzzle with countless hidden pieces. In this episode, Dr. Linda Bluestein welcomes back Dr. Pradeep Chopra for part two of their exploration into gastrointestinal problems. Together, they uncover overlooked causes of abdominal pain, from drooping intestines and tethered spinal cords to mast cell activation and nerve entrapment. Listeners will hear surprising connections between the spine, bladder, ribs, and gut, with insights that could explain symptoms often dismissed or misunderstood.",
    "tags": [
      "EDS",
      "MCAS",
      "Nutrition",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8755207204.mp3?updated=1758559389",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Pradeep Chopra"
    ],
    "guestImages": []
  },
  {
    "num": null,
    "title": "Hypermobility Problems with Anesthesiologist Dr. Linda Bluestein | Glaucomfleckens Bonus Episode",
    "date": "2025-09-22",
    "duration": "1h 7m",
    "description": "In honor of Pain Awareness Month, I wanted to share an episode of one of my favorite healthcare podcasts, “Knock Knock Hi with the Glaucomfleckens.” In this interview from last July, Will and Kristin Flanary (AKA Dr. and Lady Glaucomflecken) kindly invited me on to talk about my journey from ballet to anesthesiology to integrative pain care, and how hypermobility and chronic pain are often overlooked or misunderstood in both medicine and everyday life.\n\nListen to more episodes of “Knock Knock, Hi! with the Glaucomfleckens” wherever you get your podcasts, or watch on YouTube. https://www.human-content.com/kkh\n\nBendy Bodies, alongside Knock Knock Hi with the Glaucomfleckens, is a proud part of the Human Content Podcast Network",
    "tags": [
      "Pain",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9366654775.mp3",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": []
  },
  {
    "num": 162,
    "title": "EDS Foot and Ankle issues with Dr. Patrick Agnew (Ep 162)",
    "date": "2025-09-18",
    "duration": "1h 27m",
    "description": "In this informative and eye-opening episode, Dr. Linda Bluestein sits down with foot and ankle surgeon Dr. Patrick Agnew, who specializes in treating patients with joint hypermobility and connective tissue disorders like Ehlers-Danlos Syndromes. Together, they explore why lower extremity pain and dysfunction are so common and often misunderstood in EDS and HSD (Hypermobility Spectrum Disorders). From failed orthotics to unnecessary surgeries, they break down the biggest foot myths and offer practical advice for building stability, choosing footwear, and getting the right help before things spiral. This conversation will change the way you walk, literally and metaphorically.",
    "tags": [
      "EDS",
      "Surgery",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4713071080.mp3?updated=1757812223",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Patrick Agnew"
    ],
    "guestImages": [
      "Guests/Patrick_Agnew.jpeg"
    ]
  },
  {
    "num": 161,
    "title": "Dental Myths & EDS Truths with Dr. Audrey Kershaw (Ep 161)",
    "date": "2025-09-11",
    "duration": "1h 5m",
    "description": "Dr. Audrey Kershaw returns to chat with Dr. Linda Bluestein and demystify wisdom tooth extraction, appliances for TMJ disorder, and everyday oral health habits for people with EDS/HSD. We cover when third molars should be removed (and when they shouldn’t), why local anesthetic can fail in some patients, how to approach dental procedures when CCI (craniocervical instability) is a concern, and what truly drives gum disease vs “EDS-specific” issues. We also address periodontal EDS (a rare subtype), toothpaste choices (fluoride vs hydroxyapatite vs chelators), and the surprisingly powerful habit of “spit, don’t rinse.” Stay to the end for practical Hypermobility Hacks you can implement tonight.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4101390185.mp3?updated=1757361477",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Audrey Kershaw"
    ],
    "guestImages": []
  },
  {
    "num": 160,
    "title": "Parenting Making You Both Sick? with Dr. Shimi Kang (Ep 160)",
    "date": "2025-09-04",
    "duration": "1h 21m",
    "description": "Dr. Linda Bluestein is joined by award-winning psychiatrist and author Dr. Shimi Kang to explore a radical, yet intuitive concept: that play, creativity, and rest aren’t luxuries - they’re medicine. In a world where high-achievers and neurodivergent thinkers are pushed to exhaustion, Dr. Kang unpacks how this cultural mindset leads to burnout, inflammation, and chronic illness. Drawing from both cutting-edge neuroscience and her own clinical experience, she offers practical tools to help listeners regulate their nervous systems, reconnect with joy, and reclaim their health. If you've ever felt overwhelmed, misunderstood, or stuck in survival mode, this episode will reframe everything.",
    "tags": [
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2471596458.mp3?updated=1756407314",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Shimi Kang"
    ],
    "guestImages": []
  },
  {
    "num": 159,
    "title": "Truth Bombs & Backlash with Kate Colbert (Ep 159)",
    "date": "2025-08-28",
    "duration": "1h 15m",
    "description": "After a wave of passionate listener feedback sparked intense conversations behind the scenes, The Bendy Bodies Podcast returns with a candid and heartfelt follow-up. In this episode, Dr. Linda Bluestein is joined by author and communications expert Kate Colbert to openly address the concerns raised about recent content and to set the record straight. From questions about language and lived experience to the emotional cost of being misunderstood, Dr. Bluestein and Kate hold nothing back. Together, they unpack what went wrong, what they stand by, and what they’ll do differently moving forward. This is the episode that proves growth is messy, but worth it.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9778735744.mp3?updated=1755880683",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Kate Colbert"
    ],
    "guestImages": []
  },
  {
    "num": 158,
    "title": "Discussing Your Feedback: Pain, Autism & hEDS Diagnostic Criteria | Office Hours (Ep 158)",
    "date": "2025-08-14",
    "duration": "14m",
    "description": "In the season five finale of the Bendy Bodies Podcast, Dr. Linda Bluestein reflects on powerful listener feedback and opens up important conversations about language, intent, and identity in medicine. She clarifies the purpose behind episodes on pain neuroscience and mast cells in autism, acknowledges the concerns raised, and discusses the fine line between supporting physiology and honoring identity. She also addresses concerns raised about the neuroplasticity episode, reaffirming that the intent was never to minimize anyone’s pain or suggest a one‑size‑fits‑all approach. Instead, the goal was to share information that some may find empowering while honoring the reality and validity of every person’s experience.  Dr. Bluestein also revisits the ongoing “Road to 2026” diagnostic criteria update for hEDS (hypermobile Ehlers-Danlos Syndrome), highlighting why labels matter for some patients and not for others. This wrap-up episode closes the season with transparency, humility, and a call for continued dialogue in the community.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5086711791.mp3?updated=1754578828",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 156,
    "title": "Can Pain Education Lessen Chronic Pain with Adriaan Louw, DPT? (Ep 156)",
    "date": "2025-08-12",
    "duration": "1h 10m",
    "description": "In this illuminating episode of the Bendy Bodies Podcast, Dr. Linda Bluestein sits down with pain neuroscientist and physical therapist Dr. Adriaan Louw to explore the power of education in managing chronic pain. With a passion for helping people understand the \"why\" behind their symptoms, Dr. Louw breaks down the science of how the brain processes pain, why knowledge can reduce fear, and how changing your understanding can actually decrease your pain experience. Through engaging stories and evidence-backed insight, he shares how rewiring the nervous system starts not with a pill, but with a conversation.",
    "tags": [
      "Pain",
      "Neurology",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8000987812.mp3",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Adriaan Louw, DPT"
    ],
    "guestImages": []
  },
  {
    "num": 157,
    "title": "Could Your Gut Pain Be EDS-Related? with Dr. Pradeep Chopra (Ep 157)",
    "date": "2025-08-07",
    "duration": "1h 26m",
    "description": "In this episode of the Bendy Bodies Podcast, Dr. Linda Bluestein sits down once again with fellow pain specialist Dr. Pradeep Chopra to take listeners on a guided “walk” through the GI tract. From teeth to the stomach and beyond, they uncover how connective tissue disorders like EDS (Ehlers-Danlos Syndromes) and HSD (Hypermobility Spectrum Disorders) along with POTS (Postural orthostatic tachycardia syndrome) and MCAS (Mast cell activation syndrome), can trigger unexpected abdominal pain and digestive challenges. Along the way, they explore overlooked diagnoses like Eagle Syndrome, SIBO (Small Intestinal Bacterial Overgrowth), and MALS (Median Arcuate Ligament Syndrome), while also revealing hacks and strategies that empower patients to better understand and manage their symptoms. This is part one of a two-part deep dive into GI issues you won’t want to miss.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Diagnosis",
      "Treatment",
      "Neurology",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1215988005.mp3?updated=1753992244",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Pradeep Chopra"
    ],
    "guestImages": []
  },
  {
    "num": 155,
    "title": "Gluten, MTHFR, Mast Cells, and More | Office Hours (Ep 155)",
    "date": "2025-07-24",
    "duration": "54m",
    "description": "In this solo episode of the Bendy Bodies Podcast, Dr. Linda Bluestein tackles a series of complex listener questions originally submitted by clinicians after her guest appearance on The Curbsiders internal medicine podcast. From the flaws in the EDS diagnostic criteria to the misunderstood role of MTHFR gene (methylenetetrahydrofolate reductase), SVT (supraventricular tachycardia), celiac disease, and mast cell medications, she offers guidance, clarity, and practical advice. She also digs into how to find a provider who actually understands dysautonomia and shares personal hacks that empower patients to ask smarter questions during appointments. This episode is a toolkit for patients and providers alike, packed with real-world insights you won’t want to miss.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6527589615.mp3?updated=1753378495",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 154,
    "title": "Revising the Hypermobile EDS Criteria with Dr. Pradeep Chopra (Ep 154)",
    "date": "2025-07-17",
    "duration": "1h 18m",
    "description": "In this compelling episode of the Bendy Bodies Podcast, Dr. Linda Bluestein is joined by her longtime mentor and internationally respected EDS expert, Dr. Pradeep Chopra. Together, they tackle some of the most frustrating—and frequently misunderstood—questions surrounding hypermobile Ehlers-Danlos Syndrome (hEDS). From major flaws in the 2017 diagnostic criteria to the hidden surgical risks that could lead to serious complications like CCI (craniocervical instability), this conversation dives deep into clinical insights and lived experience. Listeners will also hear the surprising story of how Dr. Chopra helped inspire Dr. Bluestein to open her own practice. Whether you're a patient, parent, or provider, this episode just might change how you see joint hypermobility and connective tissue disorders forever.",
    "tags": [
      "EDS",
      "Diagnosis",
      "Surgery",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8542704233.mp3?updated=1752772042",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Pradeep Chopra"
    ],
    "guestImages": []
  },
  {
    "num": 153,
    "title": "Why Do Some GI Problems Hide from Every Test? with Dr. Zachary Spiritos (Ep 153)",
    "date": "2025-07-10",
    "duration": "1h 21m",
    "description": "Dr. Linda Bluestein dives deep into the tangled web of gastrointestinal disorders with neurogastroenterologist Dr. Zachary Spiritos. They tackle the silent struggles of patients with EDS (Ehlers-Danlos Syndrome), POTS (Postural Orthostatic Tachycardia Syndrome), and MCAS (Mast Cell Activation Syndrome), especially those whose GI tests always come back “normal.” From misunderstood motility problems to surprising treatment twists, this episode is full of revelations that might change the way you think about your gut. And yes, there’s even a how-to on better pooping.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3369827085.mp3?updated=1753981007",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Zachary Spiritos"
    ],
    "guestImages": []
  },
  {
    "num": 152,
    "title": "What Can Difficulty Swallowing and Voice Fatigue Mean? (Ep 152)",
    "date": "2025-07-03",
    "duration": "1h 11m",
    "description": "Speech-language pathologist and vocal specialist Stacy Menton joins Dr. Linda Bluestein to expose the surprising links between connective tissue disorders like EDS and common (but misunderstood) issues with voice, breathing, and swallowing. From overlooked diagnostics to cutting-edge therapies and startling new research, this conversation peels back the curtain on symptoms often dismissed or misdiagnosed. A must-listen for patients, clinicians, and anyone who's been told \"everything looks normal.\"",
    "tags": [
      "EDS",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1106813583.mp3?updated=1751587796",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Stacy Menton"
    ],
    "guestImages": []
  },
  {
    "num": 151,
    "title": "Mast Cells: Friend or Foe? with Dr. Theoharis Theoharides (Ep 151)",
    "date": "2025-06-26",
    "duration": "1h 18m",
    "description": "What if your brain fog, fatigue, and hypersensitivity weren’t “just anxiety”—but signs of a much deeper immune malfunction?\n\nIn this episode, Dr. Pradeep Chopra co-hosts a rare and revealing conversation with Dr. Theoharis Theoharides, the scientist who first discovered that mast cells communicate with microglia in the brain. Together, they dive into groundbreaking research on neuroinflammation, autism, histamine, stress, and why brain fog may not be “all in your head”—but inflammation inside it.\n\nFrom overlooked biomarkers to misunderstood triggers, this episode unpacks the science most doctors still don’t know… but patients desperately need",
    "tags": [
      "MCAS",
      "Mental Health",
      "Neurology",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3053487481.mp3?updated=1751083257",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Theoharis Theoharides"
    ],
    "guestImages": []
  },
  {
    "num": 150,
    "title": "Misunderstood and Overlooked: hEDS, FND & Autism  | Office Hours (Ep 150)",
    "date": "2025-06-19",
    "duration": "48m",
    "description": "You asked. I answered. In this solo Q&A, I tackle some of the biggest and most misunderstood questions from our Bendy Bodies community. From toddlers flagged for autism to adults fighting for an EDS diagnosis, from altitude flares to functional neurologic disorder, this episode pulls no punches.\n\nI talk low-dose naltrexone (LDN), altitude hacks, medication struggles, and the quiet panic of a diagnosis that suddenly shifts under you. Plus, we look ahead to the 2026 hEDS (hypermobile Ehlers-Danlos Syndrome) classification changes and the stigma that still haunts hypermobile bodies. Whether you're a patient, a provider, or somewhere in between—you’ll hear something in this episode that makes you feel seen.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2657336589.mp3?updated=1750441910",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 149,
    "title": "Are Your Breast Implants Making You Sick? with Dr. Eva Nagy (Ep 149)",
    "date": "2025-06-12",
    "duration": "1h 4m",
    "description": "What if your breast implants were silently fueling your fatigue, anxiety, rashes, or brain fog—and no one believed you? In this powerful episode, Dr. Linda Bluestein speaks with renowned breast surgeon Dr. Eva Nagy who’s become a global voice for patients suffering from Breast Implant Illness (BII).\n\nTogether, they uncover the overlooked signs of mast cell activation, connective tissue involvement, immune dysregulation, and the invisible damage that can linger—even when scans look normal. Dr. Nagy breaks down the myths about “safe” implants, explains how BII can show up years—or hours—after surgery, and why removal must be done in a very specific way to truly heal.\n\nThis episode exposes the real science behind BII, the staggering rate of gaslighting, and why so many hypermobile and chronically ill women are caught in this hidden epidemic.",
    "tags": [
      "MCAS",
      "Mental Health",
      "Neurology",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8331629020.mp3?updated=1751083311",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Eva Nagy"
    ],
    "guestImages": []
  },
  {
    "num": 148,
    "title": "Hidden Causes of Pain ‘Down There’ with Dr. Andrew Goldstein (Ep 148)",
    "date": "2025-06-05",
    "duration": "1h 16m",
    "description": "What if the pain you’ve been told to ignore… was actually coming from your hips, your spine—or your immune system? In this deep-dive episode, Dr. Linda Bluestein is joined by Dr. Andrew Goldstein, an expert in sexual pain disorders, to unravel the misunderstood causes of vulvar and pelvic pain in people with EDS (Ehlers-Danlos Syndrome), MCAS (Mast Cell Activation Syndrome) , and POTS (Postural Orthostatic Tachycardia Syndrome).\n\nDr. Goldstein reveals why the traditional diagnosis of “vulvodynia” might be missing the real problem, and how factors like labral tears, pudendal nerve compression, Tarlov cysts, pelvic organ prolapse, endometriosis, nerve proliferation, and mast cell disorders can all converge into debilitating pain—and be completely overlooked. He explains why pelvic floor physical therapy sometimes fails, when Botox is a game-changer, and how stigma and misinformation continue to prevent EDS patients from receiving proper care.\n\nIf you've ever been told \"it's all in your head\"—this episode proves it’s not. And it might be the roadmap you've been searching for.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8142191821.mp3?updated=1751083385",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Andrew Goldstein"
    ],
    "guestImages": []
  },
  {
    "num": 147,
    "title": "Is There Any Hope for Broken Healthcare? (Ep 147)",
    "date": "2025-05-29",
    "duration": "1h 1m",
    "description": "What if your rushed, robotic medical visit isn’t just frustrating, but a symptom of something much darker? In this powerful episode, Dr. Linda Bluestein sits down with Dr. Victor Montori, author of Why We Revolt, to explore what’s truly broken in healthcare and why patients and clinicians are suffering on the same side of the fight.\n\nTogether, they uncover the corrosive impact of industrialized, fast medicine, the hidden costs of “heroic” care, and how complex patients are forced to carry impossible burdens in a system that sees them as data points, not people.\n\nDr. Montori shares his vision for a Patient Revolution, explains why the soul of healthcare is under siege, and issues a call to action for anyone who's ever felt like just another number. If you’ve sensed something is deeply wrong in the exam room… you’re not imagining it.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2294428238.mp3?updated=1751083376",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Victor Montori"
    ],
    "guestImages": []
  },
  {
    "num": 146,
    "title": "What’s Behind the Rise in Chemical Sensitivity? | Office Hours (Ep 146)",
    "date": "2025-05-22",
    "duration": "47m",
    "description": "What if your symptoms weren’t isolated… but signals in a much larger system breakdown? In this wide-ranging solo Q&A, Dr. Linda Bluestein uncovers the hidden threads connecting uncontrolled pain before surgery, unexplained eye issues, MCAS, multiple chemical sensitivity, Alpha-gal syndrome, and even autism risk.\n\nFrom the scar tissue no one warned you about to the medication that works—but doctors won’t prescribe—it’s all here. Dr. Bluestein shares eye-opening research on TILT (Toxicant-Induced Loss of Tolerance), fragrance-triggered flares, and why standard pre-op care fails patients with connective tissue disorders.\n\nAnd woven throughout it all? The heavy, frustrating stigma that people with Ehlers-Danlos syndromes and hypermobility spectrum disorders know too well—being dismissed, doubted, and disbelieved. This episode doesn’t just give answers. It reveals what questions you should have been asking all along.",
    "tags": [
      "EDS",
      "MCAS",
      "Pain",
      "Nutrition",
      "Treatment",
      "Surgery",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4770763949.mp3?updated=1747940323",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 145,
    "title": "Are Mast Cells Driving Autism? with Dr. Pejman Katiraei  (Ep 145)",
    "date": "2025-05-15",
    "duration": "1h 24m",
    "description": "What if the diagnosis was just the beginning—and the root cause was hiding in plain sight? In this riveting episode, Dr. Linda Bluestein welcomes pediatrician and integrative medicine expert Dr. Pejman Katiraei, whose work with children struggling with autism, mold exposure, and mast cell activation reveals a shocking truth: many kids aren’t just neurodivergent—they have neuroinflammation.\n\nTogether, they peel back the layers on what’s really driving autistic behaviors, why some children can’t tolerate food, noise, or even hugs—and how mast cells and histamine might be behind it all. Dr. Katiraei shares remarkable stories of transformation, explains why traditional testing often fails, and reveals a controversial treatment that’s changing lives.\n\nIf your child is sensitive, reactive, or struggling to connect—and you’ve been told it’s just \"behavioral\"—this conversation might rewrite what you thought was possible.",
    "tags": [
      "MCAS",
      "Nutrition",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4492562555.mp3?updated=1751083496",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Pejman Katiraei"
    ],
    "guestImages": []
  },
  {
    "num": 144,
    "title": "Unraveling Fatigue: Exploring ME/CFS, and Long COVID (Ep 144)",
    "date": "2025-05-08",
    "duration": "1h 13m",
    "description": "What if your body’s collapse wasn’t burnout… but a system crash no test can catch? In this episode, Dr. Linda Bluestein welcomes Isabelle Ramirez Burnett, systems engineer, health coach, and founder of Renegade Research, to reveal the silent breakdowns behind ME/CFS, long COVID, and hypermobility-related illness.\n\nDiagnosed with ME/CFS at just 7 years old, Isabelle pulls back the curtain on decades of missed diagnoses, medical dismissal, and her discovery of a community willing to do what the healthcare system couldn’t—build their own science.\n\nYou’ll hear about the remission that stunned researchers, the controversial meds that gave her life back, and the protocols patients are building from the ground up. If you’ve ever wondered why your body feels like it’s working against you—or what recovery might actually look like—this episode may change everything.",
    "tags": [
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8464881528.mp3?updated=1751083478",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Isabelle Ramirez Burnett"
    ],
    "guestImages": []
  },
  {
    "num": 143,
    "title": "Dental Problems in EDS with Dr. Audrey Kershaw (Ep 143)",
    "date": "2025-05-01",
    "duration": "1h 13m",
    "description": "What if your dental history held the key to a complex diagnosis no one’s caught? In this gripping episode of the Bendy Bodies Podcast, Dr. Linda Bluestein welcomes Dr. Audrey Kershaw, a trailblazing oral surgeon who’s uncovered hundreds of hidden Ehlers-Danlos Syndrome (EDS) cases—starting in the dental chair.\n\nFrom patients who “can’t numb up,” to decades-long battles with halitosis, gum fragility, and jaw instability, Dr. Kershaw shares the subtle (and sometimes shocking) signs that suggest something far deeper is at play. Together, they explore what happens when TMD, failed anesthesia, slow healing, and even bad breath point to connective tissue disorders that most dentists never learn about.\n\nIf your mouth has always felt... different—this episode might explain why.",
    "tags": [
      "EDS",
      "Diagnosis",
      "Treatment",
      "Surgery",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2310314391.mp3?updated=1746123541",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Audrey Kershaw"
    ],
    "guestImages": []
  },
  {
    "num": 142,
    "title": "Is Your EDS Party Trick Causing Long-Term Damage? | Office Hours (EP 142)",
    "date": "2025-04-24",
    "duration": "45m",
    "description": "What if the very things you do to feel or look better are quietly making you worse? In this solo episode of the Bendy Bodies Podcast, Dr. Linda Bluestein answers listener questions—but what begins as a practical Q&A quickly dives into rarely discussed truths about cosmetic procedures, EMFs, neuroinflammation, and even fragrances as dangerous triggers.\n\nYou’ll hear surprising stories from patients who’ve suffered unexpected complications—and discover how seemingly harmless habits, like party tricks or perfume, could be tipping the scale toward long-term damage. Plus, Dr. Bluestein unpacks the case for renaming MCAS, the underrecognized connection between transness and hypermobility, and why your surgeon might not be as EDS-aware as they claim.\n\nIf you think you’ve already heard it all about EDS, MCAS, and chronic illness—you haven’t heard this.",
    "tags": [
      "EDS",
      "MCAS",
      "Treatment",
      "Neurology",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3137354666.mp3?updated=1745519510",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 141,
    "title": "Top Therapists Share Tips for Surviving EDS  (Ep 141)",
    "date": "2025-04-17",
    "duration": "1h 15m",
    "description": "What happens when illness hijacks your love story? In this raw and revealing episode, Dr. Linda Bluestein sits down with therapists and real-life couple Melissa Dickinson and Tom Query, who know firsthand how Ehlers-Danlos syndrome can test—and transform—a relationship.\n\nFrom secret diagnoses to unexpected intimacy challenges, they open up about their personal journey navigating chronic illness, caregiving, trauma, and neurodivergence while maintaining connection, humor, and purpose.\n\nBut it doesn’t stop there. You’ll hear about the surgery that changed everything, a community built from the ground up, and what it means to reclaim agency in a body that feels like it’s working against you. Whether you're chronically ill, caregiving, or just curious—this episode will stay with you.",
    "tags": [
      "EDS",
      "Mental Health",
      "Diagnosis",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1300890912.mp3?updated=1744923709",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Melissa Dickinson",
      "Tom Query"
    ],
    "guestImages": []
  },
  {
    "num": 140,
    "title": "Why Are You So Exhausted? with Dr. Brayden P. Yellman (Ep 140)",
    "date": "2025-04-10",
    "duration": "1h 5m",
    "description": "What if the fatigue you feel isn’t just “tiredness”—but the result of an entirely different physiological state? In this riveting episode, Dr. Linda Bluestein sits down with Dr. Brayden P. Yellman of the Bateman Horne Center to explore ME/CFS (myalgic encephalomyelitis/chronic fatigue syndrome)—a misunderstood condition that masquerades as general exhaustion but goes much deeper.\n\nTogether, they unravel the hidden markers of post-exertional malaise, explain how upright posture can quietly sabotage your day, and discuss the mysterious collapse of energy systems that no blood test can catch. With no known biomarker, diagnosis is a clinical puzzle—and one too often dismissed.\n\nDr. Yellman also explores emerging theories around brainstem tension, tethered cord syndrome, mast cell activation, and how some surgeries may reset the body in unexpected ways. If you've been chasing answers for fatigue, brain fog, or unexplained crashes, this episode may finally connect the dots you didn’t know existed.\n\nNote: You may notice a few choppy moments in this video due to our guest’s frame rate, but the conversation is so valuable, we knew we had to share it with you. Thanks for your understanding!",
    "tags": [
      "MCAS",
      "Diagnosis",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4160868301.mp3?updated=1744309590",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Brayden P. Yellman"
    ],
    "guestImages": []
  },
  {
    "num": 139,
    "title": "Hidden Histamine Threats with Dr. Theoharis Theoharides (Ep 139)",
    "date": "2025-04-03",
    "duration": "1h 18m",
    "description": "What if the symptoms you've been chasing—brain fog, fatigue, bladder pain, even anxiety—were all connected by one overlooked cell type? In this fascinating episode of the Bendy Bodies Podcast, Dr. Linda Bluestein is joined by Dr. Theoharis Theoharides, one of the world’s leading experts on mast cells, to unravel the hidden roles they play in some of the most complex chronic illnesses.\n\nFrom histamine sensitivity that mimics allergies, to lab tests that miss what’s really going on, Dr. Theoharides sheds light on why so many patients are dismissed—and what doctors are missing. The conversation takes unexpected turns into brain inflammation, food triggers, and even autism, where mast cells may hold untapped insight into neurodevelopment and behavior.\n\nIf you've ever felt like your symptoms don’t make sense—or that the medical system keeps overlooking something obvious—this episode might just connect the dots.",
    "tags": [
      "EDS",
      "MCAS",
      "Nutrition",
      "Mental Health",
      "Diagnosis",
      "Neurology",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7494980945.mp3?updated=1751083592",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Theoharis Theoharides"
    ],
    "guestImages": []
  },
  {
    "num": 138,
    "title": "Lower Your EDS Pain | Office Hours (EP 138)",
    "date": "2025-03-27",
    "duration": "45m",
    "description": "In this solo Q&A episode, Dr. Linda Bluestein answers your biggest hypermobility questions, tackling topics like whether getting an official EDS (Ehlers-Danlos Syndromes) diagnosis is worth it, which pain medications actually help, how to improve posture, and the growing stigma around EDS. She also discusses visceroptosis (organ prolapse), posture braces, and the legalities of medical centers refusing EDS patients. Dr. Bluestein shares practical hypermobility hacks and gives insight into the challenges patients face when seeking care. If you’ve ever wondered how to advocate for yourself, manage pain, or improve daily function, this episode is packed with expert advice and actionable tips.",
    "tags": [
      "EDS",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1196185442.mp3?updated=1743095790",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 137,
    "title": "Signs of Tethered Cord You Shouldn’t Ignore with Dr. Petra Klinge (Ep 137)",
    "date": "2025-03-20",
    "duration": "1h 17m",
    "description": "In this episode of the Bendy Bodies Podcast, Dr. Linda Bluestein welcomes Dr. Petra Klinge, a renowned neurosurgeon specializing in tethered cord syndrome (TCS), Chiari malformation, and cerebrospinal fluid (CSF) disorders. They dive deep into occult tethered cord syndrome, a condition where MRI scans appear normal, yet patients still experience neurological symptoms, chronic pain, and bladder/bowel dysfunction. Dr. Klinge explains how tethered cord affects EDS patients, the role of connective tissue disorders, and what makes someone a good candidate for surgery. Whether you’ve been struggling with undiagnosed spinal issues or are considering tethered cord release surgery, this episode is packed with valuable insights and cutting-edge research.",
    "tags": [
      "EDS",
      "Pain",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Neurology",
      "Surgery",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7331856810.mp3?updated=1742490676",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Petra Klinge"
    ],
    "guestImages": []
  },
  {
    "num": 136,
    "title": "Hidden Triggers of Complex Illness with Dr. David Kaufman (Ep 136)",
    "date": "2025-03-13",
    "duration": "1h 15m",
    "description": "In this episode of the Bendy Bodies Podcast, Dr. Linda Bluestein sits down with Dr. David Kaufman, a specialist in complex illnesses, to discuss how infections, immune dysfunction, and connective tissue disorders intersect. They explore why many chronic illnesses are often overlooked or misdiagnosed. This includes conditions like ME/CFS (myalgic encephalomyeltiis/chronic fatigue syndrome), Long COVID, Ehlers-Danlos Syndrome (EDS), Mast Cell Activation Syndrome (MCAS), and dysautonomia, Dr. Kaufman shares insights on the role of Epstein-Barr Virus (EBV), Lyme Disease, small intestinal bacterial overgrowth (SIBO), and other infections in triggering chronic conditions. They also dive into peptides, plasmapheresis, exosomes, and mitochondrial health as potential treatment avenues. If you've struggled to get answers about complex illness, this episode is packed with groundbreaking insights and expert advice.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9961256997.mp3?updated=1741876793",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. David Kaufman"
    ],
    "guestImages": []
  },
  {
    "num": 135,
    "title": "The Truth About Hormone Therapy | Office Hours (EP 135)",
    "date": "2025-03-06",
    "duration": "50m",
    "description": "In this solo episode of the Bendy Bodies Podcast, Dr. Linda Bluestein dives deep into the complex world of hormones, menopause, and connective tissue disorders. She explores how estrogen, progesterone, and testosterone impact joint health, the benefits and risks of hormone replacement therapy (HRT), and why menopause can worsen EDS symptoms. Dr. Bluestein also breaks down gender-affirming hormone therapy, the role of mast cells in hormonal responses, and why some testosterone clinics may not have your best interests at heart. Whether you're considering HRT, navigating menopause with hypermobility, or wondering how hormones influence mast cells, this episode is packed with practical advice and science-backed insights.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9005983655.mp3?updated=1741276212",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 134,
    "title": "Why Sjogren’s is Often Misdiagnosed with Dr. Kara Wada (Ep 134)",
    "date": "2025-02-27",
    "duration": "1h 17m",
    "description": "In this episode of the Bendy Bodies Podcast, Dr. Linda Bluestein welcomes Dr. Kara Wada, an allergy and immunology expert, to explore Sjogren’s disease and its connection to hypermobility, dysautonomia, and Mast Cell Activation Syndrome (MCAS). They discuss why Sjogren’s is one of the most underdiagnosed autoimmune conditions, its symptoms beyond dryness, and how it intertwines with POTS (postural orthostatic tachycardia syndrome) and EDS (Ehlers-Danlos Syndromes). Dr. Wada also dives into Sjogren’s diagnostic challenges, emerging treatments, nutrition strategies, and the role of inflammation in fatigue and pain. Whether you’re navigating autoimmune symptoms or looking for practical tools to manage them, this episode is filled with expert insights and actionable advice.\n\nFind this episode's transcript here: \nhttps://www.bendybodiespodcast.com/sjogrens-misdiagnosis-dr-kara-wada/",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Nutrition",
      "Diagnosis",
      "Treatment",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5115632892.mp3?updated=1740695558",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Kara Wada"
    ],
    "guestImages": []
  },
  {
    "num": 133,
    "title": "How Internists Think About Complex Illness with Dr. Matthew Watto (Ep 133)",
    "date": "2025-02-20",
    "duration": "1h 13m",
    "description": "In this episode of the Bendy Bodies Podcast, Dr. Linda Bluestein speaks with Dr. Matthew Watto, an internist and co-host of The Curbsiders podcast, about how patients can work effectively with their internist to get the best care. They discuss how internists think, why appointment times are limited, and strategies for getting the most out of every visit. Dr. Watto shares behind-the-scenes insights on primary care challenges, chronic pain management, and the medical system's limitations, while also offering practical tips for improving doctor-patient communication. If you've ever felt frustrated navigating the healthcare system, this episode provides game-changing strategies to help you get the care you need.",
    "tags": [
      "EDS",
      "Pain",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4124287829.mp3?updated=1740074349",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Matthew Watto"
    ],
    "guestImages": []
  },
  {
    "num": 132,
    "title": "Reversing Brain Fog & Inflammation with Dr. Ilene Ruhoy (Ep 132)",
    "date": "2025-02-13",
    "duration": "1h 24m",
    "description": "In this episode of the Bendy Bodies Podcast, Dr. Linda Bluestein welcomes Dr. Ilene Ruhoy, a board-certified neurologist and environmental toxicologist, for an in-depth discussion on brain fog, cognitive dysfunction, and chronic fatigue in conditions like Ehlers-Danlos Syndrome (EDS), Mast Cell Activation Syndrome (MCAS), and dysautonomia. Dr. Ruhoy shares insights on the immune system’s role in neurological symptoms, the impact of mast cell activation, and the role of treatments like peptides, IVIG (intravenous gammaglobulin), plasmapheresis, and immune modulators. They also discuss the hidden effects of histamine on the brain, how sensory sensitivity contributes to fatigue, and the role of regenerative medicine in connective tissue healing. This episode is packed with cutting-edge research and practical solutions for improving cognitive function and energy levels.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3414544882.mp3?updated=1738958295",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Ilene Ruhoy"
    ],
    "guestImages": []
  },
  {
    "num": 131,
    "title": "Testosterone is Essential for Women with Dr. Kelly Casperson (Ep 131)",
    "date": "2025-02-06",
    "duration": "55m",
    "description": "In this episode of the Bendy Bodies Podcast, Dr. Linda Bluestein chats with Dr. Kelly Casperson, a urologist and sexual health expert, about hormones, libido, and sexual wellness—especially for those with hypermobility, Ehlers-Danlos Syndrome (EDS), and related conditions. They dive into testosterone in women, hormone myths, bladder health, vaginal estrogen, and why pelvic floor therapy is a must. Dr. Casperson debunks common hormone fears, explains the role of mast cells and bladder issues, and shares insights on navigating intimacy with chronic illness. This episode is packed with must-know information on aging, sexual health, and proactive care for those with complex medical conditions.",
    "tags": [
      "EDS",
      "MCAS",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4126266030.mp3?updated=1738867741",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Kelly Casperson"
    ],
    "guestImages": []
  },
  {
    "num": 130,
    "title": "Hidden Causes of Painful Sex with Dr. Irwin Goldstein & Sue Goldstein (Ep 130)",
    "date": "2025-01-30",
    "duration": "1h 24m",
    "description": "In this episode of the Bendy Bodies Podcast, Dr. Linda Bluestein speaks with sexual health experts Dr. Irwin Goldstein & Sue Goldstein. This amazing husband and wife team share insights on common issues such as vestibulodynia, libido challenges, and treatment options ranging from physical therapy to hormone therapy. They explore the often-overlooked intersection of joint hypermobility conditions like Ehlers-Danlos Syndrome (EDS), Mast Cell Activation Syndrome (MCAS), and Postural Orthostatic Tachycardia Syndrome (POTS) with sexual dysfunction. They discuss how connective tissue disorders impact sexual health, the role of the sacral nerve in arousal and pain, and how patients can advocate for better care. Whether you're struggling with pain during intimacy or looking for solutions, this episode offers practical advice and hope.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1637180283.mp3?updated=1738260786",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Irwin Goldstein",
      "Dr. Sue Goldstein"
    ],
    "guestImages": []
  },
  {
    "num": 129,
    "title": "Mast Cells: A Hidden Trigger with Dr. Jill Carnahan (Ep 129)",
    "date": "2025-01-23",
    "duration": "54m",
    "description": "In this episode of the Bendy Bodies Podcast, Dr. Linda Bluestein chats with functional medicine expert Dr. Jill Carnahan about tackling complex conditions like Mast Cell Activation Syndrome (MCAS), Ehlers-Danlos Syndrome (EDS), and POTS. A Breast Cancer and Crohn's disease survivor, Dr. Carnahan shares her unique approach to identifying root causes of chronic illness using functional medicine principles. They explore the triad of MCAS, EDS, and dysautonomia, and discuss tools like the limbic system, toxin reduction, and gut healing to improve patient outcomes. This episode is packed with practical insights for navigating chronic illness and optimizing your health.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Nutrition",
      "Mental Health",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2393514858.mp3?updated=1738260548",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Jill Carnahan"
    ],
    "guestImages": []
  },
  {
    "num": 128,
    "title": "IV Fluids, Surgery, and Supplements | Office Hours (Ep 128)",
    "date": "2025-01-16",
    "duration": "36m",
    "description": "In this solo episode of the Bendy Bodies Podcast, Dr. Linda Bluestein tackles your most pressing questions about preparing for surgery with conditions like Ehlers-Danlos Syndrome (EDS), POTS, and MCAS. Dr. Bluestein explains how the recent IV fluid shortage may affect you, which supplements to stop before surgery, and why hydration is key for successful outcomes. She also addresses the importance of communicating with your surgeon about your unique medical needs and provides practical pre- and post-surgery hacks to optimize recovery. Packed with valuable tips, this episode is a must-listen for anyone navigating surgery with chronic conditions.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Pain",
      "Nutrition",
      "Treatment",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4048174878.mp3?updated=1736972155",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 127,
    "title": "Pelvic Floor Secrets for Hypermobility with Dr. Emily Bohan (Ep 127)",
    "date": "2025-01-09",
    "duration": "1h 7m",
    "description": "In this episode of the Bendy Bodies Podcast, Dr. Linda Bluestein speaks with her personal physical therapist, Dr. Emily Bohan, about the often-overlooked role of pelvic floor health in people with hypermobility, EDS, and related conditions. Emily explains why pelvic floor dysfunction can cause issues like low back pain, hip instability, urinary incontinence, and constipation. She shares her expertise on how to strengthen and relax the pelvic floor safely, emphasizing why Kegels aren't always the answer. Packed with practical tips, including \"stop power peeing\" and incremental exercise strategies, this episode provides actionable insights to help anyone dealing with pelvic or musculoskeletal pain.",
    "tags": [
      "Exercise",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9681446064.mp3?updated=1738260528",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Emily Bohan"
    ],
    "guestImages": []
  },
  {
    "num": 126,
    "title": "Navigating College with EDS: A Firsthand Experience with Lauren Vasko (EP 126)",
    "date": "2025-01-02",
    "duration": "1h 9m",
    "description": "In this deeply meaningful episode of the Bendy Bodies Podcast, Dr. Linda Bluestein reconnects with her very first EDS patient, Lauren Vasko. Lauren shares her remarkable story of resilience, from navigating life in a wheelchair, managing Cranial-Cervical Instability (CCI), and battling POTS, to regaining her independence and teaching art in Kenya. She reflects on her challenges with misdiagnoses, traumatic medical experiences, and the importance of self-advocacy. Lauren reveals the tools, treatments, and mindset shifts that helped her heal, including physical therapy, medications, supplements, and setting boundaries. Her message of hope reminds us that even the hardest journeys can lead to unexpected triumphs.\n\nNOTE: Due to some technical limitations, Lauren's video will showcase lines over her frame, but it should not impact her audio or any of her amazing comments!",
    "tags": [
      "EDS",
      "POTS",
      "Nutrition",
      "Mental Health",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3670231097.mp3?updated=1738260506",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Lauren Vasko"
    ],
    "guestImages": []
  },
  {
    "num": 125,
    "title": "Strategies for POTS Relief with Dr. Satish Raj (Ep 125)",
    "date": "2024-12-26",
    "duration": "1h 22m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein speaks with leading autonomic specialist Dr. Satish Raj about POTS (Postural Orthostatic Tachycardia Syndrome), dysautonomia, and orthostatic intolerance. Dr. Raj delves into the complexity of these conditions, including their diverse causes, challenges in diagnosis, and innovative treatments. Learn why POTS is a \"feeling faint\" disorder rather than a fainting disorder, the role of compression garments and increased sodium intake, and how non-pharmacological treatments form the foundation of care. Packed with practical advice and expert insights, this episode is essential listening for anyone navigating POTS or related conditions.",
    "tags": [
      "EDS",
      "POTS",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5462151653.mp3?updated=1734315710",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Satish Raj"
    ],
    "guestImages": []
  },
  {
    "num": 124,
    "title": "The Truth About Food Allergy Testing | Office Hours (Ep 124)",
    "date": "2024-12-19",
    "duration": "54m",
    "description": "In this informative solo episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, dives into pressing topics impacting the hypermobility community. Learn about the new anesthesia time limit policy from Anthem Blue Cross (that was then reversed), how to manage Mast Cell Activation Syndrome (MCAS), understand food allergy testing, and find the best coaching options for those with complex conditions.",
    "tags": [
      "EDS",
      "MCAS",
      "Nutrition",
      "Diagnosis",
      "Treatment",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1348880566.mp3?updated=1734315600",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 123,
    "title": "How EDS Affects the Ears, Nose, and Throat with Dr. Das (Ep 123)",
    "date": "2024-12-12",
    "duration": "1h 16m",
    "description": "In this enlightening episode of the Bendy Bodies podcast, Dr. Linda Bluestein speaks with otolaryngologist Dr. Shu Das about the unique ENT challenges faced by people with Ehlers-Danlos Syndrome (EDS). Dr. Das shares his expertise on common issues like tonsil stones, chronic sore throats, and sinus infections, while diving deep into how EDS impacts vocal cords, nasal health, and even hearing. He offers practical tips for managing symptoms, from antibiotic courses to alternative surgical approaches. Packed with advice on avoiding unnecessary surgeries and improving overall quality of life, this episode is a must-listen for anyone navigating EDS and ENT-related issues.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Mental Health",
      "Treatment",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1189540914.mp3?updated=1733950374",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Shu Das"
    ],
    "guestImages": []
  },
  {
    "num": 122,
    "title": "The Next Generation of EDS Experts with Jeevan Mann and Delaney Kenney (Ep 122)",
    "date": "2024-12-05",
    "duration": "1h 9m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein speaks with two brilliant young researchers, Jeevan Mann and Delaney Kenney, about their groundbreaking work in Ehlers-Danlos Syndromes (EDS). Jeevan shares insights into using 3D skin models for understanding hypermobile EDS, while Delaney discusses her biorepository project and the hope for future treatments. They also share personal experiences navigating life with chronic illness, the importance of advocating for accommodations, and the role of community in supporting those with EDS. This inspiring conversation highlights the innovative research that could transform EDS care and diagnosis.",
    "tags": [
      "EDS",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9974731059.mp3?updated=1733950386",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jeevan Mann",
      "Delaney Kenney"
    ],
    "guestImages": []
  },
  {
    "num": 121,
    "title": "MCAS Perspectives - Personal and Professional  | Office Hours (Ep 121)",
    "date": "2024-11-28",
    "duration": "48m",
    "description": "In this candid solo episode of the Bendy Bodies podcast, I share my insights into Mast Cell Activation Syndrome (MCAS) and its intricate connection to hypermobile Ehlers-Danlos Syndrome (hEDS) and Postural Orthostatic Tachycardia Syndrome (POTS). Reflecting on my personal and professional perspective and cases from my practice, I discuss how MCAS may play a pivotal role in chronic pain and offer practical strategies for identifying and managing symptoms. From my first introduction to MCAS to groundbreaking results in patient care, this episode dives deep into the science and solutions for improving quality of life with these interconnected conditions. Stick around for special hypermobility hacks and helpful resources!",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Pain",
      "Diagnosis",
      "Treatment",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9708360133.mp3?updated=1733950424",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 120,
    "title": "Finding the Right PT for You with Wendy Wagner (Ep 120)",
    "date": "2024-11-21",
    "duration": "1h 21m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, welcomes Chicago-based physical therapist Wendy Wagner to discuss the unique challenges of physical therapy for hypermobility and Ehlers-Danlos Syndrome (EDS). Wendy, who personally manages EDS, postural orthostatic tachycardia syndrome (POTS), and mast cell activation syndrome (MCAS), shares her journey, insights on cervical instability, and tips for choosing the right physical therapist. They dive into the importance of “starting low and going slow” in exercise, strategies for avoiding flares, and how to tailor physical therapy to individual needs. Whether you’re looking to build strength or simply move without pain, Wendy’s expertise provides guidance and practical hacks to make physical therapy safer and more effective for hypermobile bodies.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Exercise",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7615893536.mp3?updated=1733950437",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Wendy Wagner"
    ],
    "guestImages": []
  },
  {
    "num": 119,
    "title": "Food, Fiber, and Flexibility with Lorna Ryan (Ep 119)",
    "date": "2024-11-14",
    "duration": "1h 12m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, explores the impact of nutrition on joint hypermobility with Lorna Ryan, chair of the Diet and Nutrition Working Group for the Ehlers Danlos Society. Lorna shares essential advice on how to nourish the body for better pain management, improved gut health, and more energy. From the importance of fiber to balancing nutrients and understanding food sensitivities, this conversation is packed with practical tips. Lorna also shares her favorite recipes and explains how the right foods can help reduce EDS (Ehlers-Danlos Syndrome) symptoms and support gut health. Whether you’re looking to ease GI symptoms, balance energy levels, or discover new dietary approaches for EDS, this episode offers valuable insights and hacks.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Pain",
      "Nutrition",
      "Exercise",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6135929177.mp3?updated=1733950450",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Lorna Ryan"
    ],
    "guestImages": []
  },
  {
    "num": 118,
    "title": "Biomarkers - Are we Close? with Dr. Clair Francomano (Ep 118)",
    "date": "2024-11-07",
    "duration": "1h 13m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, has an in-depth conversation with Dr. Clair Francomano, a leading expert on connective tissue disorders and Chair of the Medical and Scientific Advisory Board for the Ehlers-Danlos Society. Dr. Francomano shares her insights on diagnosing hypermobile Ehlers-Danlos Syndrome (hEDS) versus hypermobility spectrum disorders (HSD), the current state of genetic testing, and emerging biomarkers (are we close?) that could revolutionize hEDS diagnosis. She discusses the potential connections between EDS, mast cell activation syndrome (MCAS), and postural orthostatic tachycardia syndrome (POTS), offering advice for patients navigating this complex landscape. With updates from ongoing research, this episode is essential listening for those with EDS or related conditions.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3989625882.mp3?updated=1733950470",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Clair Francomano"
    ],
    "guestImages": []
  },
  {
    "num": 117,
    "title": "My Life With EDS | Office Hours (Ep 117)",
    "date": "2024-10-31",
    "duration": "56m",
    "description": "In this personal solo episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, opens up about her journey from aspiring ballet dancer to renowned hypermobility expert. Dr. Bluestein shares her struggles with joint pain, dislocations, and chronic illness, which led to her diagnosis of Ehlers-Danlos Syndrome (EDS). Along with her personal story, Dr. Bluestein reveals the hacks and strategies that have helped her regain function, manage pain, and improve her quality of life. From practical tips to movement strategies, this episode is packed with advice on navigating hypermobility and chronic pain. Whether you’re newly diagnosed or a long-time EDS warrior, you’ll find plenty of insights and hacks to apply to your own journey.",
    "tags": [
      "EDS",
      "Pain",
      "Nutrition",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Neurology",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3527516452.mp3?updated=1736973100",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 116,
    "title": "Tarlov Cysts Truths with my Surgeon, Dr. Frank Feigenbaum (Ep 116)",
    "date": "2024-10-24",
    "duration": "1h 22m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, reconnects with her neurosurgeon, Dr. Frank Feigenbaum, who performed her Tarlov cyst surgery in 2011. Dr. Feigenbaum, a leading expert in Tarlov cyst treatment, shares the complexities of diagnosing these cysts, how they affect the nerves, and the groundbreaking surgical techniques he developed. Dr. Bluestein reflects on her personal journey through surgery and recovery, providing listeners with a unique patient-surgeon perspective. Tune in to learn about Tarlov cyst symptoms, diagnostic challenges, and how surgery can restore quality of life.",
    "tags": [
      "Diagnosis",
      "Treatment",
      "Neurology",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1653777034.mp3?updated=1733950564",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Frank Feigenbaum"
    ],
    "guestImages": []
  },
  {
    "num": 115,
    "title": "The Untold Secrets to Dance Strength with Adji Cissoko (Ep 115)",
    "date": "2024-10-17",
    "duration": "56m",
    "description": "In this inspiring episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, interviews Adji Cissoko, principal dancer with the Lines Ballet Company. Adji shares her incredible journey of balancing natural flexibility with the strength needed to thrive in professional ballet. From dealing with injuries to discussing the importance of sleep, nutrition, and cross-training, Adji provides a glimpse into the discipline required to succeed in dance while taking care of her body. Listeners will learn valuable lessons on injury prevention, building strength, and listening to your body, straight from one of the most captivating dancers in the world.",
    "tags": [
      "Nutrition",
      "Exercise",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6891768921.mp3?updated=1733950586",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Adji Cissoko"
    ],
    "guestImages": []
  },
  {
    "num": 114,
    "title": "Yoga Warning: Are You Putting Your Joints at Risk? with Lara Heimann (Ep 114)",
    "date": "2024-10-10",
    "duration": "1h 10m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, sits down with physical therapist and yoga expert Lara Heimann to uncover the hidden dangers of yoga for hypermobile individuals. As the creator of the LYT Method, Lara combines yoga with functional anatomy to ensure that movement is safe and effective for those with joint instability. Lara shares why traditional yoga practices may be putting hypermobile people at risk and offers crucial advice on how to avoid injury, build strength, and prioritize stability. Don’t miss this eye-opening discussion on how to practice yoga safely with hypermobility.",
    "tags": [
      "Exercise",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1704888928.mp3?updated=1733950598",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Lara Heimann"
    ],
    "guestImages": []
  },
  {
    "num": 113,
    "title": "Orthobiologics with the Centeno-Schultz Clinic (Ep 113)",
    "date": "2024-10-03",
    "duration": "1h 9m",
    "description": "In this special on-site episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, sits down face to face with Dr. John Pitts! Dr. Pitts, is an expert in regenerative medicine, about cutting-edge treatments for hypermobility and chronic pain. Dr. Pitts discusses prolotherapy, protein rich plasma (PRP), and \"stem cell\" therapies and explains how these treatments can heal tissues and improve function without surgery. He shares insights on treating conditions like Ehlers-Danlos Syndrome (EDS), Hypermobility Spectrum Disorder (HSD), and joint instability, focusing on helping the body heal itself. Whether you’re dealing with nagging pain or seeking alternatives to surgery, this episode offers hope and practical solutions.",
    "tags": [
      "EDS",
      "Pain",
      "Treatment",
      "Surgery",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5447326695.mp3?updated=1741109571",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. John Pitts"
    ],
    "guestImages": []
  },
  {
    "num": 112,
    "title": "Genetic Testing in EDS with Dr. Paldeep Atwal (Ep 112)",
    "date": "2024-09-26",
    "duration": "1h 12m",
    "description": "In this enlightening episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, is joined by renowned clinical geneticist Dr. Paldeep Atwal to delve into the complexities of genetics in hypermobile Ehlers-Danlos Syndrome (hEDS) and related conditions. Dr. Atwal explains the importance of genetic testing, the significance of variants of uncertain significance (VUSs), and the complexities of gene interactions in understanding EDS. They also explore the future of genetic research and what patients should know about genetic testing to avoid misinformation and unnecessary stress. Whether you're new to the world of EDS or looking for cutting-edge insights, this episode offers valuable guidance.",
    "tags": [
      "EDS",
      "Diagnosis",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4404743068.mp3?updated=1733951557",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Paldeep Atwal"
    ],
    "guestImages": [
      "Guests/Paldeep_Atwal.jpg"
    ]
  },
  {
    "num": 111,
    "title": "My Essential EDS Advice | Office Hours (Ep111)",
    "date": "2024-09-19",
    "duration": "58m",
    "description": "In this unique solo episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, answers listener-submitted questions about hypermobile Ehlers-Danlos syndrome (hEDS), POTS, and related conditions. From understanding the importance of a correct diagnosis to tips for managing symptoms, Dr. Bluestein offers valuable insights on living with chronic illness. Learn what to ask your doctor, how to pace yourself with hEDS and POTS, and discover Dr. Bluestein’s favorite hypermobility hacks. Whether you’re newly diagnosed or have been managing symptoms for years, this episode provides practical advice for navigating the complexities of hypermobility.",
    "tags": [
      "EDS",
      "POTS",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8410683435.mp3?updated=1733951587",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": [
      "Guests/Linda_Bluestein.png"
    ]
  },
  {
    "num": 110,
    "title": "hEDS vs HSD: Controversies in Diagnosis with Alan Hakim, MD (Ep 110)",
    "date": "2024-09-12",
    "duration": "1h 19m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, welcomes Dr. Alan Hakim, a world-renowned rheumatologist and expert in Ehlers-Danlos Syndromes (EDS) and Hypermobility Spectrum Disorders (HSD). Dr. Hakim reveals for the first time something about his own health. Listen in to find out what Dr. Hakim really thinks about the Beighton Score and the 2017 hEDS Classification Criteria. He also shares when he feels genetic testing is indicated and how to interpret variants of uncertain significance (VUSs).",
    "tags": [
      "EDS",
      "POTS",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6230208578.mp3?updated=1733951605",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Alan Hakim, MD"
    ],
    "guestImages": []
  },
  {
    "num": 109,
    "title": "How EDS and HSD Impact Fascia and Pain with Tina Wang, MD (Ep 109)",
    "date": "2024-09-05",
    "duration": "1h 13m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, welcomes Dr. Tina Wang, a leading expert in physical medicine, rehabilitation, and fascia research. Dr. Wang delves into the complexities of fascia, particularly its role in Ehlers-Danlos Syndrome (EDS) and Hypermobility Spectrum Disorders (HSD). She explains how fascial dysfunction contributes to myofascial pain, joint instability, and other challenges faced by individuals with hypermobility. Dr. Wang also discusses innovative diagnostic techniques and treatment approaches, including the use of ultrasound and manual therapy. This episode is a must-listen for anyone who wants to better understand their pain, or is interested in the cutting-edge research and clinical insights on fascia and connective tissue disorders.",
    "tags": [
      "EDS",
      "Pain",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5422130440.mp3?updated=1733951620",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Tina Wang, MD"
    ],
    "guestImages": []
  },
  {
    "num": null,
    "title": "Welcome, Bendy Buddies!",
    "date": "2024-08-30",
    "duration": "2m",
    "description": "Each week, join Dr. Linda Bluestein (AKA The Hypermobility MD) on her quest to demystify the wide world of symptomatic joint hypermobility. Get ready to better understand your own bendy body in our newest season – available now!",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7535381807.mp3?updated=1725126917",
    "snippets": [],
    "transcript": "",
    "guests": [],
    "guestImages": []
  },
  {
    "num": 108,
    "title": "Overcoming Pain in EDS: Building Stronger Bodies with Whealth Founders Katie & Andrew Dettelbach (Ep 108)",
    "date": "2024-08-29",
    "duration": "1h 17m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, chats with Katie and Andrew Dettelbach, founders of Whealth, a program dedicated to helping people with hypermobility and chronic pain. Both Katie and Andrew have hypermobile Ehlers-Danlos Syndrome (hEDS) and have turned their personal struggles into a platform that empowers others to manage their pain and regain strength. Katie, a critical care nurse, and Andrew, a kinesiologist, discuss their journeys, challenges with hypermobility, and the innovative methods they’ve developed to help thousands worldwide overcome chronic pain. Learn how movement, strength, and understanding your body can transform your life.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4192917285.mp3?updated=1733951642",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Katie Dettelbach",
      "Andrew Dettelbach"
    ],
    "guestImages": []
  },
  {
    "num": 107,
    "title": "Grief, Healing, and Mental Health Strategies for Chronic Illness with Natasha Trujillo, PhD (Ep 107)",
    "date": "2024-08-22",
    "duration": "1h 4m",
    "description": "In this insightful episode of the Bendy Bodies podcast, Dr. Linda Bluestein speaks with Dr. Natasha Trujillo, a licensed sports psychologist specializing in grief, loss, and chronic illness. Dr. Trujillo and Dr. Bluestien both work with the Colorado Ballet. Dr. Trujillo discusses the complex emotional landscape of grieving when faced with chronic pain, disability, and the loss of identity. She shares valuable strategies for processing grief, moving towards acceptance, and navigating self-compassion. Whether you’ve experienced grief from illness, injury, or significant life changes, this episode provides tools and approaches to living a fuller, more resilient life.",
    "tags": [
      "EDS",
      "Pain",
      "Mental Health",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3106097323.mp3?updated=1733951704",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Natasha Trujillo, PhD"
    ],
    "guestImages": []
  },
  {
    "num": 106,
    "title": "Group Rehabilitation for POTS with Emily Rich, OT (Ep 106)",
    "date": "2024-08-15",
    "duration": "56m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, sits down with Emily Rich, an occupational therapist specializing in POTS (Postural orthostatic tachycardia syndrome), Ehlers-Danlos syndromes, and other chronic conditions. Emily, who is also a patient with hypermobile EDS and POTS, shares her insights on how occupational therapy can help individuals regain control over their daily lives. From adaptive tools to fatigue management strategies, Emily provides practical advice and discusses her groundbreaking research on group rehabilitation programs for POTS. Tune in to learn how to manage symptoms and improve your quality of life with expert guidance.",
    "tags": [
      "EDS",
      "POTS",
      "Mental Health",
      "Exercise",
      "Treatment",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7979907554.mp3?updated=1733951693",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Emily Rich, OT"
    ],
    "guestImages": []
  },
  {
    "num": 105,
    "title": "Understanding the Brain's Role in Chronic Pain with Kaitlin Touza, PhD (Ep 105)",
    "date": "2024-08-08",
    "duration": "1h 6m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, engages in an enlightening conversation with Dr. Kaitlin Touza, a renowned pain psychologist. Dr. Touza delves into the complexities of chronic pain, explaining how the nervous system, brain processes, and psychological factors contribute to pain experiences. She discusses multiple different pain management techniques while emphasizing the benefits of understanding pain neuroscience. Dr. Touza also highlights the value of self-compassion and psychological flexibility in improving quality of life for those with chronic pain.",
    "tags": [
      "EDS",
      "Pain",
      "Mental Health",
      "Treatment",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7554716529.mp3?updated=1733951720",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Kaitlin Touza, PhD"
    ],
    "guestImages": []
  },
  {
    "num": 104,
    "title": "Connective Tissue Disorders and Lipedema with Karen Herbst, MD (Ep 104)",
    "date": "2024-08-01",
    "duration": "1h 16m",
    "description": "In this episode of the Bendy Bodies podcast, Dr. Linda Bluestein, the Hypermobility MD, hosts an enlightening discussion with Dr. Karen Herbst, a leading expert on lipedema and other adipose connective tissue diseases. Dr. Herbst shares her extensive knowledge on the complexities of lipedema, Dercum's disease, and their connection to connective tissue disorders, inflammation, and hormonal factors. Learn about the latest research, diagnostic challenges, and effective treatments, including diet, supplements, and surgery. Don't miss the valuable insights and practical advice shared in this episode.",
    "tags": [
      "EDS",
      "Pain",
      "Nutrition",
      "Diagnosis",
      "Treatment",
      "Surgery",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3463761604.mp3?updated=1733951737",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Karen Herbst, MD"
    ],
    "guestImages": []
  },
  {
    "num": 103,
    "title": "Linking Mast Cell Activation, Autoimmunity, and EDS with Kara Wada, MD (Ep 103)",
    "date": "2024-07-25",
    "duration": "1h 1m",
    "description": "In this episode, Dr. Linda Bluestein, the Hypermobility MD, delves into the intricate connections between the immune system and hypermobility disorders with Dr. Kara Wada. A quadruple board-certified physician and Sjogren's patient, Dr. Wada shares her expertise on mast cell activation syndrome, autoimmunity, and the role of inflammation. Discover holistic approaches to managing these conditions and gain valuable insights into the latest research and treatments. Don't miss the special hypermobility hacks at the end!",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Nutrition",
      "Exercise",
      "Treatment",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2532341333.mp3?updated=1733952569",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Kara Wada, MD"
    ],
    "guestImages": []
  },
  {
    "num": 102,
    "title": "Examining The Future of EDS Diagnosis and Care with EDS Society CEO Lara Bloom (Ep 102)",
    "date": "2024-07-18",
    "duration": "1h 5m",
    "description": "In this episode, Dr. Linda Bluestein, the Hypermobility MD, hosts a captivating conversation with Lara Bloom, President and CEO of the Ehlers-Danlos Society. Lara shares her journey in advocating for rare diseases, the progress made in Ehlers-Danlos syndromes (EDS) and hypermobility spectrum disorders (HSD), and the upcoming updates in diagnostic criteria. Tune in to learn about the challenges, successes, and future directions in EDS research and patient care.",
    "tags": [
      "EDS",
      "Exercise",
      "Diagnosis",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7528742743.mp3?updated=1733952672",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Lara Bloom"
    ],
    "guestImages": []
  },
  {
    "num": null,
    "title": "Season 4 Wrap: Reading Your Comments",
    "date": "2024-06-13",
    "duration": "7m",
    "description": "Welcome back, every Bendy Body! In this special episode, I wrap up season four and share exciting plans for season five. Join me as I reflect on our journey, from focusing on high-risk populations like dancers and gymnasts to diving deep into medical topics. Listen in for gratitude-filled shoutouts from our wonderful listeners as I read their heartwarming reviews! See you soon for Season 5!\nConnect with YOUR Bendy Specialist, Dr. Linda Bluestein, MD at https://www.hypermobilitymd.com/.",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6435896896.mp3?updated=1721669786",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": []
  },
  {
    "num": 101,
    "title": "Breaking the Vicious Cycle of Chronic Illness with Ashok Gupta (Ep 101)",
    "date": "2024-06-06",
    "duration": "1h 1m",
    "description": "In this conversation, Dr. Linda Bluestein interviews Ashok Gupta about his experience breaking the vicious cycle of chronic illness when he had ME-CFS. They discuss the impact of chronic conditions, the brain's priority of survival, and the vicious cycle of symptoms. Ashok explains the Gupta Program, which aims to make patients aware of subtle danger signals in the brain and retrain the brain's response. They also explore the concept of neuroimmune conditioned syndromes and address common myths about brain retraining. With a focus on hypermobility, they discuss the time commitment required to see results, different ways to engage with the program, the importance of somatic retraining and its impact on brain structures, and how clinicians can recommend brain retraining to their patients without sounding like gaslighting. They also explore the duration of the program, potential worsening during the program, and the accessibility and cost of the program. The conversation ends with a discussion on the power of neuroplasticity and a hypermobility hack to make friends with your body.",
    "tags": [
      "Pain",
      "Exercise",
      "Treatment",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8814134870.mp3?updated=1733952699",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Ashok Gupta"
    ],
    "guestImages": []
  },
  {
    "num": null,
    "title": "Milestones and Reflections: 100 Episodes of Bendy Bodies with Linda Bluestein, MD",
    "date": "2024-05-30",
    "duration": "1h 19m",
    "description": "Dr. Linda Bluestein celebrates 100 episodes of Bendy Bodies discussing the most rewarding part of hosting the podcast and the challenges of podcasting. She emphasizes the importance of balancing the complexity of EDS and the need for healthcare professionals to understand and empathize with the struggles of patients with hypermobility conditions. Dr. Bluestein discusses the symptom burden experienced by individuals with EDS and the challenges they face in getting their symptoms understood and validated by healthcare professionals. She shares her approach to treatment as well as the top three concerns among EDS patients. Dr. Linda Bluestein and guest host Kate Colbert discuss the importance of effective communication between doctors and patients, and the need for healthcare professionals to understand the patient's perspective. Dr. Bluestein shares her goals for the Bendy Bodies podcast and they end with a hypermobility hack for traveling with EDS.",
    "tags": [
      "EDS",
      "MCAS",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9119689832.mp3?updated=1724424601",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": []
  },
  {
    "num": 99,
    "title": "From News Anchor to Advocate: A POTS and EDS Journey with Summer Dashe (Ep 99)",
    "date": "2024-05-23",
    "duration": "59m",
    "description": "Summer Dashe, a former news anchor and advocate for the chronically ill, shares her POTS and EDS journey. She covers how she manages her symptoms in everyday life and the challenges of getting diagnosed with POTS (Postural Orthostatic Tachycardia Syndrome) and EDS (Ehlers-Danlos Syndrome). #dysautonomia #ChronicIllness #POTSAwareness",
    "tags": [
      "EDS",
      "POTS",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8053009929.mp3?updated=1733952742",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Summer Dashe"
    ],
    "guestImages": []
  },
  {
    "num": 98,
    "title": "Environmental Triggers of Mast Cell Disease with Tania Dempsey, MD (Ep 98)",
    "date": "2024-05-16",
    "duration": "1h 16m",
    "description": "Summary\n\nDr. Tania Dempsey discusses mast cell activation syndrome (MCAS) with a focus on environmental triggers of mast cell disease.",
    "tags": [
      "MCAS",
      "Nutrition",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7184322186.mp3?updated=1733952757",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Tania Dempsey, MD"
    ],
    "guestImages": []
  },
  {
    "num": 97,
    "title": "Learning to Spot the Signs of Ehlers-Danlos Syndromes with Guest Host, Kate Colbert (Ep 97)",
    "date": "2024-05-09",
    "duration": "1h 6m",
    "description": "In this special “EDS Awareness Month” episode of the Bendy Bodies Podcast, founder Dr. Linda Bluestein and guest host Kate Colbert discuss how everyone can learn to spot the signs of\nEhlers-Danlos Syndromes.\n\nDr. Bluestein emphasizes the importance of EDS awareness, as many people are still not getting the evaluations and care they need. She also debunks several myths about EDS, including the misconception that EDS does not cause pain and that only geneticists can diagnose it. She emphasizes the importance of early intervention and appropriate treatment for better patient outcomes. \n\nThey cover the importance of understanding Mast Cell Activation Syndrome (MCAS), the challenges faced by individuals with EDS in their relationships, and how to communicate with romantic partners and family members. \n\nColbert and Dr. Bluestein also discuss the impact of EDS in the workplace and provide tips for employers and coworkers to support individuals with EDS. The conversation emphasizes the need for awareness, empathy, and support for individuals with EDS and other poorly recognized conditions.",
    "tags": [
      "EDS",
      "MCAS",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4921456459.mp3?updated=1733952780",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Kate Colbert"
    ],
    "guestImages": []
  },
  {
    "num": 96,
    "title": "Coping with Dance Injuries and Career Transitions with Chelsea Pierotti, PhD and Guest Cohost, Jennifer Milner (Ep 96)",
    "date": "2024-04-25",
    "duration": "43m",
    "description": "In this episode, Dr. Chelsea Pierotti discusses coping with dance injuries and transitions, both from a physical and psychological perspective. She explains that the way dancers appraise their injuries and their emotional response to them can greatly impact their coping mechanisms. Dr. Pierotti emphasizes the importance of shifting the mindset from seeing an injury as a disaster to viewing it as a challenge that can be overcome. She also highlights the role of social support in the recovery process and the need for dancers to define success in ways that are within their control. Additionally, Dr. Pierotti addresses the challenges dancers face when transitioning between different forms of dance or when they have to give up dancing altogether. When transitioning out of dance, it is important to consider your values and what truly matters to you in life. This will help guide your future goals and decisions. It is also helpful to reflect on who you admire and what you admire about them, as this can highlight your own values. Grief and loss are common when leaving a dance career, and it is important to acknowledge and process these emotions. The dance world can be more supportive by adopting a positive coaching approach and focusing on the whole athlete, not just their performance. Developing mental skills and self-awareness is crucial for dancers and can be beneficial for everyone.\n\nChapters ➡\n\n00:00 Introduction\n00:54 Introducing Dr. Chelsea Pierotti\n01:13 Coping with Injuries\n03:38 Coping Mechanisms\n06:34 The Influence of Childhood Experiences\n08:29 Developing Resilience\n09:48 Transitioning from Dance\n12:11 The Role of Pain\n13:09 Challenges Faced by Hypermobile Dancers\n13:23 Supporting Dancers through Challenges\n17:49 The Importance of Social Support\n18:43 Grief and Loss of a Dance Career\n20:34 Developing Resilience and Coping Strategies\n24:57 The Importance of Values\n27:52 Shifting the Dance Culture\n29:25 Coping with Career Shifts\n33:22 Positive Coaching Approach\n35:55 Developing Mental Skills\n36:51 Applying Mental Skills to Life\n37:24 The Importance of Self-Awareness in Dance\n38:25 Mindset: Controlling the Controllables\n\nConnect with YOUR Bendy Specialist, Dr. Linda Bluestein, MD at https://www.hypermobilitymd.com/.",
    "tags": [
      "Mental Health",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5218021547.mp3?updated=1733952809",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Chelsea Pierotti, PhD",
      "Jennifer Milner"
    ],
    "guestImages": []
  },
  {
    "num": 95,
    "title": "95. Pain Care Redefined: Non-Drug Therapies for Pain Relief with Heather Tick, MD",
    "date": "2024-04-11",
    "duration": "1h 41m",
    "description": "Dr. Heather Tick, a renowned pain expert, discusses non-drug therapies for pain relief; applying the principles of integrative medicine for comprehensive pain care. She emphasizes the need for education and understanding of pain neuroscience to empower patients. Dr. Tick also highlights the significance of nutrition in reducing chronic pain and inflammation. Additionally, she explores various modalities, such as acupuncture and manual therapies, as effective strategies for pain relief. Dr. Heather Tick discusses the impact of habits on movement and the importance of developing healthy movement practices. She also explores various modalities for pain relief, including heat, cold, Epsom salt baths, and movement therapies like yoga and Tai Chi. Dr. Tick emphasizes the role of mast cells in the stress response and the importance of managing diet to reduce mast cell activation. She discusses the effectiveness of laser therapy, ozone injections, and shockwave therapy for pain management. Dr. Tick also addresses the overprescription of medications and the potential benefits of supplements. She provides insights into the appropriate use of interventional pain management and the risks associated with steroid injections. Finally, she discusses the challenges of determining the expertise of medical professionals and the need for caution when considering regenerative medicine.\n\nConnect with YOUR Bendy Specialist, Dr. Linda Bluestein, MD at https://www.hypermobilitymd.com/.",
    "tags": [
      "MCAS",
      "Pain",
      "Nutrition",
      "Exercise",
      "Treatment",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6782606019.mp3?updated=1724424374",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Heather Tick, MD"
    ],
    "guestImages": []
  },
  {
    "num": 94,
    "title": "94. Support and Bracing for Hypermobile Joints with Susan Chalela, MPT, and Guest Cohost, Scott Borjeson",
    "date": "2024-04-04",
    "duration": "1h 6m",
    "description": "In this Bendy Bodies with the Hypermobility MD podcast, Susan Chalela, MPT discusses support and bracing for hypermobile joints. She shares how her personal and professional experience with joint hypermobility led her to develop the Finding Functional Foundations approach which is being taught as part of The Ehlers-Danlos Society EDS ECHO program. She emphasizes the importance of proper alignment and biomechanics in everyday activities and explains why traditional physical therapy approaches may not be effective for hypermobile patients. Susan also discusses the role of bracing and supports in providing stability and controlling motion. She explains the benefits of using different types of braces for the feet, ankles, pelvis, and neck, and emphasizes the need for proper sizing and education for both patients and physical therapists. Susan also shares her experience with durable medical equipment (DME) and provides recommendations for clinicians interested in offering bracing services. She concludes by highlighting the resources available for further education and support in the field of hypermobility. Watching this episode on YouTube is recommended since there are some graphics used.",
    "tags": [
      "EDS",
      "Exercise",
      "Treatment",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5075639963.mp3?updated=1724424298",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Susan Chalela, MPT",
      "Scott Borjeson"
    ],
    "guestImages": []
  },
  {
    "num": 93,
    "title": "93. Unveiling Taming the Zebra: A Discussion with Physical Therapists Patricia Stott and Heather Purdin",
    "date": "2024-03-07",
    "duration": "1h 0m",
    "description": "This episode centers around unveiling 'Taming the Zebra', a book co-authored by physical therapists, Dr. Patty Stott and Heather Purdin.  The book aims to fill a void in understanding and provide therapists with the knowledge to effectively work with patients with hypermobility spectrum disorders (HSD) and Ehlers-Danlos Syndromes (EDS). It covers the impact of connective tissue disorders on various body systems and provides practical tips for modifying physical therapy approaches. The book emphasizes the importance of addressing primary issues and understanding the complexity of each individual's presentation. The chapters cover topics such as modifying movement for gentle exercise, addressing deconditioning and weakness, building confidence and safe strengthening programs, finding physical therapists open to working with EDS patients, expanding the toolkit for physical therapy, and more.",
    "tags": [
      "EDS",
      "Exercise",
      "Treatment",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2078340057.mp3?updated=1721670370",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Patricia Stott",
      "Heather Purdin"
    ],
    "guestImages": []
  },
  {
    "num": 92,
    "title": "92. Empowering Zebra Warriors: THE Guide to Effective Physical Therapy for EDS and HSD with Lilian Holm, DPT",
    "date": "2024-02-29",
    "duration": "1h 7m",
    "description": "In this Bendy Bodies podcast episode, Dr. Lillian Holm discusses effective physical therapy for EDS and HSD and the importance of correcting function to achieve pain relief and tolerance for exercise. She explains why physical therapy may not always lead to the expected outcome, emphasizing the need for specialized therapists and individualized treatment. She addresses common misconceptions about physical therapy and highlights the importance of communication and realistic expectations. Dr. Linda Bluestein and Dr. Holm cover topics such as progress and setbacks, balancing stretching with strengthening, starting to walk again after severe limitations, physical therapy for scoliosis, and helpful resources and information. Dr. Holm also shares her favorite hypermobility hacks to help individuals stay motivated and achieve their goals.",
    "tags": [
      "EDS",
      "Pain",
      "Exercise",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3152053958.mp3?updated=1721670322",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Lilian Holm, DPT"
    ],
    "guestImages": []
  },
  {
    "num": 91,
    "title": "91. Hand Problems in EDS with Corinne McLees, OT and Hand Coach",
    "date": "2024-02-22",
    "duration": "1h 24m",
    "description": "In this episode, Dr. Linda Bluestein and Corinne McLees discuss hand problems in EDS including pain, weakness, and injuries.  This conversation covers various topics related to hand problems, including ring splints, hand exercises, avoiding strain and hyperextension, tips for traveling, challenges of the medical system for chronic pain, hand pain with writing, hand pain and numbness in sleep, thumb pain and De Quervain's tendonitis, cubital tunnel syndrome, TFCC tear, trigger finger and so much  more.",
    "tags": [
      "EDS",
      "Pain",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1374934843.mp3?updated=1721670784",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Corinne McLees, OT"
    ],
    "guestImages": []
  },
  {
    "num": 90,
    "title": "90. Decoding Brain Fog: Expert Insights with Ilene Ruhoy, MD, PhD",
    "date": "2024-02-15",
    "duration": "49m",
    "description": "In this episode, Dr. Linda Bluestein interviews Dr. Ilene Ruhoy about causes of brain fog, as well as its relationship to various conditions such as mast cell activation syndrome, craniocervical instability, dysautonomia, and CSF leaks. She explains how these conditions contribute to cognitive dysfunction and the importance of identifying underlying causes. Dr. Ruhoy emphasizes the need for a comprehensive evaluation and individualized treatment approach for patients experiencing brain fog.  They delve into the role of nutrition in cognitive function, emphasizing the impact of food choices on inflammation. They highlight the importance of avoiding processed foods and sugar, increasing vegetable consumption, and improving lifestyle factors.  Dr. Ruhoy shares surprising findings on the MRI of mast cell activation syndrome (MCAS) patients. \n\nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Nutrition",
      "Treatment",
      "Neurology",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5520749961.mp3?updated=1721670274",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Ilene Ruhoy, MD, PhD"
    ],
    "guestImages": []
  },
  {
    "num": 89,
    "title": "89. Conquering the Sleep Struggle with Roger Seheult, MD",
    "date": "2024-02-08",
    "duration": "1h 32m",
    "description": "In this episode, Dr. Linda Bluestein interviews Dr. Roger Seheult about the importance of sleep for people with chronic illness, chronic pain, and joint hypermobility.  Dr Seheult, a quadruple board-certified physician with expertise in sleep medicine, discusses various topics related to sleep, including the circadian rhythm, the impact of light on sleep, the effect of blue light on sleep, ideal bedtime, the impact of electronics on sleep, the role of melatonin, and the timing of eating and its effect on sleep.  Other topics include challenges of working from home, sleep schedules and chronic illness, shifting sleep patterns, sleep apnea and its relationship with chronic illness, sleep medications, sleep watches and monitoring devices, sleep positions and joint instability, and the importance of sleep education in medical training. Dr. Seheult provides valuable insights and recommendations for improving sleep quality and managing sleep-related issues.\n\nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.",
    "tags": [
      "EDS",
      "Pain",
      "Nutrition",
      "Treatment",
      "Neurology",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5345213169.mp3?updated=1721670792",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Roger Seheult, MD"
    ],
    "guestImages": []
  },
  {
    "num": 88,
    "title": "88. Service Dogs and Disability Rights with Tiffany Lee, JD",
    "date": "2024-02-01",
    "duration": "1h 10m",
    "description": "In this episode, Professor Tiffany Lee is interviewed about service dogs and disability rights and accommodations. They discuss the Americans with Disabilities Act, the definition of disability, and disability benefits. They also explore reasonable accommodations in the workplace and education settings, as well as the challenges and advocacy involved. The conversation covers topics such as disclosing disabilities to employers and universities, getting a service dog, dealing with unresponsive disability lawyers, appealing denied disability benefits, and correcting inaccuracies in medical records. The episode provides valuable insights and guidance for individuals with disabilities navigating legal and practical aspects of their rights and accommodations. Professor Lee wanted to clarify the following points from the discussion of Social Security disability. SSI places limits on assets ($2000 for an individual) and income. SSDI does not have an asset limit but requires the recipient not be able to engage in “substantial gainful activity,” which generally acts as an income limit. There is a “Ticket to Work” program called “Choose Work” available that provides some options similar to those in the earlier “Ticket to Work” program mentioned in this episode.\n\nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.\n\nKey points discussed: \n\n**Americans with Disabilities Act (ADA):** The conversation explores the ADA, a crucial piece of legislation that prohibits discrimination against individuals with disabilities and mandates reasonable accommodations.\n\n**Disability Benefits:** The episode delves into disability benefits, including the process of applying, appealing denied benefits, and addressing inaccuracies in medical records.\n\n**Workplace and Education Accommodations:** Reasonable accommodations in both workplace and education settings are explored, shedding light on the challenges and advocacy involved.\n\n**Disclosure to Employers and Universities:** Professor Tiffany Lee provides insights into the considerations and potential challenges of disclosing disabilities to employers and universities.\n\n**Service Dogs:** The episode discusses obtaining a service dog and the associated considerations.\n\n**Dealing with Disability Lawyers:** Challenges related to unresponsive disability lawyers are addressed, offering guidance on how to navigate such situations.\n\n**Financial Impact of Disability:** The limitations and financial impact of applying for disability, including asset limits and restrictions on work and income, are discussed.\n\n**Flaws in the Disability System:** Issues within the disability system, such as the poverty threshold and its impact on marriage, are highlighted.\n\n**Emergency Response Accessibility:** Making disaster and emergency response accessible to people with disabilities is discussed.\n\nOverall, the episode provides an exploration of the legal, practical, and personal aspects of disability rights and accommodations, offering valuable insights and guidance for individuals with disabilities.\n\nChapters\n\n00:00 Introduction and Overview\n01:14 Americans with Disabilities Act\n03:28 Reasonable Accommodations in the Workplace\n04:38 Determining Reasonable Accommodations\n09:07 Accommodations in High School and College\n11:22 Challenges with Disability Services in Education\n13:59 Advocating for Accommodations in Education\n16:36 Disclosing Disabilities to Employers and Universities\n19:03 Determining Job Compatibility with Accommodations\n21:03 Getting a Service Dog\n23:37 Regulations and Considerations for Service Dog Training\n36:33 Dealing with Unresponsive Disability Lawyers\n38:07 Appealing Denied Disability Benefits\n40:03 Legal Recourse for Undertreatment of Pain\n43:07 Accommodations for Productivity Standards\n43:45 Correcting Inaccuracies in Medical Records\n47:46 Knowing When to Get an Accommodation or Apply for Disability\n48:36 Considerations for Applying for Disability\n50:23 Assets and Poverty Threshold for Disability\n58:58 Making Disaster and Emergency Response Accessible\n01:02:44 Hypermobility Hack: Walking Desk\n\nConnect with YOUR Bendy Specialist, Dr. Linda Bluestein, MD at https://www.hypermobilitymd.com/.",
    "tags": [
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9494131393.mp3?updated=1721670419",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Tiffany Lee, JD"
    ],
    "guestImages": []
  },
  {
    "num": 87,
    "title": "87. Disordered Eating in Dance with Josh Spell, LICSW, and Guest Co-Host Jennifer Milner",
    "date": "2024-01-25",
    "duration": "49m",
    "description": "In this episode, psychologist Josh Spell discusses disordered eating in dance. Josh shares insights into the coping mechanisms behind eating disorders and offers advice for directors, teachers, and friends who suspect someone may be struggling with an eating disorder. \n\nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.\n\nYOUR guest co-host is Jennifer Milner, former professional ballet and Broadway dancer and founder of Bodies In:Motion.",
    "tags": [
      "EDS",
      "Nutrition",
      "Mental Health",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5988772444.mp3?updated=1721670331",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Josh Spell, LICSW",
      "Jennifer Milner"
    ],
    "guestImages": []
  },
  {
    "num": 86,
    "title": "86. The Unfair EDS Journey with Amanda Cassil, PhD",
    "date": "2024-01-18",
    "duration": "1h 8m",
    "description": "In this episode, psychologist Dr. Amanda Cassil discusses the unfair EDS journey (Ehlers-Danlos Syndromes) and provides strategies for effectively communicating with healthcare providers.  Dr. Cassil provides valuable insights and tools for navigating the healthcare system and improving the quality of life for individuals with chronic illnesses. In this conversation, Dr. Amanda Cassil and Linda Bluestein, MD discuss the challenges faced by patients with hypermobility disorders (like Ehlers-Danlos Syndromes) and chronic illnesses.\n\nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.",
    "tags": [
      "EDS",
      "Mental Health",
      "Treatment",
      "Neurology",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6478644313.mp3?updated=1721670613",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Amanda Cassil, PhD"
    ],
    "guestImages": []
  },
  {
    "num": 85,
    "title": "85. Making a MCAS Documentary with Drs. Weinstock, Dempsey, Bluestein, Afrin, Kinsella & Jill Brook, MA",
    "date": "2024-01-11",
    "duration": "58m",
    "description": "In this Bendy Bodies with the Hypermobility MD podcast episode, making a MCAS documentary is discussed.  Distinguished participants in this collaborative effort include Dr. Leonard Weinstock, Dr. Larry Afrin, Dr. Tania Dempsey, Dr. Laurence Kinsella, and Dr. Linda Bluestein, alongside dedicated patient advocate Jill Brook.   \nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.\nKey Highlights:\n1. The initiative incorporates both a documentary and an online educational library strategically designed to elevate awareness surrounding MCAS, Dysautonomia, and Hypermobility Spectrum Disorders.\n2. Renowned healthcare professionals, namely Dr. Leonard Weinstock, Dr. Larry Afrin, Dr. Tania Dempsey, Dr. Laurence Kinsella, and Dr. Linda Bluestein, in conjunction with patient advocate Jill Brook, are pivotal contributors to this initiative.\n3. The documentary aspires to elucidate the myriad challenges confronted by individuals navigating the complexities inherent in the triad of syndromes, emphasizing the imperative of heightened awareness among healthcare providers to facilitate more efficacious treatment modalities.\n4. Dr. Afrin underscores the prevalence of MCAS and advocates for its consideration in the differential diagnosis for patients with complex medical presentations.\n5. The term \"dystrophism\" is introduced within the discourse, signifying aberrations in growth and development propelled by dysfunctional mast cells.\n6. Participants candidly share their experiences during the documentary's filming process, underscoring the inherent difficulty of condensing intricate information into concise soundbites.\n7. The timely recognition of MCAS is underscored as a critical determinant for effective treatment interventions and an enhanced quality of life.\n8. The team is dedicated to elucidating the nuances of MCAS, POTS, and EDS through the medium of a documentary, with the aim of providing comprehensive knowledge about these medical conditions.\n9. Emphasis is placed on the significance of joint hypermobility. Should it give rise to complications, it may serve as a potential indicator for dysautonomia or MCAS.\n10. Dysautonomia serves as an encompassing term, inclusive of conditions such as POTS and Inappropriate Sinus Tachycardia. \n11. Identifying growing pains (quite literally!) associated with these conditions can be a challenging endeavor. The gradual development poses a considerable challenge for all involved.\n12. A fervent commitment is made towards establishing an educational repository, replete with in-depth explorations by experts, delving into the intricacies of these subjects.\n13. The team candidly discloses the necessity for financial support to conclude their documentary project. Their overarching objective is to disseminate awareness about MCAS, POTS, and EDS.\n14. The documentary, at its core, is designed to render this information easily accessible, ensuring that individuals – be they patients, families, or clinicians – can acquire a comprehensive understanding of coping with these conditions.\nChapters\n00:00 Introduction00:37 Creating Awareness and Increasing Treatment Options03:09 The Birth of the Documentary Project05:20 Filming in New York07:19 Filming in St. Louis10:32 The Motivation to Work with Complex Patients15:49 The Journey of Recognizing MCAS17:34 The Impact of MCAS Treatment21:00 Personal Experiences and Incorporating MCAS Treatment22:42 The Need for an Educational Library25:29 The Challenge of Condensing Information26:21 Describing MCAS in Sound Bites31:10 The Importance of Raising Awareness34:42 Growth and Development Abnormalities in MCAS40:03 Main Points about Hypermobility Syndromes and Dysautonomia44:48 Partnership with LDN Research Trust51:47 Final Words and Call for Support54:26 Recognition and Treatment of Unrecognized Patients55:44 Importance of Learning and Trying56:13 Gratitude for Dedicated Doctors56:47 Closing Remarks and Resources\nConnect with YOUR Bendy Specialist, Linda Bluestein, MD!",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5115259786.mp3?updated=1721670440",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Leonard Weinstock",
      "Dr. Lawrence Afrin",
      "Dr. Tania Dempsey",
      "Dr. Laurence Kinsella",
      "Jill Brook, MA"
    ],
    "guestImages": [
      "Guests/Lawrence_Afrin.jpg"
    ]
  },
  {
    "num": 84,
    "title": "84. Slipping Rib Surgery in EDS with Adam Hansen, MD",
    "date": "2024-01-04",
    "duration": "1h 27m",
    "description": "In this episode, join thoracic surgeon and chest wall reconstruction expert Adam Hansen, MD, to learn about slipping rib surgery in EDS.  Well known for his innovative surgeries for slipping rib syndrome (SRS), Dr Hansen has treated close to 1000 SRS patients.  Many of his patients are challenged with Ehlers-Danlos Syndrome and other skeletal hypermobility disorders.  \nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.",
    "tags": [
      "EDS",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9091974586.mp3?updated=1721670997",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Adam Hansen, MD"
    ],
    "guestImages": []
  },
  {
    "num": 83,
    "title": "83. Expert Insights: Breath Work in Pain Management with Jill Miller",
    "date": "2023-12-21",
    "duration": "1h 18m",
    "description": "In this episode, YOUR guest is Jill Miller, author of the book 'Body by Breath: The Science and Practice of Physical and Emotional Resilience.'  Jill has 30 years of corrective movement expertise that forges links between the worlds of yoga, massage, athletics, and pain management. Her signature self-care fitness programs, Yoga Tune Up® and The Roll Model® are found at gyms, yoga studios, hospitals, athletic training facilities and corporations worldwide. Jill is the former anatomy columnist for Yoga Journal, has been featured in New York Times, Wall Street Journal, Shape, Women’s Health, O, the Today Show, and is a contributing expert on the Oprah Winfrey Network. \nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.",
    "tags": [
      "Pain",
      "Exercise",
      "Treatment",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3331653965.mp3?updated=1721670648",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jill Miller"
    ],
    "guestImages": []
  },
  {
    "num": 82,
    "title": "82. The Impact of Clinician-Associated Trauma on EDS and HSD with Colin Halverson, PhD",
    "date": "2023-12-14",
    "duration": "54m",
    "description": "In this episode, YOUR guest is Colin Halverson, PhD.  He received his Ph.D. in linguistic and medical anthropology from the University of Chicago, where he studied communication issues in medical genetics, based on fieldwork at Mayo Clinic. At Chicago, he also completed a fellowship in clinical ethics, and then a postdoctoral fellowship in medical ethics at Vanderbilt. He is currently a professor at Indiana University School of Medicine, where his research focuses on ethical care for patients with rare disease, in particular Ehlers-Danlos Syndrome (EDS).\n\nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.",
    "tags": [
      "EDS",
      "Pain",
      "Mental Health",
      "Diagnosis",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7318556490.mp3?updated=1721670227",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Colin Halverson, PhD"
    ],
    "guestImages": []
  },
  {
    "num": 81,
    "title": "81. Foot Pain 101: Everything You Need to Know with EDS and HSD with Lisa Ralston, PT",
    "date": "2023-12-07",
    "duration": "1h 15m",
    "description": "In this episode, YOUR guest is Lisa Ralston, a physical therapist with over 30 years of experience in orthopedics, joint hypermobility, foot pain, and sports medicine. Since 2009, she has traveled internationally treating Team USA Olympians and World level figure skaters. Lisa was the physical therapist for Team USA figure skating for the 2022 Winter Olympics in Beijing.  Lisa is the owner and founder of Ralston Physical Therapy and Wellness in Arvada, CO. \n\nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.",
    "tags": [
      "EDS",
      "Exercise",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7017651498.mp3?updated=1721670394",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Lisa Ralston, PT"
    ],
    "guestImages": []
  },
  {
    "num": 80,
    "title": "80. A Multidimensional Approach to EDS and HSD Care with Dacre Knight, MD",
    "date": "2023-11-30",
    "duration": "1h 20m",
    "description": "In this episode, YOUR guest is Dacre Knight, MD.  Dr. Knight established a specialty clinic for treating patients with hypermobility syndromes including hypermobile Ehlers-Danlos Syndrome (hEDS) and hypermobility syndrome disorder (HSD) at Mayo Clinic Jacksonville, Florida in 2019.  \nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.\n \nExplored in this episode:\n·  What specialty evaluations are most important for patients with hypermobility syndromes\n·  What tests he feels are most helpful for patients with Ehlers-Danlos Syndromes (EDS) and HSD\n·  How they determine when to perform genetic testing and the findings in this group of patients\n·  How his approach has evolved since the clinic’s inception in 2019\n·  The research that he has conducted and relevant findings\n·  The role of autoimmunity in EDS and HSD\n·  Findings in patients with orthostatic intolerance vs Postural Orthostatic Tachycardia Syndrome (POTS)\n·  The role of the immune system in symptomatic joint hypermobility\n·  The relationship with fibromyalgia\n·  What percentage of patients are diagnosed with hEDS vs HSD\n·  What he says to people who assume that HSD is a less serious condition\n\nThis important conversation about Dr. Knight’s approach to the evaluation and treatment of hEDS and HSD will leave you feeling more knowledgeable, better prepared to advocate for the care you need, and with a better understanding of the evaluation process.  \n\nConnect with YOUR Bendy Specialist, Linda Bluestein, MD!",
    "tags": [
      "EDS",
      "POTS",
      "Pain",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7353730382.mp3?updated=1721670400",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dacre Knight, MD"
    ],
    "guestImages": [
      "Guests/Darce_Knight.jpg"
    ]
  },
  {
    "num": 79,
    "title": "79. Gastrointestinal Problems in Hypermobile EDS: Learning to Treat and Spot them with Leonard Weinstock, MD",
    "date": "2023-11-16",
    "duration": "59m",
    "description": "In this episode, YOUR guest is gastroenterologist Leonard Weinstock, MD, author of over 150 peer-reviewed journal articles.  His extensive research on MCAS (Mast Cell Activation Syndrome) and diseases of the esophagus, stomach, small intestine, and colon has been presented at national and international conferences. He is actively researching the connection of the gut and small intestinal bacterial overgrowth (SIBO) with several medical problems, including restless legs syndrome (RLS) and chronic pelvic pain syndromes. He presented several lectures in Oregon at the first SIBO symposium and in France at the international rosacea study group.\nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.\n \nExplored in this episode:\n·  What can cause abdominal pain in those with EDS (Ehlers-Danlos Syndromes), MCAS (Mast Cell Activation Syndrome) and/or dysautonomia (syndromes like POTS - Postural Orthostatic Tachycardia Syndrome) \n·  How gastrointestinal tract symptoms and extraintestinal problems like RLS (restless leg syndrome), rosacea, and interstitial cystitis are related\n·  What unique treatments are available for restless leg syndrome, rosacea, and interstitial cystitis\n·  How Dr. Weinstock’s medical practice evolved after becoming “MCAS aware, POTS aware and EDS aware” \n·  What correlations exist between Crohn's disease, irritable bowel disease and RLS\n·  Why it is so crucially important to listen to AND believe our patients\n·  How Mast Cell Activation Disease and MCAS differ from one another\n·  Why the term “syndrome” can be problematic\n·  What environmental factors can play a role in MCAS\n·  When to suspect a compression syndrome (like Median Arcuate Ligament Syndrome or MALS, Nutcracker Syndrome, or pelvic congestion syndrome), visceroptosis (drooping of the intestines) or gastroparesis\n·  What testing can be performed for MCAS and the significance of tryptase levels \n·  How YOU can help support our nonprofit documentary film and free online educational library, Still Standing.   \n\nThe goal of our documentary film and free online educational library is to promote wider awareness and physician education about three complex chronic conditions, MCAS, dysautonomia and hypermobility syndromes. Better recognition will help patients get treatment and hope for a better quality of life.\n\nThis important conversation about extraintestinal manifestations of gastrointestinal diseases will leave you feeling more knowledgeable, better prepared to advocate for the care you need, and with a better understanding of the interaction of the gastrointestinal system with other bodily systems.  \n\nConnect with YOUR Bendy Specialist, Linda Bluestein, MD!",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Diagnosis",
      "Treatment",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6876965691.mp3?updated=1721670578",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Leonard Weinstock, MD"
    ],
    "guestImages": []
  },
  {
    "num": 78,
    "title": "78. Uncovering Inequality in Healthcare with Brianna Cardenas, DMSC, PA-C",
    "date": "2023-11-09",
    "duration": "1h 6m",
    "description": "In this episode, YOUR guest is Brianna Cardenas, DMSC, PA-C, ATC and the founder of Healed and Empowered.  Brianna courageously shares her own personal journey with Ehlers-Danlos Syndrome (EDS), cervical instability, spinal CSF leak, and dysautonomia, shedding light on the mistreatments she endured - both as a patient and a healthcare professional. \n\nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.\n \nExplored in this episode:\n·  Inequality in healthcare and how we can best advocate for ourselves\n·  Why we should prioritize diversity, equity, and inclusion in medical spaces \n·  The need for personal responsibility when learning about sensitive topics \n·  Discrimination and power dynamics in the healthcare setting \n·  Handling microaggressions\n·  Addressing internalized ableism  \n·  The importance of outward visible signs of safety for marginalized groups such as LGBTQ plus and BIPOC\n\nThis important conversation about inequality in healthcare will leave you feeling more informed, better prepared to tackle that next step, and with a better understanding of the multitude of factors that can impact the healthcare you receive.  \n\nConnect with YOUR Bendy Specialist, Linda Bluestein, MD!",
    "tags": [
      "EDS",
      "POTS",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8983824911.mp3?updated=1721670545",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Brianna Cardenas, DMSC, PA-C"
    ],
    "guestImages": []
  },
  {
    "num": 77,
    "title": "77. Neurosurgical Insights from Paolo Bolognese, MD and Guest Cohost Pradeep Chopra, MD",
    "date": "2023-11-02",
    "duration": "2h 14m",
    "description": "In this episode, YOUR guest is neurosurgeon, Paolo Bolognese, MD, founder of the Chiari Neurosurgical Center in New York.  Dr. Bolognese is also on the Board of Directors of the American Syringomyelia & Chiari Alliance Project, Inc. (ASAP), on the Scientific Education and Advisory Board of the Chiari Syringomyelia Foundation (CSF), and is a member of the International Consortium on EDS, HSD, and Related Disorders. The Chiari EDS Center is focused on the diagnosis and treatment of Chiari I Malformation, Syringomyelia, Craniocervical Instability, Tethered Cord, Eagle Syndrome, Idiopathic Intracranial Hypertension, and Intracranial Hypotension.  Dr Bolognese’s surgical experience includes more than 1,600 Chiari Decompressions and 900 Craniocervical Fusions, 300 of which with condylar screws.  He is on the Board of the main national and international organizations focused on Chiari and Syringomyelia and has also made contributions in the field of Intraoperative Ultrasound and Laser Doppler Flowmetry.\nYOUR guest co-host is Pradeep Chopra, MD, Harvard-trained anesthesiologist double Board Certified in Pain Management and Anesthesiology, Director of the Center for Complex Conditions and Assistant Professor, Brown Medical School with a special interest in chronic complex pain conditions and their associated co-existing conditions. \nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD. Explored in this episode:·   How Dr Bolognese discovered the link between Ehlers-Danlos Syndromes (EDS) and Chiari I malformation ·   Why people with EDS are at increased risk of craniocervical instability·   What type of imaging he prefers for the evaluation of Chiari I malformation and/or cervical instability ·   Why he started performing surgery for Eagle’s Syndrome ·   Why he feels invasive cervical traction is an essential part of the neurosurgical evaluation for upper cervical spine problems·   Causes of elevated intracranial pressure\n This episode is really special as it is rare to get a neurosurgeon's point of view outside of a medical appointment.  It may be easier for you to have the transcript in front of you while you are watching this episode of the Bendy Bodies Podcast on our YouTube channel or listening to this episode on your favorite podcast player.  Dr. Bolognese uses his hands a lot for demonstration so you may find watching this episode on YouTube beneficial.\nThis important conversation about neurosurgical problems will leave you feeling hopeful, prepared to tackle that next step, with a better understanding of the multitude of factors that can impact symptoms.  \nConnect with YOUR Bendy Specialist, Linda Bluestein, MD!",
    "tags": [
      "EDS",
      "Pain",
      "Diagnosis",
      "Treatment",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9028642091.mp3?updated=1721669959",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Pradeep Chopra",
      "Paolo Bolognese, MD"
    ],
    "guestImages": []
  },
  {
    "num": 76,
    "title": "76.  Orofacial Pain with Robinson-Smith, DDS",
    "date": "2023-10-19",
    "duration": "42m",
    "description": "In this episode, YOUR guest is Julie Robinson-Smith, DDS, diplomate of the American Board of Oral Medicine, a diplomate of the American Board of Orofacial Pain and an instructor of Orofacial Pain at the University of Colorado Anschutz School of Dental Medicine.  Following dental school, she served in the US Air Force for five years as a general dentist. After her time in the Air Force, she completed a two-year residency in Orofacial Pain and Oral Medicine at the University of Southern California. Dr Smith is also Dr. Bluestein’s amazing TMD (jaw and facial pain) doctor!  \n\nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.\n \nExplored in this episode:\n·  Why the jaw is problematic so frequently in those with joint hypermobility\n·  How ligamentous laxity contributes to jaw dysfunction \n·  The influence of hormones and puberty on jaw pain and function \n·  Open locking - what is it and how can you reduce the risk?\n·  How you can make dental visits less traumatic\n\n \nThis important conversation about orofacial pain will leave you feeling hopeful, prepared to tackle that next step, with a better understanding of the multitude of factors that can impact pain in the teeth, jaw pain, and open and closed locking.  \n \nConnect with YOUR Bendy Specialist, Linda Bluestein, MD!",
    "tags": [
      "Mental Health",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8527530793.mp3?updated=1721670403",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Julie Robinson-Smith, DDS"
    ],
    "guestImages": []
  },
  {
    "num": 75,
    "title": "75. Cervical Instability: Thinking Beyond the Neck with Patty Stott, DPT",
    "date": "2023-10-12",
    "duration": "1h 2m",
    "description": "In this episode, YOUR guest is Patricia Stott, DPT, physical therapist with expertise in Ehlers-Danlos Syndromes and related conditions.  Dr Stott and Dr Bluestein presented together on integrative approaches to pain management at the EDS Society Global Learning Conference in August 2023 in Dublin, Ireland.  Dr Stott is the founder of Elevation Wellness, and is also trained in visceral manipulation, neural manipulation, fascial Counterstrain, Craniosacral Therapy, and is certified in Reiki.  She frequently addresses instability and neck pain in her patients and is currently enrolled in a PhD program for integrative medicine.  \n\nYOUR host, as always, is Dr. Linda Bluestein, the Hypermobility MD.\n \nExplored in this episode:\n·  Whether or not hypermobility spectrum disorder (HSD) and Ehlers-Danlos Syndrome (EDS) have different clinical presentations\n·  Severity of presentation versus the severity of instability\n·  How inflammation impacts cervical instability\n·  How dysfunction in other bodily systems can impact cervical instability \n·  Treatment options beyond “usual” physical therapy and surgery \n \nThis important conversation about causes of cervical instability beyond the neck will leave you feeling hopeful, prepared to tackle that next step, with a better understanding of the multitude of factors that can impact instability of the neck.  \n \nConnect with YOUR Bendy Specialist, Linda Bluestein, MD!",
    "tags": [
      "EDS",
      "Pain",
      "Exercise",
      "Treatment",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5305716866.mp3?updated=1721670345",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Patty Stott, DPT"
    ],
    "guestImages": []
  },
  {
    "num": 74,
    "title": "74. Podcast Secrets and Sneak Peeks with Guest Host Kate Colbert",
    "date": "2023-10-05",
    "duration": "1h 18m",
    "description": "In this episode, where we close out Season 3 of the podcast and kick off Season 4, YOUR guest (and host!) is Bendy Bodies founder, Dr. Linda Bluestein, the Hypermobility MD.\n \nYOUR guest co-host – serving up questions to Dr. Bluestein – is Kate Colbert, outspoken EDS advocate, world-renowned marketer, and award-winning healthcare and higher-education writer. \n \nExplored in this episode:\n\nHow the Bendy Bodies Podcast has evolved since its founding in 2020 from a resource for hypermobile dancers to a resource for EVERYONE with hypermobility (and their medical providers too!). \n\nWhat it’s like for Dr. Bluestein to be a physician who treats hypermobile patients AND a podcaster and social media icon in the hypermobility community. Learn the truth about the challenge of educating hundreds of thousands of people vs. working one-on-one with someone in the clinic setting. \n\nThe perfect Bendy Bodies episodes for “newbies” – where to start listening and why – if you’re new to a hypermobility disorder diagnosis or suspicion.\n\nRun-away BEST episodes in terms of listenership and the “buzz.”\n\nDr. Bluestein’s favorite part of working with other professionals who care so much about hypermobile patients.\n\nWhat excitement YOU can look forward to in Season 4 of the Bendy Bodies Podcast!\n\nChapters\n\n00:00 Introduction and Background\n03:01 Career Trajectory and Transition\n08:37 Specializing in Symptomatic Joint Hypermobility\n10:24 Challenges in Healthcare System\n20:33 Starting the Bendy Bodies Podcast\n30:59 Recommended Episodes for New Listeners\n35:33 Balancing Expectations and Realities\n39:35 The Importance of Patient-Provider Collaboration\n40:18 Teaching Healthcare Providers about Hypermobile Conditions\n41:37 The Role of Patients in Educating Doctors\n42:53 Continual Learning and Growth in Medical Practice\n45:08 Practical Tips for Living with Hypermobility\n48:28 Hypermobility Hacks and Their Importance\n55:41 Working with Professionals in Hypermobility Medicine\n01:00:39 The Evolution of the Bendy Bodies Podcast\n01:06:23 The Impact of the Bendy Bodies Podcast\n03:00 Benefits of Yoga for Flexibility and Strength\n09:30 Yoga for Stress Relief and Mental Health\n15:45 Yoga for Injury Prevention and Rehabilitation\n22:10 Yoga for Overall Well-being\n28:20 Different Types of Yoga and Finding the Right Practice\n34:50 Yoga for Different Age Groups\n40:15 Yoga for Pregnancy and Postpartum\n46:40 Yoga for Seniors\n52:55 Yoga for Children and Teens\n59:20 Yoga for Athletes\n01:05:10 Yoga for Chronic Pain Management\n01:11:25 Yoga for Specific Health Conditions\n01:16:17 Conclusion\n \nThis important conversation about the beginnings (and the future) of the Bendy Bodies Podcast featuring the Hypermobility MD will leave you feeling inspired, prepared to get more from this community, and with a better understanding of how to use this platform to improve your health. \n \nConnect with YOUR Bendy Specialist, Linda Bluestein, MD!",
    "tags": [
      "EDS",
      "Pain",
      "Mental Health",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2683641094.mp3?updated=1721670750",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Kate Colbert"
    ],
    "guestImages": []
  },
  {
    "num": 73,
    "title": "73. Understanding Lower Extremity Pain with Pradeep Chopra, MD",
    "date": "2023-08-31",
    "duration": "55m",
    "description": "The lower extremities must bear the weight of our whole bodies. Problems in the hip may cause a chain reaction of aches, imbalances, or chronic issues that could manifest in the knee, ankle, or somewhere else along the kinetic chain.\n\nContinuing our series on pain with Dr. Pradeep Chopra, we explore the hips, knees, ankles and feet, diving into multiple possible causes of issues in these joints.\n\nDr. Chopra discusses why rolling of the ankles is unhealthy, even if it’s asymptomatic, explains how pain in one part of the leg may be due to an issue in a different joint, and explores why and how you might correct knee hyperextension.\n\nDr. Chopra dives into the hip joint structure, outlining possible reasons for hip subluxation. He shares different ways to treat SI joint pain, and offers practical suggestions for dealing with multiple lower extremity pain issues.\n\nFilled with detailed information, accessible medical explanations, and Dr. Chopra’s popular “hack” tips, this episode belongs on your must-listen list!\n\nLearn more about Dr. Chopra here.\n\nCheck out the products discussed during this episode:\nhttps://pedagusa.com/\nhttps://medspec.com/product-category/knee/patellofemoral/\nhttps://www.bauerfeind.com/\nhttps://www.drmartens.com/us/en/\nhttps://www.converse.com/\n\n#Podcast #HypermobilityHacks #HypermobilitySyndrome #HypermobilitySpectrumDisorder #EhlersDanlos #Hypermobility #Hyperextension #HipPain #Subluxation #PainManagementStrategies #JointPainRelief #LowerBodyPain #MobilityIssues #HipProblems #JointHealth #ChronicPainSupport #LowerBackPain #KneePain #BendyBuddy",
    "tags": [
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2683061733.mp3?updated=1721670531",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Pradeep Chopra, MD"
    ],
    "guestImages": []
  },
  {
    "num": 72,
    "title": "72. Examining Upper Extremity Pain with Pradeep Chopra, MD",
    "date": "2023-08-17",
    "duration": "1h 21m",
    "description": "Joints of the upper extremity (eg: shoulders, elbows, fingers, etc) can be prone to subluxation and dislocation in those with joint hypermobility and/or joint instability. As we continue our discussions on common causes of pain throughout the body with Pradeep Chopra, MD, we focus on an often-overloaded area of the body: the upper extremities.\n\nDr. Chopra breaks down the shoulder joint and its inherent instability. He gives advice on how to have hard conversations about sports that push an excessive range of motion in the upper extremities, and addresses noisy joints (eg: cavitation) in the hypermobile person.\n\nDr. Chopra shares his experience with muscle relaxants, and why releasing tight muscles is not always helpful with joint pain. He also explains thoracic outlet syndrome and how it can mimic cervical disc issues, making it difficult to find effective treatments.  We cover complex regional pain syndrome (CRPS) and how this extremely painful condition may influence treatment choices. \n\nPain and hypermobility in the wrists and hands are covered, and Dr. Chopra shares how your writing style might be influenced by joint hypermobility. He offers hacks to increase proprioception in fine motor skills, and explains the downside to wearing a full hand brace.\n\nWith an incredible body of knowledge to share, Dr. Chopra continues to help us examine complicated issues in a methodical way.\n\nFor doctors, therapists, patients, and anyone associated with connective tissue disorders, this is another episode to add to your must-listen list.\n\nLearn more about Dr. Chopra here.\n\nCheck out the products discussed during this episode:\nhttps://www.oxo.com/\nhttps://www.ancient-minerals.com/\nhttps://www.zebrasplints.com/\nhttps://www.etsy.com/",
    "tags": [
      "Treatment",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8212064563.mp3?updated=1721670840",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Pradeep Chopra, MD"
    ],
    "guestImages": []
  },
  {
    "num": 71,
    "title": "71. Examining Head, Spine, and Chest Pain with Pradeep Chopra, MD",
    "date": "2023-07-20",
    "duration": "1h 32m",
    "description": "Connective tissue runs throughout your body, surrounding and connecting every system. This is what makes treating issues that arise from connective tissue disorders so difficult: when everything is connected, it’s hard to find the root cause of something.\nWe’re in the midst of our summer series with Dr. Pradeep Chopra, renowned expert on connective tissue disorders such as Ehlers-Danlos Syndromes. In this discussion, Dr. Chopra talks through several common causes of head, neck, and chest pain in people with connective tissue disorders or symptomatic joint hypermobility.\nDr. Chopra discusses his approach to exploring a patient’s signs and symptoms, and dives into common causes of headaches in this population and how to seek treatment. He shares headache hacks for different types of head pain and explains Chiari malformation and various problems that may arise from it.\nDr. Chopra also offers hacks for TMD head pain, and touches briefly on craniocervical instability. He shares why he looks for cranial settling, looks at rib subluxations, and offers hacks for them as well. Finally, Dr. Chopra discusses chronic pain and the loneliness it may cause, emphasizing the benefits that may come from having an understanding support group.\nAnother episode full of wisdom and encouragement from one of the world’s top experts in his field, you will find yourself listening, saving and sharing it with everyone!\n.\n.\n.\n.\n.\n#RootCauseAnalysis #PatientCare #HeadAndSpineHealth #ChiariAwareness #UprightMRIAdvantage #SpinalConditions #ChiariWarrior #MRIInnovation #NeurologicalDisorders #SpineHealthMatters #ChiariJourney #AdvancedImaging #HSD  #JointHyermobility  #ChronicIllness  #ChronicPain  #EhlersDanlos --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Pain",
      "Treatment",
      "Neurology",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6129435500.mp3?updated=1721670755",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Pradeep Chopra, MD"
    ],
    "guestImages": []
  },
  {
    "num": 70,
    "title": "70. Examining Abdominal Pain with Pradeep Chopra, MD",
    "date": "2023-06-29",
    "duration": "1h 21m",
    "description": "Abdominal pain is an extremely common finding in people with connective tissue disorders, like Ehlers-Danlos Syndromes (EDS).  Similar to other issues patients face with EDS or Hypermobility Spectrum Disorders (HSD), getting answers can be challenging. Often, people go from specialist to specialist, trying to get help. Gastroenterologists, allergists, nutritionists, and pain specialists may look at abdominal pain from very different points of view. So getting complete information can be elusive and frustrating. \nThat’s why Bendy Bodies took this opportunity to talk about abdominal pain with Dr. Pradeep Chopra, a pain management physician who works with complex chronic pain conditions.  Dr. Chopra lists many possible causes of abdominal pain, and talks through different diagnoses and how they might be interrelated.\nDr. Chopra looks at over two dozen different diagnoses, from gastroparesis to small intestinal bacterial overgrowth (SIBO) to postural orthostatic tachycardia syndrome (POTS) to endometriosis. He shares his approach to uncovering abdominal pain sources, as well as the question he asks himself with every patient.\nFinally, Dr. Chopra offers some concrete tips for people suffering with abdominal pain. He suggests solutions for people who have trouble absorbing medication, and reveals his hacks for people working to sort out the source of their abdominal pain.\nFor doctors looking to deepen their understanding of abdominal pain, as well as people trying to figure their own issues out, this deep dive of a podcast is not to be missed.\nLearn more about Dr. Chopra here.  --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "POTS",
      "Pain",
      "Nutrition",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4125010859.mp3?updated=1721670421",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Pradeep Chopra, MD"
    ],
    "guestImages": []
  },
  {
    "num": 69,
    "title": "69. Traveling with a Chronic Disorder with Dr. Linda Bluestein, Kristin Koskinen RDN, and Jennifer Milner NCPT",
    "date": "2023-06-08",
    "duration": "53m",
    "description": "Travel comes with a lot of uncertainty: flights get canceled, hotel reservations are lost, luggage never turns up. But add the complications of traveling with a chronic disorder like Ehlers-Danlos Syndrome, and voyaging becomes even more complicated.\nHow can you plan for contingencies, guard yourself against flares, and still have a fantastic time while traveling? The Bendy Bodies team shares their favorite tips on traveling during this round table discussion. \nWe share suggestions for actions to take leading up to the trip, reveal items we cannot live without on a trip, and look at ways to combat the effects of travel on a bendy body. \nDr. Bluestein gives advice on preparing for traveling without your “pit crew”. Jennifer Milner addresses how to stay active on the trip without overdoing it, and Kristin Koskinen shares her top three tips for finding food to support your nutritional needs while away from your favorite grocery stores.\nThe team offers their best all-around travel tips and advice for planning - as well as knowing that if things go awry, it will be ok!\nFor anyone planning to travel soon, this episode is so packed with tips that you’ll find yourself taking notes while you listen!\nLearn more about Jennifer Milner, NCPT, Kristin Koskinen, RDN, and Linda Bluestein, MD.  \nPS:  Do not transport controlled substances across state (or country) lines outside of their original container, as that is illegal.  If you need a smaller container, ask your pharmacist.  --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Nutrition",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4317146597.mp3?updated=1721670265",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Kristin Koskinen, RDN",
      "Jennifer Milner, NCPT"
    ],
    "guestImages": []
  },
  {
    "num": 68,
    "title": "68. Fostering Hope for Hypermobility with Cortney Gensemer, PhD, Victoria Daylor, and Linda Bluestein, MD",
    "date": "2023-05-25",
    "duration": "47m",
    "description": "Symptomatic joint hypermobility can be difficult to understand and can present in so many different ways. Recently, Victoria Daylor, Dr. Cortney Gensemer, Dr. Russell Norris, and Dr. Linda Bluestein published a CME two-part series titled “Hope for Hypermobility - An Integrative Approach to Treating Symptomatic Joint Hypermobility”. We were able to sit down with Dr. Gensemer, Ms. Daylor, and Dr. Bluestein to discuss their research and the results.\nThey share how the collaboration came about and the developmental process they went through. The co-authors reveal their intentions behind the articles, and three things they want people to know about symptomatic joint hypermobility (SJH).\nThe panel of guests discuss what they see for the future of joint hypermobility and related conditions, and stress the importance of properly done research. Written to be accessible both for people with SJH and medical professionals, these articles may well be a defining reference for many people in the future!\nWith limited-time free access to Part 1 and Part 2 of this peer reviewed series, you will want to dive into these papers and share with others as soon as possible!\n.\n.\n.\n.\n.\n#Hypermobility #ChronicPain #ConnectiveTissueDisorder #JointSupport #MedicalResearch #JointPain #SymptomManagement #Healthcare #PatientEducation #DoctorPatientRelationship #HopeForHypermobility #KnowledgeIsPower #Education #Scientist #WomenInStem #DisabledInStem --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "Treatment",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6775190113.mp3?updated=1721670222",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Cortney Gensemer, PhD",
      "Victoria Daylor"
    ],
    "guestImages": []
  },
  {
    "num": 67,
    "title": "67. Destigmatizing Eating Disorders with Dr. Jennifer Gaudiani",
    "date": "2023-05-11",
    "duration": "51m",
    "description": "Eating disorders are complicated and not uncommon in artistic athletes. Common comorbidities of symptomatic joint hypermobility (SJH), like mast cell activation disorder (MCAD) or gastroparesis, may contribute to disordered eating, which can spiral into an eating disorder. For years, eating disorders have been stigmatized and dismissed by many in the health community.\nTo discuss this difficult topic, Bendy Bodies sat down with Dr. Jennifer Gaudiani, MD, CEDS-S, FAED, and founder of the Gaudiani Clinic for Eating Disorders.\nDr. Gaudiani shares how she became so passionate about caring for this complex population and the importance of understanding her patient’s stories. She talks about why there’s such a stigma around eating disorders and how she’s working to change that.\nWe discuss why this topic is so important for those with SJH and cover possible eating disorder mimickers. We break down definitions and explore possible predictors of eating disorders.\nDr. Gaudiani shares the aspects of treatment that she has found vital, and offers tips on how to speak to someone you suspect may have an eating disorder. Finally, she reveals ways to find experts for getting the help needed for an eating disorder.  Learn more about the Gaudiani Clinic here.  \nFor physicians, dance teachers, coaches, and anyone struggling with an eating disorder, this episode is a valuable look at a difficult topic.  \n.\n.\n.\n.\n.\n#MentalHealth #BodyPositive #Nutritionist #DoctorsOfIG #IntuitiveEating #EDWarriors #Recovery #SportsNutrition #ChronicIllness #EatingDisorders #PlantBasedNutrition #MentalHealthMatters #NutritionMatters #InvisibleIllness #AntiDiet #AntiDietCulture --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "MCAS",
      "Nutrition",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1553698251.mp3?updated=1721670390",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Jennifer Gaudiani"
    ],
    "guestImages": []
  },
  {
    "num": 66,
    "title": "66. Codifying Upper Cervical Instability with Leslie Russek, DPT, PhD",
    "date": "2023-04-20",
    "duration": "53m",
    "description": "Upper cervical instability (UCI) occurs quite commonly in the mild form and more rarely in the severe form in those with symptomatic generalized joint hypermobility (S-GJH).  Both can be impactful and are frequently missed.  An international team of physical / physiotherapy clinicians and a S-GJH expert rheumatologist recently published expert consensus recommendations for screening, assessing and managing patients with UCI associated with S-GJH.  Bendy Bodies sat down with first author, Leslie Russek, DPT, PhD, to discuss this important paper.  \nHypermobility (too much range of motion) is different from instability (difficulty controlling motion at the joints).  UCI, upper cervical instability, means that the muscles and nerves lack the ability to appropriately control movement at the joint and sense where the joint is in space.  When UCI is severe it can be debilitating.  Except in the most extreme forms of UCI, conservative (ie: non-surgical) therapies are usually considered first.  Improving joint stability is the goal and Dr. Russek explains what patient factors are important to consider in determining treatment strategy.  \nDr. Russek explains the difference between “highly suggestive” and “common” symptoms as well as musculoskeletal UCI vs neurological UCI.  She describes the three levels of irritability and how those should be approached in clinical practice.  Yellow and red flags in the history and the physical examination are addressed.\nWhether you are someone who suspects upper cervical instability or treats them, this is an episode you will not want to miss.  \nLearn more here. \nHashtags: #CervicalSpineInstability #EhlersDanlosSyndrome #ChronicIllness #SpineInstability #ZebraSurvivor #ChronicPain #CervicalSpinalFusion #InvisibleIllness #Hypermobility #SpineHealth #hEDS #EDSawareness #ChronicPainWarrior #SpineFusion #ButYouDontLookSick #Instability #HSD --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Exercise",
      "Treatment",
      "Neurology",
      "Surgery",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6379051506.mp3?updated=1721670263",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Leslie Russek, DPT, PhD"
    ],
    "guestImages": []
  },
  {
    "num": 65,
    "title": "65. Finding Balance with Jenelle Manzi",
    "date": "2023-04-06",
    "duration": "49m",
    "description": "Thriving as a professional artist with Ehlers-Danlos Syndrome can be challenging.  Finding a balance between pushing yourself physically and listening to your body when it needs rest is difficult when you are part of a company.  How do you push yourself to the edge of your limits, but not over them?  We asked Jenelle Manzi, a professional dancer with New York City Ballet, this very question.  enelle shares her stories of growing up dancing with EDS. She describes her journey as a young professional, figuring out how to work with a chronic illness, and talks through her early injuries and what she learned from them. Jenelle opens up about hitting a wall with her EDS, and how she took time to get her health under control and figure out what works for her. She shares how her health journey inspired her to start her company Get Golden, and goes deep into her methods for staying at an elite performance level while maintaining long-term health. \nLearn more about Jenelle here.  . . . . . \n#EDSawareness #BalletWithEDS #ChronicIllnessWarrior #EhlersDanlosSyndrome #DancerWithEDS #SpoonieBallet #DisabilityInclusion #HealthJourney #InvisibleDisability #BalletDancer #DisabilityAdvocate #BalletInspiration #ChronicPainLife #HealthStory #EDSsupport  #hEDS --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6031045741.mp3?updated=1721670234",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jenelle Manzi"
    ],
    "guestImages": []
  },
  {
    "num": 64,
    "title": "64. Demystifying Chiropractic Care with Dr. Carrie Skony",
    "date": "2023-03-23",
    "duration": "1h 0m",
    "description": "Chiropractic care has been around for over 100 years, but many people don’t quite know what it entails. Artistic athletes may be told to add regular chiropractic visits to their regimen to help relieve pain without really understanding why. \nHow does a method best known for joint manipulation work for those with hypermobile bodies? Is it a valid treatment option? And what exactly is it, anyway?\nDr. Carrie Skony is a certified chiropractic sports physician and owner of Perform Active Wellness Dance Medicine. Specializing in dancers, Dr. Skony sees many hypermobile bodies and sat to talk with us about how people with hypermobility may (or may not) benefit from seeing a chiropractor.\nDr. Skony defines chiropractic care for us, outlining the broad spectrum of options that fall under its umbrella. She covers what sort of issues may cause people to seek out chiropractic care, different kinds of chiropractic care people may encounter, as well as common misconceptions about chiropractors.\nDr. Skony cautions against indiscriminate joint manipulation, and describes how she changes her treatment approach when working with someone with symptomatic hypermobility. \nShe talks through her method of working with dancers through a variety of modalities, including hands-on treatments, strengthening exercises, and more.\nCommon comorbidities in hypermobile patients and how that may change Dr. Skony’s treatment approaches are explained, and she offers tips on how to find a good chiropractor in your own area. Finally, she shares her desire to educate dance instructors on working with hypermobility for future generations of dancers.\nIf you’ve been skeptical of chiropractic care, unsure of what it is, or a huge fan of it, this episode goes deep on the topic in an easy-to-understand way.\nLearn more about Dr. Skony here..\n.\n.\n.\n#Chiro #ChiropracticCare #Adjustment #JointManipulation #Hypermobility #Hypermobile #hEDS #EDS #Modalities #LowBackPain #Chiropractors #Subluxation #Dislocation #JointInstability #ChiropracticAdjustment #Headaches #Doctor #ChronicIllness --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Exercise",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1865805768.mp3?updated=1721670635",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Carrie Skony"
    ],
    "guestImages": []
  },
  {
    "num": 63,
    "title": "63. Shining Your Light with Gigi Robinson",
    "date": "2023-03-09",
    "duration": "52m",
    "description": "Living with a chronic illness like Ehlers-Danlos Syndrome (EDS) can be demoralizing. You may not have access to the care you need, loved ones do not get it, and loneliness can be a reality for so many people.\nGigi Robinson was diagnosed with EDS at 11 years old, and one of the lucky ones to receive support and care from a very early age. Even so, heading off to college and needing to advocate for herself was a difficult transition. As she moved into adulthood, her natural passion for learning turned into a desire to help others who experience some of the same issues. She quickly became an outspoken advocate for Gen Z in particular, but for anyone struggling with chronic illness, body image issues, and more.  She used her platform as a Sports Illustrated swimsuit model to shine light on EDS and body dysmorphia. Now a successful podcast host and powerful social influencer, Gigi speaks around the globe on these topics, educating and encouraging people.\nBendy Bodies recently caught up with Gigi and chatted about her life as an advocate with a chronic illness.\nGigi shares her early experiences with EDS, her diagnosis, and how she learned to advocate for herself in a school setting. Gigi opens up about being a swimsuit model while advocating for body positivity, and describes her passion for speaking up for Gen Z.\nGigi dives into her mental health advocacy, reveals her tips for pacing herself in her daily life, and offers advice to caregivers of people with chronic illnesses, as well as encouragement to those struggling with a chronic illness.\nAn inspiring and uplifting story of positivity and encouragement, Gigi’s conversation is sure to inspire others to look within themselves for strength and ways to shine their own lights for others.\n.\n.\n.\n.\n.\n#ChronicIllness #Advocate #hEDS #EhlersDanlos #MentalHealth #BodyImage #DisabledModel #BodyDysmorphia #Hypermobility #RepresentationMatters #BodyPositivity #GenZ #InclusiveFashion #AbilityNotDisability --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Mental Health",
      "Exercise",
      "Diagnosis",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1088959064.mp3?updated=1721670357",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Gigi Robinson"
    ],
    "guestImages": []
  },
  {
    "num": 62,
    "title": "62. Deconstructing Head Pain with Rudrani Banik, MD",
    "date": "2023-02-23",
    "duration": "54m",
    "description": "Headaches and migraines are common in many chronic illnesses, and people with hypermobility often struggle with chronic head pain for a variety of reasons. But what is the difference between migraine and other types of headache? How do you get properly evaluated?  What are the best treatments?\nBendy Bodies spoke with neuro-ophthalmologist Rudrani Banik, MD in an effort to understand this complex topic. A fellowship-trained neuro-ophthalmologist certified in functional medicine, Dr. Banik specializes in headaches and migraines and has worked with many patients with Ehlers-Danlos syndromes and other connective tissue disorders.\nDr. Banik describes how she integrates her vast training to evaluate and treat her patients. She explains the difference between headache and migraine, and shares the criteria for a migraine diagnosis.\nDr. Banik talks through common causes of tension headaches as well as triggers for migraines, and suggests steps that are often helpful for migraines. She offers tips on how to get proper care, talking through her pharmacologic and nutritional supplement approaches.  She reveals common lifestyle choices that may greatly impact headaches and migraines covering conditions like idiopathic intracranial hypertension, CSF leak, Chiari malformation as well as vestibular, ocular, and abdominal migraine.\nFor doctors, physical therapists, and anyone suffering from chronic head pain, this episode contains lots of concrete tips and suggestions for finding a path to relief.\n.\n.\n.\n.\n.\n#Headaches #Migraine #hEDS #ConnectiveTissueDisorder #JointHypermobility #ChronicIllness #MigraineRelief #ChronicPainAwareness #HeadacheRelief #MigraineNutrition #Neuro #Diagnosis --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Nutrition",
      "Diagnosis",
      "Treatment",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3029728044.mp3?updated=1721670558",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Rudrani Banik, MD"
    ],
    "guestImages": []
  },
  {
    "num": 61,
    "title": "61. Getting Back Up Again with Keeya Steel",
    "date": "2023-02-09",
    "duration": "45m",
    "description": "Life with multiple chronic illnesses is physically and mentally challenging. Feelings of exhaustion and emotional fatigue crowd in with physical symptoms and can be overwhelming in your daily life.\nHow do you find balance? How do you find a way forward and regain joy in your life?\nWe posed these questions to Keeya Steel, founder of the popular Hells Bells and Mast Cells on social media. As someone who lives with POTS (postural orthostatic tachycardia syndrome), MCAS (mast cell activation syndrome), and hEDS (hypermobile Ehlers-Danlos Syndrome), she is all too experienced at trying to find that balance.\nKeeya shares her journey through a childhood peppered with “you’re making this up” accusations, as well as her diagnoses as an adult that brought relief and despair in equal measures.\nKeeya speaks openly about how humor helped her find her way forward through some dark days, and her decision to share that humor with the world. She shares her emotional journey to accepting her chronic illnesses and disabilities.\nKeeya also explains the online course she created with Dr. Linda Bluestein on optimizing medical appointments with complex illness, and why she wanted to share that course with others. Keeya reveals tips on getting the most out of doctor’s appointments and discusses her experiences with finding new medical professionals.\n“In the end,” Keeya says, “I want people to be more open to hope and future joy.”\nAn inspiring episode for us all so don’t miss it!\nMore information about Keeya can be found on her website.  \n.\n.\n.\n.\n.\n#Hope #Resilience #Disabled #ChronicIllness #DespiteTheOdds #PotsSyndrome #MastCells #EhlersDanlos #hEDS #Advocacy #ChronicIllnessCommunity #MedicalProfessionals #MedicalGaslighting #ChronicIllnessSupport #Accessibility --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Diagnosis",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3525270435.mp3?updated=1721670398",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Keeya Steel"
    ],
    "guestImages": []
  },
  {
    "num": 60,
    "title": "60. Strengthening Precision with Monica Lorenzo, MS, ATC",
    "date": "2023-01-26",
    "duration": "54m",
    "description": "Dance injuries can be career ending especially for those with joint hypermobility. Competition dance or precision performance can introduce a whole new set of challenges, whether it’s dancing as part of a team, competitive cheer, or synchronized swimming. Controlling hypermobility and matching lines requires strength, specific coaching, and proprioceptive awareness that’s not always second nature to the performer.\nWe spoke with Monica Lorenzo, the first NBA entertainment athletic trainer who pioneered sports medicine for these performing artists. Monica has worked with many dance teams including the Rockettes, the Knicks City Dancers and the Golden State Warriors Dance Team.\nMonica shares her own journey from dancer to athletic trainer and describes the differences between precision dance and other forms of dance. She explains why precision dance may be challenging for the hypermobile dancer, and shares her strategies for staying healthy over a long performance season.\nMonica reveals how she prepares dancers for working on less-than-ideal surfaces, and offers advice on how dancers might prepare for a career in precision dance. Finally, she shares her secret of how she builds individual programs within a group training setting.\nFull of helpful advice for artists, athletic trainers, coaches, and more, you won’t want to miss this episode.\nMore information about Monica can be found at https://romofit.com/.\nCheck out these episodes about fatigue we mentioned during this conversation:\nhttps://www.hypermobilitymd.com/bendybodiespodcast/episode/1c065966/46-fueling-against-fatigue-with-kristin-koskinen-rdn\nhttps://www.hypermobilitymd.com/bendybodiespodcast/episode/33cfae69/45-understanding-fatigue-with-alan-pocinki-md\nOR\nListen to the episodes about fatigue we discussed:\nhttps://www.hypermobilitymd.com/bendybodiespodcast/episode/1c065966/46-fueling-against-fatigue-with-kristin-koskinen-rdn\nhttps://www.hypermobilitymd.com/bendybodiespodcast/episode/33cfae69/45-understanding-fatigue-with-alan-pocinki-md\n.\n.\n.\n.\n#Rockettes #KnicksCityDancers #Knicks #GSWarriors #nba #dancers #DanceTeam #AthleticTrainer #SportsMedicine #Performance\n#BendyBuddy #DancerLife #DanceDance #JenniferMilner #HypermobilityMD #Bendy --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "Exercise",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4087767678.mp3?updated=1721670291",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Monica Lorenzo, MS, ATC"
    ],
    "guestImages": []
  },
  {
    "num": 59,
    "title": "59. Preparing for Competitions: A Round Table with Kristin Koskinen RDN, Linda Bluestein MD, and Jennifer Milner NCPT",
    "date": "2023-01-12",
    "duration": "1h 7m",
    "description": "For most artistic athletes, competition is a part of life. Whether you’re a dancer, skater, gymnast, or cheerleader chances are you’re competing at some point.\nCompetitions can be grueling, multi-day events consisting of 14-hour days, multiple performances, and little access to fresh whole foods. So how do you prepare for a competition, and what can you do during the event to make sure you are at the top of your game and come out of it injury-free?\nWe decided to approach this topic from a multi-disciplinary angle, so Jennifer, Dr. Bluestein, and resident Bendy Bodies nutrition expert, Kristin Koskinen, all sat down for a round table discussion on this important topic.\nWe talk through a timeline of preparation before the big event, and ways to make sure you’re heading into your competition as healthy and prepared as possible. Nutrition, training, sleep, and more are discussed as we sketch out the ways to make the most of your preparation time.\nKristin offers practical advice on ways to fuel healthily during the competition, often without access to refrigerators or even a true meal break.\nDr. Bluestein shares ways to be prepared for any issues that might come up physically, and Jennifer reveals her top competition-day tips.\nFinally, we look at the importance of recovering after a competition. How we replenish our body’s nutrients, ways to approach constructive rest and gradual return to training, and more are shared as we offer ways to be the healthiest competitive artist you can be.\nShare this with parents of young artistic athletes, bookmark for yourself as a competitor, and pass it on to studio owners, coaches, physical therapists, and more!\n.\n.\n.\n.\n.\n#CompetitionDay #PreparingForCompetitions #Nutrition #NutritionalTips #HealthyFoodAdvice #Nutrients #NutritionEducation #Sleep #SleepTips #SleepHealth #TrainingAdvice #TrainingDay --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "Nutrition",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4454442190.mp3?updated=1721670594",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Kristin Koskinen, RDN",
      "Jennifer Milner, NCPT"
    ],
    "guestImages": []
  },
  {
    "num": 58,
    "title": "58. Preparing for Surgery with Linda Bluestein, MD",
    "date": "2022-12-15",
    "duration": "1h 1m",
    "description": "Hypermobility disorders can lead to health complications that may require surgery. Joint hypermobility and associated conditions can present  complications for  surgery, anesthesia, and more. If you’re anticipating  surgery, how can you, your surgeon and anesthesia care team be as prepared as possible for those hypermobile “quirks”?\nBendy Bodies founder Dr. Linda Bluestein spent years in the operating room as a top anesthesiologist. We asked her for advice on this often-overlooked aspect of dealing with symptomatic joint hypermobility.\nDr. Bluestein discusses the possible medication reactions that often accompany connective tissue disorders and associated conditions. She talks about ways to prepare for the pre-operative assessment, and outlines what medical conditions should be shared in advance with the anesthesia team.\nDr. Bluestein explains the different types of anesthesia and why that information is important, and shares her observations about people with joint hypermobility and their potential complications.\nFinally, Dr. Bluestein offers suggestions for how to share your concerns with the surgery team, from limb positioning to avoid  dislocations, cervical spine and jaw problems that may influence airway management and so much more.\nWhether you’re part of a surgical team or preparing to undergo your own surgery, you’ll find helpful advice here to prepare you for next steps.\n.\n.\n.\n.\n.\n#Anesthesia #AnesthesiaLife Anesthesiologist #LocalAnesthetic #LocalAnesthesia  #hypermobilitytreatment #mobility #ehlersdanlos #spinalstabilization #butyoudontlooksick #hypermobilitypain #spooniesupport #hypermobilityrehabilitation #hypermobilityspectrum #bendy #invisibledisability #JenniferMilner  #hypermobilitysyndrome #hypermobilityhacks #HypermobilityMD #chronicconditions\n\nFor an even deeper dive, read this peer-reviewed journal article co authored by Dr. Bluestein and Dr. Pradeep Chopra:\nPerioperative Care in Patients with Ehlers Danlos Syndromes\nhttps://www.scirp.org/journal/Paperabs.aspx?PaperID=97524 --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "Exercise",
      "Treatment",
      "Surgery",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9044971246.mp3?updated=1721670272",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": []
  },
  {
    "num": 57,
    "title": "57. Alleviating Anxiety with Jo-Anne La Flèche",
    "date": "2022-12-01",
    "duration": "1h 7m",
    "description": "Dance and other performing arts are, by nature, stressful. Stress can easily develop into anxiety, which is exponentially more common in the hypermobile population than the general population.\nHow can you distinguish between stress and anxiety? What can you do to manage your anxiety? When is it time to seek outside help?\nWe asked these questions and more of Jo-Anne La Flèche, a clinical and dance psychologist with a Masters in Somatics.\nJo-Anne defines the difference between stress and anxiety, and discusses factors that may contribute to anxiety, both within a person and in their external circumstances. She breaks down how a dance environment might foster anxiety and shares ways to self-manage that anxiety.\nSelf-care practices are offered as ways to lower anxiety, as well as seeing the value in recognizing things you can’t control. Jo-Anne lists signs that may indicate a dancer should seek help in managing their mental health and suggests ways to find the right therapist for you.\nFinally, Jo-Anne shares her thoughts on why it’s important to have an identity outside of dance.\nFor all artists or even anyone struggling with anxiety, this episode is not to be missed.\nClick to access informational papers written by Jo-Anne under the auspices of the Dance/USA Task Force on Dancer Health on anxiety and depression. --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "Mental Health",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4462751350.mp3?updated=1721670444",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jo-Anne La Flèche"
    ],
    "guestImages": []
  },
  {
    "num": 56,
    "title": "56. Optimizing Immunity with Kristin Koskinen, RDN",
    "date": "2022-11-17",
    "duration": "59m",
    "description": "As the weather changes and schedules become busier, staying healthy can feel like a huge challenge. Artistic athletes may struggle to keep their bodies at optimal performance level, and fighting off infectious illnesses may seem like an uphill battle.\nHow can we naturally strengthen our immune system, supporting its function for optimum success? We posed this question to Kristin Koskinen, RDN and Bendy Bodies team member, in this episode.\nKristin shares why dancers and other performing artists with hypermobility and/or a connective tissue disorder like the Ehlers-Danlos syndromes should care about immunity and nutrition in general. She explains how the foods we eat impact our immune system, and how investing efforts to fuel well now can have a big impact on our health down the road.\nKristin walks us through her process for building a healthy, supportive diet for her clients, talking through her suggestions for planning wide varieties of foods, as well as efficient shortcuts when time is an issue.  She discusses the possible effects of sugar on the immune system, and how to deal with the emotional component of foods during the holidays.\nKristen looks at the impact of alcohol on the immune system and talks about the microbiome’s role. She shares her expert view on nutritional supplements including probiotics, and offers lots of encouraging tips for managing busy seasons while striving for healthy nutrition.\nThis episode breaks down what can be a stressful and complicated subject in encouraging and manageable ways for all bendy bodies.\n.\n.\n.\n.\n.\n#JenniferMilner #HypermobilityMD #Bendy #BendyBuddy #Immunity #Bloating #DietitiansOfIG #Glucose #Gut #Supplement #ChronicDisease #ChronicIllness #InvisibleDisability #Infection #AlwaysOptimal #AutoImmune #NutritionForDancers #DanceNutrition #OptimalNutrition #NutrientDeficiencies --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Nutrition",
      "Exercise",
      "Treatment",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5682432900.mp3?updated=1721670505",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Kristin Koskinen, RDN"
    ],
    "guestImages": []
  },
  {
    "num": 55,
    "title": "55. Cultivating Resiliency with Jazz Bynum",
    "date": "2022-11-03",
    "duration": "41m",
    "description": "As a young dancer, Jazz Bynum enjoyed the benefits of being “bendy”.   Later, she experienced more than her fair share of injuries but it wasn’t clear how these could be connected. A diagnosis of hypermobile Ehlers-Danlos Syndrome (hEDS) gave Jazz the information necessary to build the resiliency and strength she needs as a professional dancer with Ballet West.\nJazz chats with Bendy Bodies about navigating her dance career while addressing her body’s unique needs with hEDS. Jazz discusses her diagnosis and what led her to seek one, and shares how her diagnosis changed how she seeks treatment.\nJazz speaks openly about her decision to reveal her hEDS publicly, documenting her latest injury and nearly year-long recovery process on social media. She shares her maintenance routine outside of dance, and the lessons she’s learned about her body and her hEDS during her rehabilitation. Finally, Jazz encourages other dancers on their own journeys, addressing the importance of finding people who will support and advocate for you.\nAn inspiring story of cultivating your own resilience through injuries, this podcast is full of encouragement and motivation for everyone struggling to move forward in spite of obstacles.\n.\n.\n.\n.\n.\n#BendyBuddy #Bendy #EhlersDanlos #Dancer #ZebraStrong  #ChronicIllness  #spoonie #Zebra  #Disease #ArtisticAthlete #Disability #EDS #JointStability\n#Bendy #hypermobile #HypermobilitySpectrum\n#BendyBallerina #BendyBallet #Ballet #Movement --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8416183823.mp3?updated=1721670358",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jazz Bynum"
    ],
    "guestImages": []
  },
  {
    "num": 54,
    "title": "54. Managing Mast Cell Pain with Linda Bluestein, MD",
    "date": "2022-10-20",
    "duration": "47m",
    "description": "Mast cell disorders are prevalent in the hypermobile population, but can often go undiagnosed.  Persistent pain can be initiated and perpetuated by mast cells, which have also been referred to as “gatekeepers of pain”.  How can someone who suspects mast cell issues go about seeking relief for mast cell-related pain? How can medical professionals accurately seek to diagnose and treat mast cell pain?\nFor this conversation, we put Bendy Bodies founder, Linda Bluestein, MD, in the hot seat. With her many years as a practicing anesthesiologist and her long career treating people with hypermobility disorders, she’s been in a unique position to research, diagnose, and treat these complex conditions.\nDr. Bluestein defines mast cell disorders and ways they may present. She explains why people with hypermobility should be aware of mast cell disorders, and reveals the prevalence of pain associated with mast cell issues.\nDr. Bluestein shares her techniques for evaluating pain in a patient, and offers advice on treating pain in a patient with mast cell issues. She suggests ways to communicate with a medical professional about your own pain, and shares her wish list of ways she would address mast cell disorders on a large scale.\nWith practical advice for both medical practitioners looking to improve patient care, and hypermobile people searching for ways to mitigate their own chronic pain, this episode is filled with tips and insight into a complex problem.\nAdditional notes: \n\nExcipients:  All medications have excipients (“inactive” ingredients in medications that may cause problems in susceptible people).\n\nMast cell disorder testing:  Tryptase is just one mediator that is important to check (both at baseline and within four hours of a flare).  I provide lab slips to my patients that they can take in for testing as needed.  Tryptase levels can be helpful (especially if they are elevated) but a normal level does not rule out a mast cell problem.\n\nPain sources:  People with EDS and comorbidities (like mast cell disorders) can have all the types of pain.  These include nociceptive (coming from actual or potential tissue damage), neuropathic (problem within the nervous system) and nociplastic (dysfunction of how pain signals are processed).\n\n.\n.\n.\n.\n.\n#BendyBuddy #HypermobilityMD #JenniferMilner #MastCell #Disease #ChronicDisease #Hypermobile #Histamine #FoodIntolerance #ChronicPain #ButYouDontLookSick #MCAS #MastCellActivation #ComplexIllness #EhlersDanlos #DoctorsOfIG #ChronicIllnessSupport #LowHistamine #Histaminintoleranz #MastCellActivationSyndrome --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "MCAS",
      "Pain",
      "Nutrition",
      "Diagnosis",
      "Treatment",
      "Neurology",
      "Surgery",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8560406484.mp3?updated=1721670340",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": []
  },
  {
    "num": 53,
    "title": "53. Creating a New Hypermobility Screening Tool with Aiko Callahan, DPT, and Stephanie Greenspan, DPT",
    "date": "2022-10-20",
    "duration": "47m",
    "description": "Hypermobility is far more prevalent in dancers, circus performers and other aesthetic athletes. While some hypermobile artistic athletes have asymptomatic joint hypermobility, others have symptoms due to an underlying hypermobility or connective tissue disorder.\nHow can a physical therapist or physician assess the bendy artist, beyond tools like the Beighton Score, and see what the artist might need by way of support?\nAiko Callahan and Stephanie Greenspan, both DPTs who work a lot with dancers, circus artists and other bendy bodies, wondered this same thing. They worked with Annie Squires, DPT to publish “Management of Hypermobility in Aesthetic Performing Artists: A Review” and create a fabulous new tool, the Hypermobility Screening Tool.\nThe two physical therapists talk through their process and how they assess new patients. They reveal screening questions to ask hypermobile artists to best understand the artist’s needs.  Some areas include performer identity, scheduling issues, and self-management.\nThe two lay out the guidelines they’ve put together for a physical exam and tests they use to screen for joint stability. They discuss the importance of a team approach for the hypermobile artist, and ways to help the artist grow their own support team.\nFinally, Aiko and Stephanie share their Hypermobility Screening Tool used to assess the presence of other systemic issues often seen in those with hypermobility.  A self-reporting screening tool, this questionnaire is designed to efficiently gather information to aid the medical professional to determine what next steps might be most appropriate.\nA tool that could be used by medical professionals, trainers looking to help their clients find support, or even hypermobile individuals looking for ways to communicate their issues more clearly, the screening tool is an important step forward in streamlining care for people with hypermobility disorders.\nFor more information about Stephanie, visit ArtleticScience.com.  Aiko can be reached at AikoCallahanPT@gmail.com.  AOPT members can access the full article here.  (link the word here if possible)  https://www.orthopt.org/content/publications.  Non members can contact sklinski@orthopt.org to discuss other options. You can also click here to dowload a sample of the Hypermobility Screening Tool: Hypermobility Screening Tool Sample PDF.\n.\n.\n.\n.\n.\n#BendyBuddy #Hypermobility #Hypermobile #Screening #EhlersDanlos #ConnectiveTissue #EhlersDanlosSyndrome #HypermobilitySpectrum #PhysicalTherapy #Acrobats #JointPain #Flexible #Aerial #Acrobatics #CircusArtist #Dance #DancerLife #DanceDance #Ballet #BalletLife #Mobility #JenniferMilner #HypermobilityMD #Bendy --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "Treatment",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3570482918.mp3?updated=1721670384",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Aiko Callahan, DPT",
      "Stephanie Greenspan, DPT"
    ],
    "guestImages": []
  },
  {
    "num": 52,
    "title": "52. Unlocking Jaw Pain with Leslie Russek, DPT, PhD",
    "date": "2022-09-22",
    "duration": "38m",
    "description": "Jaw pain affects a relatively large percentage of the general population, but is even more problematic for those on the hypermobility spectrum.  It’s not often something we think of addressing, however, until it’s clamoring for our attention.\nLeslie Russek, DPT, PhD is a practicing orthopedic physical therapist specializing in hypermobility syndromes, Ehlers-Danlos syndromes, fibromyalgia, headaches, and chronic pain. She speaks with Bendy Bodies about temporomandibular disorder (TMD) and jaw pain sharing her wisdom on this topic.\nDr. Russek describes the temporomandibular joint (TMJ) and why hypermobile people should be aware of this commonly misunderstood joint. She illuminates the link between TMD and proprioception, as well as how muscles outside the jaw can cause jaw problems.\nWe learn strategies for mouth breathing, a possible contributor to TMD, hear practical actions for reducing jaw pain, and learn about the link between the jaw and issues such as headaches or tooth pain.\nFinally, Dr. Russek walks us through her steps for finding a healthy resting position, and talks through the Rocabado 6x6 exercise program for TMD.\nWith practical pointers on addressing jaw pain and dysfunction, this episode is helpful for every bendy body with or without jaw pain.\nVisit this webpage for handouts and more information about Dr. Russek.\n.\n.\n.\n.\n.\n#JawPain #TMD #BendyBuddy #PhysicalTherapy #PhysicalTherapist #Hypermobile #Hypermobility #JointPain #Temporomandibular #LockJaw #ToothPain #ChronicPain #TmjDisorder #HypermobilityMD #JenniferMilner #Bendy --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Pain",
      "Exercise",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1089445287.mp3?updated=1721670378",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Leslie Russek, DPT, PhD"
    ],
    "guestImages": []
  },
  {
    "num": 51,
    "title": "51. Moving Fearlessly with Jeannie DiBon",
    "date": "2022-09-08",
    "duration": "43m",
    "description": "Hypermobile athletes and artists are often excellent movers - until they hit “the wall”. Sometimes you hit a point where even basic movements become a struggle.\nHow can you continue moving without increasing your pain?\nBendy Bodies discusses this important topic during pain awareness month with Jeannie Di Bon, a movement therapist who literally wrote the book on moving pain-free with hypermobility!\nJeannie talks about steps people can take if they’re struggling to add movement into their everyday life. She shares why movement is crucial for people with hypermobility and how she works to improve joint stability in the body.\nJeannie offers insight into how deconditioning can happen so quickly and discusses why alignment reeducation is so important. She discusses how to reprogram your posture and shares ways to improve proprioception.\nJeannie describes her Integral Movement Method and how it can be incorporated into day-to-day life. And she shares information on her Zebra Club, the importance of having a supportive community around you, and her education courses for dance educators, trainers, and more.\nFinally, Jeannie stresses the importance of the nervous system being engaged in the movement education process, and reinforces the need to listen to your body and move accordingly.\nAn episode for every Bendy Body, this discussion is full of practical tips and encouragement.\nTo learn more about Jeannie, visit:  https://jeanniedibon.com/\n.\n.\n.\n.\n#EhlersDanlos #ZebraStrong #Bendy #BendyBody #Spoonie #Movement #Hypermobile #PainAwarenessMonth #PainCounts #LifeWithPain #Hypermobility #Posture #JointPain #JointStability #MovementEducation #ZebraClub #DiBon  #JenniferMilner\n#HypermobilityMD #BendyBuddy --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "Exercise",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3679719818.mp3?updated=1721670224",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jeannie DiBon"
    ],
    "guestImages": []
  },
  {
    "num": 50,
    "title": "50. Pushing Limits with Jen Crane, DPT",
    "date": "2022-05-26",
    "duration": "42m",
    "description": "As a physical therapist for circus artists and dancers, Dr. Jen Crane regularly treats artistic athletes with hypermobility.\nAs a circus artist and former dancer who is also diagnosed with hypermobile Ehlers-Danlos Syndrome (hEDS), Jen Crane intimately understands the struggles of these athletes.\nHow does a hypermobile artist use that hypermobility to its full advantage - the long, gorgeous, bendy lines and movement patterns - while still remaining healthy and not pressing the body beyond its limits?\nDr. Crane discusses this tightrope walk with Bendy Bodies.\nShe shares her own diagnosis journey as an artist and a medical professional. She discusses how she helps artistic athletes reconcile their connective tissue disorders with their need to push their bodies to the limits.  And she talks about training in a healthy way.\nDr. Crane covers how she assists artists with their personal risk vs benefit analysis, and examines predictive variables she may see in people who might have a more successful career. She reflects on the sacrifices artists might need to make, and shares what it’s like to have the hard conversations with artists pushing themselves too much.\nDr. Crane discusses the importance of finding a coach or healthcare provider who understands hypermobility, and how to find one. She breaks down current trends she sees in the medical world with hypermobility, and advocates for people to do what they love to do while taking care of their physical health.\nFor anyone who works with hypermobile artistic athletes,or for any hypermobile artist who wonders how to find that safe boundary for themselves.\n#Podcast #Contortion #FlexibilityTraining #Bendy #CircusLife #CircusEveryDamnDay #CircusCircus #CircusInspiration #Aerial #Aerialist #AerialistOfIG\n#Ballet #BalletDancer #BalletLife #DancersLife #DanceLife #DancersWorld #ZebraStrong\n#BendyBack #BendyFeet #EhlersDanlosSyndrome #hEDS #Hypermobility #HypermobilitySpectrumDisorder\n#hEDS #EhlersDanlos #EhlersDanlosAthlete #EhlersDanlosSyndromeAwarenessMonth #BalletWhisperer #HypermobilityMD --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Exercise",
      "Diagnosis",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8674339361.mp3?updated=1721670364",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jen Crane, DPT"
    ],
    "guestImages": []
  },
  {
    "num": 49,
    "title": "49. Pioneering a Path with Bonnie Moore Southgate",
    "date": "2022-05-12",
    "duration": "1h 1m",
    "description": "As an elite ballet dancer, Bonnie Moore Southgate danced as a soloist first with American Ballet Theatre, then with the Royal Ballet. Struggling with injuries and pain for years, Bonnie retired from dance and eventually was diagnosed with Ehlers-Danlos Syndrome. Her journey to find treatments and pain relief led to her second career as a neurokinetic therapist, massage therapist, and Pilates trainer.\nBonnie specializes in working with hypermobility as well as elite athletes, and she sat down to share her dance experience with Bendy Bodies.\nBonnie shares her amazing story of dancing through a brilliant career, starting with winning the Prix de Lausanne, being invited to work with Mikhail Baryshnikov at ABT, and working her way to soloist at the Royal Ballet.  She is open about her injuries throughout her career, and how they shaped the choices she made during rehearsals and performance opportunities.\nBonnie discusses how her EDS manifested itself while she was still a young dancer, her reasons for seeking an EDS diagnosis and how it shaped her choices. She shares her first steps into Pilates and injury rehabilitation when dance medicine was still in its infancy, and why she trained as a Pilates instructor before becoming a sports and corrective exercise specialist.  She also discusses her experience with cranial sacral therapy.\nFinally, Bonnie looks at how far dance medicine has come in supporting dancer health and career longevity, and shares what she wants teachers and choreographers to know about working with dancers with EDS or hypermobility disorders.\n#ehlersdanlos #balletwhisperer #hypermobiledancers #zebrastrong #podcast #hypermobilitymd #dancer #hsd #bendy #ballet #balletdancer #keepmoving #hyperextension #hypermobility #dance #jennifermilner #dancelife #arabesque #balletteacher #ballerina #technique #pointe #pointework #balletlife --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Pain",
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3298175512.mp3?updated=1721670385",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Bonnie Moore Southgate"
    ],
    "guestImages": []
  },
  {
    "num": 48,
    "title": "48. Supporting the Foot and Ankle with Andrea Zujko, DPT",
    "date": "2022-04-28",
    "duration": "1h 10m",
    "description": "Hypermobility can help the artist create aesthetically pleasing lines with one of the most obvious locations involving the foot.\nAnd while many artists envy the banana feet that sometimes accompany excessive ranges of motion, having hypermobile feet and ankles can just as often bring complications.\nAndrea Zujko, a physical therapist who works regularly with dancers from New York City Ballet and from all over the world, takes the opportunity to chat with Bendy Bodies about some of the common difficulties that flexible feet may face.\nAndrea discusses ankle sprains, and why they may need more recovery time than you might think. She explains the importance of an ankle bone called the talus and shares wisdom on maintaining its healthy range of motion.\nAndrea looks at stress fractures and how they can occur in artistic athletes, and explains the importance of evaluating the entire body when addressing foot and ankle problems. We discuss bunions in bendy feet, and Andrea shares secrets for working with bunions.\nFinally, Andrea discusses common tendon issues seen in hypermobile artists, the importance of strength conditioning, and techniques for controlled stretching.\nProving that a small area can have a big effect on the rest of the body, this discussion is one to be listened to several times over.\n#ankle #Ballet #DancerFeet #BalletFeet #BalletDancer #HypermobileFeet #DanceTraining #DancersOfInsta #BalletTeacher #DanceInjuries #BalletLife #hypermobility #hypermobiledisorders #hypermobilitymd #BendyBodies #bendybodiespodcast #hypermobilitydisorders #bodiesinmotion #JenniferMilner --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "Exercise",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9761471911.mp3?updated=1721670465",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Andrea Zujko, DPT"
    ],
    "guestImages": []
  },
  {
    "num": 47,
    "title": "47. Exploring the Link between Joint Hypermobility and Neurodivergency with Jessica Eccles, MRCPsych, PhD",
    "date": "2022-04-14",
    "duration": "1h 9m",
    "description": "Evidence shows that neurodivergency occurs at a higher rate amongst people with hypermobility disorders.  And we know that anxiety is also prevalent in the hypermobile population. When we look at neurodivergency, hypermobility, anxiety, and dysautonomia, we see hints of lines drawn between them.  Might science soon be able to connect the dots?\nJessica Eccles, senior clinical academic psychiatrist at Brighton and Sussex Medical School, and specialist in brain-body neuroscience, returns to speak with Bendy Bodies about neurodivergency, hypermobility, and possible links with anxiety and the autonomic nervous system.\nIn February 2022, Dr. Eccles published the peer reviewed journal article,  \"Joint hypermobility links neurodivergence to dysautonomia and pain\".  She discusses the fascinating results of her research, and explains why neurodivergency, dysautonomia, and pain appear to be connected via joint hypermobility.\nDr. Eccles shares her findings of higher levels of musculoskeletal symptoms in the study’s neurodivergent population vs the comparison group, and wonders if this may be a potential reason why people with neurodivergency experience more health symptoms.\nShe explains the importance of raising awareness of the link between joint hypermobility and neurodivergency in the medical community, and discusses how anxiety is linked to joint hypermobility and possibly autonomic nervous system dysfunction.\nDr. Eccles shares her work on the ADAPT program, a program aimed at reducing anxiety with a combined brain-body approach in hypermobile people. Still in its early stages, the program (Altering Dynamics of Autonomic Processing Therapy) has fascinating implications.\nFinally, Dr. Eccles reveals her current research projects and shares her hopes for future research.\nAn incredible, accessible discussion by one of the top researchers in this field, this is an episode not to be missed.\n#neurodivergency #BendyBrain #dysautonomia #AutonomicNervousSystem #anxiety #ActuallyAutistic #adhd #ADHDAwareness #ASD #AutisticPride #DisabilityInclusion #RedInstead #AutismAcceptance #AutismAwareness #neurodivergent #AutisticAdults #neurodiversity #autistic #autism #BendyBodies #BendyBodiesPodcast #JenniferMilner #ZebraStrong #hypermobility #HypermobilityDisorders --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "POTS",
      "Mental Health",
      "Treatment",
      "Neurology",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7841669222.mp3?updated=1721670434",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jessica Eccles, MRCPsych, PhD"
    ],
    "guestImages": []
  },
  {
    "num": 46,
    "title": "46. Fueling Against Fatigue with Kristin Koskinen, RDN",
    "date": "2022-03-17",
    "duration": "57m",
    "description": "People with hypermobility often struggle with fatigue.  They want more energy, and know that exercise and adequate sleep can help. But what is the role of nutrition in combating fatigue?\nBendy Bodies team member, Kristin Koskinen, RDN, chats with us on how what we eat can influence how we feel. She explores the role nutrition can play in fatigue, and how executive function may contribute to nutritional deficits.\nKristin discusses how to “control what you can control”, and reveals tips on how to get the most out of every mealtime. She looks at the role of sugar as both a necessary fuel and a possible contributor to fatigue, and explores the possible consequences of restrictive or fad diets on energy levels.\nKristin highlights the importance of zinc, B vitamins, and folic acid in supporting a body’s energy levels. She offers ways to figure out what foods might be contributing to fatigue, and shares what role vitamins and supplements may play in fatigue.\nKristin breaks down the difference between stimulants and fuel, and how caffeine may actually end up working against you. Finally, Kristin gives guidance on how to find a nutrition specialist to help you on your own food journey.\nFor anyone struggling with fatigue, this episode is packed with great advice.\n.\n.\n.\n.\n.\n#DanceNutrition #NutritionForDancers #dietitian #FoodRules #NutritionCoach #RDN #DietitianApproved #DietitiansOfInstagram\n#AntiinflammatoryDiet #ChronicFatigue #ChronicIllness #hypermobility #NourishYourBody\n#KristinKoskinenRDN #HypermobilityMD #JenniferMilner --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "Nutrition",
      "Exercise",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9818347266.mp3?updated=1721670293",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Kristin Koskinen, RDN"
    ],
    "guestImages": []
  },
  {
    "num": 45,
    "title": "45. Understanding Fatigue with Alan Pocinki, MD",
    "date": "2022-03-03",
    "duration": "50m",
    "description": "Fatigue is common in people with chronic disease. Pain, fatigue, and depression can feed into each other and become a vicious cycle that’s difficult to break. Combating fatigue can be particularly difficult for those with bendy bodies and comorbidities.\nAlan Pocinki, MD, specialist in hypermobility and related autonomic and sleep disorders, speaks with Bendy Bodies on this complicated subject.\nDr. Pocinki shares his “eureka” moment in linking the chronic fatigue syndrome population with the hypermobile population. He defines fatigue and how it’s different from sleepiness, and describes the underlying causes of fatigue in hypermobility spectrum disorders, outlining the way an overactive sympathetic nervous system can mimic a panic attack.\nDr. Pocinki explains how autonomic dysfunction can be both the cause and effect of fatigue, and the role of sleep continuity. He discusses the concept of budgeting your energy and explores the role of anxiety in hypermobility spectrum disorders. Dr. Pocinki describes his approach to treating patients with fatigue, reveals the role hormones may play in fatigue, and shares his hopes for future research in fatigue and hypermobility.\nYou will not want to miss this episode if you are struggling with fatigue or are a medical professional looking to better serve your hypermobile population.\n.\n.\n.\n.\n.\n#fatigue #ButYouDontLookSick #ChronicIllness #Hypermobility #EhlersDanlosSyndromes #EhlersDanlos #SleepDisorder #dysautonomia #AutonomicDysfunction #anxiety\n#BendyBodies #BendyBodiesPodcast #JenniferMilner #HypermobilityMD --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "POTS",
      "Mental Health",
      "Neurology",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1713604316.mp3?updated=1721670288",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Alan Pocinki, MD"
    ],
    "guestImages": []
  },
  {
    "num": 44,
    "title": "44. Navigating Pregnancy with Shanda Dorff, MD",
    "date": "2022-02-17",
    "duration": "1h 2m",
    "description": "Pregnancy can be a time of new physical challenges, and hypermobility may make the season even more complex. Hormones can change tissue elasticity and the body may struggle to adapt.\nDr. Shanda Dorff began working with connective tissue disorders in 2008 and has helped countless women through pregnancies and beyond. She imparts her hard-learned wisdom to Bendy Bodies on this complicated subject.\nDr. Dorff shares important considerations for someone with connective tissue disorders to consider in a pregnancy, and discusses higher-risk issues with various types of Ehlers-Danlos syndromes. She lists things to watch for during pregnancy, and gives advice on how to prepare for possible complications during a delivery.\nDr. Dorff offers things to do - and avoid - during the post-partum weeks, as well as exercise considerations for hypermobile athletes during and after pregnancy.\nFinally, she reveals possible considerations for breastfeeding when hypermobile, and suggests ways to find specialists to help someone navigate a “bendy” pregnancy.\nFor any bendy body considering pregnancy, as well as all healthcare providers, this episode shares decades of hard-won expertise with our listeners.\nResources:\nhttps://hiddenstripes.com/ (Disjointed Book)\nhttps://www.complexcaresmn.com/ (Dr. Dorff's clinic)\nhttps://pubmed.ncbi.nlm.nih.gov/32148151/ (Drs. Dorff and Afrin article, Mast cell activation syndrome in pregnancy, delivery, postpartum and lactation: a narrative review)\nhttps://www.scirp.org/html/2-1920604_97524.htm#%23%23 (Drs. Chopra and Bluestein article Perioperative Care in Patients with Ehlers Danlos Syndromes)\n.\n.\n.\n.\n.\n#pregnancy #pregnant #podcast #EhlersDanlossyndromes #EhlersDanlos #BendyBodies #BendyBodiesPodcast\n#highriskpregnancy #zebrastrong #heds #hypermobile #connectivetissuedisorder #JenniferMilner #HypermobilityMD --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "MCAS",
      "Exercise",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7378516760.mp3?updated=1721670596",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Shanda Dorff, MD"
    ],
    "guestImages": []
  },
  {
    "num": 43,
    "title": "43. Supporting Artistic Athletes with Selina Shah, MD",
    "date": "2022-02-03",
    "duration": "44m",
    "description": "Artistic athletes like dancers, gymnasts, and skaters require highly skilled medical care in order to maintain peak health while operating at an elite level. Understanding the unique demands placed on their bodies is crucial for their physicians. And when the artist is competing as part of a team - say, as an Olympic skater or gymnast, or as a company dancer - the artist doesn’t always have the luxury of choosing their team doctor. \nSelina Shah, MD, has herself been a competitive swimmer and gymnast, as well as a professional salsa and Bollywood dancer. She’s served as team physician for both Team USA figure skating and artistic swimming, and sits down to talk with us about maintaining your health in a team setting. Dr. Shah looks at why hypermobility can be a tremendous asset in some athletic fields, and hugely problematic in others. She explores the process of natural selection for artistic athletes and the secret to success at the elite level. \nLooking at injuries that are common in hypermobile artistic athletes, Dr. Shah explains why it’s never too soon to address an issue. She discusses misconceptions about stubborn tendon problems in bendy bodies as well as what procedures to consider and which ones to avoid. Dr. Shah shares ways for hypermobile athletes to communicate with a team doctor and trainer about their specific needs, and how to advocate for yourself in a team setting.\nFinally, she opens up about what research she’d like to see for hypermobile artistic athletes in the future. \nTo learn more about Dr. Shah, visit her website https://selinashah.com/\n. . . . . . \n#podcast #iceskating #gymnast #BendyBodies #artisticswimming #OlympicAthlete #hypermobileathlete #rhythmicgymnastics #bendy #HypermobilityMD #JenniferMilner #BodiesinMotion #BendyBodiesPodcast #HypermobilityDisorders #Hypermobility #HypermobilitySpectrum --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "Surgery",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4692010510.mp3?updated=1721670202",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Selina Shah, MD"
    ],
    "guestImages": []
  },
  {
    "num": 42,
    "title": "42. Pursuing a Diagnosis with Linda Bluestein, MD",
    "date": "2022-01-20",
    "duration": "43m",
    "description": "Hypermobility disorders can be difficult to diagnose, with no one clear path forward. Without an obvious road to walk, people with chronic pain who suspect hypermobility disorders may feel defeated and overwhelmed, struggling to find the help they need.\nIn this episode, Bendy Bodies founder Linda Bluestein, MD opens up about her own journey getting an EDS diagnosis and starting her work as a hypermobility specialist.\nDr. Bluestein breaks down the different types of connective tissue disorders and how they might be diagnosed. She discusses reasons medical professionals might encourage someone to seek a diagnosis, and theorizes on why they might discourage it.\nShe gives advice on where to start this journey, and discusses the importance of having even just one medical professional in your corner. As well, she suggests types of specialists who might have knowledge of connective tissue disorders, and outlines steps people can take to prepare for a doctor’s visit.\nDr. Bluestein offers compassionate advice to people who hear “no” a lot, and cautions against confirmation bias. She busts some harmful myths around connective tissue diagnoses and reveals some of the pitfalls a person might encounter in their pursuit of a diagnosis.\nFull of advice from a medical expert in hypermobility, this is an episode for anyone feeling defeated or looking to confirm a diagnosis.\n#ButYouDontLookSick #ChronicPain #bendybodies #BendyBodiesPodcast #ehlersdanlossyndrome #ConnectiveTissue #ZebraStrong #collagen #diagnosis #physiciansofinstagram #EhlersDanlos #hypermobility  #hypermobilitymd #bodiesinmotion --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Pain",
      "Diagnosis",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4672026027.mp3?updated=1721670246",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": []
  },
  {
    "num": 41,
    "title": "41. Changing the Face of EDS with Camille Schrier, Miss America 2020",
    "date": "2022-01-06",
    "duration": "1h 15m",
    "description": "People struggling with a chronic illness often feel overwhelmed at the idea of pursuing a passion. Health issues may seem insurmountable when trying to go after your dream, and you may feel hopeless and alone on your journey.\nCamille Schrier, Miss America 2020, was diagnosed with Classical Ehlers-Danlos Syndrome at age 11, at the same time she was discovering her love of nature and science. For her, a diagnosis helped her understand all the “crazy” things happening to her body and gave her comfort.\nCamille walks us through her diagnostic odyssey, explaining the signs of EDS she saw in herself and the twists and turns that came up along the way. She shares her journey to the Miss America title, and her concerns about serving as Miss America with a chronic illness.\nCamille discusses the importance of advocating for yourself and having providers who listen. She speaks honestly about her struggles with an eating disorder, her journey through mental health issues, and her fights with misdiagnoses.\nSharing how her own struggles have made her more compassionate towards others, Camille describes how she is using her platform to spread her Social Impact Initiative, “Mind Your Meds - Drug Safety and Abuse Prevention From Pediatrics to Geriatrics.”\nYou won't want to miss this inspiring interview. Learn more at \nhttps://www.camilleschrier.com/. \n.\n.\n.\n.\n.\n#dysautonomia #ehlersdanlossyndrome #hypermobility #invisibleillness #hypermobilitymd #balletwhisperer #zebra #ehlersdanlos #zebrastrong #spoonie #chronicillness #chronicpain #camilleshrier #missamerica #JenniferMilner\nIf you are able to share the resized image, it is much appreciated!",
    "tags": [
      "EDS",
      "POTS",
      "Mental Health",
      "Diagnosis",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3839666217.mp3?updated=1721670815",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Camille Schrier"
    ],
    "guestImages": []
  },
  {
    "num": 40,
    "title": "40. Understanding Overstretching with Jennifer Milner, NCPT",
    "date": "2021-12-16",
    "duration": "42m",
    "description": "What is overstretching, and why should we talk about it?\nAs the artistic world seems to demand ever more extreme ranges of motion from its dancers and athletes, many people turn to overstretching  as a way to stay competitive, forcing an artificial hypermobility in some joints.\nDr. Linda Bluestein interviews Bendy Bodies’ own Jennifer Milner, NCPT, on the subject of overstretching and forced hypermobility. Jennifer discusses why a joint might be hypermobile, and what issues she sees in the hypermobile population versus the non-hypermobile population.\nJennifer explores overstretching, how it affects the body, and some issues that may arise because of it. She explains the difference between dynamic and static stretching, and when each type may be appropriate.\nJennifer looks at the practice of overstretching in dance studios and shares alternatives to overstretching for achieving flexibility in a healthy way.\nFinally, Jennifer offers suggestions on how to find resources to help you increase your flexibility safely, both online and in person, and confides what she wishes every dancer knew about flexibility.\nWhether you are an artist, a parent, a studio owner, or a health practitioner, this is an episode you won’t want to miss. Full of helpful advice and practical tips!\n#flexibility #flexible #ballet #ballerina #stretching #stretch #pointe #splits #pointeshoes #bendy #balletdancer #gymnast #gymnastics #instadance #instaballet #backbend #worldwideballet #dancer #contortion #poledance #oversplits #overstretching #split #acrobatics #zebra #hypermobilitymd #bendybodies #JenniferMilner #balletwhisperer",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8616134458.mp3?updated=1721670406",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jennifer Milner, NCPT"
    ],
    "guestImages": []
  },
  {
    "num": 39,
    "title": "39. Rethinking Rhythmic Gymnastics with Vita Bachman",
    "date": "2021-12-02",
    "duration": "39m",
    "description": "Artistic athletes often push their flexibility to the limit, both for competitive and aesthetic reasons.   Nowhere are limits tested more than in rhythmic gymnastics where hypermobility tends to be the norm.\nVita Bachman, former international Ukrainian rhythmic gymnast and now a highly respected coach, speaks openly with Bendy Bodies about her experience in the world of rhythmic gymnastics, both as an athlete and as a coach.\nVita discusses how the sport has changed since she competed, and what factors influence how she coaches today.  She discusses the pitfall in “chasing the points” of competitive rhythmic gymnastics, and why she continually seeks out the best methods for training her students even when these methods differ from what she was taught as a competitor.\nLiving with her own career-related medical problems, Vita strives to be a coach that trains competitive but healthy athletes, both physically and mentally. She shares the hopes she has for the future of rhythmic gymnastics, as well as the hurdles she finds in trying to change certain aspects. She discusses her concerns with social media, confides what she’d like parents to know when shepherding their children through extreme stretching, and shares her own approach to training flexibility in a long-term, healthier way\nA rare, inside look at one of the most demanding sports for bendy bodies out there!\n#rhythmicgymnastics #rhythmicgymnasts #vitabachman #beyondlimitsrg #hypermobility #overstretching #bodiesinmotion #hypermobilitymd #jennifermilner #oversplits #safestretching #bendybodies #bendybodiespodcast #hypermobile\nHer website is www.beyondlimitsrg.com --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4038833095.mp3?updated=1721670262",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Vita Bachman"
    ],
    "guestImages": []
  },
  {
    "num": 38,
    "title": "38. Refusing Limits with Allysa Seely",
    "date": "2021-11-18",
    "duration": "49m",
    "description": "Chronic illness can make your life feel filled with insurmountable obstacles. Pursuing your dreams, even in the face of health issues, may feel hopeless. But moving forward, even in small increments, you can accomplish great things.\nJust ask gold medalist Allysa Seely.\nAllysa grew up as a dancer and competitive athlete before health issues tried to sideline her. She spent three years advocating for herself as a teen and young adult, fighting to be listened to, before finally being diagnosed with Ehlers-Danlos Syndrome (EDS), Chiari Malformation, Basilar Invagination, Postural Orthostatic Tachycardia Syndrome (POTS), and more.\nAllysa refused to let her diagnoses define her, and has become a two-time gold-medal winning paratriathlete at the 2016 and 2020 Paralympics. She shares how she’s been able to compete at such a high level with multiple chronic illnesses, and opens up about her hard journey in college to get a diagnosis.\nAllysa confides that she used all her “you can’t”s as fuel to move her forward in pursuit of her dream. She discusses her difficult decision about her amputation, and shares her tips for getting through hard days.\nAllysa’s story, and how she turned challenge into triumph in her life, is inspiring and encouraging for everyone living with chronic illness. As Allysa shows, there really are no limits. An inspiring and encouraging interview for anyone struggling with limitations or hardship.\n#TriAllysa #paraolympics #USAparatriathalon #triathalon #paratriathlete #amputation #EhlersDanlossyndromes #EhlersDanlos #ChiariMalformation #Chiari #POTS  #bendybodies #bendybodiespodcast #hypermobilitymd #JenniferMilner --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "POTS",
      "Diagnosis",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1006596782.mp3?updated=1721670418",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Allysa Seely"
    ],
    "guestImages": []
  },
  {
    "num": 37,
    "title": "37. Advocating for Yourself with Aidan Leslie",
    "date": "2021-11-04",
    "duration": "46m",
    "description": "Navigating medical care can be a daunting task at the best of times, but when you have a chronic disorder that is largely an invisible illness, you may find yourself bewildered and frustrated trying to get the care you need. Often, a diagnosis like Hypermobile Ehlers-Danlos syndrome or hypermobility spectrum disorder can come with co-morbidities such as POTS (Postural Orthostatic Tachycardia syndrome), MALS (Median Arcuate Ligament syndrome), MCAS (Mast Cell Activation syndrome), and more.\nAnd with multiple diagnoses comes multiple doctors’ visits.\nBendy Bodies chats with our own wellness ambassador, Aidan Leslie, a retired dancer who has been living with an hEDS diagnosis for the past five years and spending her fair share of time in doctors’ offices.\nAidan opens up about the bumpy road of her own health journey. She talks about hitting the “EDS wall” and fighting to take control of her life back. Aidan speaks frankly about her experience navigating the medical world, both as a minor and as someone with an invisible illness.  Aidan offers tips on how to prepare for medical appointments and suggestions for “how to push back against the push-back”.\nAnd just as Aidan is willing to share her side of the medical experience, Bendy Bodies founder Dr. Linda Bluestein joins in to give advice from her side of the stethoscope.\nDr. Bluestein describes a medical one-sheet and how to build one for your medical care, and shares what she wants teen patients specifically to know about advocating for your own health. Dr. Bluestein discusses options you might have if you feel unseen or unheard in an appointment, and suggests ways to connect with a doctor during an appointment.\nFilled with excellent insight from both sides of the prescription pad, this episode is one you’ll want to listen to with a notepad handy.\n#spoonie #chronicillness #ehlersdanlossyndrome #ehlersdanlos #hypermobility #chronicpain #pots #heds #ehlersdanlossyndromes #mcas #invisibleillness #hypermobilitysyndrome  #hypermobilityspectrumdisorders  #zebrastrong  #bendybodies #BendyBodiesPodcast #JenniferMilner #balletwhisperer #hypermobilitymd --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Diagnosis",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3312146426.mp3?updated=1721670280",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Aidan Leslie"
    ],
    "guestImages": []
  },
  {
    "num": 36,
    "title": "36. Needling for Pain with Mandy Blackmon, DPT",
    "date": "2021-10-14",
    "duration": "41m",
    "description": "What exactly is dry needling? How is it different from acupuncture? What sort of issues might it be used for?\nDry needling can be a vital part of an artistic athlete’s healthcare, but sometimes can be misunderstood. Mandy Blackmon, DPT, head physical therapist for Atlanta Ballet's company dancers also serves as an instructor in the Dry Needling Series for Myopain Seminars since 2014.\nMandy explains why she considers dry needling to be a highly effective tool for treating the hypermobile population, and how people with hypermobility can react differently to dry needling. She offers advice on where to start when faced with people with multi-systemic issues, and reveals why dry needling is like rebooting a computer!\nMandy tells us how to find a dry-needling practitioner, and what information to share with that professional, as well as outlining situations where dry needling might not be appropriate.\nWhether you’re new to dry needling or use it as a regular part of your health maintenance toolbox, there’s a lot to learn from this excellent discussion.\nTo learn more about Dr. Blackmon and Myopain Seminars:\nhttps://www.mandydancept.com/\nhttps://www.atlantadancemedicine.com/\nhttps://www.myopainseminars.com/resources/blog/\n•\n•\n•\n•\n#dryneedling #dancemedicine #hypermobility #hypermobile #dancephysicaltherapy #chronicpain #ehlersdanlossyndrome #fibromyalgia #ehlersdanlos  #heds #hypermobility #zebrastrong #BendyBodies #zebra #chronicpainwarrior #JenniferMilner #balletwhisperer  #hypermobilityMD #BendyBodiesPodcast --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "Pain",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7306832057.mp3?updated=1721670440",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Mandy Blackmon, DPT"
    ],
    "guestImages": []
  },
  {
    "num": 35,
    "title": "35. Reeducating Mast Cells with Anne Maitland, MD, PhD",
    "date": "2021-09-30",
    "duration": "1h 0m",
    "description": "Mast cells: interesting and mysterious. You can’t be born without them, but they don’t show up in blood tests. They’re found throughout the body and can affect multiple systems in vastly different ways. What makes them misbehave?\nWe spoke with renowned Allergy and Immunology physician, Anne Maitland, MD, about the role of mast cells in the body, what happens when they go “off script”, and what we can do about it.\nDr. Maitland explains that mast cells are necessary for recognizing and healing tissue injury, and make a decision on how to react. But what if your mast cells perceive the situation incorrectly? What if they perceive a five-alarm fire when it’s just an overcooked, smoky dinner? The mast cells react disproportionately to the perceived threat, and the over-reaction manifests itself throughout the body.\nShe discusses how misbehaving mast cells manifest differently in different systems; she talks through examples of mast cell disorders; and she lists three questions to ask yourself as you try to figure out: are your mast cells misbehaving?\nDr. Maitland describes the challenges people with mast cell disorders face in getting properly diagnosed and treated, and outlines her approach to treating mast cell disorders.  And finally, Dr. Maitland likens the hypermobile patient to a Maserati, and explains why proper maintenance is important sooner rather than later.\nA deep dive into all things mast cell-related, this episode is full of wisdom you won’t want to miss!\nVisit these links for more information about the books mentioned by Dr. Maitland.\nhttps://hiddenstripes.com/\nhttps://originwellnesscolorado.com/passport\n#Mastcellactivationsyndrome #Mastcellactivationdisorder #Mastcelldisease #MastCell #Hypermobilityspectrumdisorder #Hypermobilityspectrumdisorders #Ehlersdanlossyndromes #Doublejointed #heds  #ehlersdanlosawareness #BendyBodies  #hypermobilityMD #BendyBodiesPodcast #JenniferMilner\nFor more information about Dr. Maitland, visit https://clinicalparadigms.com/ or https://chiarinsc.com/patient/\nFor more information about Dr. Linda Bluestein, visit https://www.hypermobilitymd.com/\nFor more information about Jennifer Milner, visit https://www.jennifer-milner.com/ --- Send in a voice message: https://podcasters.spotify.com/pod/show/bendy-bodies/message",
    "tags": [
      "EDS",
      "MCAS",
      "Diagnosis",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2246390036.mp3?updated=1721670329",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Anne Maitland, MD, PhD"
    ],
    "guestImages": []
  },
  {
    "num": 34,
    "title": "34. Highlighting GI Disorders with Leonard Weinstock, M.D.",
    "date": "2021-05-27",
    "duration": "52m",
    "description": "Are you suffering from gastrointestinal distress? People with hypermobility disorders have a higher prevalence of GI problems than the general population. \nDr. Leonard Weinstock, board-certified gastroenterologist with expertise in Ehlers-Danlos Syndromes (EDS) and related disorders, sits down with Bendy Bodies to discuss this very topic. Dr. Weinstock discusses the “unhappy triad\" of EDS, postural orthostatic tachycardia syndrome (POTS), and mast cell activation syndrome (MCAS) and how MCAS may actually be at the heart of EDS. He lists ways to be evaluated for GI disorders and speculates that 10-17% of the general population may have undiagnosed MCAS. He stresses the importance of a multi-disciplinary approach to treatment and thinking outside the box. \nWe look at gastroparesis and small bowel intestinal overgrowth (SIBO) and their links to hEDS and hypermobility spectrum disorder (HSD), and Dr. Weinstock outlines the prevalence of median arcuate ligament syndrome (MALS) in people with MCAS or POTS. He elaborates on his prescribing practices with low-dose naltrexone (LDN) to help increase endorphin production and reduce inflammation, and lists vitamins and diet changes that can be effective in people with MCAS. \nAs one of the authors of \"Covid-19 hyperinflammation and post-Covid-19 illness may be rooted in mast cell activation syndrome\", Dr. Weinstock discusses the possible link between long-COVID 19 illness and MCAS. And finally, he shares suggestions on what to do if you’re having difficulty finding a GI specialist who understands complicated disorders like EDS and MCAS. \nFor anyone dealing with GI issues, as well as physicians looking to understand the connection between hypermobility and GI disorders, this is a timely and important podcast. \nhttps://www.gidoctor.net/provider/leonard-weinstock-md https://pubmed.ncbi.nlm.nih.gov/32328892/ https://pubmed.ncbi.nlm.nih.gov/32920235/ https://www.researchgate.net/publication/338327834_Perioperative_Care_in_Patients_with_Ehlers_Danlos_Syndromes \n#Podcast #LeonardWeinstockMD #GIdisorders #EDS #zebrastrong #MCAS #MALS #POTS #SIBO #hEDS #autoimmunedisorders #BendyBodies #BendyBodiespodcast #hypermobilitymd #lindabluesteinmd #jennifermilner #bodiesinmotion #balletwhisperer #hypermobility #mastcelldisease #mastcelldisorder #EhlersDanlos #EDSAwarenessMonth",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Nutrition",
      "Diagnosis",
      "Treatment",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7613254565.mp3?updated=1721670564",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Leonard Weinstock, M.D"
    ],
    "guestImages": []
  },
  {
    "num": 33,
    "title": "33. Conquering the Wall: A Round Table Discussion",
    "date": "2021-05-13",
    "duration": "1h 3m",
    "description": "Do you live with a hypermobility disorder?\nWhether you have a connective tissue disorder like Ehlers-Danlos syndrome or Marfan syndrome, or a hypermobility spectrum disorder, you are not alone.  These conditions affect millions of people worldwide and disproportionately impact performing artists such as dancers, gymnasts, circus artists, and more.  What do these have in common?   Bodies that rely on aesthetics as well as maintaining peak performance. So how do you continue forward as your condition poses challenges to what you want to do?\nAnd when your health derails your career plans, how do you recover from that?\nWe sat down with several athletic artists living with EDS, to hear their stories. We chatted with Marimba Gold-Watts, a former dancer and now Pilates trainer and teacher at Alvin Ailey; Mariana J. Plick, a circus artist; Kyle Thompson, a former elite baseball player and competitive cheerleader; and Cailey Brandon, a former dancer and now Pilates trainer.\nOur panelists discuss the early days, when things were “easy”, and the point at which it became difficult. They share how their hypermobility disorders may have gone undiagnosed for a long time, lending itself to seemingly random and frustrating multiple injuries. Many identified with “hitting the EDS wall”, and the sharp turn their health seemed to take at that point.\nWe hear emotional stories, and lots of wisdom for other people also struggling with hypermobility disorders. The panelists also shared their hope, reflecting on ways that their disorders have made them even stronger right now, and revealed what advice they would offer to their younger selves if they had the chance.\nFilled with “Oh my goodness, me too!” moments, as well as words of gut-level truth, this is an episode filled with bravery. You won’t want to miss it.\n#hypermobility #heds #zebrastrong #hypermobilitydisorders #ehlersdanlossyndrome #hypermobileathletes #hypermobileartists #hypermobiledancers #hypermobilitymd #bendybodies #bendybodiespodcast #bodiesinmotion #jennifermilner",
    "tags": [
      "EDS",
      "Diagnosis",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8232109410.mp3?updated=1721670542",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Marimba Gold-Watts",
      "Mariana J. Plick",
      "Kyle Thompson",
      "Cailey Brandon"
    ],
    "guestImages": []
  },
  {
    "num": 32,
    "title": "32. Embracing Neurodivergency with Jessica Eccles, MD",
    "date": "2021-04-22",
    "duration": "38m",
    "description": "Neurodivergency occurs at a much higher rate amongst people with hypermobility disorders like Ehlers-Danlos Syndromes and hypermobility spectrum disorders. What’s the connection? \nJessica Eccles, MD, senior clinical academic psychiatrist at Brighton and Sussex Medical School, and specialist in brain-body neuroscience, recently spoke with Bendy Bodies about these neurological conditions that include dyslexia, autism, ADHD, dyspraxia, and dyscalculia. Dr. Eccles led the first neuroimaging study of hypermobility and her work has focused on neuropsychiatric manifestations of connective tissue disorders. \nDr. Eccles stresses that neurodivergency isn’t a disability or disorder, but a different way of neurological processing. She explains surprising findings of her research including possible explanations for the link between hypermobility and anxiety. Dr. Eccles reveals that people with EDS (Ehlers-Danlos Syndromes) are seven times more likely to be autistic, and six times more likely to have ADHD, compared to the general population. She stresses the importance of recognizing the link between hypermobility and neurodivergency and dives into proprioceptive issues and dyspraxia. \nDr. Eccles offers suggestions for seeking help if you suspect you are neurodivergent. She also provides advice for teachers and parents to be more effective in their roles with neurdivergent artists. As Dr. Eccles states, “Neurodivergency shouldn’t be thought of as something to hold you back, but something to embrace.” \nIf you or someone you know may be neurodivergent, this is an episode not to be missed. Find Dr. Eccles: https://www.bsms.ac.uk/about/contact-us/staff/dr-jessica-eccles.aspx @BendyBrain https://www.researchgate.net/profile/Jessica_Eccles \nSuggested reading: \"The Relationship between Autism and Ehlers-Danlos Syndromes/Hypermobility Spectrum Disorders\" https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7711487/ \n#autismacceptence #autismawareness #neurodivergent #autisticadults #neurodiversity #autistic #autimstruth #redinstead #bendybodies #bendybodiespodcast #lindabluesteinmd #jennifermilner #zebrastrong #hypermobility #hypermobilitydisorders",
    "tags": [
      "EDS",
      "Mental Health",
      "Neurology",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3700728581.mp3?updated=1721670305",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jessica Eccles, MD"
    ],
    "guestImages": []
  },
  {
    "num": 31,
    "title": "31. Allowing Imperfection with Bonnie Robson, MD",
    "date": "2021-04-08",
    "duration": "1h 1m",
    "description": "A very high percentage of dancers and athletic artists struggle with perfectionism: it’s what makes us so good at what we do, while at the same time can be unhealthy for us as individuals.\nBonnie Robson, world-renowned psychiatrist and dance medicine specialist, is back to talk to us about perfectionism in the arts world. She defines perfectionism, and explores the duality of perfectionism and anxiety. Bonnie discusses the difference between positive and negative perfectionism, and warns of the danger of the “I should” syndrome.\nBonnie shares techniques to get rid of negative thoughts and looks at performance STRIVINGS versus performance CONCERNS. She discusses the variables that differentiate between adaptive and maladaptive perfectionism, and how unhealthy competition actually decreases creativity.\nWe look at how the pursuit of perfection can increase stress, which contributes to social anxiety, eating disorder, and suicidal thoughts. Bonnie offers tips for training and setting reasonable goals, and shares tools for parents to recognize stress and anxiety in their young artists. As Bonnie reminds everyone who strives for perfection, “It’s ok to say that’s good enough”.\nThis episode is a must-listen for parents, artists, studio owners, and dance medicine professionals working with artists on a regular basis.\nLink to \"Brain structure and joint hypermobility: relevance to the expression of psychiatric symptoms\" article mentioned in the episode:\nhttps://www.ncbi.nlm.nih.gov/pmc/articles/PMC3365276/\n#anxiety #mentalhealth #selflove #bodypositivity #mentalhealthawareness #disorderedeating #perfectionism #depression #perfectionist #ehlersdanlossyndromes #selfcare #mcas #healthcoach #movementismedicine #healthyliving #pots #inspiration #motivation #perfection #berealnotperfect #certifiedhealthcoach #IADMS #danceanxiety #mentalhealthfordancers #BendyBodies #BendyBodiesPodcast #jennifermilner #bodiesinmotion #balletwhisperer #hypermobilitymd",
    "tags": [
      "POTS",
      "MCAS",
      "Mental Health",
      "Exercise",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7146819250.mp3?updated=1721670518",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Bonnie Robson, MD"
    ],
    "guestImages": []
  },
  {
    "num": 30,
    "title": "30. Focusing on Fascia with Jill Miller",
    "date": "2021-03-25",
    "duration": "1h 0m",
    "description": "Jill Miller’s life was upended with shocking news of end-stage osteoarthritis in her early forties. This led to her exploration of healthy ways of releasing and restoring her hypermobile body. Her study of the body led her to fascia and its importance in healthy motion. As she began applying fascial  work to her own body practice, she realized she wanted to share her own journey and what she’d learned in the process.\nSo what exactly is fascia? Fascia is the structural web in the body that connects all the parts together: organs, muscles, tendons, and nerves are all surrounded by it. Fascia is richly innervated by sensory nerves, and plays an important role in proprioception and interoception.\nIn this episode, Jill discusses why stretching feels so good, and suggests healthier ways to achieve that feeling. She touches on why tears in connective tissue, especially tendons and ligaments, are particularly challenging to repair, and thus why it’s important for bendy bodies to understand fascia.\n Jill believes that understanding fascia gives us insight into more effective and efficient ways to alter perceived tightness and transform your embodied sense of the musculoskeletal system, and wants to help people define longevity strategies for healthy movement patterns. Finally, Jill speaks about her book “The Roll Model” and how she developed her own fascial mobilization system - and wants to share it with everyone! Whether you’re new to the fascial world  or wanting a deeper look, there’s something for everyone in this episode.  For the Anatomy Trains program,visit: https://tuneup.fit/6DVqIz",
    "tags": [
      "Exercise",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2951620650.mp3?updated=1721670675",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jill Miller"
    ],
    "guestImages": []
  },
  {
    "num": 29,
    "title": "29. Capturing Limitless Authenticity with Rachel Neville",
    "date": "2021-03-11",
    "duration": "59m",
    "description": "Photography encapsulates a moment in time like no other art form, and every artist walks into the studio wanting to capture their best selves. Some walk away ecstatic, while others leave unsatisfied or even injured. Dancers and photographers alike may feel pressure for photos that continue to push the body - and safety - to its limits, to capture the next “WOW!” shot.\nHow do you get pictures that reflect your fullest, most amazing self, without pushing your body too far? How do you find a photographer who understands dancers and will make you feel safe?\nBendy Bodies asked renowned dance photographer Rachel Neville these very questions.\nRachel’s passion for dancers is evident as she discusses the ways she helps dancers get the perfect arabesque or action shot. But she also understands the tension a  photographer wrestles with, of wanting to push boundaries in art while at the same time protecting the dancer and creating a safe space. What is the photographer’s responsibility in making sure a dancer stays physically and emotionally safe?\nRachel offers practical tips on developing a session organically, finding your “best self” and working into it. She reveals why she treats a shoot like a ballet class, shares the reason photography shoots take patience and practice from both the photographer and the dancer, and explains why the foundational elements of how the shoot is built are just as important as using the right muscles in a movement.\nRachel discusses how she makes dancers feel confident and safe in a shoot, and find their emotional expression through their movements. She emphasizes the importance of letting dancers know that the photographer “has your back”, and opens up about what she wishes all dancers could know before a photo shoot, offering questions to ask photographers beforehand.\nAnd for all artists, Rachel asks the question:\nHow do we find our authentic self, and truly show what we have to offer?\nIf you’re a photographer, artist, or simply a fan, you’ll love the wisdom in this episode. \nLink is in bio, or listen on your favorite streaming platform!\n#rachelneville #rachelnevillestudios #dancephotography #dance #bendybodies #bendybodiespodcast #hypermobility #hypermobilitymd #lindabluesteinmd #jennifermilner #bodiesinmotion",
    "tags": [
      "Exercise",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8683988177.mp3?updated=1721670447",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Rachel Neville"
    ],
    "guestImages": []
  },
  {
    "num": 28,
    "title": "28. Caring for the Adolescent Artist",
    "date": "2021-02-25",
    "duration": "49m",
    "description": "What support does a hypermobile young artist need?\nHint: a lot.\nHypermobile dancers, gymnasts, skaters, circus artists: the same hypermobility that gives them extraordinary lines and range of motion, also makes them vulnerable to injury, mental health issues, and more. They have unique needs and susceptibilities - so how do we help them?\nFor this episode, several members of Team Bendy Bodies sit down to discuss a whole-body (and mind) approach to caring for adolescent artists. Specialist Linda Bluestein MD, trainer and ballet coach Jennifer Milner, nutritionist Kristin Koskinen, and EDS Wellness ambassador Aidan Leslie speak frankly about the requirements in working with adolescent bendy bodies, from their “superpowers” to their “kryptonite”.\nWe discuss how parents can find help for their adolescent artist, and when to start putting together a “pit crew” to have on hand. Aidan shares her own story and offers suggestions on how to advocate for yourself as a teen artist looking to stay healthy in classes that don’t allow for modifications for hypermobility dancers. Kristin describes signs of disordered eating, and how to get help with fueling. Dr. Bluestein looks at symptoms of hypermobility that go beyond “flexibility” and discusses how “hypermobile” doesn’t always equal “flexible”. Jennifer shares her experiences training hypermobile dancers and mentoring them down that narrow path of working hard to be strong while knowing when to pull back to avoid injury.\nAnd finally, we discuss the importance of mental health in the adolescent artist and why it’s always better to address something when it’s “little” than wait until it’s “big”. As Kristin points out, “Emotional owies have a harder time healing.”\nAre you a pre-professional artist? This episode can give you guidance on how and when to ask for help as well as how to advocate for yourself. If you’re a parent, teacher, coach, or mentor, this is a must-listen as we discuss how it really takes a village to raise a hypermobile artist.\n#traininghypermobiledancers #hypermobileathletes #mentalhealthfordancers #disorderedeating #mentalhealthfordancers #hypermobility #dancerlife #hypermobiledancer #hypermobileballet #hyperextensiondance #BendyBodies #BendyBodiespodcast #TeamBendyBodies #HypermobilityMD #LindaBluesteinMD #JenniferMilner #BodiesInMotion #balletwhisperer #KristinKoskinenRDN #eatwellpros #atypicalAidan",
    "tags": [
      "EDS",
      "Nutrition",
      "Mental Health",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2222544762.mp3?updated=1721670307",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jennifer Milner",
      "Kristin Koskinen",
      "Aidan Leslie"
    ],
    "guestImages": []
  },
  {
    "num": 27,
    "title": "27. Supporting the Pelvic Floor with Jeanice Mitchell, PT",
    "date": "2021-02-11",
    "duration": "1h 2m",
    "description": "What the heck is a pelvic floor and why should you care?\nThe pelvic floor is a collection of muscle and connective tissue forming a hammock at the bottom of your pelvis. Hypermobile people should be especially aware of their pelvic floor, as connective tissue disorders can cause ligaments and tendons to stretch and weaken, creating problems in this crucial area of the body.\nJeanice Mitchell, a pelvic floor physical therapist and worldwide educator on the topic, joins Bendy Bodies to share her wisdom on common pelvic floor issues with hypermobility. She takes us through ways to recognize pelvic floor issues and warning signs of pelvic floor dysfunction. She also touches on pelvic organ prolapse and why this is relevant in hypermobile folks.\nJeanice discusses when someone might seek out a pelvic floor PT, how hormones can affect pelvic floor tissue, and how pelvic floor health is important for all ages, and for men as well as women. We touch on common dysfunctions in the hypermobile population such as constipation, pelvic pain, and sexual dysfunction, as well as dysfunction of the pupic symphysis and sacroiliac joints.\nThis episode is packed with tips for improving your own pelvic floor health, and Jeanice’s passion and enthusiasm for pelvic floor health shines throughout the interview. As she said, Jeanice is “happy to connect people with hope and help.”\nFor more information about Jeanice follow her on Instagram:\nhttps://www.instagram.com/mypelvicfloormuscles/\nFor multi-lingual information:\nhttps://www.instagram.com/mypfm/\nHealthcare professionals, follow her here:\nhttps://www.instagram.com/mypfm.ambassadors/\nCheck out Jeanice's website:\nhttps://www.mypfm.com/\n#mypfm #pelvicfloorPT #pelvicfloorsolutions #mypelvicfloormuscles #JeaniceMitchell #JenniferMilner #balletwhisperer #BodiesinMotion #HypermobilityMD #LindaBluesteinMD #HypermobilityDance #HypermobilityBallet #HypermobileDancers #Hypermobility #BendyBodies #BendyBodiesPodcast #HypermobilitySpectrumDisorders #HSD #EhlersDanlosSyndromes #EDS #zebrastrong",
    "tags": [
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2537621519.mp3?updated=1721670362",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jeanice Mitchell, PT"
    ],
    "guestImages": []
  },
  {
    "num": 26,
    "title": "26. Balancing Seasonal Fueling Patterns with Kristin Koskinen, RDN",
    "date": "2021-01-28",
    "duration": "53m",
    "description": "Do you love a fresh start? Have you ever made a new year's resolution and then dreaded it? \nIt’s common for people to look at eating habits, make bold, sweeping commitments, and vow to be perfect this month/year/lifetime. But that’s not realistic, or healthy - physically or emotionally. And since people with hypermobility disorders are statistically more likely to display obsessive behaviors like disordered eating, it's something we need to talk about. \nKristin Koskinen, RDN is back with Bendy Bodies to talk about this potential minefield of a season. \nShe reminds us that self-improvement is different from self-abuse, and that “being good” does NOT equal “restrictive”. Kristin points out that fear can be a significant driver and that each person’s fear, guilt, or insecurity must be acknowledged. She encourages people to look at the “why” behind wanting to make behavior changes and promotes moving forward with small baby steps. \nKristin discusses how extrinsic devices aren’t necessarily helpful or accurate, how labels might box us in, and reminds us of the importance of not trying to “undo” what we’ve already done, but to simply try to move forward. \nThis episode is for anyone struggling physically or emotionally with food patterns, or even for the healthy dancer looking to be more mindful of her nourishment.",
    "tags": [
      "Nutrition",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6754918166.mp3?updated=1721670341",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Kristin Koskinen, RDN"
    ],
    "guestImages": []
  },
  {
    "num": 25,
    "title": "25. Addressing Pain in Hypermobility Disorders with Linda Bluestein, M.D.",
    "date": "2021-01-14",
    "duration": "59m",
    "description": "Why are hypermobility disorders painful and what can be done about it? When discussing conditions associated with hypermobility, like Ehlers-Danlos Syndromes (EDS) or hypermobility spectrum disorders (HSD), pain is often mysteriously left out of the conversation despite the fact that persistent pain can be very much a part of many peoples’ lives. Addressing pain early in the process is vital for long-term health and well-being. \nBendy Bodies founder, Dr. Bluestein, takes the guest seat in this episode as she peels back the onion-like layers of the development of chronic pain and options for managing it. She discusses factors that influence how much pain a person experiences, and names some frequently missed contributors to chronic pain. Dr. Bluestein dispels some common myths about chronic pain, and explains why our thoughts and actions are important in how we perceive pain. She cautions that there’s often no one single solution to pain and shares her multidisciplinary approach to a patient experiencing chronic pain, breaking down each step of her long-term care plan. \nA perfect companion to Episode 24, with Beth Darnall, \"Thriving with Chronic Pain\", this episode is great for anyone suffering from chronic pain. \nhttps://www.danceusa.org/informational-papers https://www.hypermobilitymd.com/ https://www.ehlers-danlos.com/ https://www.chronicpainpartners.com/ https://edswellness.org/ https://www.ehlers-danlos.org/ http://hypermobility.org/ https://tinyurl.com/bendybodiesyoutube https://tinyurl.com/bendybodiesapplepodcast https://www.rcgp.org.uk/clinical-and-research/resources/toolkits/ehlers-danlos-syndromes-toolkit.aspx",
    "tags": [
      "EDS",
      "Pain",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9259521607.mp3?updated=1721669913",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": []
  },
  {
    "num": 24,
    "title": "24. Thriving with Chronic Pain with Beth Darnall, PhD",
    "date": "2020-12-30",
    "duration": "34m",
    "description": "Living with hypermobility disorders often means learning to live with chronic pain, and as pain is a whole-person experience - physical, emotional, and mental - it stands to reason that pain can have a profound influence on every facet of our daily lives. \nJoining us for this episode is Beth Darnall, a Stanford pain scientist, international speaker, evidence-based psychologist, and author. Beth encourages us to think about pain more broadly, explaining why a multi-disciplinary assessment is so necessary for diagnosing and treating pain. Beth talks about how sleep is a top predictor of pain levels for the next day, and how treatment for sleep disorders can help with chronic pain. She goes in-depth on the topic of treating chronic pain using behavioral treatments so people are empowered to help themselves, and lists some of the best ways people can improve chronic pain. \nBeth gives suggestions on how to reduce pain-related distress, discusses the importance of dedicating time to practicing skills and strategies that help people live with chronic pain, and reminds us that it’s what we do in the day-to-day that makes the difference, more than what happens with sporadic office visits. \nCheck out this must-listen episode for anyone struggling to cope with chronic pain! https://bethdarnall.com/",
    "tags": [
      "Pain",
      "Diagnosis",
      "Treatment",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6810236303.mp3?updated=1721669907",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Beth Darnall, PhD"
    ],
    "guestImages": []
  },
  {
    "num": 23,
    "title": "23. Empowering Patients with Multisystemic Diseases with Jill Schofield, M.D.",
    "date": "2020-12-03",
    "duration": "36m",
    "description": "Dr. Jill Schofield, founder and director of the Center for Multisystem Disease, is back to discuss multisystemic diseases and what she wishes everyone knew about them. She offers insight into how to get better care (and what to avoid), the pros and cons of having more or less lenient diagnostic criteria for diseases such as hypermobile Ehlers-Danlos Syndrome (hEDS), and advice on what to do if you suspect you have MCAS. \nDr. Schofield explores possible reasons for the increased incidence of autoimmune disease, and gives guidance on finding the help you need in today’s online world. If you missed Dr. Schofield's first interview with us, please be sure to listen to our previous episode, \"Investigating Autoimmune Disorders with Dr. Jill Schofield\", for more great insight! \nVisit www.BendyBodiesPodcast.com for links to all episodes. \nThank you so very much to Dr. Jill Schofield for being so generous with her time and expertise! \nVisit the link below to more information about Dr. Schofield (with fabulous photos from MCAS retreats including one with Bendy Bodies founder, Dr. Linda Bluestein). https://www.centerformultisystemdisease.com/contents/about/about-dr-schofield",
    "tags": [
      "EDS",
      "MCAS",
      "Diagnosis",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6560601643.mp3?updated=1721669900",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jill Schofield, M.D"
    ],
    "guestImages": []
  },
  {
    "num": 22,
    "title": "22. Managing Dysautonomia with Svetlana Blitshteyn, M.D.",
    "date": "2020-11-19",
    "duration": "49m",
    "description": "In this second interview with Dr. Svetlana Blitshteyn, board-certified neurologist and director of the Dysautonomia Clinic, we go beyond identifying common disorders such as POTS (Postural Orthostatic Tachycardia Syndrome), and take a look at how people with these conditions can improve their quality of life. \nDr. Blitshteyn talks about effective exercises for people with POTS, easy steps to boost sodium and fluid intake, and how important it is to address sleep disorders in this population. She discusses why people might need to be tested for comorbidities such as EDS (Ehlers-Danlos Syndromes) or autoimmune disorders, the difficulty in treating fatigue in this population, and how people can find help with their dysautonomia. \nDr. Blitshteyn also explains post-viral dysautonomia and why it’s important to understand in this time of COVID, and expresses her hopes for the future of dysautonomia treatment and research. \nLearn about Dr. Blitshteyn, https://www.dysautonomiaclinic.com/ Facebook: https://www.facebook.com/DysautonomiaClinic/ Twitter: https://twitter.com/dysclinic Learn about Bendy Bodies: Website: https://www.hypermobilitymd.com/podcast Instagram: @bendy_bodies Facebook: https://www.facebook.com/BendyBodiesPodcast/ \nLearn about Dr. Linda Bluestein: Website: https://www.hypermobilitymd.com Instagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nLearn about Jennifer Milner: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "EDS",
      "POTS",
      "Exercise",
      "Treatment",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3213316922.mp3?updated=1721669950",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Svetlana Blitshteyn, M.D"
    ],
    "guestImages": []
  },
  {
    "num": 21,
    "title": "21. Demystifying Dysautonomia with Svetlana Blitshteyn, M.D.",
    "date": "2020-11-05",
    "duration": "44m",
    "description": "Dysautonomia is an umbrella term used to describe disorders of the autonomic nervous system (which controls all the automatic functions of the body like blood pressure, heart rate, digestion, temperature regulation, etc.). Dr. Svetlana Blitshteyn, a board-certified neurologist and director of the Dysautonomia Clinic, joins us as we dig into these disorders and explore their defining features. \nPOTS (Postural Orthostatic Tachycardia Syndrome), small-fiber neuropathy, and neurocardiogenic syncope are frequent comorbidities with EDS (Ehlers-Danlos Syndromes), Marfan Syndrome, and other disorders of connective tissue. Dr. Blitshteyn discusses who is considered high-risk for POTS, explains neurocardiogenic syncope and small-fiber neuropathy, and talks about the difference between the three disorders. She explores common symptoms of POTS and outlines frequent comorbidities such as MCAS (Mast Cell Activation Syndrome), IBS (Irritable Bowel Syndrome), and EDS. \nFinally, Dr. Blitshteyn answers the question - Is there a link between dysautonomia and autoimmune issues? \nAn in-depth exploration of dysautonomia and what that might entail for the hypermobile population, this episode is important for patients and healthcare professionals alike who are eager to learn about these complex disorders. \nLearn about Dr. Blitshteyn, https://www.dysautonomiaclinic.com/ Facebook: https://www.facebook.com/DysautonomiaClinic/ Twitter: https://twitter.com/dysclinic \nLearn more about Dr. Linda Bluestein, the Hypermobility MD at our website and be sure to follow us on social media: Website: https://www.hypermobilitymd.com Instagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1684426300.mp3?updated=1721670244",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Svetlana Blitshteyn, M.D"
    ],
    "guestImages": []
  },
  {
    "num": 20,
    "title": "20. Building Better Bone Strength with Rebekah Rotstein",
    "date": "2020-10-22",
    "duration": "1h 26m",
    "description": "Osteoporosis is a disease that affects tens of millions of people each year. Dancers and other high-level athletes are often at higher risk due to low body weight, increased time indoors, and suboptimal nutritional support. \nRebekah Rotstein is a former pre-professional dancer who received a shocking diagnosis of osteoporosis at age 28, and then spent the next several years looking for ways to optimize her bone strength through exercise and nutrition. Rebekah is a movement educator and certified Pilates instructor who has presented at conferences and symposia around the world on the topics of bone health, anatomy and movement, and is the founder of Buff Bones®, a research-supported system combining education and focused exercises aimed at the optimization of bone and joint health. \nRebekah shares the knowledge she’s gained in her extensive research on osteoporosis and stresses that a diagnosis isn’t the end of the world but rather a test for advocating for oneself. She discusses why bone density is especially important for those with hypermobility disorders. She theorizes on why dancers should be informed about osteoporosis, and emphasizes the importance of finding a good nutritionist, trainer, and more. \nFinally, Rebekah shares how her diagnosis planted a desire to help people with osteoporosis, and to help future generations prevent it. \nLinks: https://buff-bones.com/ https://www.instagram.com/gotbuffbones/?hl=en https://www.instagram.com/rebekahrotstein/?hl=en Rebekah@buff-bones.com",
    "tags": [
      "Nutrition",
      "Exercise",
      "Diagnosis",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5076358313.mp3?updated=1721669955",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Rebekah Rotstein"
    ],
    "guestImages": []
  },
  {
    "num": 19,
    "title": "19. Living fully with a Hypermobility Disorder with Linda Bluestein, M.D.",
    "date": "2020-10-08",
    "duration": "50m",
    "description": "In this second interview with Bendy Bodies host Dr. Linda Bluestein, she explores the realities of living with a connective tissue disorder. As a renowned hypermobility expert, Dr. Bluestein discusses issues that can exist alongside Hypermobility Spectrum Disorder (HSD) or Ehlers-Danlos Syndromes (EDS), such as autoimmune issues, dysautonomia, and more. She shares her acronym for maintaining a high quality of life, discusses the small changes that can add up to meaningful improvement in quality of life, and reveals her hopes for the future of HSD/EDS research and treatment. \nLearn more about Dr. Linda Bluestein, the Hypermobility MD at our website and be sure to follow us on social media: Website: https://www.hypermobilitymd.com Instagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "EDS",
      "POTS",
      "Treatment",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2198554824.mp3?updated=1721669961",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda Bluestein"
    ],
    "guestImages": []
  },
  {
    "num": 18,
    "title": "18. Molding Healthy, Successful Artists with Mariaelena Ruiz",
    "date": "2020-09-25",
    "duration": "57m",
    "description": "How do you prepare a hypermobile student for the rigors of the professional dance world, finding that balance of exploring their gifts while moving cautiously to avoid injury? In this episode, we are joined by Mariaelena Ruiz, director of Cary Ballet Conservatory’s Professional Training Program and recipient of the 2019 Outstanding Teacher Award at the Youth America Grand Prix NYC Finals. She discusses her experiences training high-level dancers who wrestle with their hypermobility. \nMariaelena brings her decades as a professional ballerina with a wonky body to her classroom and has a personal understanding of the struggles hypermobile dancers face. She asserts that her injuries also made her both a better dancer and a better teacher, and made her a firm believer in cross-training. She discusses why her teaching is focused on strength and not bendiness, and how she shapes a student’s training over the course of several years. \nWe talk about why slower is better, and how she and her team approach the long-term training of a hypermobile dancer. She shares tips for teachers of hypermobile dancers, gives advice for frustrated bendy dancers, and reveals what she’d like to see support-wise from the dance medicine community. \nFull of thoughtfulness and packed with advice, Mariaelena’s interview is not one to miss! \nLearn about Mariaelena Ruiz and follow her on social media: https://www.caryballet.com/ https://www.facebook.com/CaryBallet/ https://www.instagram.com/mariaelenaruizofficial/ https://www.instagram.com/caryballet/ \nLearn about Dr. Linda Bluestein, the hypermobility MD, at our website and be sure to follow us on social media: Website: www.hypermobilitymd.com and www.bendybodies.org Instagram: @hypermobilitymd and @bendy_bodies Twitter: @hypermobilityMD Facebook: www.facebook.com/hypermobilityMD/ and www.facebook.com/bendybodiespodcast/ Pinterest: www.pinterest.com/hypermobilityMD/ LinkedIn: www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "Exercise",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5637813587.mp3?updated=1721669911",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Mariaelena Ruiz"
    ],
    "guestImages": []
  },
  {
    "num": 17,
    "title": "17. Training the Hypermobile Dancer with Jennifer Milner",
    "date": "2020-09-10",
    "duration": "1h 0m",
    "description": "For people working with artistic athletes such as dancers, circus artists, and gymnasts, training the hypermobile body brings its own set of challenges. Shepherding a “wonky body” through healthy training may feel overwhelming and frustrating and, at times, like you’re spinning your wheels. Dr. Linda Bluestein turns the tables to chat with Bendy Bodies' regular guest co-host Jennifer Milner about what it takes to train a hypermobile dancer or athlete. \nJennifer brings her almost twenty years of cross-training dancers across the globe to the conversation, revealing what she’s learned from her dancers and her own dance career navigating injuries with a hypermobile body. She shares what she’s observed in the hypermobile population and how she approaches their training differently than the general population. Jennifer discusses her goals in working with hypermobile dancers and provides concrete suggestions on how to achieve them. She discloses what she wishes dance teachers and medical professionals knew about hypermobile dancers, and how dancers with hypermobility can add longevity to their careers. \nThis interview is full of practical suggestions. It's a must listen for dance teachers, strength and conditioning coaches, healthcare professionals, and dancers themselves! \nLearn about Jennifer Milner: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: www.facebook.com/jennifermilnerbodiesinmotion/ \nLearn about Dr. Linda Bluestein, the hypermobility MD, at our website and be sure to follow us on social media: Website: www.hypermobilitymd.com and www.BendyBodiesPodcast.com Instagram: @hypermobilitymd and @bendybodiespodcast Twitter: @hypermobilityMD Facebook: www.facebook.com/hypermobilityMD/ and www.facebook.com/bendybodiespodcast/ Pinterest: www.pinterest.com/hypermobilityMD/ LinkedIn: www.linkedin.com/in/hypermobilitymd/",
    "tags": [
      "Exercise",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1227104179.mp3?updated=1721669914",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jennifer Milner"
    ],
    "guestImages": []
  },
  {
    "num": 16,
    "title": "16. Empowering Flexibility with Dr. Jen Crane, DPT",
    "date": "2020-08-28",
    "duration": "52m",
    "description": "Extreme flexibility has permeated social media and influenced every physical art form, from dance to ice skating and of course circus arts. As artistic athletes are asked to explore greater and more unstable end ranges of motion, performers are often left to figure out how to stay healthy for themselves. For those artists and athletes, the question isn’t IF they should work in an end range of motion, but HOW. \nDr. Jen Crane, a physical therapist specializing in circus arts, chats with us on how to do just that. She talks about the difference between productive discomfort and non-productive discomfort, and how to self-assess between the two. She weighs in on the pros and cons of seeking a definitive diagnosis for EDS or other connective tissue disorders, and emphasizes the need to be strong in your end range. Jen shares her views on passive versus active stretching, how she increases flexibility with strength drills, and sketches out the changes she’d like to see in circus arts training. \nPerfect for all people with hypermobility looking to learn more about strengthening, as well as anyone wanting to pursue increasing their flexibility in a healthy way, this episode is a wealth of information on stretching and strengthening safely. \nLearn about Jen Crane, PT, DPT, OCS, ATC Website: https://www.cirquephysio.com Instagram: @Cirque_Physio \nLearn more about Dr. Linda Bluestein, the Hypermobility MD, at our website and be sure to follow us on social media: Website: www.hypermobilitymd.com and www.BendyBodiesPodcast.com Instagram: @hypermobilitymd and @bendybodiespodcast Twitter: @hypermobilityMD Facebook: www.facebook.com/hypermobilityMD/ and www.facebook.com/bendybodiespodcast/ Pinterest: www.pinterest.com/hypermobilityMD/ LinkedIn: www.linkedin.com/in/hypermobilitymd/ \nLearn about guest co-host Jennifer Milner: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "EDS",
      "Exercise",
      "Diagnosis",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9291778295.mp3?updated=1721669996",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Jen Crane, DPT"
    ],
    "guestImages": []
  },
  {
    "num": 15,
    "title": "15. Shaping a Healthy Career with Beckanne Sisk",
    "date": "2020-08-11",
    "duration": "44m",
    "description": "Hypermobility is often desired in dancers for the long, beautiful lines it affords. But hypermobility adds its own challenges to dancers seeking a long, healthy career on the stage. \nIn this episode, we chat with principal dancer from Ballet West and international guest star Beckanne Sisk about how she manages her hypermobility. Beckanne opens up about learning to rein in her hypermobility, discovering when to hold back and when to lean into it, as well as how her pre-professional teachers helped her learn control. \nShe talks about how she maintains her strength and flexibility, what her maintenance program looks like, and why she stresses the importance of mentally working correctly while approaching the work thoughtfully. Beckanne speaks frankly about her approach to stretching safely (hint: it’s not about stretching, it’s about strengthening!) and advice she’d like to share with younger hypermobile dancers (hint: stop stretching and start strengthening!) \nBeckanne explains why she’s grateful for her scoliosis and hypermobility, how they’ve challenged and shaped her as a dancer, and what she wants to share with the next generation of dancers. \nA must-listen for every dancer living with the blessings and challenges of hypermobility, this episode is one you won't want to miss!",
    "tags": [
      "Exercise",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5426494925.mp3?updated=1721669928",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Beckanne Sisk"
    ],
    "guestImages": []
  },
  {
    "num": 14,
    "title": "14. Stabilizing the Hypermobile Body through Circus Arts with Emily Scherb, PT, DPT",
    "date": "2020-07-30",
    "duration": "53m",
    "description": "Nowhere is flexibility and hypermobility more valued and explored than in the circus arts! But while circus artists are highly skilled and extremely strong, working in extreme end ranges of motion comes with its own set of issues and potential injuries. In this podcast, we chat with Dr. Emily Scherb, a DPT who specializes in circus and performing arts. \nEmily examines what’s similar (and different) between circus and performing arts, looks at what is “normal” for the circus population, and outlines when to push into your end range and when not to. We explore the differences in rehabilitating the hypermobile versus the non-hypermobile population, who Emily would like to see on an artist’s dream support team, and why she literally wrote the book on anatomy for aerial artists. \nEmily explains why she prioritizes education for instructors and performers alike, and how she wants to change the language of technique and instill self-knowledge for the next generation. Emily believes circus training can be beneficial for all populations, and encourages adults to start recreational classes! \nAs she says, “It’s never too late to come play with the circus!” \nLearn more about Emily: https://www.thecircusdoc.com/ Instagram: @thecircusdoc \nCheck out these educational programs: Intro to circus healthcare discount code makes it just $5 https://circusanatomy.com/p/learning-the-ropes/?product_id=1946251&coupon_code=CIRCUSBODIES \nHanging Analysis of the Shoulder course https://circusanatomy.com/p/hanging-analysis-of-the-shoulder \nLearn more about Dr. Linda Bluestein, the Hypermobility MD at our website and be sure to follow us on social media: Website: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.com Instagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "Exercise",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH2704170298.mp3?updated=1721669909",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Emily Scherb, PT, DPT"
    ],
    "guestImages": []
  },
  {
    "num": 13,
    "title": "13. Healing the Brain Holistically with Ilene Ruhoy M.D., Ph.D.",
    "date": "2020-07-17",
    "duration": "1h 6m",
    "description": "Many conditions found in \"bendy\" people have a neurologic basis, impacting both the brain and nervous system. In this Bendy Bodies episode, Dr. Ilene Ruhoy, the Medical Director and Founder of the Center for Healing Neurology, walks us through the integrative approach she takes to healing the brain and the body. \nDr. Ruhoy discusses the “cross talk” between the gut and the brain and explains how the food we eat and the way we exercise affects our most vital organ, the brain. She covers migraines, myofascial pain, neck pain, “brain fog”, dysautonomia, and more. She shares her approach to the Pentad - EDS, dysautonomia, MCAS, autoimmune diseases, and GI problems - and why she thinks the \"Octad\" may be the more appropriate term. \nDr. Ruhoy explores the connection between hypermobility and dysautonomia, explains how she approaches small fiber neuropathy, and elaborates on the value of packaged protocols as a place for people to start, while acknowledging that everyone has his own story and no two people are alike. \nLearn more about Dr. Ruhoy at https://www.centerforhealingneurology.com \nLearn more about Dr. Linda Bluestein, the Hypermobility MD at our website and be sure to follow us on social media: Website: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.com Instagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "POTS",
      "MCAS",
      "Nutrition",
      "Exercise",
      "Treatment",
      "Neurology",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7295478123.mp3?updated=1721669947",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Ilene Ruhoy M.D., Ph.D"
    ],
    "guestImages": []
  },
  {
    "num": 12,
    "title": "12. Investigating Autoimmune Disorders with Jill Schofield, M.D.",
    "date": "2020-07-02",
    "duration": "1h 7m",
    "description": "World renowned expert in autoimmune disorders and the Founder and Director of the Center for Multisystem Disease, Dr. Jill Schofield, generously chatted with us in a recent interview. Autoimmunity (dysregulation of the immune system) is genetically inherited and will often have multiple triggers. Dr. Schofield discusses the relationship between autoimmune diseases, Ehlers-Danlos Syndromes, and dysautonomia (abnormal function of the autonomic nervous system). She dives into the difference between autoimmune and non-autoimmune dysautonomia and small-fiber neuropathy. She explores diagnoses like antiphospholipid antibody syndrome (APS), when you might seek a work up for APS, and issues a call for action for doctors and researchers in this fast-growing field. \nLearn more about Jill Schofield, M.D.: Website: https://www.centerformultisystemdisease.com Follow us on Instagram: @BendyBodiesPodcast \nFollow Host, Linda Bluestein, M.D.: Website: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.com Instagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nFollow guest co-host, Jennifer Milner: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "EDS",
      "POTS",
      "Diagnosis",
      "Neurology",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5535818240.mp3?updated=1721669927",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Jill Schofield, M.D"
    ],
    "guestImages": []
  },
  {
    "num": 11,
    "title": "11. Understanding Hypermobility Disorders with Linda Bluestein, M.D.",
    "date": "2020-06-18",
    "duration": "28m",
    "description": "In this episode, guest co-host Jennifer Milner interviews Bendy Bodies’ own host, Dr. Linda Bluestein! \nHypermobility disorders can be frustratingly hard to diagnose or even define. From symptomatic joint laxity to connective tissue disorders like Ehlers-Danlos Syndromes (EDS) or Marfan Syndrome, the umbrella of hypermobility disorders covers a number of conditions and up-to-date information can be hard to find. \nBendy Bodies' host, Linda Bluestein, M.D., shares her expertise with Jennifer Milner in this episode, opening up on how she turned the challenge of her own hypermobility disorder into a blessing for others as she made working with hypermobility disorders into her life’s work. \nDr. Bluestein breaks down the different types of hypermobility, discusses the difference between signs and symptoms, and outlines some hallmark signs of connective tissue disorders. \nBe sure to listen to this incredibly informative episode! \nLearn more about Dr. Linda Bluestein, the Hypermobility MD at our website and be sure to follow us on social media: Website: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.com Instagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "EDS",
      "Diagnosis",
      "Genetics",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1193621204.mp3?updated=1721669900",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dr. Linda BLuestein"
    ],
    "guestImages": []
  },
  {
    "num": 10,
    "title": "10. Cultivating Psychological Skills with Bonnie Robson, M.D.",
    "date": "2020-05-28",
    "duration": "1h 15m",
    "description": "Living with stress and anxiety has become the rule rather than the exception in today’s world. Everyone develops coping strategies of some kind, but without encouragement and guidance these strategies can be dysfunctional and even harmful. \nDr. Bonnie Robson talks through the risks inherent in social and physical isolation and how to develop strategies that can support and encourage long-term mental and physical health. She explores how and why sleep is affected by stress offering ways to better regulate this crucial component of the circadian cycle. \nDr. Robson walks through developing a safe place, the importance of paying attention to the present moment, and how and when you should take your emotional temperature. She outlines ways to build several tools for your emotional toolbox, and reminds us that in these times, good enough is a great goal to have. \nLinks: Befrienders Worldwide - https://www.befrienders.org BBC Action Line UK - https://www.bbc.co.uk/actionline/ The Actor's Fund USA - https://actorsfund.org The AFC Canada - https://afchelps.ca IADMS's Response to COVID-19 - https://www.iadms.org/page/coronavirus \nLearn more about Dr. Linda Bluestein, the Hypermobility MD at our website and be sure to follow us on social media: Websites: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.comInstagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "Mental Health",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3089882548.mp3?updated=1721669930",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Bonnie Robson, M.D"
    ],
    "guestImages": []
  },
  {
    "num": 9,
    "title": "9. Educating the Dance Community with Lisa Howell",
    "date": "2020-05-15",
    "duration": "1h 15m",
    "description": "Dancing with a hypermobile body brings its own set of challenges, from a general lack of stability to a slower recovery time. As a young pre-professional, a dancer might not understand why she must find conscious strength before subconscious strength; why daily activities must be examined through the same placement lens as a dance class; and why “boring” and “tedious” can equal “good for you”. \nAs a parent, helping a hypermobile dancer through the pre-professional years can be bewildering and frustrating for people who don’t understand why their daughter must wait another six months to go on pointe, or why they sometimes need to be “the bad guy” and advocate for their dancer at the studio. \nListen in as physiotherapist Lisa Howell explains what every dance teacher needs to know about hypermobile dancers. She discusses the complexity and subtleties of working with an injured hypermobile dancer, how to optimally develop readiness to go on pointe, and how abdominal pain can affect turns and extensions. \nLisa looks at why the key to greater flexibility is building stability, why the ability to self-assess is one of the most important things we can give dancers as human beings, and how this generation of pre-professional dancers will change the dance industry for the better. \nLearn more about Dr. Linda Bluestein, the Hypermobility MD at our websites and be sure to follow us on social media: Websites: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.comInstagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "Exercise",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH3221316644.mp3?updated=1721669946",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Lisa Howell"
    ],
    "guestImages": []
  },
  {
    "num": 8,
    "title": "8. Demystifying Genetics with Paldeep Atwal, M.D.",
    "date": "2020-04-29",
    "duration": "56m",
    "description": "Your DNA holds many secrets.  Why do drugs work on some people and not on others?  Why are conditions expressed so differently in different family members?  How might hypermobility disorders, dysautonomia (like POTS) and Mast Cell Activation Syndrome (MCAS) be related and how does coronavirus fit into all of this?  \nListen in as top geneticist, Dr. Paldeep Atwal, shared his expertise on the following: \n\nHypermobility disorders - Why are Bendy people so different from each other yet can also share many common traits? \n\nEhlers-Danlos Syndromes - Why is it taking so long to find “the hEDS gene” \n\nEpigenetics - How much of a difference do our day to day choices make? \n\nGenetic and pharmacogenetic testing - Why do the testing if you cannot change the outcome?\n\nImportant note: The discussion about nutrition and intermittent fasting refers to the body of research with subjects from the general population. Therefore, this information is most applicable to those who are overweight or obese. You need quality nutrients for your body to perform properly! PLEASE do not make any changes to your diet (meaning foods you eat), without consulting with your own primary care physician or nutritionist. \nLearn more about Dr. Linda Bluestein, the Hypermobility MD at our website and be sure to follow us on social media: Websites: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.comInstagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "EDS",
      "POTS",
      "MCAS",
      "Nutrition",
      "Diagnosis",
      "Genetics",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH5067299934.mp3?updated=1721669948",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Paldeep Atwal, M.D"
    ],
    "guestImages": [
      "Guests/Paldeep_Atwal.jpg"
    ]
  },
  {
    "num": 7,
    "title": "7. Understanding and Preparing for Coronavirus with Immunologist, Dwight McKee, M.D.",
    "date": "2020-04-17",
    "duration": "1h 7m",
    "description": "PLEASE NOTE***:  The following episode was recorded in mid-April 2020, just four weeks after the World Health Organization declared the spread of SARS-CoV-2 (the virus that causes the disease known as COVID-19) as a global pandemic. At that time, schools and all non-essential businesses had been closed and people around the world were being asked to stay home. Scientists were learning a lot at this point, but it was unclear how many people would become ill and what the excess mortality would be. Although there had been some understanding of post viral syndromes prior to the COVID pandemic (like dysautonomia following influenza), we would quickly learn that there would be serious long-term effects of COVID-19 that had never before been witnessed with any other virus.\nReady for some cutting edge COVID-19 science? In this episode, learn new tips and gain insight into the coronavirus situation! SARS-CoV-2, a novel coronavirus, has forever changed the world as we know it. \nWhy is this virus unique? \nWhy does the response to infection vary so dramatically? \nWhat can we do to minimize the risk of infection and decrease the impact if we get sick? \nDwight McKee, M.D., Ph.D., board certified in immunology, medical oncology, hematology, nutrition, and integrative medicine, shares his unique perspective on the Bendy Bodies Podcast. Dr. McKee discusses with Dr. Bluestein useful foods and supplements, psychosocial strategies and special considerations for people with pre-existing conditions. \nLearn more about Dr. Linda Bluestein, the Hypermobility MD at our websites and be sure to follow us on social media: Websites: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.comInstagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "POTS",
      "Nutrition",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH1297740290.mp3?updated=1721670708",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Dwight McKee, M.D"
    ],
    "guestImages": []
  },
  {
    "num": 6,
    "title": "6. Minding the Mental Health Gap with Kathleen McGuire Gaines",
    "date": "2020-04-12",
    "duration": "55m",
    "description": "Traits that can make a dancer so valuable in the dance world - drive, perfectionism, obsessing over details - also put them at higher risk for mental health disorders. And while physical health resources become ever more commonplace in the dance world, mental health resources remain woefully lacking, oftentimes uncomfortably left in a hidden half-shadow. \nA few years ago, Kathleen McGuire Gaines wrote an article, “Why are we still so bad at addressing dancers’ mental health?” for Dance Magazine. The article went viral, becoming one of the most-read articles in the history of the publication, and the response ignited a passion in Kathleen to bring mental health issues to the forefront of conversations, while bringing resources to the doorstep of every dancer. \nIn this Bendy Bodies episode, Kathleen shares her own journey through the mental health minefield of the dance world, and how it spurred her to bring help to the current generation of dancers by founding Minding the Gap, a social good start up for dancers’ mental health. Kathleen talks about how depression isn’t simply weakness, that shame is a terrible motivator, and how encouraging and informing correct coping strategies can make all the difference. \nShe shares her desire to reduce eating disorders by addressing the underlying mental health issues, and reveals why it’s so important to have one specific phone number ready in your phone for sharing. \nJoin us for this important conversation we all should be having. \nLearn more about Dr. Linda Bluestein, the Hypermobility MD, at our websites and be sure to follow us on social media: Websites: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.comInstagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "Mental Health",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH4610908024.mp3?updated=1721669930",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Kathleen McGuire Gaines"
    ],
    "guestImages": []
  },
  {
    "num": 5,
    "title": "5. Optimizing Nutrition to Support a Dancer’s Health with Kristin Koskinen, RDN",
    "date": "2020-04-04",
    "duration": "1h 3m",
    "description": "While many dancers strive to fuel healthily, making the most out of your meals can be overwhelming. In today’s world especially, dancers need strong immune systems and healthy bodies ready for whatever challenge may come next. \nRegistered dietician nutritionist Kristin Koskinen discusses nutritional needs for dancers and how to shape lifelong healthy eating habits. Kristin examines common mistakes dancers make in fueling choices, and how you can shape a flexible diet built to shift around external factors. She’ll explore creating flexible strategies like a Ballet Bento Box and discuss the base requirements of any foundationally strong diet. \nAdditionally, Kristin lists immune-boosting nutrients and how to find them in foods; explores why stress causes nutritional deficiencies; and explains why removing common inflammatory foods from your diet might help your overall health. Join us for this important discussion! As Kristin points out, “What you do now defines how long and how strong you dance.” \nLearn more about Dr. Linda Bluestein, the Hypermobility MD, at our websites and be sure to follow us on social media: Websites: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.comInstagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer Milner at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "Nutrition",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH7636355954.mp3?updated=1721669963",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Kristin Koskinen, RDN"
    ],
    "guestImages": []
  },
  {
    "num": 4,
    "title": "4. Supporting a Dancer’s Mental Health with Psychotherapist, Terry Hyde",
    "date": "2020-03-30",
    "duration": "1h 19m",
    "description": "Dancers train constantly to attain peak performance, working long hours to achieve physical and artistic perfection. Unfortunately, mental health is often sacrificed for that perfection. \nTerry Hyde, former dancer with the Royal Ballet and psychotherapist with patients all over the world, joins Linda and Jennifer to explore this often-neglected aspect of dancer health, and discusses how hypermobility can bring unique mental health problems of its own. Terry discusses the high incidence of anxiety, depression, and OCD (obsessive compulsive disorder) in hypermobile dancers and explores how a dancer’s perfectionism can be both a blessing and a curse. He describes the intrinsic link between the mind and the body, and how anxiety can be reframed into excitement. \nTerry reveals why it’s important to practice talking to your body, and discusses how friends and loved ones can support a dancer needing emotional help - as well as what not to do. \nLearn more about Terry Hyde: https://www.counsellingfordancers.com/about/ https://www.instagram.com/counsellingfordancers/ https://www.facebook.com/counsellingfordancers https://www.linkedin.com/in/terry-hyde-ma-mbacp-b68617176/ https://twitter.com/counselingdance \nLearn more about Dr. Linda Bluestein, the Hypermobility MD, at our websites and be sure to follow us on social media: Websites: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.comInstagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer Milner at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "Mental Health",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH9253405950.mp3?updated=1721669966",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Terry Hyde"
    ],
    "guestImages": []
  },
  {
    "num": 3,
    "title": "3. Preserving the Hip with Orthopedic Surgeon, Joel Wells, M.D.",
    "date": "2020-03-12",
    "duration": "54m",
    "description": "Hypermobility can affect every joint, but perhaps the most complicated one to understand and train is the hip. With a high prevalence of hip injuries in hypermobile dancers and athletes, proper diagnosis and treatment is critical. From hip dysplasia to labral tears, dance science and medicine’s understanding of the hip continues to evolve even as we work to find the most effective ways to treat and strengthen it. \nListen in as Dr. Wells discusses his role as a hip preservationist, why educating a dancer on pathology and proper kinematics is so essential, and how hips are like baseball mitts! \nLearn more about Dr. Linda Bluestein, the Hypermobility MD, at our websites and be sure to follow us on social media: Websites: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.comInstagram: @hypermobilitymd Twitter: @hypermobilityMD Facebook: https://www.facebook.com/hypermobilityMD/ Pinterest: https://www.pinterest.com/hypermobilityMD/ LinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer Milner at the links below: Website: www.jennifer-milner.com Instagram: @jennifer.milner Facebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "Exercise",
      "Diagnosis",
      "Treatment",
      "Hypermobility"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6201815287.mp3?updated=1721669937",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Joel Wells, M.D"
    ],
    "guestImages": []
  },
  {
    "num": 2,
    "title": "Ensuring Longevity: Screening, Strengthening and Supporting with Physiotherapist Moira McCormack (Ep 2)",
    "date": "2020-03-05",
    "duration": "44m",
    "description": "In this continuation of our discussion with Moira McCormack, we delve deeper into Moira’s work as a researcher and tireless advocate for dance science and medicine in the studio setting. Moira talks through the basic screening tests used at the start of each season to help define a dancer’s strength and maintenance program for the year, explains what teachers of hypermobile dancers must understand, and reveals that “It’s never too late to build something else into your body. Nothing is insurmountable.\" \nLearn more about Dr. Linda Bluestein, the Hypermobility MD at our websites and be sure to follow us on social media: \nWebsites: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.com\nInstagram: @hypermobilitymd \nTwitter: @hypermobilityMD \nFacebook: https://www.facebook.com/hypermobilityMD/ \nPinterest: https://www.pinterest.com/hypermobilityMD/ \nLinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer Milner at the links below: \nWebsite: www.jennifer-milner.com \nInstagram: @jennifer.milner \nFacebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "Exercise",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH8006255385.mp3?updated=1733950304",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Moira McCormack"
    ],
    "guestImages": []
  },
  {
    "num": 1,
    "title": "Reducing Injury and Increasing Education with Royal Ballet Physiotherapist, Moira McCormack (Ep 1)",
    "date": "2020-02-26",
    "duration": "44m",
    "description": "Moira’s tireless work with Royal Ballet and the Royal Ballet school have helped build the Royal Ballet into an oft-emulated model of treatment and intervention for ballet dancers. Join us as Moira describes how important a dancer’s early training is - movement patterns, alignment, biomechanics - to increase their career longevity. \nMoira lists concrete, basic rules for training a hypermobile body, emphasizing the importance of strength work, patience in training, and the necessity of recovery time. It is not overstating it to say that Moira’s research, work, and advocacy have made it possible for hypermobile dancers to have longer, healthier careers. \nLearn more about Dr. Linda Bluestein, the Hypermobility MD, at our websites and be sure to follow us on social media: \nWebsites: https://www.hypermobilitymd.com and www.BendyBodiesPodcast.com\nInstagram: @hypermobilitymd \nTwitter: @hypermobilityMD \nFacebook: https://www.facebook.com/hypermobilityMD/ \nPinterest: https://www.pinterest.com/hypermobilityMD/ \nLinkedIn: https://www.linkedin.com/in/hypermobilitymd/ \nAnd follow guest co-host Jennifer Milner at the links below: \nWebsite: www.jennifer-milner.com \nInstagram: @jennifer.milner \nFacebook: https://www.facebook.com/jennifermilnerbodiesinmotion/",
    "tags": [
      "Exercise",
      "Treatment",
      "Hypermobility",
      "Research"
    ],
    "audioUrl": "https://p.podderapp.com/9752035609/traffic.megaphone.fm/TCAHH6001522170.mp3?updated=1733949523",
    "snippets": [],
    "transcript": "",
    "guests": [
      "Moira McCormack"
    ],
    "guestImages": []
  }
];
