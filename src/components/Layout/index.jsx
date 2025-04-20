
import { Outlet, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./Footer";
import { useEffect } from "react";

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="App">
        <Outlet />
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
