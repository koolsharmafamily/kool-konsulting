import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outputDir = path.resolve('public/3d/textures');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. Website Card (Bachpan Dance Academy)
const websiteSvg = `
<svg width="512" height="1024" viewBox="0 0 512 1024" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="shadow" x="-5%" y="-5%" width="110%" height="110%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-color="#0E0F1A" flood-opacity="0.06"/>
    </filter>
  </defs>

  <!-- Card Background -->
  <rect width="512" height="1024" rx="36" fill="#FFFFFF"/>
  <rect width="512" height="1024" rx="36" fill="none" stroke="#E3E6EF" stroke-width="3"/>

  <!-- Phone Status Bar -->
  <rect x="0" y="0" width="512" height="48" rx="36" fill="#F6F7FB"/>
  <text x="48" y="32" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="600" fill="#0E0F1A">9:41</text>
  <circle cx="440" cy="28" r="4" fill="#0E0F1A"/>
  <circle cx="454" cy="28" r="4" fill="#0E0F1A"/>
  <circle cx="468" cy="28" r="4" fill="#0E0F1A"/>

  <!-- Browser URL Bar -->
  <rect x="28" y="64" width="456" height="44" rx="12" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
  <circle cx="52" cy="86" r="6" fill="#22C3EE"/>
  <text x="70" y="92" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="15" fill="#4A4D63" font-weight="500">bachpanacademy.in</text>

  <!-- Hero Header -->
  <g transform="translate(32, 136)">
    <!-- Category Pill -->
    <rect x="0" y="0" width="104" height="28" rx="14" fill="#EEEDFF"/>
    <text x="14" y="19" font-family="sans-serif" font-size="13" font-weight="600" fill="#3D35E0">Live Website</text>

    <!-- Main Title -->
    <text x="0" y="68" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="34" font-weight="800" fill="#0E0F1A" letter-spacing="-0.5">Bachpan Dance</text>
    <text x="0" y="108" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="34" font-weight="800" fill="#0E0F1A" letter-spacing="-0.5">Academy</text>
    <text x="0" y="142" font-family="sans-serif" font-size="16" fill="#6B6F86">Kathak &amp; Performing Arts · Nagpur</text>
  </g>

  <!-- Divider -->
  <line x1="32" y1="310" x2="480" y2="310" stroke="#E3E6EF" stroke-width="1.5"/>

  <!-- Classes List -->
  <g transform="translate(32, 336)">
    <text x="0" y="24" font-family="sans-serif" font-size="18" font-weight="700" fill="#0E0F1A">Upcoming Batches</text>

    <!-- Class 1 -->
    <rect x="0" y="44" width="448" height="116" rx="16" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="20" y="78" font-family="sans-serif" font-size="17" font-weight="700" fill="#0E0F1A">Kathak Beginner (Ages 6-12)</text>
    <text x="20" y="104" font-family="sans-serif" font-size="14" fill="#4A4D63">Tue &amp; Thu, 5:00 PM · Batch full: 14/15</text>
    <text x="20" y="132" font-family="sans-serif" font-size="15" font-weight="700" fill="#3D35E0">₹1,800 / month</text>
    <rect x="330" y="106" width="98" height="34" rx="8" fill="#3D35E0"/>
    <text x="352" y="128" font-family="sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Join</text>

    <!-- Class 2 -->
    <rect x="0" y="180" width="448" height="116" rx="16" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="20" y="214" font-family="sans-serif" font-size="17" font-weight="700" fill="#0E0F1A">Semi-Classical (Teens &amp; Adults)</text>
    <text x="20" y="240" font-family="sans-serif" font-size="14" fill="#4A4D63">Sat &amp; Sun, 11:00 AM · Weekend batch</text>
    <text x="20" y="268" font-family="sans-serif" font-size="15" font-weight="700" fill="#3D35E0">₹2,200 / month</text>
    <rect x="330" y="242" width="98" height="34" rx="8" fill="#3D35E0"/>
    <text x="352" y="264" font-family="sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Join</text>

    <!-- Class 3 -->
    <rect x="0" y="316" width="448" height="116" rx="16" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="20" y="350" font-family="sans-serif" font-size="17" font-weight="700" fill="#0E0F1A">Folk &amp; Contemporary</text>
    <text x="20" y="376" font-family="sans-serif" font-size="14" fill="#4A4D63">Mon &amp; Wed, 6:30 PM · 8 spots left</text>
    <text x="20" y="404" font-family="sans-serif" font-size="15" font-weight="700" fill="#3D35E0">₹1,600 / month</text>
    <rect x="330" y="378" width="98" height="34" rx="8" fill="#3D35E0"/>
    <text x="352" y="400" font-family="sans-serif" font-size="13" font-weight="600" fill="#FFFFFF">Join</text>
  </g>

  <!-- Big WhatsApp CTA at bottom -->
  <g transform="translate(32, 860)">
    <rect x="0" y="0" width="448" height="68" rx="18" fill="#25D366"/>
    <circle cx="48" cy="34" r="16" fill="#FFFFFF" fill-opacity="0.25"/>
    <text x="80" y="42" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="17" font-weight="700" fill="#0E0F1A">Book Free Trial on WhatsApp</text>
    <text x="32" y="94" font-family="sans-serif" font-size="12" fill="#6B6F86" text-anchor="middle" transform="translate(192, 0)">Zero paperwork · Instant class confirmation</text>
  </g>
</svg>`;

// 2. App Card (Construction Attendance App)
const appSvg = `
<svg width="512" height="1024" viewBox="0 0 512 1024" xmlns="http://www.w3.org/2000/svg">
  <!-- Card Background -->
  <rect width="512" height="1024" rx="36" fill="#FFFFFF"/>
  <rect width="512" height="1024" rx="36" fill="none" stroke="#E3E6EF" stroke-width="3"/>

  <!-- Phone Status Bar -->
  <rect x="0" y="0" width="512" height="48" rx="36" fill="#F6F7FB"/>
  <text x="48" y="32" font-family="sans-serif" font-size="16" font-weight="600" fill="#0E0F1A">08:15</text>
  <circle cx="460" cy="28" r="5" fill="#16A34A"/>

  <!-- App Header -->
  <g transform="translate(32, 72)">
    <rect x="0" y="0" width="90" height="26" rx="13" fill="#E6F4EA"/>
    <text x="14" y="18" font-family="sans-serif" font-size="12" font-weight="700" fill="#16A34A">Live Sync</text>

    <text x="0" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="28" font-weight="800" fill="#0E0F1A">Site #2 Attendance</text>
    <text x="0" y="88" font-family="sans-serif" font-size="15" fill="#4A4D63">MIDC Hingna · Thursday, 12 Oct</text>

    <!-- Stats Badges -->
    <rect x="0" y="112" width="216" height="64" rx="14" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="18" y="138" font-family="sans-serif" font-size="12" font-weight="600" fill="#6B6F86">PRESENT TODAY</text>
    <text x="18" y="164" font-family="sans-serif" font-size="22" font-weight="800" fill="#16A34A">28 workers</text>

    <rect x="232" y="112" width="216" height="64" rx="14" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="250" y="138" font-family="sans-serif" font-size="12" font-weight="600" fill="#6B6F86">ABSENT</text>
    <text x="250" y="164" font-family="sans-serif" font-size="22" font-weight="800" fill="#4A4D63">4 workers</text>
  </g>

  <!-- Worker Attendance Rows -->
  <g transform="translate(32, 280)">
    <text x="0" y="20" font-family="sans-serif" font-size="16" font-weight="700" fill="#0E0F1A">Supervisor Check-in</text>

    <!-- Worker 1 -->
    <rect x="0" y="36" width="448" height="88" rx="14" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="18" y="68" font-family="sans-serif" font-size="17" font-weight="700" fill="#0E0F1A">Ramesh Mistry</text>
    <text x="18" y="94" font-family="sans-serif" font-size="13" fill="#6B6F86">Wage: ₹950/day · Overtime: 1 hr</text>
    <rect x="340" y="54" width="90" height="42" rx="10" fill="#E6F4EA" stroke="#CEEAD6" stroke-width="1.5"/>
    <text x="358" y="80" font-family="sans-serif" font-size="14" font-weight="700" fill="#16A34A">P (+OT)</text>

    <!-- Worker 2 -->
    <rect x="0" y="136" width="448" height="88" rx="14" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="18" y="168" font-family="sans-serif" font-size="17" font-weight="700" fill="#0E0F1A">Suresh Beldar</text>
    <text x="18" y="194" font-family="sans-serif" font-size="13" fill="#6B6F86">Wage: ₹700/day · Advance: Nil</text>
    <rect x="340" y="154" width="90" height="42" rx="10" fill="#E6F4EA" stroke="#CEEAD6" stroke-width="1.5"/>
    <text x="375" y="180" font-family="sans-serif" font-size="14" font-weight="700" fill="#16A34A">P</text>

    <!-- Worker 3 -->
    <rect x="0" y="236" width="448" height="88" rx="14" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="18" y="268" font-family="sans-serif" font-size="17" font-weight="700" fill="#0E0F1A">Sonu Mazdoor</text>
    <text x="18" y="294" font-family="sans-serif" font-size="13" fill="#6B6F86">No check-in · Not on site</text>
    <rect x="340" y="254" width="90" height="42" rx="10" fill="#FCE8E6" stroke="#FAD2CF" stroke-width="1.5"/>
    <text x="358" y="280" font-family="sans-serif" font-size="13" font-weight="700" fill="#B3261E">Absent</text>

    <!-- Worker 4 -->
    <rect x="0" y="336" width="448" height="88" rx="14" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="18" y="368" font-family="sans-serif" font-size="17" font-weight="700" fill="#0E0F1A">Monu Mazdoor</text>
    <text x="18" y="394" font-family="sans-serif" font-size="13" fill="#6B6F86">Half day · 4 hours logged</text>
    <rect x="340" y="354" width="90" height="42" rx="10" fill="#FEF7E0" stroke="#FEEFC3" stroke-width="1.5"/>
    <text x="362" y="380" font-family="sans-serif" font-size="13" font-weight="700" fill="#B06000">0.5 P</text>
  </g>

  <!-- Estimated Daily Total Card -->
  <g transform="translate(32, 730)">
    <rect x="0" y="0" width="448" height="96" rx="16" fill="#EEEDFF" stroke="#3D35E0" stroke-width="1.5"/>
    <text x="24" y="38" font-family="sans-serif" font-size="13" font-weight="600" fill="#3D35E0">TODAY'S ESTIMATED WAGES</text>
    <text x="24" y="74" font-family="sans-serif" font-size="30" font-weight="800" fill="#0E0F1A">₹22,450</text>
    <text x="310" y="70" font-family="sans-serif" font-size="13" fill="#4A4D63">Auto-tallied</text>
  </g>

  <!-- Submit Button -->
  <g transform="translate(32, 856)">
    <rect x="0" y="0" width="448" height="66" rx="16" fill="#0E0F1A"/>
    <text x="224" y="40" font-family="sans-serif" font-size="17" font-weight="700" fill="#FFFFFF" text-anchor="middle">Submit to Head Office</text>
    <text x="224" y="92" font-family="sans-serif" font-size="12" fill="#6B6F86" text-anchor="middle">Instant sync with accountant tally</text>
  </g>
</svg>`;

// 3. Business Software Card (Billing & Stock Dashboard)
const softwareSvg = `
<svg width="512" height="1024" viewBox="0 0 512 1024" xmlns="http://www.w3.org/2000/svg">
  <!-- Card Background -->
  <rect width="512" height="1024" rx="36" fill="#FFFFFF"/>
  <rect width="512" height="1024" rx="36" fill="none" stroke="#E3E6EF" stroke-width="3"/>

  <!-- Phone Status Bar -->
  <rect x="0" y="0" width="512" height="48" rx="36" fill="#F6F7FB"/>
  <text x="48" y="32" font-family="sans-serif" font-size="16" font-weight="600" fill="#0E0F1A">11:30</text>
  <circle cx="460" cy="28" r="5" fill="#22C3EE"/>

  <!-- Top App Header -->
  <g transform="translate(32, 72)">
    <rect x="0" y="0" width="104" height="26" rx="13" fill="#EEEDFF"/>
    <text x="14" y="18" font-family="sans-serif" font-size="12" font-weight="700" fill="#3D35E0">Instant Bill</text>

    <text x="0" y="60" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="28" font-weight="800" fill="#0E0F1A">Invoice #KK-892</text>
    <text x="0" y="88" font-family="sans-serif" font-size="15" fill="#4A4D63">Buyer: Kisan Agro Traders · Cotton Market</text>

    <rect x="0" y="112" width="448" height="52" rx="12" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="20" y="142" font-family="sans-serif" font-size="13" fill="#4A4D63">Counter: Wholesale Mandi #3 · Cash &amp; Credit</text>
  </g>

  <!-- Items Table -->
  <g transform="translate(32, 270)">
    <text x="0" y="20" font-family="sans-serif" font-size="16" font-weight="700" fill="#0E0F1A">Billed Items</text>

    <!-- Item 1 -->
    <rect x="0" y="36" width="448" height="88" rx="14" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="20" y="68" font-family="sans-serif" font-size="16" font-weight="700" fill="#0E0F1A">DAP Fertilizer (50 kg)</text>
    <text x="20" y="94" font-family="sans-serif" font-size="13" fill="#6B6F86">10 Bags @ ₹1,350/bag</text>
    <text x="428" y="80" font-family="sans-serif" font-size="17" font-weight="700" fill="#0E0F1A" text-anchor="end">₹13,500</text>

    <!-- Item 2 -->
    <rect x="0" y="136" width="448" height="88" rx="14" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="20" y="168" font-family="sans-serif" font-size="16" font-weight="700" fill="#0E0F1A">Neem Coated Urea</text>
    <text x="20" y="194" font-family="sans-serif" font-size="13" fill="#6B6F86">20 Bags @ ₹270/bag</text>
    <text x="428" y="180" font-family="sans-serif" font-size="17" font-weight="700" fill="#0E0F1A" text-anchor="end">₹5,400</text>

    <!-- Item 3 -->
    <rect x="0" y="236" width="448" height="88" rx="14" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="20" y="268" font-family="sans-serif" font-size="16" font-weight="700" fill="#0E0F1A">Pesticide 1L Bottle</text>
    <text x="20" y="294" font-family="sans-serif" font-size="13" fill="#6B6F86">4 Bottles @ ₹700/btl</text>
    <text x="428" y="280" font-family="sans-serif" font-size="17" font-weight="700" fill="#0E0F1A" text-anchor="end">₹2,800</text>
  </g>

  <!-- Total & Sync Section -->
  <g transform="translate(32, 630)">
    <rect x="0" y="0" width="448" height="150" rx="18" fill="#F6F7FB" stroke="#E3E6EF" stroke-width="2"/>
    <text x="24" y="44" font-family="sans-serif" font-size="14" fill="#6B6F86">TOTAL BILL AMOUNT</text>
    <text x="24" y="92" font-family="sans-serif" font-size="36" font-weight="800" fill="#0E0F1A">₹21,700</text>
    
    <line x1="24" y1="108" x2="424" y2="108" stroke="#E3E6EF" stroke-width="1"/>
    <circle cx="34" cy="128" r="4" fill="#16A34A"/>
    <text x="48" y="132" font-family="sans-serif" font-size="12" font-weight="600" fill="#16A34A">Godown #1 stock deducted · Tally voucher created</text>
  </g>

  <!-- Action Button -->
  <g transform="translate(32, 856)">
    <rect x="0" y="0" width="448" height="66" rx="16" fill="#0E0F1A"/>
    <text x="224" y="40" font-family="sans-serif" font-size="17" font-weight="700" fill="#FFFFFF" text-anchor="middle">Print &amp; WhatsApp Receipt</text>
    <text x="224" y="92" font-family="sans-serif" font-size="12" fill="#6B6F86" text-anchor="middle">Buyer balance automatically tracked</text>
  </g>
</svg>`;

// 4. Automation Card (WhatsApp Customer Order Chat)
const automationSvg = `
<svg width="512" height="1024" viewBox="0 0 512 1024" xmlns="http://www.w3.org/2000/svg">
  <!-- Card Background -->
  <rect width="512" height="1024" rx="36" fill="#ECE5DD"/>
  <rect width="512" height="1024" rx="36" fill="none" stroke="#E3E6EF" stroke-width="3"/>

  <!-- WhatsApp Top App Bar -->
  <rect x="0" y="0" width="512" height="100" rx="36" fill="#075E54"/>
  <rect x="0" y="50" width="512" height="50" fill="#075E54"/>

  <!-- Profile & Header -->
  <circle cx="56" cy="62" r="22" fill="#25D366"/>
  <text x="46" y="70" font-family="sans-serif" font-size="20" font-weight="700" fill="#FFFFFF">K</text>
  <text x="92" y="60" font-family="sans-serif" font-size="18" font-weight="700" fill="#FFFFFF">Vidarbha Wholesale</text>
  <text x="92" y="80" font-family="sans-serif" font-size="13" fill="#D0E7E2">Online · Automated Bot</text>

  <!-- Message 1 (Customer Incoming - Left) -->
  <g transform="translate(24, 136)">
    <rect x="0" y="0" width="360" height="88" rx="14" fill="#FFFFFF"/>
    <text x="18" y="32" font-family="sans-serif" font-size="16" fill="#0E0F1A">Bhaiya, toor dal 50 kg ka rate?</text>
    <text x="18" y="58" font-family="sans-serif" font-size="16" fill="#0E0F1A">20 bag chahiye.</text>
    <text x="305" y="76" font-family="sans-serif" font-size="11" fill="#8696A0">10:14 AM</text>
  </g>

  <!-- Message 2 (Bot Outgoing - Right) -->
  <g transform="translate(112, 244)">
    <rect x="0" y="0" width="376" height="136" rx="14" fill="#DCF8C6"/>
    <text x="18" y="32" font-family="sans-serif" font-size="15" fill="#0E0F1A">Namaste! Toor dal 50 kg bag:</text>
    <text x="18" y="56" font-family="sans-serif" font-size="15" font-weight="700" fill="#0E0F1A">₹6,250 / bag.</text>
    <text x="18" y="82" font-family="sans-serif" font-size="15" fill="#0E0F1A">20 bags in stock at Godown #1.</text>
    <text x="18" y="108" font-family="sans-serif" font-size="15" font-weight="700" fill="#3D35E0">Total: ₹1,25,000 + GST</text>
    <text x="315" y="126" font-family="sans-serif" font-size="11" fill="#8696A0">10:14 AM ✓✓</text>
  </g>

  <!-- Message 3 (PDF Attachment Voucher) -->
  <g transform="translate(112, 400)">
    <rect x="0" y="0" width="376" height="100" rx="14" fill="#DCF8C6"/>
    <rect x="16" y="16" width="344" height="66" rx="10" fill="#FFFFFF"/>
    <rect x="28" y="26" width="46" height="46" rx="8" fill="#FCE8E6"/>
    <text x="36" y="55" font-family="sans-serif" font-size="14" font-weight="800" fill="#B3261E">PDF</text>
    <text x="86" y="46" font-family="sans-serif" font-size="15" font-weight="700" fill="#0E0F1A">Bill_#2041.pdf</text>
    <text x="86" y="66" font-family="sans-serif" font-size="12" fill="#6B6F86">142 KB · Ready for dispatch</text>
  </g>

  <!-- Quick Action Chips (Tappable) -->
  <g transform="translate(24, 530)">
    <text x="0" y="16" font-family="sans-serif" font-size="13" font-weight="600" fill="#54656F">SUGGESTED REPLIES</text>
    <rect x="0" y="32" width="220" height="48" rx="24" fill="#FFFFFF" stroke="#25D366" stroke-width="2"/>
    <text x="34" y="62" font-family="sans-serif" font-size="15" font-weight="700" fill="#075E54">✓ Confirm order</text>

    <rect x="236" y="32" width="228" height="48" rx="24" fill="#FFFFFF" stroke="#E3E6EF" stroke-width="1.5"/>
    <text x="264" y="62" font-family="sans-serif" font-size="15" font-weight="600" fill="#4A4D63">Change quantity</text>
  </g>

  <!-- Automation Benefit Box -->
  <g transform="translate(24, 660)">
    <rect x="0" y="0" width="464" height="140" rx="16" fill="#0B0C16" stroke="#22C3EE" stroke-width="1.5"/>
    <circle cx="32" cy="36" r="6" fill="#22C3EE"/>
    <text x="48" y="41" font-family="sans-serif" font-size="14" font-weight="700" fill="#22C3EE">Live Flow Triggered</text>
    <text x="24" y="80" font-family="sans-serif" font-size="14" fill="#E3E6EF">WhatsApp message → Kool bot</text>
    <text x="24" y="106" font-family="sans-serif" font-size="14" font-weight="600" fill="#FFFFFF">Tally stock deducted · Dispatch slip printed</text>
  </g>

  <!-- WhatsApp Chat Input Bar -->
  <g transform="translate(16, 920)">
    <rect x="0" y="0" width="416" height="56" rx="28" fill="#FFFFFF"/>
    <text x="24" y="34" font-family="sans-serif" font-size="15" fill="#8696A0">Type a message...</text>
    <circle cx="456" cy="28" r="26" fill="#128C7E"/>
    <polygon points="450,18 468,28 450,38" fill="#FFFFFF"/>
  </g>
</svg>`;

// 5. Paper Ledger Texture (Bahi-Khata Handwritten Page)
const paperSvg = `
<svg width="512" height="1024" viewBox="0 0 512 1024" xmlns="http://www.w3.org/2000/svg">
  <!-- Aged Paper Base -->
  <rect width="512" height="1024" fill="#F4EFE2"/>

  <!-- Vertical Crease Folds (8 Sal Columns) -->
  <line x1="64" y1="0" x2="64" y2="1024" stroke="#E2DCBD" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="128" y1="0" x2="128" y2="1024" stroke="#E2DCBD" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="192" y1="0" x2="192" y2="1024" stroke="#E2DCBD" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="256" y1="0" x2="256" y2="1024" stroke="#E2DCBD" stroke-width="2" stroke-opacity="0.8"/>
  <line x1="320" y1="0" x2="320" y2="1024" stroke="#E2DCBD" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="384" y1="0" x2="384" y2="1024" stroke="#E2DCBD" stroke-width="1.5" stroke-opacity="0.6"/>
  <line x1="448" y1="0" x2="448" y2="1024" stroke="#E2DCBD" stroke-width="1.5" stroke-opacity="0.6"/>

  <!-- Red Double Margin Line (Bahi-Khata Signature) -->
  <line x1="56" y1="0" x2="56" y2="1024" stroke="#B3261E" stroke-width="1.5" stroke-opacity="0.75"/>
  <line x1="60" y1="0" x2="60" y2="1024" stroke="#B3261E" stroke-width="1.5" stroke-opacity="0.75"/>

  <!-- Horizontal Ruled Guidance Lines -->
  ${Array.from({ length: 24 }).map((_, i) => `
    <line x1="64" y1="${120 + i * 36}" x2="490" y2="${120 + i * 36}" stroke="#D5CBB0" stroke-width="0.75" stroke-opacity="0.4"/>
  `).join('')}

  <!-- Handwritten Entries in Ledger Ink (Kalam style font / serif) -->
  <g fill="#1C244B" font-family="'Georgia', 'Times New Roman', serif" font-style="italic">
    <!-- Header -->
    <text x="120" y="80" font-size="22" font-weight="bold" fill="#B3261E" font-style="normal">Haziri Register · October</text>
    <line x1="110" y1="92" x2="380" y2="92" stroke="#B3261E" stroke-width="1.5"/>

    <!-- Entries -->
    <text x="75" y="146" font-size="16">12 Oct: Ramesh Mistry — P (Adv ₹500)</text>
    <text x="75" y="182" font-size="16">12 Oct: Suresh Beldar — P (Adv Nil)</text>
    <text x="75" y="218" font-size="16">12 Oct: Sonu Mazdoor — Absent</text>
    <text x="75" y="254" font-size="16">12 Oct: Monu Mazdoor — P (Half day)</text>
    
    <text x="75" y="326" font-size="16" fill="#B3261E">Site Cash: ₹1,450 (Diesel) — Parchi lost</text>
    
    <text x="75" y="398" font-size="16">Toor dal 50kg: 20 bag @ ₹6,250</text>
    <text x="75" y="434" font-size="16">Kisan Agro ledger balance: ₹21,700</text>

    <text x="75" y="506" font-size="16">DAP Khad: 10 bag bill pending</text>
    <text x="75" y="542" font-size="16">Neem Urea: 20 bag out from Godown 1</text>
    
    <text x="75" y="614" font-size="16" fill="#B3261E">Hafta wages total to calculate: Pending</text>
    <text x="75" y="650" font-size="16">Call Anand bhaiya for payment tally</text>

    <!-- Bottom Stamp / Mark -->
    <g transform="translate(180, 780)">
      <circle cx="80" cy="80" r="50" fill="none" stroke="#B3261E" stroke-width="2" stroke-dasharray="4 3"/>
      <text x="80" y="76" font-size="13" font-family="sans-serif" font-weight="bold" fill="#B3261E" text-anchor="middle" font-style="normal">KOOL KONSULTING</text>
      <text x="80" y="94" font-size="11" font-family="sans-serif" fill="#B3261E" text-anchor="middle" font-style="normal">Verified Register</text>
    </g>
  </g>
</svg>`;

async function renderTextures() {
  console.log('Rendering 5 textures to public/3d/textures/ ...');

  const tasks = [
    { svg: websiteSvg, name: 'card-website.webp' },
    { svg: appSvg, name: 'card-app.webp' },
    { svg: softwareSvg, name: 'card-software.webp' },
    { svg: automationSvg, name: 'card-automation.webp' },
    { svg: paperSvg, name: 'paper-ledger.webp' },
  ];

  for (const t of tasks) {
    const filePath = path.join(outputDir, t.name);
    await sharp(Buffer.from(t.svg))
      .resize(512, 1024)
      .webp({ quality: 90 })
      .toFile(filePath);
    const stat = fs.statSync(filePath);
    console.log(`Rendered ${t.name}: ${(stat.size / 1024).toFixed(1)} KB`);
  }

  console.log('All textures rendered successfully!');
}

renderTextures().catch(console.error);
