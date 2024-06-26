import { Sora } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });
const inter = Sora({
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <div>
          <canvas id="acquisitions"></canvas>
        </div> */}
        {/* <script type="module" src="acquisitions.js"></script> */}
      </body>
    </html>
  );
}
