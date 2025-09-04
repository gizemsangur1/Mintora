import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "@/providers";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Mintora",
  description: "NFT Marketplace & DAO Governance Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
