import "./globals.css";
import type { Metadata } from "next";
import { Syne, DM_Sans, Instrument_Serif } from "next/font/google";

import { Analytics } from "@vercel/analytics/next";

const display = Syne({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});
const body = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});
const editorial = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-editorial",
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase: new URL(''),

  title: {
    default: "Saad Shakeel | Full Stack Developer",
    template: "%s | Saad Shakeel",
  },

  description:
    "Saad Shakeel is a Full Stack Developer specializing in React.js, Next.js, TypeScript, Node.js, and modern web technologies. Explore my portfolio featuring responsive web applications, full-stack projects, and innovative software solutions.",

  keywords: [
    "Saad Shakeel",
    "Full Stack Developer",
    "Frontend Developer",
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
    "Tailwind CSS",
    "Portfolio",
    "Software Engineer",
    "Web Developer",
    "Pakistan",
  ],

  authors: [
    {
      name: "Saad Shakeel",
      url: "",
    },
  ],

  creator: "Saad Shakeel",

  publisher: "Saad Shakeel",

  applicationName: "Saad Shakeel Portfolio",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "",
    siteName: "Saad Shakeel Portfolio",
    title: "Saad Shakeel | Full Stack Developer",
    description:
      "Explore the portfolio of Saad Shakeel, a Full Stack Developer building scalable and modern web applications with React.js, Next.js, TypeScript, and Node.js.",
    images: [
      {
        url: "/OG-Img.png",
        width: 1200,
        height: 630,
        alt: "Saad Shakeel Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${editorial.variable}`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
