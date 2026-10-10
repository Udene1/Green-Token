import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kenneth Elioku — Backend & Systems Engineer",
  description:
    "I design and build dependable backend systems, operational software, evidence-driven intelligence tools, and automation infrastructure.",
  openGraph: {
    title: "Kenneth Elioku — Backend & Systems Engineer",
    description: "Systems that make reality legible, workflows dependable, and evidence useful.",
    type: "website"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
