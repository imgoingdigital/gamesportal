import type { Metadata } from "next";
import "@/app/globals.css";
export const metadata: Metadata = {
  title: "Michael Del Mundo Perez - CV",
  description: "Online CV of Michael Del Mundo Perez, showcasing professional experience, education, and skills.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        <body>
          {children}
        </body>
      </html>
  )
}
