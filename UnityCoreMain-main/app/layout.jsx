import Navbar from "@components/Navbar";
import "@styles/globals.css";
import { Inter } from "next/font/google";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetamaskAlert from "@components/Metamask";

//INTERNAL IMPORT
import { LoanProtocolProvider } from "@context/LoanProtocolContext";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UnityCore Protocol",
  description:
    "In UNITYCORE we will bring an innovative and community-based project, aiming to revolutionize the digital and real-world in everyway. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ToastContainer theme="colored" />
        <LoanProtocolProvider>
           <div className="flex flex-row">
            <Navbar />
            {children}
          </div> 
        </LoanProtocolProvider>
      </body>
    </html>
  );
}
