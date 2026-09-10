import { Outlet } from "react-router";
import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import WhatsappFloatingButton from "./components/ui/WhatsappFloatingButton";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />

      <WhatsappFloatingButton />
    </>
  );
};

export default App;
