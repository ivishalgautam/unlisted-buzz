import { Poppins, Urbanist } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";
import QueryProvider from "@/components/providers/query-client-provider";
import Context from "@/store/context";
import { NuqsAdapter } from "nuqs/adapters/next/app";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Unlisted Buzz",
  description: "Unlisted Buzz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} ${poppins.className} antialiased`}
        suppressHydrationWarning={true}
      >
        <NuqsAdapter>
          <Context>
            <Toaster richColors />
            <QueryProvider>
              <Layout>
                {children}
                <Toaster />
              </Layout>
            </QueryProvider>
          </Context>
        </NuqsAdapter>
      </body>
    </html>
  );
}
