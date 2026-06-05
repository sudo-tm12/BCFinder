
/* ═══════════════════════════════════════════════════════════
   KNOWLEDGE BASE — Belgium Campus IT Programmes
   Source: belgiumcampus.ac.za (public information)
═══════════════════════════════════════════════════════════ */
const KNOWLEDGE_BASE = {
  programmes: [
    {
      id: "bcomp",
      name: "Bachelor of Computing",
      shortName: "BComp",
      type: "Degree",
      level: "NQF 8",
      saqa: "62689",
      credits: 506,
      duration: "3 years academic + 1 year workplace",
      aps: 26,
      mathsRequired: true,
      minMathsLevel: 4,
      minEnglishLevel: 4,
      campuses: ["Pretoria", "Kempton Park", "Stellenbosch"],
      specialisations: ["Data Science", "Software Engineering"],
      careers: ["Software Engineer", "Data Scientist", "Systems Analyst", "IT Manager", "Solutions Architect"],
      description: "A comprehensive NQF 8 undergraduate degree covering software engineering, data science, databases, and advanced computing. Includes a mandatory 1-year workplace component.",
      keywords: ["bcomp", "bachelor of computing", "computing", "degree", "nqf 8", "data science", "software engineering", "bachelor", "bsc"]
    },
    {
      id: "bit",
      name: "Bachelor of Information Technology",
      shortName: "BIT",
      type: "Degree",
      level: "NQF 7",
      saqa: "94121",
      credits: 360,
      duration: "3 years full-time",
      aps: 24,
      mathsRequired: true,
      minMathsLevel: 4,
      minEnglishLevel: 4,
      campuses: ["Pretoria", "Kempton Park"],
      specialisations: ["Software Development"],
      careers: ["Software Developer", "Systems Analyst", "IT Manager", "Web Developer"],
      description: "A 3-year NQF 7 degree specialising in Software Development, available full-time at Pretoria and Kempton Park campuses.",
      keywords: ["bit", "bachelor of information technology", "information technology", "degree", "nqf 7", "software development", "bachelor"]
    },
    {
      id: "bit-pt",
      name: "Bachelor of Information Technology — Part-Time",
      shortName: "BIT Part-Time",
      type: "Degree",
      level: "NQF 7",
      saqa: "94121",
      credits: 360,
      duration: "Flexible schedule",
      aps: 24,
      mathsRequired: true,
      minMathsLevel: 4,
      minEnglishLevel: 4,
      campuses: ["Pretoria", "Kempton Park"],
      specialisations: ["Software Development"],
      careers: ["Software Developer", "Systems Analyst", "IT Manager", "Web Developer"],
      description: "The same NQF 7 BIT degree offered on a flexible, part-time schedule — ideal for working students at Pretoria and Kempton Park.",
      keywords: ["bit part-time", "part time", "part-time", "flexible", "working student", "degree", "bachelor"]
    },
    {
      id: "dip-it",
      name: "Diploma in Information Technology",
      shortName: "Diploma IT",
      type: "Diploma",
      level: "NQF 6",
      duration: "3 years full-time",
      aps: 20,
      mathsRequired: false,
      minMathsLevel: 0,
      minEnglishLevel: 3,
      campuses: ["Pretoria", "Kempton Park", "Stellenbosch"],
      specialisations: ["Infrastructure", "Software Development"],
      careers: ["Junior Developer", "IT Technician", "Network Administrator", "Systems Support"],
      description: "A practical 3-year NQF 6 diploma with specialisations in Infrastructure or Software Development. Also available for Deaf students (Software Development track).",
      keywords: ["diploma", "it", "technical", "practical", "infrastructure", "network", "support", "deaf", "nqf 6"]
    },
    {
      id: "adv-dip-cybersec",
      name: "Advanced Diploma in Cybersecurity",
      shortName: "Adv Dip Cybersecurity",
      type: "Advanced Diploma",
      level: "NQF 7",
      saqa: "124166",
      credits: 120,
      duration: "1 year minimum",
      aps: 0,
      prereq: "NQF Level 6 IT qualification (e.g. Diploma in IT)",
      mathsRequired: false,
      minMathsLevel: 0,
      minEnglishLevel: 0,
      campuses: ["Online (live scheduled sessions)"],
      specialisations: ["Secure Electronic Communication Networks", "Secure Software Development"],
      careers: ["Cybersecurity Analyst", "Penetration Tester", "Security Engineer", "SOC Analyst"],
      description: "An NQF 7 online qualification (live scheduled sessions) focusing on cybersecurity. Requires a prior NQF Level 6 IT qualification. Two specialisations available.",
      keywords: ["cybersecurity", "cyber security", "advanced diploma", "security", "nqf 7", "online", "ethical hacking", "infosec"]
    },
    {
      id: "pgd-cybersec",
      name: "Postgraduate Diploma in Cybersecurity Risk Management",
      shortName: "PGD Cybersec Risk",
      type: "Postgrad",
      level: "NQF 8",
      duration: "1 year",
      aps: 0,
      prereq: "Bachelor's degree with 60%+ average",
      mathsRequired: false,
      minMathsLevel: 0,
      minEnglishLevel: 0,
      campuses: [],
      specialisations: ["Cybersecurity Risk Management"],
      careers: ["Cybersecurity Risk Manager", "IT Governance Specialist", "CISO"],
      description: "An advanced postgraduate qualification in cybersecurity risk management for graduates with a relevant Bachelor's degree and 60%+ average.",
      keywords: ["postgrad", "cybersecurity risk", "risk management", "advanced", "graduate", "pgd"]
    },
    {
      id: "mit",
      name: "Master in Information Technology",
      shortName: "MIT",
      type: "Master's",
      level: "NQF 8",
      duration: "Varies",
      aps: 0,
      prereq: "Bachelor's degree with 65%+ weighted average",
      mathsRequired: false,
      minMathsLevel: 0,
      minEnglishLevel: 0,
      campuses: [],
      specialisations: [],
      careers: ["IT Researcher", "Senior IT Manager", "University Lecturer"],
      description: "A Master's degree in IT for high-achieving graduates. Requires a relevant Bachelor's degree with a 65%+ weighted average.",
      keywords: ["masters", "master's", "mit", "postgraduate", "research", "advanced degree", "honours"]
    }
  ],

  careers: {
    "Software Developer": { demand: "Very High", avgSalary: "R25 000–R60 000/month", skills: ["Programming", "Databases", "APIs", "Git"], path: "Bachelor of Computing (BComp) or BIT" },
    "Cybersecurity Analyst": { demand: "High", avgSalary: "R30 000–R70 000/month", skills: ["Networking", "Security", "Ethical Hacking", "SIEM"], path: "Diploma IT → Advanced Diploma in Cybersecurity" },
    "Data Scientist": { demand: "Very High", avgSalary: "R40 000–R90 000/month", skills: ["Python", "ML", "Statistics", "SQL"], path: "Bachelor of Computing (Data Science specialisation)" },
    "Network Administrator": { demand: "High", avgSalary: "R18 000–R40 000/month", skills: ["Cisco", "Networking", "Cloud", "Linux"], path: "Diploma IT (Infrastructure specialisation)" },
    "IT Support Technician": { demand: "High", avgSalary: "R8 000–R20 000/month", skills: ["Hardware", "Windows", "Help Desk", "Troubleshooting"], path: "Diploma IT" }
  }
};

/* ═══════════════════════════════════════════════════════════
   RULE ENGINE — Pattern matching & intent classification
═══════════════════════════════════════════════════════════ */
const RuleEngine = {
  patterns: [
    { intent: "greeting", regex: /^(hi|hello|hey|good morning|good day|howzit|sup)\b/i },
    // programme_detail is checked FIRST (before career_paths) so "career outcomes" in a programme
    // question does not accidentally trigger the career overview response.
    // Returns null in _ruleResponse → falls through to AI for a specific, detailed answer.
    { intent: "programme_detail", regex: /tell me (more )?about (the |a |an )?(bachelor|bcomp|b\.?it|diploma|higher cert|certificate|postgrad|short course|advanced diploma|programme|qualification|computing|information tech)|more about the|details.*(?:bsc|diploma|certificate|programme)|about the (?:bsc|diploma|higher cert|bachelor)/i },
    { intent: "course_list", regex: /what.*courses|courses.*offer|list.*courses|all.*programmes|what.*offer|qualifications available/i },
    { intent: "diploma_vs_degree", regex: /diploma.*degree|degree.*diploma|difference between|which is better|diploma or degree/i },
    { intent: "career_inquiry", regex: /what does .* do|how do i become .*|tell me about .*|role of .*|what is a .*|career as .*|job as .*|become .*|how to become .*/i },
    { intent: "cybersecurity", regex: /cybersecurity|cyber security|hacking|ethical hacking|security/i },
    { intent: "learnership", regex: /learnership|internship|bursary|funding|fees|financial aid|seta/i },
    { intent: "online_study", regex: /online|distance|part.time|work and study|remote/i },
    { intent: "requirements", regex: /requirements|matric subjects|what subjects|admission|entry requirements|do i need/i },
    { intent: "aps_query", regex: /my score|how many points|aps of (\d+)|i have (\d+) aps/i },
    { intent: "specific_aps", regex: /(\d{2})\s*aps|aps\s*(?:of\s*|score\s*(?:is\s*|=\s*)?)(\d{2})/i },
    { intent: "aps_info", regex: /what is aps|how.*aps.*work|explain aps|what does aps mean|how.*calculate.*aps|aps.*calculated/i },
    { intent: "contact_apply", regex: /how.*(?:do i )?apply|application.*process|contact.*(?:campus|belgium)|apply.*belgium|admission.*(?:deadline|process)|how.*register|where.*apply/i },
    { intent: "postgrad", regex: /postgrad(?:uate)?|post.grad|after.*(?:degree|diploma)|further.*stud(?:y|ies)|honours|masters/i },
    // career_paths is now LAST and uses specific phrases instead of bare "career"/"job"/"work"
    { intent: "career_paths", regex: /career paths?|career options?|what careers?|what jobs?|job prospects?|salary|earn|employment|after studying|after i graduate/i },
  ],

  classify(text) {
    for (const { intent, regex } of this.patterns) {
      const m = text.match(regex);
      if (m) {
        if (intent === "career_inquiry") {
          const career = this.extractCareer(text);
          return { intent, match: career ? [career] : m };
        }
        return { intent, match: m };
      }
    }
    return { intent: "general", match: null };
  },

  extractCareer(text) {
    const lower = text.toLowerCase();
    for (const career of Object.keys(KNOWLEDGE_BASE.careers)) {
      if (lower.includes(career.toLowerCase())) return career;
    }
    return null;
  },

  extractAPS(text) {
    const m = text.match(/\b([1-9]\d)\b/);
    return m ? parseInt(m[1]) : null;
  }
};

/* ═══════════════════════════════════════════════════════════
   RECOMMENDATION ENGINE — APS-based course matching
═══════════════════════════════════════════════════════════ */
const RecommendationEngine = {
  score(programme, aps, mathsLevel, englishLevel) {
    let score = 0;
    const apsGap = aps - programme.aps;

    if (programme.type === "Advanced Diploma" || programme.type === "Postgrad" || programme.type === "Master's") return { score: 0, tier: "low" };

    if (apsGap >= 6) score = 95;
    else if (apsGap >= 3) score = 82;
    else if (apsGap >= 0) score = 68;
    else if (apsGap >= -3) score = 45;
    else return { score: 10, tier: "low" };

    if (mathsLevel && mathsLevel >= programme.minMathsLevel + 1) score = Math.min(score + 5, 100);
    if (mathsLevel && mathsLevel < programme.minMathsLevel) score = Math.max(score - 20, 10);
    if (englishLevel && englishLevel < programme.minEnglishLevel) score = Math.max(score - 15, 10);

    const tier = score >= 75 ? "high" : score >= 50 ? "mid" : "low";
    return { score, tier };
  },

  recommend(aps, mathsLevel, englishLevel) {
    return KNOWLEDGE_BASE.programmes
      .map(p => ({ programme: p, ...this.score(p, aps, mathsLevel, englishLevel) }))
      .filter(r => r.score > 15)
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  }
};

/* ═══════════════════════════════════════════════════════════
   RESPONSE BUILDER — Rule-based structured responses
═══════════════════════════════════════════════════════════ */
const ResponseBuilder = {
  greeting() {
    return {
      text: "Hello! Welcome to BC CourseFinder. I'm here to help you find the right IT qualification at Belgium Campus.\n\nYou can:\n• Enter your Matric results above for instant course matching\n• Ask me about any IT programme, career path, or learnership\n• Ask about APS requirements, Diploma vs Degree, or Cybersecurity\n\nWhat would you like to know?",
      cards: null
    };
  },

  courseList() {
    return {
      text: "Belgium Campus offers the following IT qualifications:\n\n💡 Click any card to see full programme details.",
      cards: KNOWLEDGE_BASE.programmes.map(p => ({
        name: p.name,
        meta: `${p.type} · ${p.level} · ${p.duration}${p.aps > 0 ? ` · Min APS: ${p.aps}` : ''}`,
        score: p.aps > 0 ? Math.min(90, 40 + p.aps * 2) : 50,
        tier: p.type === "Degree" ? "high" : p.type === "Diploma" ? "mid" : "low",
        onclick: () => addMessage(ResponseBuilder.programmeDetails(p), "bot")
      }))
    };
  },

  diplomaVsDegree() {
    return {
      text: "Great question! Here are Belgium Campus's undergraduate IT qualifications compared:\n\n📋 Diploma in IT (NQF 6)\n• 3 years full-time · Pretoria, Kempton Park, Stellenbosch\n• Specialisations: Infrastructure or Software Development\n• NSC endorsed for Diploma studies\n• Leads to: Junior Developer, IT Technician, Network Admin\n• Great entry point — practical & industry-focused\n\n🎓 Bachelor of Information Technology — BIT (NQF 7)\n• 3 years full-time (also available part-time) · Pretoria, Kempton Park\n• Specialisation: Software Development\n• NSC for Degree + 50%+ English & Pure Maths\n• Leads to: Software Developer, Systems Analyst, IT Manager\n\n🎓 Bachelor of Computing — BComp (NQF 8)\n• 3 years academic + 1 year workplace (506 credits) · Pretoria, KP, Stellenbosch\n• Specialisations: Data Science or Software Engineering\n• NSC for Degree + 50%+ English & Pure Maths\n• Opens doors to postgraduate study (Masters, PGD Cybersecurity)\n\n💡 Pro tip: The Diploma is a great starting point — you can articulate to a degree later!",
      cards: null
    };
  },

  apsResult(aps, recommendations) {
    const tierLabel = { high: "Strong match", mid: "Possible match", low: "Conditional" };
    const tierIcon = { high: "", mid: "⚡", low: "" };
    return {
      text: `Based on your APS of ${aps}, here are your best-matched programmes at Belgium Campus:\n\n💡 Click any card to see full programme details.`,
      cards: recommendations.map(r => ({
        name: r.programme.name,
        meta: `${r.programme.type} · Min APS ${r.programme.aps > 0 ? r.programme.aps : 'None'} · ${r.programme.duration}`,
        score: r.score,
        tier: r.tier,
        matchLabel: `${tierIcon[r.tier]} ${tierLabel[r.tier]} — ${r.score}% fit`,
        onclick: () => addMessage(ResponseBuilder.programmeDetails(r.programme), "bot")
      }))
    };
  },

  careers() {
    const entries = Object.entries(KNOWLEDGE_BASE.careers);
    return {
      text: "Here are some of the top IT career paths you can pursue after studying at Belgium Campus:",
      cards: entries.map(([career, info]) => ({
        name: career,
        meta: `Demand: ${info.demand} · ${info.avgSalary}`,
        score: info.demand === "Very High" ? 90 : 75,
        tier: info.demand === "Very High" ? "high" : "mid",
        matchLabel: `📚 Path: ${info.path}`,
        onclick: () => addMessage(ResponseBuilder.careerDetails(career), "bot")
      }))
    };
  },

  careerDetails(career) {
    const info = KNOWLEDGE_BASE.careers[career];
    if (!info) {
      return {
        text: `I don't have the details for ${career} right now, but I can still help you explore Belgium Campus IT career options.`,
        cards: null
      };
    }

    return {
      text: `A ${career} in South Africa typically:
• Demand: ${info.demand}
• Average salary: ${info.avgSalary}
• Key skills: ${info.skills.join(', ')}
• Recommended study path: ${info.path}

To become a ${career}, focus on building the skills above, get hands-on projects, and consider starting with the related Belgium Campus programme.`,
      cards: null
    };
  },

  learnership() {
    return {
      text: "Belgium Campus is affiliated with MICT SETA (Media, Information and Communication Technologies Sector Education and Training Authority).\n\n🎯 Options available:\n• SETA-funded learnerships (NQF 4–6) — fully sponsored\n• Belgium Campus bursaries for qualifying students\n• Work Integrated Learning (WIL) — included in the Diploma IT and BComp (mandatory 1-year workplace component)\n• Industry partnerships with companies like Microsoft, Cisco, AWS\n\n📞 Visit belgiumcampus.ac.za or call 010 593 5368 for current learnership availability. Spaces are limited and often filled early in the year.",
      cards: null
    };
  },

  online() {
    return {
      text: "Belgium Campus offers both campus-based and online study options:\n\n💻 Online / Distance Learning:\n• Advanced Diploma in Cybersecurity — fully online with live scheduled sessions\n• BIT Part-Time — flexible schedule at Pretoria or Kempton Park\n• Same NQF-accredited qualifications\n• Interactive online portal\n\n🏛️ Campus locations:\n• Pretoria — Gauteng (Main campus)\n• Kempton Park — Gauteng East\n• Stellenbosch — Western Cape\n\n📌 Programme availability by campus:\n• BComp (NQF 8): Pretoria, Kempton Park, Stellenbosch\n• BIT (NQF 7): Pretoria, Kempton Park\n• Diploma IT (NQF 6): Pretoria, Kempton Park, Stellenbosch\n• Advanced Diploma in Cybersecurity: Online only\n\nCall 010 593 5368 or visit belgiumcampus.ac.za to confirm current availability.",
      cards: null
    };
  },

  requirements() {
    return {
      text: "Admission requirements for Belgium Campus IT programmes:\n\n📋 Degree programmes (BComp NQF 8 · BIT NQF 7 · BIT Part-Time)\n• NSC endorsed for Degree studies\n• Minimum 50% in English (Home Language or First Additional Language)\n• Minimum 50% in Pure Mathematics\n  — OR completion of the BC Mathematics Bridging Course at 50%+\n\n📋 Diploma in Information Technology (NQF 6)\n• NSC endorsed for Diploma studies\n• Students of all ages accepted\n• Recognition of Prior Learning (RPL) pathways available\n• Deaf students: additionally requires 50%+ on the BC Aptitude Test + audiogram ≤ 6 months old\n\n📋 Advanced Diploma in Cybersecurity (NQF 7)\n• Must hold an NQF Level 6 IT qualification (e.g. Diploma in IT)\n• Online only — live scheduled sessions\n\n📋 Postgraduate Diploma in Cybersecurity Risk Management\n• Relevant Bachelor's degree with 60%+ average\n\n📋 Master in Information Technology\n• Bachelor's degree with 65%+ weighted average\n\n💡 All applicants need an NSC certified by Umalusi, or an equivalent foreign qualification converted by SAQA. RPL is available for all programmes.",
      cards: null
    };
  },

  cybersecurity() {
    return {
      text: "Cybersecurity is one of the fastest-growing IT fields in South Africa! 🛡️\n\nBelgium Campus cybersecurity pathways:\n\n🎓 Advanced Diploma in Cybersecurity (NQF 7)\n• Online only — live scheduled sessions\n• SAQA 124166 · 120 credits · 1 year minimum\n• Specialisations: Secure Electronic Communication Networks · Secure Software Development\n• Requirement: NQF Level 6 IT qualification (e.g. Diploma in IT)\n\n🎓 Postgraduate Diploma in Cybersecurity Risk Management\n• For graduates with a Bachelor's degree (60%+ average)\n\n📌 Suggested pathway:\n1. Complete Diploma in IT (NQF 6)\n2. Progress to Advanced Diploma in Cybersecurity (NQF 7)\n3. Optionally complete the Postgrad Diploma in Cybersecurity Risk Management\n\n💼 Career outcomes:\n• Cybersecurity Analyst: R30 000–R70 000/month\n• Penetration Tester, SOC Analyst, Security Engineer\n\nSouth Africa faces a massive shortage of cybersecurity professionals — this is an excellent career choice!",
      cards: null
    };
  },

  programmeDetails(programme) {
    const mathsReq = programme.mathsRequired
      ? `Mathematics Level ${programme.minMathsLevel}+ required`
      : `No strict Mathematics requirement`;
    const apsLine = programme.aps > 0 ? `\n• Minimum APS: ${programme.aps}` : '';
    const prereqLine = programme.prereq ? `\n• Prerequisite: ${programme.prereq}` : '';
    const englishLine = programme.minEnglishLevel > 0 ? `\n• English Level ${programme.minEnglishLevel}+ required` : '';
    return {
      text: `📚 ${programme.name}\n\n📋 Qualification details:\n• Type: ${programme.type}\n• NQF Level: ${programme.level}\n• Duration: ${programme.duration}${apsLine}${prereqLine}\n\n📝 ${programme.description}\n\n🔬 Specialisations:\n${programme.specialisations.map(s => `• ${s}`).join('\n')}\n\n💼 Career paths:\n${programme.careers.map(c => `• ${c}`).join('\n')}\n\n📐 Entry requirements:\n• ${mathsReq}${englishLine}\n\n📌 Visit belgiumcampus.ac.za to confirm current requirements and apply.`,
      cards: null
    };
  },

  apsInfo() {
    return {
      text: "📊 What is APS (Admission Point Score)?\n\nAPS is used by South African institutions to assess Matric results for admission.\n\n🔢 How to calculate your APS:\n• Add your best 6 Matric subject levels\n• Life Orientation counts as HALF\n• Level scale: 7=80–100% · 6=70–79% · 5=60–69% · 4=50–59% · 3=40–49% · 2=30–39% · 1=0–29%\n\n🎯 Belgium Campus subject requirements:\n• BComp (NQF 8) & BIT (NQF 7) — Degree programmes:\n  - NSC endorsed for Degree\n  - 50%+ (Level 4) English + 50%+ (Level 4) Pure Mathematics\n• Diploma in IT (NQF 6):\n  - NSC endorsed for Diploma studies\n• Advanced Diploma in Cybersecurity (NQF 7):\n  - NQF Level 6 IT qualification required — no Matric APS\n\n💡 Use the Matric Results Calculator above to get your APS score, then confirm exact requirements with Belgium Campus admissions at 010 593 5368.",
      cards: null
    };
  },

  contactInfo() {
    return {
      text: "🌐 How to apply to Belgium Campus:\n\n📋 Application steps:\n1. Check your qualifications against the programme requirements\n2. Visit belgiumcampus.ac.za/apply\n3. Complete the online application form\n4. Submit certified copies of your Matric certificate\n5. Await your offer of admission\n\n📞 Contact:\n• Website: belgiumcampus.ac.za\n• Tel: 010 593 5368\n• Campuses: Pretoria (main) · Kempton Park · Stellenbosch · Online\n• Intakes: May · July · September\n• Registered with DHET: Reg. No. 2003/HE08/001\n\n⚠️ Application deadlines change annually — check the official website for current dates. Spaces fill up quickly, so apply early!\n\nWould you like help choosing which programme is right for you?",
      cards: null
    };
  },

  postgrad() {
    return {
      text: "🎓 Postgraduate programmes at Belgium Campus:\n\n📋 Postgraduate Diploma in Cybersecurity Risk Management\n• Level: NQF 8\n• Duration: 1 year\n• Prerequisite: Relevant Bachelor's degree with 60%+ average\n• Careers: Cybersecurity Risk Manager, IT Governance Specialist, CISO\n\n📋 Master in Information Technology\n• Level: NQF 8\n• Prerequisite: Relevant Bachelor's degree with 65%+ weighted average\n• Careers: IT Researcher, Senior IT Manager, University Lecturer\n\n📋 Advanced Diploma in Cybersecurity (NQF 7)\n• Not a postgrad, but a progression route from Diploma IT\n• Prerequisite: NQF Level 6 IT qualification\n• Online only — live scheduled sessions\n\n📌 For current admission requirements and application details, visit belgiumcampus.ac.za or call 010 593 5368.",
      cards: null
    };
  }
};

/* ═══════════════════════════════════════════════════════════
BC COURSEFINDER™ GUARDRAIL SYSTEM
Responsible AI Governance & Ethical Protection Layer
═══════════════════════════════════════════════════════════ */
const GUARDRAILS = {
  /* LAYER 1 - INPUT SAFETY FILTER */
  blockedPatterns: [
    { pattern: /\b(sex|porn|nude|adult content|onlyfans)\b/i, reason: "inappropriate content" },
    { pattern: /\b(how to hack|hack into|bypass (?:security|login|authentication)|jailbreak|crack passwords|ddos|denial of service)\b/i, reason: "unsafe cybersecurity request" },
    { pattern: /\b(bomb|weapon|gun|explosive|attack)\b/i, reason: "dangerous content" },
    { pattern: /\b(drugs|cocaine|illegal substances|fraud|scam|steal)\b/i, reason: "illegal activity" },
    { pattern: /\b(suicide|kill myself|self-harm|harm myself)\b/i, reason: "sensitive crisis content" },
    { pattern: /\b(hate speech|racist|discriminate|kill people)\b/i, reason: "harmful language" }
  ],

  /* LAYER 2 - SCOPE CONTROL */
  offTopicKeywords: [
    // Politics & government
    "politics", "election", "president", "parliament", "anc", "da", "eff", "government policy",
    // Entertainment & social media
    "celebrity", "gossip", "netflix", "movie", "series", "tiktok", "kpop", "trending",
    // Weather
    "weather", "forecast", "rainfall",
    // Sports (phrase-based to avoid blocking "I play sport but want to study IT")
    "soccer score", "football match", "rugby score", "cricket score", "sport results", "premier league", "world cup score",
    // Food & lifestyle
    "recipe", "how to cook", "best restaurant", "food delivery",
    // Personal
    "relationship advice", "horoscope", "zodiac sign", "lottery numbers", "gambling tips"
  ],

  /* LAYER 3 - PII PROTECTION */
  redactPII(text) {
    let cleaned = text;
    cleaned = cleaned.replace(/\b\d{10}\b/g, "[PHONE NUMBER REDACTED]");
    cleaned = cleaned.replace(/\b[\w.-]+@[\w.-]+\.\w{2,}\b/g, "[EMAIL REDACTED]");
    cleaned = cleaned.replace(/\b\d{13}\b/g, "[ID NUMBER REDACTED]");
    return cleaned;
  },

  /* INPUT VALIDATION */
  checkInput(userMessage) {
    for (const { pattern, reason } of this.blockedPatterns) {
      if (pattern.test(userMessage)) {
        return {
          blocked: true,
          response: ` **I cannot respond to that.**\n\nYou asked about something outside my safety guidelines: *${reason}*.\n\nI'm BC CourseFinder — a career guidance assistant for **Belgium Campus IT programmes**. Please ask me about courses, careers, APS requirements, or study pathways instead.`
        };
      }
    }
    return { blocked: false };
  },

  /* SCOPE VALIDATION */
  checkScope(userMessage) {
    const lowerMsg = userMessage.toLowerCase();
    const isOffTopic = this.offTopicKeywords.some(keyword => lowerMsg.includes(keyword));
    const isGreeting = /^(hi|hello|hey|howzit|good|help)$/i.test(userMessage.trim());
    
    if (isOffTopic && !isGreeting) {
      return {
        outOfScope: true,
        response: `🎓 **Let me gently guide you back on track.**\n\nI noticed you're asking about something outside my scope. I'm a career guidance assistant for **Belgium Campus IT programmes**.\n\n**What I CAN help with:**\n• IT career exploration (Software Dev, Data Science, Cybersecurity, Networking)\n• Qualification differences (Diploma vs Degree vs Certificate)\n• APS calculations and subject requirements\n• Learnerships, internships, and bursaries\n\nWhat would you like to know about your IT future?`
      };
    }
    return { outOfScope: false };
  }
};

/* ═══════════════════════════════════════════════════════════
   AI ENGINE — Orchestrates rule engine + Claude API fallback
═══════════════════════════════════════════════════════════ */
const AIEngine = {
  conversationHistory: [],
  userContext: { aps: null, mathsLevel: null, englishLevel: null },

  async process(userText) {
    const { intent, match } = RuleEngine.classify(userText);
    const extractedAPS = RuleEngine.extractAPS(userText);

    // Store user context if APS found
    if (extractedAPS) this.userContext.aps = extractedAPS;

    // Rule-based fast-path responses
    const ruleResponse = this._ruleResponse(intent, match, userText, extractedAPS || this.userContext.aps);
    if (ruleResponse) return { source: "rule", ...ruleResponse };

    // Fall through to AI backend for complex or general queries
    return await this._callAI(userText);
  },

  _ruleResponse(intent, match, text, aps) {
    switch (intent) {
      case "greeting": return ResponseBuilder.greeting();
      case "course_list": return ResponseBuilder.courseList();
      case "diploma_vs_degree": return ResponseBuilder.diplomaVsDegree();
      case "career_paths": return ResponseBuilder.careers();
      case "career_inquiry": return ResponseBuilder.careerDetails(match && match[0] ? match[0] : text);
      case "learnership": return ResponseBuilder.learnership();
      case "online_study": return ResponseBuilder.online();
      case "requirements": return ResponseBuilder.requirements();
      case "cybersecurity": return ResponseBuilder.cybersecurity();
      case "specific_aps":
      case "aps_query": {
        if (aps && aps >= 10 && aps <= 42) {
          const eng = this.userContext.englishLevel;
          const maths = this.userContext.mathsLevel;
          const recs = RecommendationEngine.recommend(aps, maths, eng);
          return ResponseBuilder.apsResult(aps, recs);
        }
        return null;
      }
      case "aps_info": return ResponseBuilder.apsInfo();
      case "contact_apply": return ResponseBuilder.contactInfo();
      case "postgrad": return ResponseBuilder.postgrad();
      case "programme_detail": return null; // Let AI give a specific, detailed programme answer
      default: return null;
    }
  },

  async _callAI(userText) {
    // Build OpenAI-compatible message history: last 9 turns + current message
    const messages = [
      ...this.conversationHistory.slice(-9).map(msg => ({
        role: msg.role,
        content: msg.content
      })),
      { role: "user", content: userText }
    ];

    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages })
    });

    if (!response.ok) {
      const err = await response.json().catch(() => ({}));
      throw new Error(err.error || "Server error");
    }

    const { text } = await response.json();

    this.conversationHistory.push({ role: "user", content: userText });
    this.conversationHistory.push({ role: "assistant", content: text });

    return { source: "ai", text, cards: null };
  }
};

/* ═══════════════════════════════════════════════════════════
   UI LAYER
═══════════════════════════════════════════════════════════ */

function renderMarkdown(text) {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n/g, '<br>');
}

const messagesEl = document.getElementById("messages");
const inputEl = document.getElementById("input");
const sendBtn = document.getElementById("send-btn");
const thinkingBadge = document.getElementById("thinking-badge");

inputEl.addEventListener("input", () => {
  inputEl.style.height = "auto";
  inputEl.style.height = Math.min(inputEl.scrollHeight, 100) + "px";
});

inputEl.addEventListener("keydown", e => {
  if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
});

function makeAvatar(role) {
  const el = document.createElement("div");
  el.className = `avatar ${role}`;
  el.textContent = role === "bot" ? "BC" : "You";
  return el;
}

function addMessage(response, role) {
  if (!messagesEl) return; // guard: #messages doesn't exist on index.html
  const row = document.createElement("div");
  row.className = `message-row ${role}`;

  const bubble = document.createElement("div");
  bubble.className = `bubble ${role}`;

  if (role === "bot" && response && typeof response === "object") {
    const textNode = document.createElement("div");
    textNode.innerHTML = renderMarkdown(response.text);
    bubble.appendChild(textNode);

    // Render recommendation cards
    if (response.cards && response.cards.length > 0) {
      const cardsEl = document.createElement("div");
      cardsEl.className = "rec-cards";
      response.cards.forEach(card => {
        const cardEl = document.createElement("div");
        cardEl.className = "rec-card";
        if (typeof card.onclick === "function") {
          cardEl.onclick = card.onclick;
        } else {
          cardEl.onclick = () => eval(card.onclick);
        }

        const nameEl = document.createElement("div");
        nameEl.className = "rec-card-name";
        nameEl.textContent = card.name;

        const metaEl = document.createElement("div");
        metaEl.className = "rec-card-meta";
        metaEl.textContent = card.meta;

        cardEl.appendChild(nameEl);
        cardEl.appendChild(metaEl);

        if (card.matchLabel) {
          const pill = document.createElement("div");
          pill.className = `match-pill ${card.tier || "mid"}`;
          pill.textContent = card.matchLabel;
          cardEl.appendChild(pill);
        }

        if (card.score) {
          const bar = document.createElement("div");
          bar.className = "confidence-bar";
          const fill = document.createElement("div");
          fill.className = "confidence-fill";
          fill.style.width = "0%";
          bar.appendChild(fill);
          cardEl.appendChild(bar);
          setTimeout(() => { fill.style.width = card.score + "%"; }, 100);
        }

        cardsEl.appendChild(cardEl);
      });
      bubble.appendChild(cardsEl);
    }
  } else {
    const text = typeof response === "string" ? response : response.text;
    bubble.innerHTML = renderMarkdown(text);
  }

  if (role === "user") {
    row.appendChild(bubble);
    row.appendChild(makeAvatar(role));
  } else {
    row.appendChild(makeAvatar(role));
    row.appendChild(bubble);
  }

  messagesEl.appendChild(row);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function showTyping() {
  const row = document.createElement("div");
  row.className = "typing-row"; row.id = "typing-row";
  row.appendChild(makeAvatar("bot"));
  const b = document.createElement("div"); b.className = "typing-bubble";
  b.innerHTML = '<div class="dot"></div><div class="dot"></div><div class="dot"></div>';
  row.appendChild(b);
  messagesEl.appendChild(row);
  messagesEl.scrollTop = messagesEl.scrollHeight;
}

function removeTyping() {
  const el = document.getElementById("typing-row");
  if (el) el.remove();
}

function showCourseList() {
  addMessage(ResponseBuilder.courseList(), "bot");
}

function showDiplomaVsDegree() {
  addMessage(ResponseBuilder.diplomaVsDegree(), "bot");
}

function showCareerPaths() {
  addMessage(ResponseBuilder.careers(), "bot");
}

function showLearnerships() {
  addMessage(ResponseBuilder.learnership(), "bot");
}

function showCybersecurity() {
  addMessage(ResponseBuilder.cybersecurity(), "bot");
}

function showOnlineStudy() {
  addMessage(ResponseBuilder.online(), "bot");
}

async function sendMessage() {
  const text = inputEl.value.trim();
  if (!text) return;

  // STEP 1: Redact PII
  const cleanedText = GUARDRAILS.redactPII(text);

  // STEP 2: Check input guardrail
  const inputCheck = GUARDRAILS.checkInput(cleanedText);
  if (inputCheck.blocked) {
    addMessage(inputCheck.response, "bot");
    inputEl.value = "";
    inputEl.style.height = "auto";
    return;
  }

  // STEP 3: Check scope guardrail
  const scopeCheck = GUARDRAILS.checkScope(cleanedText);
  if (scopeCheck.outOfScope) {
    addMessage(scopeCheck.response, "bot");
    inputEl.value = "";
    inputEl.style.height = "auto";
    return;
  }

  // STEP 4: Add user message to chat
  addMessage(cleanedText, "user");
  inputEl.value = "";
  inputEl.style.height = "auto";
  sendBtn.disabled = true;
  showTyping();
  thinkingBadge.classList.add("active");

  try {
    // Try to use original AIEngine if available
    let response;
    if (typeof AIEngine !== 'undefined' && AIEngine.process) {
      try {
        response = await AIEngine.process(cleanedText);
      } catch (apiError) {
        console.log("API failed, using fallback:", apiError.message);
        response = null;
      }
    }
    
    // If AIEngine failed or not available, use fallback responses
    if (!response) {
      response = { text: getFallbackResponse(cleanedText), cards: null };
    }
    
    removeTyping();
    
    let responseText = response.text;
    if (/career|job|salary|qualification/i.test(cleanedText) && !responseText.includes("verify official")) {
      responseText += "\n\n---\n📌 *Always verify official requirements at belgiumcampus.ac.za — this assistant provides guidance, not guarantees.*";
    }
    
    addMessage({ ...response, text: responseText }, "bot");
  } catch (err) {
    removeTyping();
    // Fallback response for any error
    addMessage({ text: getFallbackResponse(cleanedText), cards: null }, "bot");
  } finally {
    sendBtn.disabled = false;
    thinkingBadge.classList.remove("active");
    inputEl.focus();
  }
}

// Fallback responses when API is unavailable
function getFallbackResponse(message) {
  const lower = message.toLowerCase();

  if (/what is aps|how.*aps.*work|explain aps|what does aps mean|how.*calculate.*aps/.test(lower)) {
    return ResponseBuilder.apsInfo().text;
  }

  if (/how.*apply|apply.*belgium|contact.*campus|admission.*process|how.*register/.test(lower)) {
    return ResponseBuilder.contactInfo().text;
  }

  if (/postgrad|honours|after.*degree|further.*stud/.test(lower)) {
    return ResponseBuilder.postgrad().text;
  }

  if (lower.includes("maths") && lower.includes("physical science")) {
    return "🎓 With Mathematics and Physical Science, you can study:\n\n• BSc Information Technology (APS 26+)\n• Diploma in IT (APS 22+)\n• Higher Certificate in IT (APS 16+)\n\nThese subjects prepare you well for software development, data science, and networking careers!";
  }

  if (lower.includes("maths lit") || lower.includes("math literacy") || lower.includes("mathematical literacy")) {
    return "📐 Mathematics vs Mathematical Literacy:\n\n• Mathematics is required for BSc IT (Level 4 / 50%+) and Diploma IT (Level 3 / 40%+)\n• Mathematical Literacy may be accepted for the Higher Certificate and some Diploma streams\n\nFor degree programmes, pure Mathematics is strongly preferred. Contact Belgium Campus admissions to confirm your situation!";
  }

  if (lower.includes("diploma") && lower.includes("degree")) {
    return ResponseBuilder.diplomaVsDegree().text;
  }

  if (/software develop|how to code|learn.*program|become.*developer/.test(lower)) {
    return "🛠️ To become a Software Developer you need:\n\n• Programming languages (Python, Java, JavaScript, C#)\n• Problem-solving and logical thinking\n• Database knowledge (SQL)\n• Version control (Git)\n• Teamwork and communication\n\nAt Belgium Campus, study:\n• Bachelor of Computing (BComp, NQF 8) — Data Science or Software Engineering\n• Bachelor of IT (BIT, NQF 7) — Software Development\n• Diploma in IT (NQF 6) — Software Development\n\nSalary range: R25 000–R60 000/month — demand is Very High.";
  }

  if (/data scien|machine learn|python|statistic/.test(lower)) {
    return "📊 Data Science at Belgium Campus:\n\n• Bachelor of Computing (BComp, NQF 8) — Data Science specialisation\n• Covers: Python, Machine Learning, Statistics, Databases\n• Requirements: NSC for Degree, 50%+ English & Pure Maths\n• Available at Pretoria, Kempton Park, Stellenbosch\n\n💼 Data Scientist salary: R40 000–R90 000/month — demand is Very High!\n\nThis is one of the fastest-growing fields in South Africa.";
  }

  if (/network|cisco|cloud|infrastructure/.test(lower)) {
    return "🌐 Networking & Infrastructure at Belgium Campus:\n\n• Diploma IT — Infrastructure specialisation (NQF 6)\n• Available: Pretoria, Kempton Park, Stellenbosch\n• Requirements: NSC endorsed for Diploma\n\n💼 Network Administrator salary: R18 000–R40 000/month\n\nContact Belgium Campus at 010 593 5368 for current details.";
  }

  if (/cost|fee|tuition|price|how much/.test(lower)) {
    return "💰 Regarding fees and costs:\n\nI don't have the exact current tuition fees as they change each year. For accurate, up-to-date fee information:\n\n• Visit belgiumcampus.ac.za\n• Contact the admissions office directly\n• Check the latest prospectus\n\nBelgium Campus also offers SETA-funded learnerships and bursaries for qualifying students — ask me about those!";
  }

  if (/how long|duration|how many years/.test(lower)) {
    return "⏳ Programme durations at Belgium Campus:\n\n• BSc Information Technology: 3 years\n• Diploma in IT: 3 years\n• Higher Certificate in IT: 1 year\n• Short Learning Programmes: 3–6 months\n• Postgraduate Diploma: 1 year\n\nThe Higher Certificate is a great 1-year entry point if you want to build towards the Diploma or BSc!";
  }

  if (/matric|grade 12|nsc|school result/.test(lower)) {
    return ResponseBuilder.requirements().text;
  }

  if (/short course|bootcamp|quick|fast track/.test(lower)) {
    const sc = KNOWLEDGE_BASE.programmes.find(p => p.type === "Short Course");
    return `🎯 Short Learning Programmes at Belgium Campus:\n\nAvailable topics:\n${sc.specialisations.map(s => `• ${s}`).join('\n')}\n\n• Duration: 3–6 months\n• No APS requirement\n• Industry certifications included\n• Ideal for upskilling alongside a degree/diploma\n\nVisit belgiumcampus.ac.za for current programme availability.`;
  }

  if (/bcomp|bachelor of computing/.test(lower)) {
    return ResponseBuilder.programmeDetails(KNOWLEDGE_BASE.programmes.find(p => p.id === "bcomp")).text;
  }

  if (/\bbit\b|bachelor of information technology/.test(lower)) {
    return ResponseBuilder.programmeDetails(KNOWLEDGE_BASE.programmes.find(p => p.id === "bit")).text;
  }

  if (/bsc|bachelor|degree/.test(lower)) {
    return ResponseBuilder.programmeDetails(KNOWLEDGE_BASE.programmes.find(p => p.id === "bcomp")).text;
  }

  if (/advanced diploma.*cyber|cybersec.*diploma/.test(lower)) {
    return ResponseBuilder.programmeDetails(KNOWLEDGE_BASE.programmes.find(p => p.id === "adv-dip-cybersec")).text;
  }

  if (/diploma/.test(lower) && !/degree/.test(lower)) {
    return ResponseBuilder.programmeDetails(KNOWLEDGE_BASE.programmes.find(p => p.id === "dip-it")).text;
  }

  return "👋 Hi! I'm BC CourseFinder. Here's what I can help you with:\n\n• IT courses & APS requirements at Belgium Campus\n• Career paths: Software Developer, Data Scientist, Cybersecurity, Networking\n• Diploma vs Degree comparison\n• APS calculator and personalised course matching\n• Learnerships, bursaries, and funding\n• How to apply and contact Belgium Campus\n\nTry asking about a specific course, your APS score, or a career you're interested in!";
}

/* ═══════════════════════════════════════════════════════════
   APS CALCULATOR
═══════════════════════════════════════════════════════════ */
function calcAPS() {
  const ids = ["s-english", "s-maths", "s-sub3", "s-sub4", "s-sub5", "s-lo"];
  const vals = ids.map(id => parseInt(document.getElementById(id).value) || 0);
  const lo = vals.pop(); // LO counts half
  const total = vals.reduce((a, b) => a + b, 0) + Math.round(lo / 2);
  document.getElementById("aps-display").textContent = total > 0 ? total : "—";

  // Store in engine context
  AIEngine.userContext.aps = total > 0 ? total : null;
  AIEngine.userContext.englishLevel = parseInt(document.getElementById("s-english").value) || null;
  AIEngine.userContext.mathsLevel = parseInt(document.getElementById("s-maths").value) || null;
}

function recommendFromAPS() {
  const aps = AIEngine.userContext.aps;
  if (!aps || aps < 6) {
    addMessage({ text: "Please enter your Matric subject levels in the calculator above first, then click this button for personalised recommendations.", cards: null }, "bot");
    return;
  }
  const maths = AIEngine.userContext.mathsLevel;
  const english = AIEngine.userContext.englishLevel;
  const recs = RecommendationEngine.recommend(aps, maths, english);
  addMessage(ResponseBuilder.apsResult(aps, recs), "bot");
}

/* ── Boot message ── */
setTimeout(() => {
  addMessage({
    text: "Hello! 👋 I'm the BC CourseFinder AI — your personalised guide to IT studies at Belgium Campus.\n\nEnter your Matric results above for instant course matching, or ask me anything about qualifications, careers, and study options.",
    cards: null
  }, "bot");
}, 400);
