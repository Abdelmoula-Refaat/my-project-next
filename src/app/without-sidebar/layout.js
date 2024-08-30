import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Layout without Sidebar",
  description: "This layout does not include a sidebar",
};

export default function WithoutSidebarLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container-fluid">
          <main className="col-md-12 px-md-4 py-4">
            {children}
          </main>
        </div>
        <Footer />
      </body>
    </html>
  );
}

