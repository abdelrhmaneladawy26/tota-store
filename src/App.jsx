import { Outlet } from "react-router";
import "./App.css";
import NavBarLogin from "./components/Uitily/NavBarLogin";
import Footer from "./components/Uitily/Footer";

function App() {
  return (
    <>
      <NavBarLogin />
      <div className="min-h-[680px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
