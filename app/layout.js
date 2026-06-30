import "./globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "Global Point Partners — Web Design for Small Business",
  description: "We help small businesses build and grow their online presence with custom websites, Google Business setup, and ongoing content management.",
  metadataBase: new URL("https://globalpointpartners.com"),
  openGraph: {
    title: "Global Point Partners — Web Design for Small Business",
    description: "We help small businesses build and grow their online presence with custom websites, Google Business setup, and ongoing content management.",
    url: "https://globalpointpartners.com",
    siteName: "Global Point Partners",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Global Point Partners — Web Design for Small Business",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Global Point Partners — Web Design for Small Business",
    description: "We help small businesses build and grow their online presence with custom websites, Google Business setup, and ongoing content management.",
    images: ["https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&q=80"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-50">
        <Nav />
        <main className="flex-1 bg-white">{children}</main>
        <footer className="bg-zinc-950 text-zinc-400">
          <div className="max-w-5xl mx-auto px-6 py-10 text-center text-sm">
            <p>© {new Date().getFullYear()} Global Point Partners. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
