import { FloatButton } from "antd";
import "./globals.css";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import CallBtn from "@/components/HomeComponents/CallBtn";

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
      <body className={open.className}>
        <div>{children}</div>
        <CallBtn />
      </body>
    </html>
  );
}
