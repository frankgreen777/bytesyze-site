import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "ByteSyze IT Solutions",
  description: "Secure, Sustainable IT Asset Disposition Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}