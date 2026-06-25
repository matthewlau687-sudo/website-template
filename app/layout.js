import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Global Point Partners — Web Design for Small Business",
  description: "We help small businesses build and grow their online presence.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-50">
        <Nav />
        <main className="flex-1 bg-white">{children}</main>
      </body>
    </html>
  );
}
