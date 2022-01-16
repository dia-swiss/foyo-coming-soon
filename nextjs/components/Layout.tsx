import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <main className='px-10 max-w-7xl mx-auto' style={{ minHeight: 'calc(100vh - 140px)' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;