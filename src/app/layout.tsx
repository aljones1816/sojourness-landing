import { Young_Serif, Outfit, Andika } from "next/font/google";
import "./globals.css";
import Metadata from "next/head";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

// Configure the fonts
const youngSerif = Young_Serif({
  subsets: ["latin"], // Specify the subset(s) to load
  weight: "400", // Use weight 400 for Young Serif (default)
  variable: "--font-young-serif", // Optional: Define a CSS variable
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["200", "400"], // Use Outfit Regular
  variable: "--font-outfit",
});

const andika = Andika({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-andika",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Metadata>
          <title>Sojourness</title>
          <link rel="icon" href="/favicon.png" />
        </Metadata>
      </head>
      <body
        className={`${youngSerif.variable} ${outfit.variable} ${andika.variable}`}
      >
        <Header />
        <main className="min-h-[calc(100vh-200px)]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
