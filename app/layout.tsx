import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/Header";


export const metadata: Metadata = {
  title: "notion clone",
  description: "A notion clone create with NextJS v15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className="">
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
