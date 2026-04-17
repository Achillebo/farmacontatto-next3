import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar1 from "@/components/Navbar1";
import Providers from "@/components/Providers";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body>
        <Providers>
          <Navbar1 />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}