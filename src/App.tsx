import { Outlet } from "react-router";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default App;
