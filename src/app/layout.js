// import { Inter } from "next/font/google";
// import "./globals.css";
import "../../public/styles/styles.scss";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';

// const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "24-days-challenge",
  description: "24-days-challenge",
  // openGraph: {
  //   images: "https://cdn-global.doctornetwork.us/avatars/2024/06/4f1140d9-cf28-4e5d-b8ec-3b22054f5816-1717601034269.png",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
