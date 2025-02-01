import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/app/ui/navbar";
import Footer from "@/app/ui/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPI Devon",
  description: "PPI Devon Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>

      <div className="">{children}</div> {/*flex-grow p-6 md:overflow-y-auto md:p-12*/}
      
      <Footer/>
      </body>
    </html>
  );
}
