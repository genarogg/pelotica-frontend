import Header from "./Header";
import Footer from "./Footer";

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
    </div>
  );
};

export default Layout;