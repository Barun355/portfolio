import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MoonIcon, Sun } from "lucide-react";
import { Theme } from "../types";
import { ThemeContext } from "../context/themeContext";
import { cn } from "../utils";

function Header() {
  const [sidebar, setSidebar] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const [isSticky, setIsSticky] = useState(false)

  const navItems = [
    {
      label: "Home",
      slug: "/",
      icon: false,
      color: "slate",
    },
    {
      label: "Blogs",
      slug: "",
      link: "https://blog.baruntiwary.dev",
      icon: false,
      color: "blue",
    },
    {
      label: "Projects",
      slug: "/projects",
      icon: false,
      color: "slate",
    },
    {
      label: "Community",
      slug: "",
      link: "https://codefirst.fun",
      icon: false,
      color: "green",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div className="flex relative flex-col justify-center lg:justify-center w-full items-center lg:items-end pt-0 md:pt-8 pb-[1rem] md:pb-[4rem]">
      <div className={cn("flex items-center justify-between gap-16 px-6 py-3 border-b md:border-2 glass w-full rounded-none lg:w-fit md:rounded-full transition-all duration-500", isSticky && "md:fixed md:top-9 md:z-50", theme === Theme.light ? "border-indigo-800" : "border-white/10")}>
        <Link
          to={"/"}
          className="font-bold flex gap-3 justify-center items-center"
        >
          <img
            src="/profile.jpg"
            alt="Barun Tiwary"
            className="h-8 w-8 rounded-full"
          />
          Barun Tiwary
        </Link>
        <div className="md:flex justify-between items-center w-fit gap-8 font-[ubuntu] hidden">
          {navItems.length > 0 &&
            navItems.map((item) =>
              item?.slug !== "" ? (
                <Link
                  to={item?.slug}
                  key={item?.slug}
                  className={`hover:text-${item.color}-400`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item?.link}
                  target="_blank"
                  key={item?.link}
                  className={`hover:text-${item.color}-400`}
                >
                  {item?.label}
                </a>
              )
            )}
        </div>
        <div className="flex gap-4">
          <div
            className="w-fit bg-base-200 rounded-full p-2"
            onClick={() => setTheme(theme === Theme.dark ? Theme.light : Theme.dark)}
          >
            {theme === Theme.dark ? <Sun /> : <MoonIcon />}
          </div>
          <button onClick={(_) => setSidebar(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-8 block md:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`absolute  ${
          sidebar ? "h-screen w-full opacity-100 z-10" : "h-0 w-0 opacity-0 z-0"
        } transition-all duration-500 bg-[#36363b] top-0 left-0 p-8 flex flex-col gap-20`}
      >
        <div className="flex justify-between gap-2">
          <Link
            to={"/"}
            className="font-bold flex gap-2 justify-center items-center"
          >
            <img
              src="/profile.jpg"
              alt="Barun Tiwary"
              className="h-8 w-8 rounded-full"
            />
            Barun Tiwary
          </Link>
          <button onClick={(_) => setSidebar(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-start w-fit gap-8 font-[inter] text-[#d9e3f8]">
          {navItems.length > 0 &&
            navItems.map((item) =>
              item?.slug !== "" ? (
                <Link
                  to={item?.slug}
                  key={item?.slug}
                  className={`hover:text-${item.color}-400`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  href={item?.link}
                  target="_blank"
                  key={item?.link}
                  className={`hover:text-${item.color}-400`}
                >
                  {item?.label}
                </a>
              )
            )}
        </div>
      </div>
    </div>
  );
}

export default Header;
