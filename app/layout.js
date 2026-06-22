import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "ExploBiz — Web Design for Small Business",
  description: "We help small businesses build and grow their online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-50 font-sans">
        <Nav />
        <main className="flex-1 bg-white">{children}</main>
      </body>
    </html>
  );
}
