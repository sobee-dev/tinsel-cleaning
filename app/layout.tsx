import type { Metadata } from "next";
import "./globals.css";
import { Petit_Formal_Script } from "next/font/google";

const petitFormalScript = Petit_Formal_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-petit-formal",
});

export const metadata: Metadata = {
  title: "Tinsel Cleaning Services | Professional Cleaning in Lagos",
  description:
    "Tinsel Cleaning Services delivers spotless homes and offices across Lagos. Book a professional clean today.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${petitFormalScript.variable} font-sans antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
