import React from "react";

export function Head() {
  return (
    <>
      <meta name="theme-color" content="#10b981" />

      <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://scripts.simpleanalyticscdn.com" />

      <title>
        Interim CTO Hamburg | Andreas Heumaier - Built Tech Cultures That Deliver, Adapt & Scale
      </title>

      <meta
        name="description"
        content="Interim CTO | Built Tech Cultures That Deliver, Adapt & Scale | PE Turnaround | Ex-Microsoft"
      />

      <meta name="author" content="Andreas Heumaier" />

      <meta
        property="og:title"
        content="Andreas Heumaier - Interim CTO & Turnaround Executive"
      />
      <meta
        property="og:description"
        content="Technology Leadership für kritische Transformationsphasen. Fix what's broken, scale what works. Spezialisiert auf PE-backed SaaS, Healthcare Tech und regulierte Industrien."
      />

      {/* Open Graph */}
      <meta
        property="og:image"
        content="https://heumaier-interim.de/og-image.png"
      />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://heumaier-interim.de" />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="de_DE" />
      <meta property="og:site_name" content="Heumaier Interim" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@your_twitter_handle" />
      <meta name="twitter:creator" content="@your_twitter_handle" />
      <meta
        name="twitter:title"
        content="Andreas Heumaier - Interim CTO Hamburg"
      />
      <meta
        name="twitter:description"
        content="Interim CTO | Built Tech Cultures That Deliver, Adapt & Scale | PE Turnaround | Ex-Microsoft"
      />
      <meta
        name="twitter:image"
        content="https://heumaier-interim.de/og-image.png"
      />

      {/* International SEO */}
      <link
        rel="alternate"
        hreflang="de"
        href="https://heumaier-interim.de"
      />
      <link
        rel="alternate"
        hreflang="en"
        href="https://heumaier-interim.de/en"
      />
      <link
        rel="alternate"
        hreflang="x-default"
        href="https://heumaier-interim.de"
      />

      {/* Canonical URL */}
      <link rel="canonical" href="https://heumaier-interim.de" />

      {/* Robots directives */}
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1"
      />
      <meta name="googlebot" content="index, follow" />

      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://heumaier-interim.de/#organization",
            name: "Heumaier Interim",
            alternateName: "Heumaier Ventures UG",
            description:
              "Interim CTO & Management für Tech-Unternehmen in DACH-Region",
            url: "https://heumaier-interim.de",
            logo: "https://heumaier-interim.de/logo.png",
            telephone: "+49-177-3208516",
            email: "info@heumaier-interim.de",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Hamburg",
              addressRegion: "Hamburg",
              postalCode: "20095",
              addressCountry: "DE",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 53.5511,
              longitude: 9.9937,
            },
            sameAs: [
              "https://www.linkedin.com/in/andreasheumaier/",
              "https://calendly.com/heumaier-interim/15-minute-intro",
            ],
            priceRange: "€€€€",
            areaServed: ["DE", "AT", "CH"],
            serviceType: [
              "Interim CTO Services",
              "Technical Due Diligence",
              "Post-Merger Integration",
              "Turnaround Management",
              "Fractional CTO Services",
            ],
            founder: {
              "@type": "Person",
              name: "Andreas Heumaier",
              jobTitle: "Interim CTO & Turnaround Executive",
              url: "https://heumaier-interim.de/about",
              sameAs: "https://www.linkedin.com/in/andreasheumaier/",
            },
          }),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://heumaier-interim.de",
              },
            ],
          }),
        }}
      />

      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="preconnect" href="https://scripts.simpleanalyticscdn.com" />

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
          `,
        }}
      />
    </>
  );
}
