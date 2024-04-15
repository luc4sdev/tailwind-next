import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "./components/Sidebar";
import { ThemeProvider } from "next-themes";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Untitled UI",
  description: "Dashboard with tailwindcss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning className="antialiased">

      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <div className="lg:grid min-h-screen lg:grid-cols-app dark:bg-zinc-900">
            <Sidebar />
            <main className="max-w-[100vw] px-4 pb-12 pt-24 lg:col-start-2 lg:px-8 lg:pt-8">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>

    </html>
  );
}
