import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pet Shop Admin",
  description: "A premium admin dashboard for managing all demo pet shops.",
  manifest: "/manifest.json",
  themeColor: "#4f46e5",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Admin Panel",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-['Inter'] antialiased">
        <div className="bg-gradient-spot-1" />
        <div className="bg-gradient-spot-2" />
        {children}
      </body>
    </html>
  );
}
