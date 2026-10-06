import { site } from "@/data/site";
import { ServiceItem } from "@/data/services";
import { Project } from "@/data/work";

/**
 * Sitewide Organization and ProfessionalService JSON-LD schema
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.origin}/#organization`,
        name: site.name,
        url: site.origin,
        logo: `${site.origin}/brand/kk-mark.svg`,
        telephone: site.phoneE164,
        email: site.emailLive ? site.email : undefined,
        sameAs: site.sameAs.length > 0 ? site.sameAs : undefined,
        founder: {
          "@type": "Person",
          "@id": `${site.origin}/about#founder`,
          name: site.founder.name,
          jobTitle: site.founder.role,
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.origin}/#service`,
        name: site.name,
        url: site.origin,
        telephone: site.phoneE164,

        areaServed: [
          { "@type": "City", name: "Nagpur" },
          { "@type": "State", name: "Maharashtra" },
          { "@type": "Country", name: "India" },
        ],
        address: site.address.locality
          ? {
              "@type": "PostalAddress",
              addressLocality: site.address.locality,
              addressRegion: site.address.region,
              addressCountry: site.address.country,
            }
          : undefined,
      },
    ],
  };
}

/**
 * WebSite JSON-LD schema for homepage
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.origin}/#website`,
    url: site.origin,
    name: site.name,
    description: site.oneLiner,
    publisher: {
      "@id": `${site.origin}/#organization`,
    },
    inLanguage: "en-IN",
  };
}

/**
 * Person JSON-LD schema for /about page
 */
export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${site.origin}/about#founder`,
    name: site.founder.name,
    jobTitle: "Founder",
    worksFor: {
      "@type": "Organization",
      name: site.name,
      url: site.origin,
    },

    url: `${site.origin}/about`,
    knowsAbout: [
      "Custom Software Development",
      "Mobile Applications",
      "WhatsApp Business API Automation",
      "Financial Systems",
      "Logistics Software",
    ],
  };
}

/**
 * Service JSON-LD schema for /services/[slug]
 */
export function getServiceSchema(service: ServiceItem, minPrice?: number) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${site.origin}/services/${service.slug}#service`,
    name: service.name,
    serviceType: service.name,
    description: service.lead,
    provider: {
      "@id": `${site.origin}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    offers: minPrice
      ? {
          "@type": "Offer",
          price: minPrice,
          priceCurrency: "INR",
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            price: minPrice,
            priceCurrency: "INR",
            valueAddedTaxIncluded: false,
          },
        }
      : undefined,
  };
}

/**
 * BreadcrumbList JSON-LD schema
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http")
        ? item.url
        : `${site.origin}${item.url}`,
    })),
  };
}

/**
 * FAQPage JSON-LD schema
 */
export function getFaqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };
}
