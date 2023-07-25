import Header from "./components/header/header.component";
import Footer from "./components/footer";
import { NextAuthProvider } from "./context/providers";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
            <Header />
                <main>{children}</main>
            <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
