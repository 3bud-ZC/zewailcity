import type { Metadata } from "next";
import "./globals.css";
import { BRANDING } from "@/config/branding";

export const metadata: Metadata = {
  title: `${BRANDING.portalName} - Student Portal`,
  description: "University student portal prototype",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
