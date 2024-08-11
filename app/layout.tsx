import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter, Roboto_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { TailwindIndicator } from "@/components/chatbot/tailwind-indicator";

const inter = Inter({ subsets: ["latin"] });

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
})

const montserrat = Montserrat({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display:'swap',
    fallback: ['Arial', 'sans-serif'],
    variable: '--font-montserrat',
  });
  
  

export const metadata: Metadata = {
  title: {
    default: "I'm Hungry AI",
    template: `%s - I'm Hungry AI`
  }, 
  description: "Cooking Made Simple with AI",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <TailwindIndicator />
      <body className={`${montserrat.className} ${inter.className} ${roboto_mono.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>{children}</ThemeProvider>
      </body>
    </html>
  );
}
