import type { Metadata } from "next";
import "./globals.css";

import MainHeader from "@/components/main-header/main-header";
import MainHeaderBackground from "@/components/main-header-background/main-header-background";

export const metadata: Metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving communit",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainHeaderBackground/>
        <MainHeader />
        {children}
      </body>
    </html>
  );
}
