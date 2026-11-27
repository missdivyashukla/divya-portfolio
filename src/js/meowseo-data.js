/* =====================================================================
   MeowSEO question-and-answer data.

   MeowSEO is NOT an AI. There is no API, backend or generated text.
   Every answer below is written by hand and shown exactly as typed.

   HOW TO EDIT
   - Change any `q` (the question) or `a` (the answer) below.
   - `a` is a list of short paragraphs. Add or remove lines as you like.
   - `follow` lists the ids of questions suggested after this one.
   - `keys` are words that make a typed message match this question.
   - `link` (optional) adds an "Open page" button under the answer.
     `go` is a page id: s01 Home, s02 Introduction, s03 Proof of work,
     s04 Skills & tools, s05 Case studies, s06 Career timeline,
     s07 About me, s08 Contact, s09 Ask the cat.
     `focus` (optional) scrolls to a case study: cs-postfity, cs-simplified,
     cs-creditmitra, cs-otto.
   - Question ids must be unique across the whole file.
   ===================================================================== */
window.MEOWSEO = {
  intro: "Meow! I’m MeowSEO, Catalyst’s question menu. I’m not an AI. Every answer here was written by Divya, so tap a question to explore her SEO story.",

  // Shown when a typed message matches nothing on the menu.
  fallback: "Meow! That one isn’t on my menu. I’m not an AI, just a cat with a curated list of questions about Divya, and every answer was written by her. Pick one of the questions below, or tap More questions to browse topics.",

  // Playful one-liners shown under answers. Purely decorative.
  asides: [
    "*slow blink*",
    "*tail swish*",
    "*ears perk up*",
    "*knocks a pencil off the desk*",
    "*curls up on the keyboard*",
    "*purrs at a Search Console graph*",
    "*stretches, then points at the next question*"
  ],

  // Question ids shown first, before anything has been asked.
  starters: ["who", "special", "headline", "cs-creditmitra"],

  categories: [
    /* ---------------------------------------------------------------- */
    {
      id: "about", name: "About Divya", blurb: "Who she is and what drives her",
      keys: ["about divya", "about her", "bio", "background"],
      questions: [
        { id: "who", q: "Who is Divya?",
          keys: ["who is", "who are", "divya", "introduce", "yourself"],
          a: [
            "Divya Kumari Shukla is an SEO specialist focused on helping websites grow through organic search. She has 6 years of SEO experience.",
            "She builds SEO systems that scale: programmatic pages, automated workflows and content that converts. Her portfolio features work on Postfity, Simplified, CreditMitra and Otto."
          ],
          follow: ["enjoy", "special", "headline"] },
        { id: "enjoy", q: "What does she enjoy most about SEO?",
          keys: ["enjoy", "passion", "motivat", "favourite part", "favorite part"],
          a: [
            "Building a process that can scale. She says the Postfity project shows that best: monthly organic clicks went from 450 to 100K in three months through programmatic SEO, keyword clustering and internal linking.",
            "Her work has since grown to cover more than getting people to a site, including conversion at Simplified and audience growth at CreditMitra."
          ],
          follow: ["cs-postfity", "business", "pseo"] },
        { id: "philosophy", q: "What is her SEO philosophy?",
          keys: ["philosophy", "believe", "principle", "approach to seo", "values"],
          a: [
            "Sustainable growth beats shortcuts. Her portfolio game, Catalyst’s Search City, is built around 20 good habits to collect and 20 mistakes to avoid.",
            "The habits include matching search intent, building topical authority, creating quality content, keeping technical SEO healthy and automating with human review. The mistakes include keyword stuffing, doorway pages, fake statistics, blind automation and promising guaranteed rankings."
          ],
          link: { go: "s02", label: "Play Catalyst’s Search City" },
          follow: ["geo-tricks", "content", "tools-auto"] },
        { id: "outside", q: "What is she like outside of work?",
          keys: ["outside work", "outside of work", "hobby", "hobbies", "books", "mountain", "free time"],
          a: [
            "She is a mountain lover, happiest where the air is thin and the views are endless.",
            "She also has 100+ books and counting. She loves a good novel and is always happy to buy a few more.",
            "And Catalyst the cat keeps her company. You can pet her in the corner of this page."
          ],
          link: { go: "s07", label: "Open About me" },
          follow: ["who", "contact", "problems"] },
        { id: "contact", q: "How can I get in touch with her?",
          keys: ["contact", "email", "reach", "hire", "linkedin", "resume", "résumé", "cv", "talk to", "connect"],
          a: [
            "Email shukladivya1972@gmail.com, or message her on LinkedIn at linkedin.com/in/divya-kumari-shukla.",
            "Her résumé is on the Contact page as a PDF download."
          ],
          link: { go: "s08", label: "Open Contact" },
          follow: ["problems", "linkedin", "path"] }
      ]
    },
    /* ---------------------------------------------------------------- */
    {
      id: "expertise", name: "SEO Expertise & Strategy", blurb: "How she thinks and works",
      keys: ["expertise", "strategy", "skills", "strategies"],
      questions: [
        { id: "special", q: "What does Divya specialise in?",
          keys: ["special", "good at", "skill", "expert", "strength", "what does she do"],
          a: [
            "Six areas: programmatic SEO, SEO automation, technical SEO, content strategy, analytics and CRO, and a growth mindset of experiment, measure, repeat.",
            "Her homepage puts it as turning search opportunities into growth systems through SEO, programmatic pages, experimentation and automation."
          ],
          link: { go: "s04", label: "Open Skills & tools" },
          follow: ["approach", "pseo", "content"] },
        { id: "approach", q: "How does she approach an SEO problem?",
          keys: ["approach", "seo process", "problem solving"],
          a: [
            "Five steps, repeated: investigate, prioritize, build, launch, measure.",
            "She investigates by crawling the site, reading Search Console and studying the results page. She prioritizes by business impact and effort, builds templates and workflows that can repeat, launches in controlled batches with human review, then measures clicks, sign-ups and conversions to feed the next round."
          ],
          link: { go: "s01", label: "See the process on the homepage" },
          follow: ["technical", "business", "pseo-quality"] },
        { id: "content", q: "How does she think about content strategy?",
          keys: ["content", "topic cluster", "search intent", "articles"],
          a: [
            "Topic clusters built around real search intent.",
            "The habits she highlights: match the page to what the searcher needs, cover a subject deeply with connected pages, publish accurate content with a clear purpose, and refresh facts as things change.",
            "The traps she warns about: thin content, overlapping pages that compete for the same intent, and traffic that misses what the visitor needs."
          ],
          follow: ["philosophy", "ai-visibility", "cs-creditmitra"] },
        { id: "technical", q: "What does technical SEO mean to her?",
          keys: ["technical", "crawl", "index", "speed", "core web vitals", "audit"],
          a: [
            "Keeping important pages crawlable, indexable and fast, with a clear site structure.",
            "The tools she lists for it: Screaming Frog to crawl and audit links and metadata, PageSpeed Insights for performance and Core Web Vitals, and the Rich Results Test for rich result eligibility."
          ],
          follow: ["tools-track", "built", "approach"] },
        { id: "business", q: "How does she connect SEO to business results?",
          keys: ["business", "revenue", "roi"],
          a: [
            "She treats clicks as a step, not the goal. Analytics and CRO, for her, means turning clicks into conversions, measured end to end.",
            "Her habits list includes revenue focus and conversion optimization, and her warnings include traffic obsession and vanity metrics.",
            "At Simplified, the team grew organic clicks and increased the conversion rate by 30% at the same time."
          ],
          follow: ["headline", "conversion", "cs-simplified"] }
      ]
    },
    /* ---------------------------------------------------------------- */
    {
      id: "growth", name: "Organic Growth & Achievements", blurb: "The numbers behind the work",
      keys: ["achievements", "results", "organic growth", "numbers", "metrics", "proof", "wins"],
      questions: [
        { id: "headline", q: "What are her headline results?",
          keys: ["headline", "results", "achievement", "numbers", "metrics", "proof"],
          a: [
            "Postfity: monthly organic clicks from 450 to 100K in three months with programmatic SEO.",
            "CreditMitra: active users from 4.6K in March 2026 to 155K+ by September 2026, about 33.8×. Reported daily Search Console clicks grew from roughly 15 to 9,000+.",
            "Otto: 170 pages launched, and reported daily sign-ups from 4 to 30.",
            "Simplified: reported daily clicks from 0 to 15,000, with a 30% higher conversion rate across the team effort."
          ],
          link: { go: "s03", label: "Open Proof of work" },
          follow: ["solo", "cm-speed", "conversion"] },
        { id: "solo", q: "How much of this was her own work?",
          keys: ["solo", "own work", "team", "alone", "credit", "contribution", "contributed"],
          a: [
            "Her portfolio is specific about it. At Postfity she says she grew organic traffic by combining programmatic SEO and automation.",
            "At Simplified she contributed to a team effort, and at CreditMitra she contributed to scaling the audience."
          ],
          follow: ["cs-postfity", "cs-simplified", "cs-creditmitra"] },
        { id: "conversion", q: "Has she improved conversion rates?",
          keys: ["conversion", "converted", "sign-ups", "signups", "cro"],
          a: [
            "At Simplified, the team increased the conversion rate by 30% while organic clicks grew.",
            "At Otto, reported daily sign-ups went from 4 to 30."
          ],
          follow: ["business", "cs-simplified", "cs-otto"] },
        { id: "cm-speed", q: "How fast did CreditMitra grow?",
          keys: ["how fast", "speed of growth", "six months", "33.8", "155k", "audience"],
          a: [
            "Six months. Active users went from 4.6K in March 2026 to more than 155K by September 2026, about 33.8×.",
            "Reported daily Search Console clicks also grew from roughly 15 to 9,000+."
          ],
          follow: ["cs-creditmitra", "path", "headline"] }
      ]
    },
    /* ---------------------------------------------------------------- */
    {
      id: "programmatic", name: "Programmatic SEO", blurb: "Pages built from templates and data",
      keys: ["programmatic", "pseo", "templates", "scale pages"],
      questions: [
        { id: "pseo", q: "What is programmatic SEO?",
          keys: ["programmatic", "pseo", "what is programmatic", "templates and data"],
          a: [
            "Templates and data that turn into thousands of ranking pages.",
            "Done well, it makes SEO work repeatable at scale. Done badly, it produces thin, duplicate or doorway pages, which is why quality control matters."
          ],
          follow: ["pseo-where", "pseo-quality", "pseo-tools"] },
        { id: "pseo-where", q: "Where has she used it?",
          keys: ["where has", "used programmatic", "examples of programmatic"],
          a: [
            "At Postfity, programmatic SEO took monthly organic clicks from 450 to 100K in three months.",
            "At Otto, 170 pages were launched, and reported daily sign-ups moved from 4 to 30."
          ],
          follow: ["cs-postfity", "cs-otto", "pseo-quality"] },
        { id: "pseo-quality", q: "How does she avoid thin or duplicate pages?",
          keys: ["thin", "duplicate", "doorway", "spam"],
          a: [
            "Her portfolio lists doorway pages, duplicate content, thin content and mass publishing as hazards, so each page needs substance and a clear search intent.",
            "She keeps a human reviewing automated work and launches in controlled batches, so mistakes do not multiply."
          ],
          follow: ["tools-auto", "philosophy", "pseo-tools"] },
        { id: "pseo-tools", q: "Which tools power her programmatic work?",
          keys: ["programmatic tools", "sheets", "apps script", "n8n"],
          a: [
            "Google Sheets for keyword lists, page data and templates, Google Apps Script for spreadsheet tasks and reporting, and n8n to connect apps and automate recurring workflows."
          ],
          link: { go: "s04", label: "Open Skills & tools" },
          follow: ["tools-auto", "pseo-where", "built"] }
      ]
    },
    /* ---------------------------------------------------------------- */
    {
      id: "ai", name: "AEO, GEO & AI Search", blurb: "Being cited in AI answers",
      keys: ["aeo", "geo", "ai search", "ai", "answer engine", "generative"],
      questions: [
        { id: "aeo-what", q: "What are AEO and GEO?",
          keys: ["aeo", "geo", "answer engine", "generative engine", "what is geo", "what is aeo"],
          a: [
            "AEO (answer engine optimization) and GEO (generative engine optimization) are about being found and cited in answers from AI search and assistants, not only in the traditional ten blue links.",
            "Divya’s focus is making trustworthy information clear and easy to cite, and answering natural-language questions directly."
          ],
          follow: ["ai-visibility", "geo-tricks", "exploring"] },
        { id: "ai-visibility", q: "How does she approach AI visibility?",
          keys: ["ai visibility", "cited", "citation", "schema", "entity", "structured data"],
          a: [
            "Her habits for it: make people, products and their relationships clear (entity optimization), describe visible and truthful content with structured data, answer conversational queries directly, and make trustworthy information easy to cite.",
            "She also puts weight on original research: evidence and insights people cannot find elsewhere."
          ],
          follow: ["geo-tricks", "ai-exp", "content"] },
        { id: "geo-tricks", q: "What does she think about GEO tricks?",
          keys: ["tricks", "manipulat", "hacks", "shortcuts", "deceive"],
          a: [
            "Not much. Her portfolio calls GEO manipulation a hazard: trying to deceive AI search is not a durable visibility strategy.",
            "Related hazards on her list are fake statistics and misleading schema."
          ],
          follow: ["philosophy", "ai-visibility", "exploring"] },
        { id: "exploring", q: "What is she exploring right now?",
          keys: ["exploring", "learning", "right now", "currently"],
          a: [
            "AI search and GEO, programmatic SEO, SEO automation, and search beyond traditional blue links.",
            "That list lives on the homepage under Currently exploring."
          ],
          link: { go: "s01", label: "Open the homepage" },
          follow: ["aeo-what", "ai-exp", "pseo"] },
        { id: "ai-exp", q: "Has she shipped AI search experiments?",
          keys: ["experiments", "shipped", "tested ai"],
          a: [
            "It’s on her list of things built: AI search experiments that test how trustworthy information becomes easy for AI search to cite.",
            "Her portfolio doesn’t publish metrics for them yet, so I won’t make any up."
          ],
          follow: ["built", "ai-visibility", "exploring"] }
      ]
    },
    /* ---------------------------------------------------------------- */
    {
      id: "tools", name: "Tools & Technology", blurb: "What is in her toolkit",
      keys: ["tools", "technology", "tech", "stack", "software"],
      questions: [
        { id: "tools-all", q: "Which SEO tools does she use?",
          keys: ["tools", "stack", "software", "which tools", "toolkit"],
          a: [
            "Search performance and analytics: Google Search Console, Google Analytics 4, Google Tag Manager, Looker Studio.",
            "Keyword and competitor research: Ahrefs, Semrush, Google Trends, Google Keyword Planner.",
            "Technical SEO: Screaming Frog SEO Spider, PageSpeed Insights, Rich Results Test.",
            "Programmatic SEO and automation: Google Sheets, Google Apps Script, n8n."
          ],
          link: { go: "s04", label: "Open the tool directory" },
          follow: ["tools-track", "tools-research", "tools-auto"] },
        { id: "tools-track", q: "How does she track performance?",
          keys: ["tracking", "reporting", "dashboard", "analytics", "search console", "ga4", "looker"],
          a: [
            "Google Search Console for clicks, impressions and indexing, Google Analytics 4 for audiences, events and conversions, Tag Manager for event tracking, and Looker Studio for reporting and dashboards."
          ],
          follow: ["business", "technical", "tools-research"] },
        { id: "tools-research", q: "What does she use for keyword and competitor research?",
          keys: ["keyword", "competitor", "ahrefs", "semrush", "research", "backlink"],
          a: [
            "Ahrefs for keyword research and backlink analysis, Semrush for keyword, ranking and competitor research, Google Trends to compare search interest over time, and Google Keyword Planner for keyword ideas and search estimates."
          ],
          follow: ["content", "tools-track", "tools-all"] },
        { id: "tools-auto", q: "How does she automate SEO work?",
          keys: ["automat", "n8n", "script", "workflow"],
          a: [
            "With Google Sheets, Google Apps Script and n8n, aiming for workflows that remove repetitive tasks and scale output.",
            "She keeps a human reviewing the results. Blind automation is on her list of hazards, because unsupervised workflows can multiply mistakes."
          ],
          follow: ["pseo-quality", "pseo-tools", "philosophy"] }
      ]
    },
    /* ---------------------------------------------------------------- */
    {
      id: "projects", name: "Projects & Case Studies", blurb: "Postfity, Simplified, CreditMitra, Otto",
      keys: ["projects", "case studies", "case study", "portfolio", "work samples"],
      questions: [
        { id: "cs-postfity", q: "Tell me about the Postfity case study",
          keys: ["postfity"],
          a: [
            "The challenge: grow organic traffic from a starting point of 450, by making SEO work repeatable at scale through programmatic SEO and automation.",
            "The result: monthly organic clicks from 450 to 100K in three months, through programmatic SEO, keyword clustering, landing-page frameworks and internal linking."
          ],
          link: { go: "s05", focus: "cs-postfity", label: "Open the Postfity case study" },
          follow: ["pseo", "cs-simplified", "tools-auto"] },
        { id: "cs-simplified", q: "Tell me about the Simplified case study",
          keys: ["simplified"],
          a: [
            "The challenge: grow organic clicks and improve conversion at the same time, bringing in more search traffic and increasing the share of visitors who convert.",
            "The result: a team effort Divya contributed to. Reported daily clicks went from 0 to 15,000, and the conversion rate increased by 30%."
          ],
          link: { go: "s05", focus: "cs-simplified", label: "Open the Simplified case study" },
          follow: ["business", "cs-creditmitra", "solo"] },
        { id: "cs-creditmitra", q: "Tell me about the CreditMitra case study",
          keys: ["creditmitra", "credit mitra"],
          a: [
            "The challenge: see how much the audience could grow over six months, measured in active users, starting at 4.6K in March 2026.",
            "The result: more than 155K active users by September 2026, about 33.8×. Reported daily Search Console clicks grew from roughly 15 to 9,000+. Divya contributed to scaling the audience."
          ],
          link: { go: "s05", focus: "cs-creditmitra", label: "Open the CreditMitra case study" },
          follow: ["cm-speed", "content", "cs-otto"] },
        { id: "cs-otto", q: "Tell me about the Otto project",
          keys: ["otto"],
          a: [
            "At Otto, 170 pages were launched, and reported daily sign-ups went from 4 to 30.",
            "A full write-up is still to come, so I only share the numbers that are confirmed."
          ],
          link: { go: "s05", focus: "cs-otto", label: "Open the Otto entry" },
          follow: ["pseo-where", "conversion", "cs-postfity"] },
        { id: "built", q: "What else has she built?",
          keys: ["things built", "has she built", "gallery", "search city", "game"],
          a: [
            "On her shelf of things built: programmatic page systems, SEO dashboards and reporting, technical SEO audits and AI search experiments.",
            "This portfolio also includes Catalyst’s Search City, a game where you collect SEO essentials and dodge hazards."
          ],
          link: { go: "s01", label: "See the shelf on the homepage" },
          follow: ["philosophy", "ai-exp", "technical"] }
      ]
    },
    /* ---------------------------------------------------------------- */
    {
      id: "career", name: "Career & Professional Experience", blurb: "Her path in SEO",
      keys: ["career", "experience", "professional", "job", "work history", "timeline"],
      questions: [
        { id: "path", q: "What is her career path?",
          keys: ["career", "path", "journey", "experience", "years", "how long", "timeline"],
          a: [
            "Six years in SEO. Her portfolio highlights Postfity (programmatic SEO), Simplified (organic search), Otto (programmatic pages and sign-ups) and CreditMitra (audience growth, March to September 2026).",
            "Programmatic SEO, AEO and GEO, automation and growth analytics are her focus today."
          ],
          link: { go: "s06", label: "Open the career timeline" },
          follow: ["recent", "companies", "linkedin"] },
        { id: "recent", q: "What is her most recent work?",
          keys: ["recent", "latest", "newest"],
          a: [
            "The most recent dated entry on her timeline is CreditMitra, March to September 2026, where she contributed to growing the active audience from 4.6K to 155K+."
          ],
          follow: ["cs-creditmitra", "exploring", "path"] },
        { id: "companies", q: "Which companies feature in her work?",
          keys: ["companies", "company", "employer", "worked at", "clients"],
          a: [
            "Postfity, Simplified, CreditMitra and Otto. Her portfolio doesn’t list job titles or dates for all of them, so for the full history see her LinkedIn."
          ],
          follow: ["linkedin", "headline", "built"] },
        { id: "problems", q: "What kind of problems does she like to solve?",
          keys: ["problems", "collaborate", "work together", "work with her"],
          a: [
            "Interesting growth problems, especially ones where a repeatable system can scale, like turning search opportunities into growth systems.",
            "Her own invitation: have an interesting growth problem? Let’s talk about what we can build."
          ],
          link: { go: "s08", label: "Open Contact" },
          follow: ["approach", "contact", "headline"] },
        { id: "linkedin", q: "Where can I see her full history?",
          keys: ["full history", "linkedin", "resume", "résumé", "cv"],
          a: [
            "On LinkedIn at linkedin.com/in/divya-kumari-shukla. Her résumé is on the Contact page as a PDF download."
          ],
          link: { go: "s08", label: "Open Contact" },
          follow: ["contact", "path", "headline"] }
      ]
    }
  ]
};
