import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Adi Mulyadi",
  description: "Personal portfolio and literary archive of Adi Mulyadi - Tech Writer & Fiction Author.",
  keywords: ["Adi Mulyadi", "Writer", "Fiction", "Tech Writing", "Portfolio", "Next.js"],
  authors: [{ name: "Adi Mulyadi" }],
  openGraph: {
    title: "Adi Mulyadi - Digi Art & Wordsmith",
    description: "Crafting narratives where technology meets humanity.",
    url: "https://adimulyadi.com",
    siteName: "Adi Mulyadi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adi Mulyadi",
    description: "Tech Writer & Fiction Author",
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { ClickSoundProvider } from "@/components/click-sound-provider";

// ... (existing imports)

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <ClickSoundProvider>
            {children}
          </ClickSoundProvider>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
