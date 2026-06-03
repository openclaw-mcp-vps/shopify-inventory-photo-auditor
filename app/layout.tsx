import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shopify Photo Auditor — Fix Missing Product Photos",
  description: "Auto-detect missing product photos killing your conversions. Scan your Shopify store and get a prioritized fix list with conversion impact estimates."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="18d709a4-81ac-4715-a200-594cbb755310"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  );
}
