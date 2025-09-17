import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight:["400","500","600","700","800"],
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased bg-black text-white`}>
        {/* Header - Always present */}
        <Header />
        
        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>
        
        {/* Footer - Always present */}
        <Footer id="footer" />
      </body>
    </html>
  );
}
