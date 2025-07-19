// src/components/Layout.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom"; // If using react-router

function Layout() {
  return (
    <>
      <Header />
      <main style={{ paddingTop: "80px", minHeight: "calc(100vh - 160px)" }}>
        <Outlet /> {/* Renders the current route component */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
