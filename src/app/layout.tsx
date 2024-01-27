import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Williams Obaedo",
  description:
    "Williams Obaedo is also very passionate about the boy child and the need for total men. He runs an organisation called Guys Mentorship Networks, which aims to raise young boys into better sons, brothers, husbands, fathers, friends, leaders, and total men in general.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
