import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import NavBar from "@/components/NavBar/NavBar";
import "./globals.css";
import Footer from "@/components/Footer/Footer";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Exposição de Projetos",
  description: "Site destinado a exposição de projetos desenvolvidos por Eduardo Monteiro",
  authors: [{ name: "Eduardo Monteiro" }],
  creator: "Eduardo Monteiro"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`
          ${roboto.variable} 
          antialiased 
          font-sans
          min-h-screen 
          w-full 
          bg-gradient-to-br 
          from-black 
          via-[#0f0518] 
          to-purple-950 
          text-slate-200
          pt-24
        `}
      >
        <NavBar />
        {children}
        <Footer>
          Desenvolvido por Eduardo Monteiro
        </Footer>
      </body>
    </html>
  );
}
