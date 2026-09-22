/** Sitewide FAQ. Rendered on /faq and emitted as FAQPage JSON-LD. */

export const FAQ_GROUPS = [
  {
    group: "Working with us",
    items: [
      {
        q: "Who is Kool Konsulting for?",
        a: "Owner-run businesses in Nagpur and across Maharashtra — typically retail, healthcare, manufacturing and hospitality — where the owner is still close enough to the business to make decisions quickly. Most engagements are with businesses that have proven they work and now need to be found, planned properly or run with fewer manual hours.",
      },
      {
        q: "Who are you not for?",
        a: "We are not a fit if you want the cheapest option, if you need work started tomorrow, or if you want a consultant to hand over a document and disappear. We are also the wrong choice for large corporates needing a panel of specialists — a small firm is an advantage in speed and access, not in headcount.",
      },
      {
        q: "Will I actually work with Kulvir, or an account manager?",
        a: "With Kulvir. The firm is deliberately small, so the person you speak to on the first call is the person doing the work. That is the main reason we cap how many engagements run at once.",
      },
      {
        q: "How quickly do you reply to an enquiry?",
        a: "Within one working day, and usually the same day. If you would rather not wait, the WhatsApp button reaches us directly and a call can be booked straight into the calendar without waiting for a reply.",
      },
      {
        q: "Do you work with businesses outside Nagpur?",
        a: "Yes. Strategy, software, automation and AI work happen remotely without any loss. Local visibility work is different — it is specific to a place, and we take it on for Nagpur and the surrounding districts where we know the market properly.",
      },
      {
        q: "What languages do you work in?",
        a: "English, Hindi and Marathi. Documents are usually delivered in English unless you need otherwise.",
      },
    ],
  },
  {
    group: "Engagements and pricing",
    items: [
      {
        q: "How much does it cost?",
        a: "Starting prices are published on the pricing page and on each service page rather than hidden behind a call. Local visibility starts at ₹18,000 per month, business plans at ₹45,000, automation builds at ₹60,000, websites at ₹75,000 and marketing management at ₹25,000 per month. The final figure depends on scope, which we agree in writing before any work begins.",
      },
      {
        q: "Why publish prices when most firms do not?",
        a: "Because hiding them wastes your time and ours. If the starting figure does not suit your budget, you should know that in thirty seconds rather than after two meetings.",
      },
      {
        q: "Is there a minimum term?",
        a: "Monthly services carry a three-month minimum, because local visibility and advertising cannot be judged in less. One-off work — plans, models, builds — has no term at all.",
      },
      {
        q: "How do you charge?",
        a: "Fixed fee for defined work, monthly retainer for ongoing services. We do not bill by the hour for delivery work, so you are never paying for us to be slow.",
      },
      {
        q: "What are the payment terms?",
        a: "Half on starting and half on delivery for one-off work. Monthly services are invoiced in advance. Bank transfer or UPI, with a GST invoice for every payment.",
      },
      {
        q: "Do you offer refunds?",
        a: "If we have not started, the advance is returned in full. Once work has begun we will complete what was agreed or refund the part not delivered. We would rather part ways cleanly than hold a fee for work nobody is happy with.",
      },
    ],
  },
  {
    group: "Local visibility and SEO",
    items: [
      {
        q: "How long does local SEO take to work?",
        a: "Profile and on-page work shows within two to three weeks. Competitive map-pack positions usually take two to four months, depending on how established your competitors are in that category and area. Anyone promising the top spot in a month is either guessing or misleading you.",
      },
      {
        q: "Can you guarantee a number one ranking?",
        a: "No. Local ranking depends partly on how close the searcher is to your business, which nobody can control. What we commit to is completing every factor that is within our control and reporting movement honestly each month, including when it is flat.",
      },
      {
        q: "Do I keep my Google Business Profile if we stop working together?",
        a: "Yes. The profile is registered to your Google account throughout — we take manager access, never ownership. You also keep the review request system and the posting calendar.",
      },
      {
        q: "Will you write fake reviews?",
        a: "No. It breaks Google's policies, risks your profile being suspended, and customers recognise it. We build a system for asking real customers at the right moment instead.",
      },
    ],
  },
  {
    group: "Software, automation and AI",
    items: [
      {
        q: "Do I own what you build?",
        a: "Yes, in every case. Code is delivered into a repository in your name, models come as working spreadsheets rather than locked files, and automations run on accounts you control. There is nothing to renew and nothing held back to keep you dependent.",
      },
      {
        q: "Will AI replace my staff?",
        a: "That is not what we build for. The work these agents take on is the retyping and chasing, which is usually the part staff like least. If reducing headcount is your actual goal, say so at the start and we will be straight with you about whether the numbers support it.",
      },
      {
        q: "What happens when an AI agent gets something wrong?",
        a: "Every agent has an explicit escalation path to a person, and we set the confidence threshold conservatively at launch so more cases go to a human early on. You get full conversation logs so you can audit it yourself.",
      },
      {
        q: "Where is my data stored?",
        a: "We use business-tier services where the provider does not train on your data, and we tell you which provider handles what before you commit. If your data cannot leave your premises, tell us early — it changes the design but it is workable.",
      },
      {
        q: "What are the ongoing costs after a build?",
        a: "Underlying service fees, which you pay providers directly with no markup from us, plus optional monitoring from ₹8,000 per month. Many clients take the build and run it themselves, which is a perfectly good outcome.",
      },
    ],
  },
];

export const ALL_FAQS = FAQ_GROUPS.flatMap((g) => g.items);
