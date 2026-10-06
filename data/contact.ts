/** Public, verified contact details. Optional integrations are read on the server. */
export const contact = {
  founder: "Kulvir Sharma",
  phoneDisplay: "+91 88888 21351",
  phoneE164: "+918888821351",
  whatsappNumber: "918888821351",
  location: "Nagpur, India",
  timezone: "Asia/Kolkata",
  timezoneLabel: "India Standard Time · UTC+05:30",
} as const;

export function contactWhatsApp(
  message = "Hi Kulvir, I would like to discuss a project with Kool Konsulting.",
) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

/** Return only a safe public link; never expose provider credentials to clients. */
export function getBookingSettings() {
  let bookingUrl = "";
  try {
    const candidate = new URL(process.env.BOOKING_URL || "");
    if (
      candidate.protocol === "https:" &&
      !candidate.username &&
      !candidate.password
    )
      bookingUrl = candidate.href;
  } catch {
    // An absent or invalid scheduler stays in request-a-call mode.
  }
  const candidateEmail = process.env.CONTACT_EMAIL?.trim() || "";
  const email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(candidateEmail)
    ? candidateEmail
    : "";
  return {
    bookingUrl,
    email,
    timezone: contact.timezone,
    timezoneLabel: contact.timezoneLabel,
  };
}
