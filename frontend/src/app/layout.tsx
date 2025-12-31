import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { AppProvider } from "@/context/AppContext";



export const metadata: Metadata = {
  title: "JobPortal - Find Your Dream Career",
  description: "Connect with top opportunities using our AI-powered platform. Job seekers get career guidance, recruiters access premium hiring tools.",
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <AppProvider>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <Navbar/>
        {children}
        </ThemeProvider>
        </AppProvider>
      </body>
    </html>
  );
}
