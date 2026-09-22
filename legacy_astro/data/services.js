/**
 * Every service page on the site. `tier: "core"` entries appear as the five
 * lines on /services; `tier: "focus"` entries are the dedicated pages for terms
 * that were previously only decoration in the marquee.
 *
 * Each page carries its own body copy. Nothing here is shared between pages —
 * duplicate copy across URLs is the fastest way to waste crawl budget.
 *
 * PRICING: figures below are benchmarked against published Indian agency rates
 * (single-location local SEO ₹8–15k/mo, full local SEO ₹25–60k/mo, GBP-only
 * ₹3–8k/mo) and set for a founder-led Nagpur practice.
 * TODO(pricing): confirm or overwrite every `priceFrom` before launch.
 */

export const SERVICES = [
  /* ---------------------------------------------------------------- CORE 1 */
  {
    slug: "local-visibility",
    tier: "core",
    name: "Local Presence and Visibility",
    navName: "Local Presence and Visibility",
    title: "Local SEO and Google Business Profile Services in Nagpur",
    description:
      "Get your Nagpur business into the Google map pack. Profile setup, local SEO, review management and monthly reporting. Starting from ₹18,000 per month.",
    summary:
      "Be the business that shows up when someone nearby searches for what you sell.",
    priceFrom: "₹18,000 per month",
    priceNote: "Minimum three-month term. One location included; add ₹6,000 per extra location.",
    timeline: "Profile live in week one. Ranking movement typically from week six.",
    audience:
      "Owner-run businesses in Nagpur with a physical address or a service area — clinics, showrooms, workshops, restaurants, clinics and professional practices — where most customers are within driving distance.",
    problem:
      "Someone twenty minutes away searches for what you sell. Three businesses appear in the map box above the results. If you are not one of them, you are not in the running — most people never scroll past those three. Being absent there is not a marketing problem you can fix with a better logo. It is a data problem: an incomplete profile, inconsistent address records across directories, and no recent reviews.",
    approach:
      "We treat your Google Business Profile as the storefront it is. That means filling every field Google offers, fixing the address and phone records that contradict each other across JustDial, IndiaMART and the rest, building a review habit that survives after we leave, and publishing to the profile every week so it stays active. Then we report on what actually moved: calls, direction requests and profile views, not rankings alone.",
    deliverables: [
      "Google Business Profile claimed, verified and every field completed",
      "Category and attribute selection based on what already ranks in your area",
      "Address, name and phone corrected across the major Indian directories",
      "Review request system your staff can run without us",
      "Weekly posts, photos and offer updates to the profile",
      "Local landing page on your site for each area you serve",
      "Monthly report: calls, direction requests, searches and map-pack position",
    ],
    howItWorks: [
      {
        step: "Audit",
        body: "We pull your current profile, your three nearest competitors, and every directory record carrying your name. You get the findings whether or not you hire us.",
      },
      {
        step: "Fix",
        body: "Profile completed and verified, duplicate and wrong listings cleaned up, categories corrected. This is the bulk of week one.",
      },
      {
        step: "Build",
        body: "Local pages written for the areas you serve, review requests set up, posting schedule started.",
      },
      {
        step: "Report",
        body: "A monthly one-page report showing calls and direction requests against the previous month, with what we changed and what we are changing next.",
      },
    ],
    example:
      "A typical single-location clinic starts with an unverified profile, two reviews and no posts. Month one is verification and cleanup. By month three the profile is complete, review count is growing weekly, and the report shows direction requests separately from calls so you can see which one your customers actually use.",
    notFor:
      "This is not a fit if you sell nationally with no local catchment, or if you want rankings guaranteed in writing — nobody can honestly promise that.",
    faqs: [
      {
        q: "How long before I appear in the map pack?",
        a: "Profile work shows up quickly — a completed, verified profile usually gains visibility within two to three weeks. Competitive positions in the top three take longer, commonly two to four months, depending on how many established businesses with review histories you are competing against in your category and area.",
      },
      {
        q: "Do I need a website for this to work?",
        a: "No. A Google Business Profile can generate calls with no website at all. A website helps you rank for more searches and gives you somewhere to send people, so we usually recommend one, but it is not a prerequisite for starting.",
      },
      {
        q: "Can you guarantee first position?",
        a: "No, and you should be cautious of anyone who does. Google's local ranking depends on proximity to the searcher, which nobody controls. What we commit to is completing every ranking factor that is within our control and showing you the movement each month.",
      },
      {
        q: "What happens to the profile if I stop working with you?",
        a: "It stays yours. The profile is registered to your Google account, not ours, and we hand over the review request system and posting calendar so your staff can keep it running.",
      },
    ],
    related: ["google-business-profile-management", "local-seo-nagpur", "reputation-management"],
  },

  /* ---------------------------------------------------------------- CORE 2 */
  {
    slug: "strategy-planning",
    tier: "core",
    name: "Strategy and Planning",
    navName: "Strategy and Planning",
    title: "Business Plans and Financial Modelling | Kool Konsulting",
    description:
      "Business plans, financial models and market-entry strategy built on real numbers, for owners raising funds or deciding where to grow. From ₹45,000.",
    summary:
      "Get the numbers right before you commit money to the plan.",
    priceFrom: "₹45,000",
    priceNote: "One-off engagement. Bank-ready plans with full financial model from ₹75,000.",
    timeline: "Two to four weeks depending on how much data already exists.",
    audience:
      "Owners deciding whether to open a second location, enter a new city, apply for a bank loan or take outside investment — where the decision is large enough that being wrong is expensive.",
    problem:
      "Most business plans are written to satisfy a lender and then never opened again. The financial model behind them is a spreadsheet where the assumptions live in someone's head, so nobody can test what happens if sales come in twenty per cent under plan. That is the number that decides whether the business survives the year, and it is usually the number nobody has calculated.",
    approach:
      "We build the model first and the document second. The model is yours to keep and to change: assumptions sit in labelled cells, so you can move a price or a volume and watch the cash position respond. The written plan then explains what the model says. This is the same order of work used in institutional finance, and it is the reason the plan holds up when a lender starts asking questions.",
    deliverables: [
      "Financial model with the assumptions separated and labelled, so you can test them",
      "Three-scenario projection: expected, conservative and downside",
      "Monthly cash-flow forecast for the first two years",
      "Break-even analysis and the working capital the plan actually needs",
      "Written business plan formatted for a bank or an investor",
      "Market and competitor analysis for the specific area you are entering",
      "A walkthrough session so you can run the model yourself",
    ],
    howItWorks: [
      {
        step: "Gather",
        body: "We work from your actual figures — sales records, costs, any existing accounts. Where data does not exist, we say so in the plan rather than inventing it.",
      },
      {
        step: "Model",
        body: "The financial model is built and tested first. You see it and challenge the assumptions before anything is written up.",
      },
      {
        step: "Write",
        body: "The plan document is written around the agreed model, in the format your lender or investor expects.",
      },
      {
        step: "Hand over",
        body: "A working session where we run the model with you, so you can update it yourself later without calling us.",
      },
    ],
    example:
      "An owner considering a second location arrives certain it will work. The model shows it does — but only if the first location holds its current margin while the second ramps for seven months, which needs about eleven lakh of working capital nobody had budgeted. The decision changes from whether to open to when to open, and the loan application asks for the right amount.",
    notFor:
      "This is not a fit if you need a plan document purely to tick a box and do not intend to use the numbers. That work is cheaper elsewhere and we will not do it well.",
    faqs: [
      {
        q: "Will a bank accept this plan?",
        a: "It is written in the format Indian lenders expect, with the projections, break-even and working capital sections they look for. No consultant can promise a loan is approved — that depends on your accounts, your security and the bank's own appetite — but the document will not be the reason it is refused.",
      },
      {
        q: "What if I do not have proper accounts yet?",
        a: "That is common and workable. We build from whatever records exist — bank statements, sales registers, purchase bills — and the plan states plainly which figures are measured and which are estimated. A lender trusts a stated estimate far more than a confident guess.",
      },
      {
        q: "Do I own the financial model?",
        a: "Yes. You get the working file, not a locked PDF, and a session on how to update it. The point is that you can keep using it after the engagement ends.",
      },
      {
        q: "Can you help with the actual fundraising?",
        a: "We prepare the documents and the model, and we will sit in on lender or investor conversations to answer questions on the numbers. We are not brokers and we do not take a percentage of funds raised.",
      },
    ],
    related: ["business-plan-writing", "financial-modelling", "market-entry-strategy"],
  },

  /* ---------------------------------------------------------------- CORE 3 */
  {
    slug: "automation-ai",
    tier: "core",
    name: "Automation and AI",
    navName: "Automation and AI",
    title: "AI Agents and Workflow Automation for Businesses | Nagpur",
    description:
      "Custom AI agents and workflow automation that remove repeated manual work: enquiry handling, follow-ups and reporting, wired into the tools you already use.",
    summary:
      "Hand the repetitive work to software that does it the same way every time.",
    priceFrom: "₹60,000",
    priceNote: "One-off build. Optional monitoring and tuning from ₹8,000 per month.",
    timeline: "Two to five weeks from scope to running in your business.",
    audience:
      "Businesses where a person spends hours each week retyping the same information, chasing the same follow-ups, or assembling the same report — usually somewhere between ten and a hundred staff.",
    problem:
      "Every growing business accumulates work that exists only because two systems do not talk to each other. Enquiries arrive on WhatsApp and get copied into a register. Someone rings the list of people who did not reply. A report gets rebuilt by hand every Monday. None of it needs judgement, all of it needs doing, and it quietly consumes a salary's worth of time each month.",
    approach:
      "We start by watching the actual work, not by choosing a tool. Most of what looks like an AI problem turns out to be a plumbing problem, and plumbing is cheaper and more reliable. Where a task genuinely needs language understanding — reading a messy enquiry, drafting a first reply, summarising a call — we build an agent for that specific job and connect it to the systems you already use. Then we watch it run for a fortnight before calling it finished.",
    deliverables: [
      "A written map of the process as it runs today, with the time cost of each step",
      "The automation built and connected to your existing tools",
      "AI agent for the steps that need language understanding, scoped to one job each",
      "A fallback path for every automated step, so nothing is lost if it fails",
      "Handover documentation written for your staff, not for engineers",
      "Two weeks of monitoring after go-live, with tuning included",
    ],
    howItWorks: [
      {
        step: "Observe",
        body: "We sit with whoever does the work and time it. The output is a map showing where the hours actually go — often not where you expect.",
      },
      {
        step: "Scope",
        body: "We propose what to automate and, just as important, what to leave alone. Anything needing real judgement stays with a person.",
      },
      {
        step: "Build",
        body: "Built and tested against real data from your business, not sample data.",
      },
      {
        step: "Watch",
        body: "Two weeks running alongside the manual process before we switch it over, so failures surface while there is still a safety net.",
      },
    ],
    example:
      "A business taking enquiries across WhatsApp, a web form and phone has someone consolidating all three into a spreadsheet each morning, then chasing anyone who has not replied. Automating the consolidation and the first follow-up removes roughly six hours a week, and the enquiries stop falling through the gap between channels.",
    notFor:
      "This is not a fit if the underlying process is broken. Automating a bad process makes it fail faster. We would fix the process first, and sometimes that is all that is needed.",
    faqs: [
      {
        q: "Will this replace my staff?",
        a: "Not in the businesses we work with. It removes the part of their week spent retyping and chasing, which is usually the part they like least. If headcount reduction is your goal, say so at the start so we can be honest about whether the numbers support it.",
      },
      {
        q: "What happens when the AI gets something wrong?",
        a: "Every automated step has a fallback that routes to a person, and we set the confidence threshold deliberately low at the start so more cases go to a human. It is easier to loosen that later than to recover from a confidently wrong answer sent to a customer.",
      },
      {
        q: "Do I need to change the software I already use?",
        a: "Usually not. Most tools businesses already run — WhatsApp Business, Google Sheets, Tally, common CRMs — can be connected. Where something genuinely cannot, we say so before you commit.",
      },
      {
        q: "What are the ongoing costs?",
        a: "Two kinds: the underlying service fees, which you pay directly to the providers so there is no markup from us, and optional monitoring from ₹8,000 per month. Plenty of clients take the build and run it themselves.",
      },
    ],
    related: ["ai-agents-for-business", "workflow-automation", "internal-tools"],
  },

  /* ---------------------------------------------------------------- CORE 4 */
  {
    slug: "software-development",
    tier: "core",
    name: "Software Development",
    navName: "Software Development",
    title: "Website and Business Software Development | Kool Konsulting",
    description:
      "Websites, internal tools and dashboards built to run a business: fast, searchable and maintainable, with the code handed to you. Websites from ₹75,000.",
    summary:
      "Software built to be used daily, and to be handed over cleanly.",
    priceFrom: "₹75,000",
    priceNote: "Marketing websites from ₹75,000. Internal tools and dashboards from ₹1,50,000.",
    timeline: "Three to eight weeks depending on scope.",
    audience:
      "Businesses that need a website which actually brings enquiries, or an internal tool to replace the spreadsheet three people are editing at once.",
    problem:
      "Two failures are common. The first is a website that looks acceptable but loads slowly, cannot be found in search, and gives a visitor no obvious way to make contact — it is a brochure nobody reads. The second is a critical process running on a shared spreadsheet that breaks whenever two people open it, with no history of who changed what.",
    approach:
      "We build the smallest thing that solves the problem properly, then make it fast. For websites that means the content is in the HTML so search engines can read it without running JavaScript, images are compressed, and there is a clear next step on every page. For internal tools it means one screen that does the job, proper user accounts, and an export button so your data is never trapped.",
    deliverables: [
      "Design and build, tested at phone, tablet and desktop widths",
      "Content present in the HTML for search engines, verified with JavaScript disabled",
      "Page titles, descriptions, structured data and sitemap configured",
      "Analytics and conversion tracking installed and confirmed working",
      "Source code handed to you in your own repository",
      "Written handover covering how to edit content and deploy changes",
      "Thirty days of fixes after launch at no charge",
    ],
    howItWorks: [
      {
        step: "Define",
        body: "We agree what the software must do and, explicitly, what it will not do in version one.",
      },
      {
        step: "Build",
        body: "Built in short passes with something viewable early, so you are correcting direction in week two rather than week seven.",
      },
      {
        step: "Test",
        body: "Checked across real devices and browsers, with performance and accessibility measured rather than assumed.",
      },
      {
        step: "Hand over",
        body: "Code, accounts and documentation transferred to you. You are never locked into us to make a change.",
      },
    ],
    example:
      "This website is a fair sample of the approach: statically generated so every page arrives as complete HTML, structured data on every page, and a total payload well under the budget we set. The same discipline goes into client builds.",
    notFor:
      "This is not a fit if you want the cheapest possible website. A template on a page builder will cost a fraction of this and for some businesses that is genuinely the right call.",
    faqs: [
      {
        q: "Do I own the code?",
        a: "Yes, entirely, and it is delivered into a repository in your name. There is no licence to renew and no hostage situation if you later hire someone else.",
      },
      {
        q: "Can I edit the content myself?",
        a: "Yes. We set up editing in whichever way suits how you actually work — a simple content file for a small site, or a proper content manager where several people need to publish.",
      },
      {
        q: "What does hosting cost?",
        a: "For most business websites, nothing or close to it. Static sites run on free tiers comfortably. Internal tools with databases typically run ₹1,500 to ₹5,000 per month, paid directly to the provider.",
      },
      {
        q: "What if I need changes after launch?",
        a: "Fixes are free for thirty days. After that, small changes are billed hourly and larger pieces are quoted, or you take it in-house — the handover is designed to make that genuinely possible.",
      },
    ],
    related: ["web-development", "internal-tools"],
  },

  /* ---------------------------------------------------------------- CORE 5 */
  {
    slug: "digital-marketing",
    tier: "core",
    name: "Digital Marketing",
    navName: "Digital Marketing",
    title: "Digital Marketing and Paid Ads Management | Nagpur",
    description:
      "Social and paid advertising set up to produce enquiries you can count, with tracking that proves what each rupee returned. From ₹25,000 per month.",
    summary:
      "Spend that ties back to enquiries you can count.",
    priceFrom: "₹25,000 per month",
    priceNote: "Management fee. Advertising spend is paid directly to Google or Meta, not to us.",
    timeline: "Live inside two weeks. Meaningful data from week four.",
    audience:
      "Businesses already getting some enquiries who want more, and who want to know which channel produced them.",
    problem:
      "Most small-business advertising cannot be judged. Money goes to boosted posts and Google Ads, the phone rings sometimes, and nobody can say which spend caused which call. Without that link every budget conversation is guesswork, and the usual outcome is either spending more on something that never worked or stopping something that did.",
    approach:
      "Tracking goes in before any spend does. We set up conversion tracking so a form submission, a WhatsApp click and a phone tap are all recorded against the campaign that produced them. Then we start small, on the channel where your customers actually are, and scale only what is producing enquiries at a cost you are happy with. You see the cost per enquiry every month.",
    deliverables: [
      "Conversion tracking installed and verified before spend starts",
      "Campaign structure built around your services, not one catch-all campaign",
      "Ad copy and creative, written for the specific audience",
      "Landing pages where the existing site would leak the enquiry",
      "Monthly report: spend, enquiries, cost per enquiry, by channel",
      "A clear recommendation each month on what to increase, cut or leave alone",
    ],
    howItWorks: [
      {
        step: "Track",
        body: "Conversion tracking first. Without it the rest is unmeasurable and we would be guessing alongside you.",
      },
      {
        step: "Start small",
        body: "A deliberately modest budget on one channel to find what converts before scaling.",
      },
      {
        step: "Scale",
        body: "Increase spend only where the cost per enquiry is acceptable to you. Cut what is not working, quickly.",
      },
      {
        step: "Report",
        body: "Monthly, in rupees per enquiry. If the number is bad we will tell you before you ask.",
      },
    ],
    example:
      "A business spending on boosted posts with no tracking cannot say what it gets back. After tracking is installed, the first month usually shows that one channel produces nearly all enquiries and the rest produce views. The budget consolidates, cost per enquiry falls, and total spend often goes down rather than up.",
    notFor:
      "This is not a fit below roughly ₹20,000 monthly ad spend. Under that, the management fee is too large a share of the budget and you would do better putting everything into local visibility first.",
    faqs: [
      {
        q: "Is the advertising spend included in the fee?",
        a: "No. The ₹25,000 is management. You pay Google and Meta directly from your own account, so you can see exactly what was spent and you keep the account and its history if we part ways.",
      },
      {
        q: "How much should I budget for ads?",
        a: "For most local businesses in Nagpur, ₹20,000 to ₹50,000 per month is enough to learn what works. We would rather start at the lower end and increase once the cost per enquiry is proven.",
      },
      {
        q: "Which is better, Google or Meta?",
        a: "It depends on whether people already search for what you sell. If they do, Google usually wins because the intent is there. If they do not know your service exists, Meta is better at creating demand. We generally test the one that fits your case first rather than splitting a small budget.",
      },
      {
        q: "Can you work with my existing ad account?",
        a: "Yes, and we prefer to. The history in an existing account is valuable and starting fresh throws it away.",
      },
    ],
    related: ["reputation-management", "local-seo-nagpur"],
  },

  /* --------------------------------------------------------------- FOCUS 1 */
  {
    slug: "google-business-profile-management",
    tier: "focus",
    parent: "local-visibility",
    name: "Google Business Profile Management",
    title: "Google Business Profile Management Services | Nagpur",
    description:
      "Ongoing Google Business Profile management for Nagpur businesses: weekly posts, review replies, photo updates and monthly reporting. From ₹8,000 monthly.",
    summary:
      "The profile stays complete, active and answered — every week, without you remembering.",
    priceFrom: "₹8,000 per month",
    priceNote: "Single location. Included at no extra cost within Local Presence and Visibility.",
    timeline: "Running from week one.",
    audience:
      "Businesses whose profile is already claimed but sits untouched — no recent posts, unanswered reviews, photos from three years ago.",
    problem:
      "A claimed profile is not a managed profile. Google's local ranking rewards activity, and an account that has not posted in eight months, has four unanswered reviews and shows a photograph of a since-renovated shopfront reads as neglected to both the algorithm and the customer deciding whether to ring you.",
    approach:
      "This is the maintenance half of local visibility, run as a standing weekly routine rather than a project. Posts go up on a schedule, reviews are answered within a day in your voice, photographs are refreshed as the business changes, and the questions section is seeded and monitored so competitors cannot answer on your behalf.",
    deliverables: [
      "One profile post per week — offers, updates, events",
      "Every review answered within one working day, positive and negative",
      "Photograph refresh each month",
      "Questions and answers seeded and monitored",
      "Business hours updated ahead of festivals and holidays",
      "Monthly report on views, calls, direction requests and searches",
    ],
    howItWorks: [
      { step: "Take over", body: "We get manager access to the existing profile. Ownership stays with you throughout." },
      { step: "Bring current", body: "Backlog of unanswered reviews cleared, stale photos and hours corrected." },
      { step: "Run weekly", body: "Posting, replying and monitoring on a fixed schedule." },
      { step: "Report monthly", body: "One page showing what the profile produced and what changed." },
    ],
    example:
      "A profile with eleven reviews, four of them unanswered and one negative sitting at the top, reads badly to anyone who looks. Clearing the backlog and answering the negative one plainly changes what a prospective customer sees first, before any ranking effect at all.",
    notFor:
      "If your profile is not yet claimed or verified, start with Local Presence and Visibility instead — this service assumes the foundation is already in place.",
    faqs: [
      {
        q: "How is this different from Local Presence and Visibility?",
        a: "That is the full engagement: audit, cleanup, citations, local pages and profile management together. This is the profile management alone, for businesses whose foundations are already sound and who want the weekly routine handled.",
      },
      {
        q: "Who replies to my reviews?",
        a: "We draft and post them in your business's voice, agreed with you at the start. Anything sensitive — a serious complaint, a factual dispute — comes to you before it goes up.",
      },
      {
        q: "Can you remove a bad review?",
        a: "Only Google can, and only if it breaks their policies — we will report those and often succeed. A genuine unhappy customer cannot be deleted. A calm public reply is more persuasive to future readers than the review is damaging.",
      },
    ],
    related: ["local-visibility", "reputation-management", "local-seo-nagpur"],
  },

  /* --------------------------------------------------------------- FOCUS 2 */
  {
    slug: "local-seo-nagpur",
    tier: "focus",
    parent: "local-visibility",
    name: "Local SEO in Nagpur",
    title: "Local SEO Services in Nagpur for Small Businesses | KK",
    description:
      "Local SEO for Nagpur businesses: area landing pages, citations, on-page work and map-pack ranking. Founder-led, reported monthly. From ₹18,000.",
    summary:
      "Rank in the areas of Nagpur where your customers actually live.",
    priceFrom: "₹18,000 per month",
    priceNote: "Minimum three-month term.",
    timeline: "On-page work inside two weeks. Ranking movement typically from week six.",
    audience:
      "Businesses serving Nagpur and the districts around it — Dharampeth, Sadar, Wardha Road, Manish Nagar, Hingna and the rest — who currently rank for their own name and very little else.",
    problem:
      "Ranking for your business name is not ranking. Customers who already know you will find you regardless. The searches that grow a business are the ones where nobody types your name — the person in Manish Nagar looking for what you sell who has never heard of you. Those searches are decided by proximity, by whether your site has anything to say about that area, and by how consistent your details are across the web.",
    approach:
      "Nagpur is a manageable market, which is an advantage: the competitive set in most categories is small enough to analyse properly. We look at exactly who currently ranks in each area you care about and what they have that you do not, then close those specific gaps — usually area pages with real content, citation consistency, and on-page work on the service pages that are closest to converting.",
    deliverables: [
      "Local keyword research for your category across Nagpur",
      "A landing page for each area you serve, with content specific to that area",
      "On-page optimisation of titles, headings and internal links",
      "Citation building and cleanup across Indian directories",
      "Schema markup so search engines read your location and services correctly",
      "Monthly ranking report by keyword and by area",
    ],
    howItWorks: [
      { step: "Map the market", body: "Who ranks today in each area and category, and what they have in common." },
      { step: "Close gaps", body: "The specific missing pieces, in the order that moves rankings soonest." },
      { step: "Build pages", body: "Area and service pages written to be genuinely useful, not keyword-stuffed." },
      { step: "Measure", body: "Ranking by keyword and by area, monthly, alongside enquiry volume." },
    ],
    example:
      "A business ranking well in its own locality but invisible five kilometres away usually has one page covering all of Nagpur. Splitting that into pages that speak to each area — with content that genuinely differs — is often the single change that opens up the other localities.",
    notFor:
      "Not a fit if your customers are nationwide. Local SEO optimises for proximity, which works against you if location is irrelevant to your sale.",
    faqs: [
      {
        q: "How is this different from regular SEO?",
        a: "Local SEO optimises for searches with geographic intent and for the map pack, where proximity to the searcher is a ranking factor you cannot change. National SEO competes on content depth and links instead. Different work, different timelines.",
      },
      {
        q: "How many areas can you target?",
        a: "As many as you genuinely serve. We would rather build four area pages with real content than twelve near-identical ones, which search engines discount and customers see through.",
      },
      {
        q: "Do you build backlinks?",
        a: "We build citations — consistent business listings — which matter for local ranking. We do not buy links. Paid link schemes are against Google's guidelines and the risk sits with your domain, not ours.",
      },
    ],
    related: ["local-visibility", "google-business-profile-management", "web-development"],
  },

  /* --------------------------------------------------------------- FOCUS 3 */
  {
    slug: "business-plan-writing",
    tier: "focus",
    parent: "strategy-planning",
    name: "Business Plan Writing",
    title: "Business Plan Writing Services for Banks and Investors",
    description:
      "Bank-ready and investor-ready business plans with a full financial model behind every projection, so the numbers hold up. Written in Nagpur, from ₹45,000.",
    summary:
      "A plan whose numbers survive the questions that follow it.",
    priceFrom: "₹45,000",
    priceNote: "Standard plan. With full three-scenario financial model, from ₹75,000.",
    timeline: "Two to three weeks.",
    audience:
      "Owners applying for a term loan or CGTMSE cover, pitching an investor, or formalising a plan before a major commitment.",
    problem:
      "Plans get refused on the numbers, not the prose. A lender's credit team goes straight to the projections and tests whether the revenue assumption is defensible, whether working capital has been calculated or guessed, and whether the repayment schedule is survivable in a bad quarter. A beautifully written plan with an unexamined spreadsheet behind it fails that reading in minutes.",
    approach:
      "The document is written last. We build and stress-test the model first so that every figure in the plan traces back to a stated assumption you have seen and agreed. Where a number is an estimate we label it as one — lenders trust a declared estimate far more than a confident round figure with nothing behind it.",
    deliverables: [
      "Executive summary written for someone who will read only that page",
      "Market and competitor section specific to your city and category",
      "Operations and management plan",
      "Full financial projections with the assumptions visible",
      "Break-even, working capital requirement and repayment capacity",
      "Risk section that names the real risks and the response to each",
      "Formatted document plus the underlying model file",
    ],
    howItWorks: [
      { step: "Interview", body: "A working session on the business as it really runs, not as it appears on paper." },
      { step: "Model", body: "Projections built and tested. You challenge the assumptions before we write." },
      { step: "Draft", body: "Written in the format your lender or investor expects." },
      { step: "Revise", body: "Two rounds of revision included, plus support if the lender comes back with questions." },
    ],
    example:
      "A manufacturing owner applying for expansion finance had projections showing steady monthly revenue from day one. Modelling the ramp properly — three months of commissioning at reduced output — changed both the working capital figure and the moratorium being requested. The plan asked for the right structure rather than the convenient one.",
    notFor:
      "Not a fit if you need a plan by tomorrow. Two weeks is the honest minimum to build something that stands up to scrutiny.",
    faqs: [
      {
        q: "Which lenders accept these plans?",
        a: "The format follows what Indian public and private sector banks expect for term loans and MSME facilities. No plan guarantees approval — that rests on your accounts, security and the bank's own position — but the document itself will not be the obstacle.",
      },
      {
        q: "Do you help with the application too?",
        a: "We prepare the plan and the model and we will join lender meetings to answer questions on the numbers. We do not act as loan agents and we do not take a share of anything sanctioned.",
      },
      {
        q: "How many revisions are included?",
        a: "Two full rounds, plus any changes needed in response to lender or investor questions on the first submission.",
      },
    ],
    related: ["strategy-planning", "financial-modelling", "market-entry-strategy"],
  },

  /* --------------------------------------------------------------- FOCUS 4 */
  {
    slug: "financial-modelling",
    tier: "focus",
    parent: "strategy-planning",
    name: "Financial Modelling",
    title: "Financial Modelling and Valuation Services | Kool Konsulting",
    description:
      "Financial models, cash-flow forecasts and valuations you can interrogate: assumptions visible and labelled, three scenarios built in. From ₹40,000 in Nagpur.",
    summary:
      "A model you can question, not a spreadsheet you have to trust.",
    priceFrom: "₹40,000",
    priceNote: "Operating model. Valuation work from ₹60,000.",
    timeline: "One to three weeks.",
    audience:
      "Owners weighing a large commitment — new capacity, an acquisition, a price change — and anyone who has been handed a spreadsheet they cannot check.",
    problem:
      "The common failure is a model where the assumptions are buried inside the formulas. Nobody can see that growth was set at eighteen per cent, so nobody can ask why. Such a model cannot be tested, which means it cannot inform a decision — it can only justify one already taken.",
    approach:
      "Every assumption sits in its own labelled cell on a separate sheet, and every calculation references it. That single discipline is what makes a model useful: you change the price, and the cash position, break-even and repayment capacity all move in front of you. We build in three scenarios as standard, because the expected case is rarely the one that decides whether you proceed.",
    deliverables: [
      "Three-statement model: profit and loss, balance sheet, cash flow",
      "Assumptions isolated on their own sheet, fully labelled",
      "Expected, conservative and downside scenarios built in",
      "Sensitivity analysis on the two or three variables that actually matter",
      "Valuation using discounted cash flow and comparable multiples, where relevant",
      "A walkthrough session recorded so you can revisit it",
    ],
    howItWorks: [
      { step: "Collect", body: "Historical figures and the assumptions you are working from today." },
      { step: "Build", body: "Structured so assumptions drive everything and nothing is hard-coded." },
      { step: "Test", body: "We break it deliberately — what has to go wrong for this to fail — and show you." },
      { step: "Teach", body: "A session so you can drive the model without us." },
    ],
    example:
      "A pricing decision looked marginal until sensitivity analysis showed the outcome hinged almost entirely on retention, not on price. The conversation moved off the discount question and onto why customers were leaving, which was the cheaper problem to fix.",
    notFor:
      "Not a fit if you want a model built to reach a number you have already decided on. We will build what the assumptions produce.",
    faqs: [
      {
        q: "What format is it delivered in?",
        a: "A working spreadsheet — Excel or Google Sheets, your choice — never a locked file or a PDF. The value is in being able to change it.",
      },
      {
        q: "Can you model a business that does not exist yet?",
        a: "Yes, and the honest approach is different: assumptions come from comparable businesses and market data, and the model states clearly which inputs are evidenced and which are estimated. A startup model that hides that distinction is not worth much.",
      },
      {
        q: "Do you do valuations for disputes or tax?",
        a: "We do commercial valuations for decisions and negotiations. Statutory valuations for tax or litigation need a registered valuer, and we will point you to one.",
      },
    ],
    related: ["strategy-planning", "business-plan-writing"],
  },

  /* --------------------------------------------------------------- FOCUS 5 */
  {
    slug: "ai-agents-for-business",
    tier: "focus",
    parent: "automation-ai",
    name: "AI Agents for Business",
    title: "Custom AI Agents for Small and Medium Businesses | India",
    description:
      "Custom AI agents for enquiry handling, qualification and support — scoped to one job, connected to your tools, with a human fallback. From ₹60,000.",
    summary:
      "One agent, one job, connected to the systems you already run.",
    priceFrom: "₹60,000",
    priceNote: "Per agent. Monitoring and tuning from ₹8,000 per month.",
    timeline: "Two to four weeks.",
    audience:
      "Businesses handling a steady flow of similar enquiries or support questions where the first reply is largely the same each time.",
    problem:
      "The usual mistake is asking one agent to do everything — answer questions, qualify leads, book appointments, handle complaints. Broad agents produce confidently wrong answers, because nothing constrains them. The failure is not the technology; it is the scope.",
    approach:
      "One agent, one job, with the boundaries written down. An agent that qualifies enquiries does not also handle complaints. Each is given only the information it needs, connected to the specific systems it must read or write, and every one has a defined point at which it stops and hands to a person. We tune the handover threshold conservatively at first and loosen it once we have seen real traffic.",
    deliverables: [
      "Agent scoped to a single, written job description",
      "Connected to your existing tools — WhatsApp, email, CRM, sheets",
      "Knowledge base built from your actual documents and prior replies",
      "Explicit escalation rules and a human handover path",
      "Conversation logs you can review",
      "Two weeks of tuning against real conversations after launch",
    ],
    howItWorks: [
      { step: "Define the job", body: "Exactly what the agent handles and what it must never attempt." },
      { step: "Feed it", body: "Built from your own documents and past replies, so it sounds like your business." },
      { step: "Test", body: "Run against real historical enquiries and compare to what your staff actually replied." },
      { step: "Release slowly", body: "Live with a low confidence threshold, tightened as evidence accumulates." },
    ],
    example:
      "An enquiry agent that reads incoming WhatsApp messages, answers the four questions that make up most of the volume, collects the details needed to quote, and passes anything unusual to a person with the conversation attached — so the handover does not restart from nothing.",
    notFor:
      "Not a fit for regulated advice — medical, legal or financial guidance to a customer needs a qualified human, and we will not build an agent that pretends otherwise.",
    faqs: [
      {
        q: "Which AI model do you use?",
        a: "Whichever suits the job and the budget. Most business agents run well on mid-tier models; reserving the largest models for tasks that genuinely need them keeps running costs sensible.",
      },
      {
        q: "Where does my data go?",
        a: "We use business-tier APIs where the provider does not train on your data, and we tell you exactly which provider handles what before you commit. If data cannot leave your premises, say so early — it changes the design.",
      },
      {
        q: "How do I know it is not making things up?",
        a: "Two safeguards: the agent answers only from your supplied knowledge base rather than general knowledge, and it escalates when confidence is low. You also get the full conversation logs, so you can audit rather than take our word for it.",
      },
    ],
    related: ["automation-ai", "workflow-automation", "internal-tools"],
  },

  /* --------------------------------------------------------------- FOCUS 6 */
  {
    slug: "workflow-automation",
    tier: "focus",
    parent: "automation-ai",
    name: "Workflow Automation",
    title: "Business Workflow Automation Services | Kool Konsulting",
    description:
      "Connect the systems that do not talk to each other and remove the retyping. Process mapped, timed, automated and documented for your staff. From ₹45,000.",
    summary:
      "Stop moving the same information between systems by hand.",
    priceFrom: "₹45,000",
    priceNote: "Per workflow. Most businesses start with one and add more.",
    timeline: "One to three weeks per workflow.",
    audience:
      "Businesses where information is copied between a form, a spreadsheet, an accounting package and a messaging app — by a person, several times a day.",
    problem:
      "This work is invisible because it is nobody's job title. It is twenty minutes here and forty minutes there, spread across several people, and it never appears on a cost sheet. It also introduces errors, because the twelfth manual transcription of the day is where the digit gets dropped.",
    approach:
      "Automation without AI wherever possible — it is cheaper, faster and does not surprise you. Most of this work is connecting systems that already have the ability to talk and nobody has wired together. We map the process, time each step, automate the mechanical ones, and leave anything requiring judgement with a person.",
    deliverables: [
      "Written process map with the time cost of each step",
      "Automation built and connected across your existing tools",
      "Error handling and alerts when something fails",
      "Data validation so bad input is caught at entry",
      "Documentation your staff can follow",
      "Before and after time measurement, so the saving is proven rather than claimed",
    ],
    howItWorks: [
      { step: "Time it", body: "We measure the process as it runs today. The baseline is what proves the saving later." },
      { step: "Simplify", body: "Remove steps that exist only from habit before automating anything." },
      { step: "Connect", body: "Wire the systems together and test against real data." },
      { step: "Prove it", body: "Measure again and show the difference in hours." },
    ],
    example:
      "Enquiries arriving on three channels and consolidated by hand each morning is a common one. Connecting all three into a single record with automatic acknowledgement typically removes several hours a week and closes the gap where enquiries were being lost between channels.",
    notFor:
      "Not a fit if the process changes every week. Automation rewards stability; a genuinely fluid process should stay manual until it settles.",
    faqs: [
      {
        q: "What tools do you use?",
        a: "Whatever fits — often n8n or Make for connecting systems, sometimes purpose-written code where the logic is unusual. We choose for reliability and for what you can maintain, not for what is fashionable.",
      },
      {
        q: "What if it breaks?",
        a: "Every automation has error alerts and a manual fallback, so work stops being automatic rather than stopping altogether. Optional monitoring covers ongoing fixes.",
      },
      {
        q: "Can you automate WhatsApp?",
        a: "Yes, through the official WhatsApp Business API. We do not use unofficial tools that risk your number being banned.",
      },
    ],
    related: ["automation-ai", "ai-agents-for-business", "internal-tools"],
  },

  /* --------------------------------------------------------------- FOCUS 7 */
  {
    slug: "web-development",
    tier: "focus",
    parent: "software-development",
    name: "Web Development",
    title: "Business Website Development in Nagpur | Fast and Findable",
    description:
      "Websites built to load fast, rank in search and turn visitors into enquiries. Content in the raw HTML, code handed to you on completion. From ₹75,000.",
    summary:
      "A website that search engines can read and customers can act on.",
    priceFrom: "₹75,000",
    priceNote: "Marketing site up to ten pages. Larger builds quoted.",
    timeline: "Three to six weeks.",
    audience:
      "Businesses whose current site is slow, invisible in search, unreadable on a phone, or simply does not exist.",
    problem:
      "Plenty of small-business websites are built as single-page applications where the content only appears after JavaScript runs. Search engines can often cope, but it is a needless risk, and those sites are usually slow on the mid-range Android phones most Indian customers actually use. A site that takes six seconds on 4G has lost the visitor before it finishes loading.",
    approach:
      "Static generation by default: pages are built to complete HTML at deploy time, so content is present with JavaScript disabled and there is no rendering delay. JavaScript is added only where a feature genuinely needs it. Images are compressed and correctly sized, structured data is set up properly, and every page has one obvious next step.",
    deliverables: [
      "Design and build, tested from 390px phones to wide desktop",
      "Static HTML output, verified readable with JavaScript disabled",
      "Titles, meta descriptions, canonicals and Open Graph tags per page",
      "Structured data, XML sitemap and robots.txt",
      "Contact form posting to a real endpoint, with spam protection",
      "Analytics and conversion tracking installed and verified",
      "Code in your repository plus a written handover",
    ],
    howItWorks: [
      { step: "Plan", body: "Page structure and the single action each page should produce." },
      { step: "Build", body: "Content first, then design, so the words are not squeezed into a template afterwards." },
      { step: "Measure", body: "Performance, accessibility and SEO checked with tooling before launch, not assumed." },
      { step: "Launch", body: "Domain, SSL, Search Console and analytics configured and confirmed working." },
    ],
    example:
      "This site is the reference build: statically generated, structured data on every page, complete content in the raw HTML, and a payload budget held under 200 KB.",
    notFor:
      "Not a fit if you need e-commerce with hundreds of products. Shopify or WooCommerce will serve you better and we will say so.",
    faqs: [
      {
        q: "Will my site rank after you build it?",
        a: "A build fixes the technical foundation — speed, crawlability, structure, markup. Ranking beyond your own brand name also needs content and time, which is the local SEO engagement. A well-built site makes that work faster; it does not replace it.",
      },
      {
        q: "Can I add pages myself?",
        a: "Yes. We set up content editing to match how you work and show you how in the handover.",
      },
      {
        q: "Do you redesign existing sites?",
        a: "Yes, and we start by checking what is already ranking so the rebuild does not throw away existing traffic — the most common and most expensive redesign mistake.",
      },
    ],
    related: ["software-development", "local-seo-nagpur", "internal-tools"],
  },

  /* --------------------------------------------------------------- FOCUS 8 */
  {
    slug: "market-entry-strategy",
    tier: "focus",
    parent: "strategy-planning",
    name: "Market Entry Strategy",
    title: "Market Entry Strategy and Feasibility Studies | India",
    description:
      "Should you open in this city, launch this line, serve this segment? Feasibility studies and entry plans grounded in real numbers. From ₹55,000.",
    summary:
      "Find out whether the move works before you fund it.",
    priceFrom: "₹55,000",
    priceNote: "Single market or single new line. Multi-market studies quoted.",
    timeline: "Three to four weeks.",
    audience:
      "Established businesses considering a second location, a new city, a new product line or a new customer segment.",
    problem:
      "Expansion decisions are usually made on enthusiasm and a rough sense that the numbers work. The costs that sink them are rarely the obvious ones — it is the ramp period nobody budgeted for, the local competitor nobody surveyed, or the assumption that the new location performs like the established one from month one.",
    approach:
      "We answer three questions in order. Is there demand, evidenced rather than assumed? Can you serve it profitably at the prices that market will bear? And what does it cost to survive until it turns? A recommendation not to proceed is a valid and frequently valuable outcome — it is far cheaper than finding out afterwards.",
    deliverables: [
      "Demand assessment for the specific market, with sources stated",
      "Competitor survey with positioning and pricing",
      "Entry cost estimate including the ramp period",
      "Unit economics at the prices that market will actually support",
      "Risk assessment and the exit cost if it does not work",
      "A clear go, no-go or go-with-conditions recommendation",
    ],
    howItWorks: [
      { step: "Frame", body: "Agree exactly what decision this study must answer, and by when." },
      { step: "Research", body: "Desk research plus direct enquiry — competitor pricing, local conditions, demand signals." },
      { step: "Model", body: "Entry economics including the honest ramp, not a straight line from day one." },
      { step: "Recommend", body: "A stated position with the reasoning, not a menu of options for you to guess between." },
    ],
    example:
      "A second-location study where the demand is real but the entry cost is higher than expected changes the question from whether to when — and often reveals that the same capital produces a better return applied to the existing location.",
    notFor:
      "Not a fit if the decision is already made and you want the study as justification. We will report what we find.",
    faqs: [
      {
        q: "What if the answer is no?",
        a: "Then you have saved considerably more than the fee. We give the recommendation the evidence supports, including a clear no, and we set out what would have to change for the answer to become yes.",
      },
      {
        q: "Do you do primary research?",
        a: "Yes, within scope — competitor visits, pricing checks, structured conversations with potential customers. Large-sample surveys are a separate cost we would quote before starting.",
      },
      {
        q: "Can you help execute the entry?",
        a: "Yes. That is the point of the firm — the same team can build the website, the local visibility and the systems for the new location.",
      },
    ],
    related: ["strategy-planning", "financial-modelling", "business-plan-writing"],
  },

  /* --------------------------------------------------------------- FOCUS 9 */
  {
    slug: "reputation-management",
    tier: "focus",
    parent: "local-visibility",
    name: "Reputation Management",
    title: "Online Reputation and Review Management | Nagpur, India",
    description:
      "Build a steady flow of genuine reviews and answer every one within a working day. Review systems, response handling and monitoring. From ₹10,000 per month.",
    summary:
      "A steady flow of genuine reviews, and a reply under every one.",
    priceFrom: "₹10,000 per month",
    priceNote: "Included within Local Presence and Visibility.",
    timeline: "Review system running in week one.",
    audience:
      "Businesses with few reviews, a damaging recent one, or a good reputation offline that is invisible online.",
    problem:
      "Review count and recency both feed local ranking, and they decide the click. A business with nine reviews from two years ago loses to one with sixty from last month, even when the nine are better. Most owners know they should ask and do not have a system that makes asking routine.",
    approach:
      "We build the asking into the moment the customer is most satisfied — after the service, not weeks later — using whichever channel you already use to reach them. Every review gets a reply, because unanswered reviews read as an absent owner. Negative reviews get a calm, factual, public response, since the audience is not the complainant but everyone reading afterwards.",
    deliverables: [
      "Review request system built into your existing customer flow",
      "QR codes and short links for in-person requests",
      "Every review answered within one working day",
      "Monitoring across Google, Facebook and JustDial",
      "Escalation to you for anything serious before it is answered",
      "Monthly report on volume, average rating and response time",
    ],
    howItWorks: [
      { step: "Find the moment", body: "Identify the point in your process where a customer is most likely to say yes." },
      { step: "Make it easy", body: "One tap or one scan. Every extra step loses most of the people who intended to." },
      { step: "Reply to everything", body: "Positive and negative, within a working day." },
      { step: "Monitor", body: "Alerts on new reviews so nothing sits unanswered." },
    ],
    example:
      "Most businesses that ask consistently at the right moment move from a handful of reviews to a steady weekly trickle. The reply under each one does as much work as the review itself, because it shows a reader that someone is paying attention.",
    notFor:
      "We will not buy, generate or incentivise fake reviews. It violates Google's policies, risks the profile being suspended, and customers spot it.",
    faqs: [
      {
        q: "Is it acceptable to ask customers for reviews?",
        a: "Yes. Google explicitly permits asking. What is not permitted is offering an incentive, or asking only the customers you expect to be positive — both are policy violations and both are detectable.",
      },
      {
        q: "How do you handle a false review?",
        a: "If it breaks Google's policies — a competitor, a person who was never a customer, abusive content — we report it with evidence, and these are often removed. If it is a genuine grievance we help you answer it well in public.",
      },
      {
        q: "How many reviews do I need?",
        a: "Enough to be credible against the businesses you compete with, which in most Nagpur categories means somewhere between twenty and fifty. Recency matters as much as count.",
      },
    ],
    related: ["local-visibility", "google-business-profile-management"],
  },

  /* -------------------------------------------------------------- FOCUS 10 */
  {
    slug: "internal-tools",
    tier: "focus",
    parent: "software-development",
    name: "Internal Tools and Dashboards",
    title: "Internal Business Tools and Dashboards | Kool Konsulting",
    description:
      "Replace the shared spreadsheet with a proper internal tool: user accounts, validation, change history and live dashboards. From ₹1,50,000 in Nagpur.",
    summary:
      "Retire the shared spreadsheet three people are editing at once.",
    priceFrom: "₹1,50,000",
    priceNote: "Typical first tool. Hosting from ₹1,500 monthly, paid to the provider.",
    timeline: "Four to eight weeks.",
    audience:
      "Businesses running something important — inventory, job tracking, orders, staff scheduling — on a spreadsheet that has outgrown itself.",
    problem:
      "The spreadsheet works until it does not. Two people open it and one overwrites the other. Nobody knows who changed the figure or when. There is no validation, so a wrong entry propagates silently. And the one person who understands the formulas becomes a single point of failure for the business.",
    approach:
      "We build the narrowest tool that solves the actual problem, and we resist the urge to build the system that handles every future case. Proper user accounts, validation at entry, a full change history, and an export button so your data is never held hostage — including by us.",
    deliverables: [
      "Web-based tool, usable on phone and desktop",
      "User accounts with roles and appropriate permissions",
      "Data validation so bad entries are caught at the point of entry",
      "Change history showing who changed what and when",
      "Dashboard with the numbers you actually check",
      "Export to Excel or CSV at any time",
      "Migration of your existing spreadsheet data",
      "Staff training and written documentation",
    ],
    howItWorks: [
      { step: "Shadow", body: "We watch the spreadsheet being used and note every workaround people have invented." },
      { step: "Scope tightly", body: "Version one covers today's process. Wishlist items are recorded, not built." },
      { step: "Build and migrate", body: "Tool built, existing data moved across and checked." },
      { step: "Train and hand over", body: "Staff trained, documentation written, code delivered to your repository." },
    ],
    example:
      "A job-tracking sheet maintained by one person becomes a tool where technicians update status from a phone, the office sees live status without ringing anyone, and the change history settles the question of who marked a job complete.",
    notFor:
      "Not a fit if standard software already does this well. If Zoho, Tally or a proven industry package covers your case, we will tell you to buy it rather than sell you a build.",
    faqs: [
      {
        q: "Why not just buy existing software?",
        a: "Often you should, and we will say so. Custom is worth it when your process is genuinely unusual, when off-the-shelf tools require you to distort how you work, or when per-user licensing costs more over three years than building once.",
      },
      {
        q: "What if we outgrow it?",
        a: "You own the code and the data, so it can be extended by us or by anyone else. That is the point of handing over a repository rather than renting you access.",
      },
      {
        q: "Can it work offline?",
        a: "Partly. We can build tools that keep working with an intermittent connection and sync when it returns, which matters for site and field use. Full offline capability costs more and we would scope it explicitly.",
      },
    ],
    related: ["software-development", "workflow-automation", "web-development"],
  },
];

export const CORE_SERVICES = SERVICES.filter((s) => s.tier === "core");
export const FOCUS_SERVICES = SERVICES.filter((s) => s.tier === "focus");

export const getService = (slug) => SERVICES.find((s) => s.slug === slug);
