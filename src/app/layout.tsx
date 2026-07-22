import type { Metadata } from "next";
import { Geist_Mono, Doto } from "next/font/google";
import { ClientWrappers } from "@/components/client-wrappers";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export const metadata: Metadata = {
  title: "SAMS TABREZ — SOFTWARE ENGINEER",
  description:
    "Software Engineer crafting modern web experiences. TypeScript. React. Node.js.",
  keywords: ["Sams tabrez", "Software Engineer", "Portfolio", "Developer"],
  authors: [{ name: "Sam Stabrez" }],
  creator: "Sam Stabrez",
  robots: "index, follow",
  openGraph: {
    title: "Sams",
    description: "Software Engineer crafting modern web experiences.",
    siteName: "Sams",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${geistMono.variable} ${doto.variable} antialiased`}>
        <ClientWrappers>
          <div className="relative z-10 min-h-screen">
            {children}
          </div>
        </ClientWrappers>
      </body>
    </html>
  );
}
