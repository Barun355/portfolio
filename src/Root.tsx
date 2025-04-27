import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { useEffect } from "react";

function Root() {

  useEffect(() => {
    let theme = localStorage.getItem("theme")

    if (theme){
      document.documentElement.setAttribute("data-theme", theme)
    } else {
      document.documentElement.setAttribute("data-theme", "black")

    }
  }, [])
  return (
    <div className="w-full md:w-[80%] h-full lg:h-screen flex flex-col gap-4 justify-center items-center">
      <Header />
      <div className="w-[90%] md:w-auto flex justify-center h-full pb-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Root;
