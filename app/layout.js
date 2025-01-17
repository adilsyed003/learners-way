import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ClerkProvider } from "@clerk/nextjs"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Learners Way - Getting started",
  description:
    "Learners Way is a platform for learning to code for AI, web development, cloud computing, app development, next js, React and academics. Get started today!",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
