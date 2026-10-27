import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://kenneth-elioku-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kenneth Elioku | Backend & Systems Engineer",
    template: "%s | Kenneth Elioku"
  },
  description:
    "Portfolio of Kenneth Elioku, a backend and systems engineer building dependable APIs, cloud compliance systems, durable workflows, and evidence-driven software.",
  applicationName: "Kenneth Elioku Portfolio",
  verification: {
    google: "laGD1NBZAFPuldneOeBjbe7wIjFIy3mghLxv-Y1UL20"
  },
  authors: [{ name: "Kenneth Elioku", url: siteUrl }],
  creator: "Kenneth Elioku",
  keywords: [
    "Kenneth Elioku",
    "backend engineer",
    "systems engineer",
    "platform engineering",
    "Node.js",
    "TypeScript",
    "PostgreSQL",
    "cloud infrastructure",
    "distributed workflows",
    "Compflow",
    "cloud compliance",
    "reliability engineering"
  ],
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Kenneth Elioku — Engineering Portfolio",
    title: "Kenneth Elioku | Backend & Systems Engineer",
    description:
      "Dependable backend systems, cloud compliance, durable workflows, and evidence-driven software.",
    locale: "en_NG"
  },
  twitter: {
    card: "summary",
    title: "Kenneth Elioku | Backend & Systems Engineer",
    description:
      "Backend and systems engineering focused on reliability, durable state, and evidence-driven software."
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Kenneth Elioku",
    url: siteUrl,
    jobTitle: "Backend and Systems Engineer",
    email: "kennethikechukwu159@gmail.com",
    sameAs: [
      "https://github.com/Udene1",
      "https://www.linkedin.com/in/kenneth-elioku-890467137/",
      "https://x.com/smart_web3boy"
    ],
    knowsAbout: [
      "Backend engineering",
      "Systems engineering",
      "Cloud infrastructure",
      "PostgreSQL",
      "TypeScript",
      "Reliability engineering",
      "Cloud compliance"
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
