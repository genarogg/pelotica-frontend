import Header from "./Header";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

interface LayoutProps {
  children: React.ReactNode;
  where?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, where = " " }) => {
  return (
    <div className={`container-layout ${where}`}>
      <Header />
      <main>{children}</main>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Layout;
