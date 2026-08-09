import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "オイスター尾崎｜瀬戸内の海が育てた牡蠣",
  description: "瀬戸内の海で牡蠣を育てる、オイスター尾崎のブランドサイト・サンプルです。",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
