import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from '../components/Navbar/Navbar'
import Matomo, { MatomoProvider } from '../utils/Matomo'
import TrackPageView from "../utils/TrackPageView";
import ScrollToggle from "../components/ui/ScrollToggle";
import Footer from "../components/Footer/Footer";
import BrochuresModal from "../components/Brochures/BrochuresModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Llamaworx",
  description: "AI tech company that specializes in creating advanced AI solutions.",
  icons: [{ rel: 'icon', url: '/llamaworx.svg' }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} flex justify-center flex-col items-center`}>
        {/* <MatomoTracker /> */}
        <MatomoProvider>
        <BrochuresModal />
          <Navbar />
          <TrackPageView />
          {children}
          <ScrollToggle />
          <Footer />
        </MatomoProvider>
         
      </body>
    </html>
  );
}
