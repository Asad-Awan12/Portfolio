import { Navbar } from "@/components/common/Navbar";
import "./globals.css";
import SmoothScroll from "@/components/common/SmoothScroll";
import { Blur } from "@/components/screens/home/Blur";
import { Header } from "@/components/common/Header";
import Footer from "@/components/screens/home/Footer";

// export const metadata = {
//   metadataBase: new URL("https://priceinpakistan.netlify.app/"),
//   title: {
//     default:
//       "Price in Pakistan - Compare & Get Latest Mobile Prices in Pakistan",
//     template: "%s Compare & Get Latest Mobile Prices in Pakistan",
//   },
//   description:
//     "Find the latest mobile prices in Pakistan, specs, comparisons, and reviews on Price in Paksitan website.",
//   openGraph: {
//     type: "website",
//     url: "https://priceinpakistan.netlify.app",
//     siteName: "Price in Paskitan",
//     images: ["/default-og.jpg"],
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@priceinpakistan",
//   },
//   alternates: {
//     canonical: "https://priceinpakistan.netlify.app",
//   },
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&family=Instrument+Serif:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#e9eef2] basefont  ">
        <SmoothScroll />
        <Header />
        {children}
        <Blur />
        <Footer />
        <Navbar />
      </body>
    </html>
  );
}
