import Navigation from "@/components/Navigation";
import "@/styles/index.scss";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "TohidEq's Blog",
  description: "TohidEq's Personal Blog",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="app">
          <Navigation />
          {children}
        </div>
      </body>
    </html>
  );
}
