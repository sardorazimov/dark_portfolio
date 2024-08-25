import type { Metadata } from "next";
import { Inter, DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/pages/Navbar";

const inter = Inter({ subsets: ["latin"] });


export const metadata: Metadata = {
  title: "Dark Portfolio",
  description: "Nextjs Framer Design and Framer Motion ThreeJs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'antialiased')}>
        <ThemeProvider attribute="class" 
          defaultTheme="dark"
          enableSystem 
          disableTransitionOnChange >    
           {children}
        </ThemeProvider>
       </body>
    </html>
  );
}
