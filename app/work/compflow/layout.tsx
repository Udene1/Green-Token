import type { Metadata } from "next";

const pageUrl = "https://kenneth-elioku-portfolio.vercel.app/work/compflow";

export const metadata: Metadata = {
  title: "Compflow Engineering Case Study",
  description:
    "A source-linked engineering case study of Compflow: cloud compliance workflows, asynchronous workers, durable execution state, recovery, event streams, and audit evidence.",
  alternates: {
    canonical: pageUrl
  },
  openGraph: {
    type: "article",
    url: pageUrl,
    title: "Compflow Engineering Case Study | Kenneth Elioku",
    description:
      "How Compflow approaches durable execution, recovery, live state, and evidence in a cloud compliance platform."
  },
  twitter: {
    card: "summary",
    title: "Compflow Engineering Case Study | Kenneth Elioku",
    description:
      "Cloud compliance engineering, durable workflows, recovery, and evidence."
  }
};

export default function CompflowLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
