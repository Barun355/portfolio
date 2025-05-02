import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function Root() {

  
  return (
    <div className="w-full md:w-[80%] h-full flex flex-col gap-4 justify-center items-center pb-4">
      <Header />
      <div className="w-[90%] md:w-full flex justify-center h-full pb-8">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Root;
