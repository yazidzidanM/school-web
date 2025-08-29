import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/layouts/Navigation";
import Head from "next/head";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type HomeProps = {
  children: React.ReactNode
}

export default function HomePage({ children }: HomeProps) {
  return (
    <>
      <Head>
        <title>RPL Otomindo</title>
        <meta name="description" content="Web RPL Otomindo" />
        <link rel="icon" href="/logo-smk-otomindo.jpg" />
      </Head>
      <div className="flex flex-col items-center justify-between min-h-screen">
        <Navigation />
        <main>
          {children}
        </main>
        <div>index</div>
      </div>
    </>
  );
}
