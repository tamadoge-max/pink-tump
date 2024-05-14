import { Inter } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "next-themes";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import SolanaProvider from "@/providers/solana-provider";
import { RealtimeProvider } from "@/providers/realtime-provider";
import { SideBar } from "@/components/sidebar";

export const runtime = "edge";

export const dynamic = "force-dynamic";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <SolanaProvider>
            <RealtimeProvider>
              <SideBar>{children}</SideBar>

              <Toaster />
            </RealtimeProvider>
          </SolanaProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};
