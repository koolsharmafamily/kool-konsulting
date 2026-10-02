import { site } from "@/data/site";

type EventName =
  | "whatsapp_click"
  | "call_click"
  | "form_submit"
  | "estimator_complete"
  | "demo_interaction"
  | "checkup_cta";

export function trackEvent(name: EventName, properties?: Record<string, string | number | boolean>) {
  if (typeof window === "undefined") return;

  const provider = site.analytics?.provider;
  if (!provider || provider === "none") return;

  // Umami
  if (provider === "umami" && (window as any).umami) {
    (window as any).umami.track(name, properties);
  }

  // Plausible
  if (provider === "plausible" && (window as any).plausible) {
    (window as any).plausible(name, { props: properties });
  }

  // GA4
  if (provider === "ga4" && (window as any).gtag) {
    (window as any).gtag("event", name, properties);
  }
}
