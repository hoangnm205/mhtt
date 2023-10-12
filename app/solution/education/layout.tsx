import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../../globals.css";

const open = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Màn hình tương tác",
  description: "Màn hình tương tác",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={open.className}>{children}</body>
    </html>
  );
}
