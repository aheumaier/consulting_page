import React from 'react';

export function Head() {
  return (
    <>
      <meta charSet="UTF-8" />
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>HeumaierConsulting - Interim Management</title>

      {/* SEO Meta Tags */}
      <meta
        name="description"
        content="Interim CTO & Management für Tech-Unternehmen in Hamburg. Spezialisiert auf Technical Due Diligence, Post-Merger Integration und Turnaround Management"
      />
      <meta
        name="keywords"
        content="Interim CTO Hamburg, Post-Merger Integration, Turnaround Management, SaaS Transformation, Interim CTO Deutschland, Fractional CTO DACH, Interim Executive, PE Portfolio Company, Private Equity, Technical Due Diligence, Healthcare Tech, Interim Manager Hamburg"
      />
      <meta name="author" content="Andreas Heumaier" />

      {/* Open Graph for LinkedIn/XING */}
      <meta
        property="og:title"
        content="Andreas Heumaier - Interim CTO & Tech Leadership"
      />
      <meta
        property="og:description"
        content="Fix what's broken, scale what works. Interim Management für kritische Transformationsphasen."
      />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:url" content="https://heumaier-consulting.de" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="de_DE" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta
        name="twitter:title"
        content="Heumaier Consulting - Interim CTO Services"
      />
      <meta
        name="twitter:description"
        content="Interim Management für Tech-Unternehmen. Technical Due Diligence, Post-Merger Integration, Turnaround."
      />
      <meta name="twitter:image" content="/og-image.png" />

      {/* Canonical & Verification */}
      <link rel="canonical" href="https://heumaier-consulting.de" />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="German" />
      <meta name="revisit-after" content="7 days" />

      {/* Structured Data for German Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "Heumaier Consulting",
            "description": "Interim CTO & Management für Tech-Unternehmen",
            "url": "https://heumaier-consulting.de",
            "telephone": "+491773208516",
            "email": "info@heumaier-consulting.de",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hamburg",
              "addressCountry": "DE"
            },
            "sameAs": [
              "https://calendly.com/heumaierventures-info/15-minute-intro"
            ],
            "priceRange": "€€€",
            "serviceType": [
              "Interim CTO Services",
              "Technical Due Diligence",
              "Post-Merger Integration",
              "Turnaround Management"
            ]
          })
        }}
      />

      {/* Google tag (gtag.js) */}
      <script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-H0F0RN52HL"
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag() {
              dataLayer.push(arguments);
            }
            gtag("js", new Date());
            gtag("config", "G-H0F0RN52HL");
          `
        }}
      />
    </>
  );
}