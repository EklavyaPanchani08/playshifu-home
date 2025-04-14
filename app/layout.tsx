import type { Metadata } from "next";
import { Nunito, Quicksand } from 'next/font/google';
import "../style/globals.css";

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Playshifu",
  description: "Playshifu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
            <body className={`${nunito.variable} ${quicksand.variable} nnito-text`}>
        {children}
      </body>
    </html>
  );
}
