import {
  Clock,
  Code,
  Github,
  Globe,
  Linkedin,
  Mail,
  Twitter,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "../utils";
import { Theme } from "../types";
import { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import Button from "./ui/button";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className="mt-16 w-full">
      <div className="px-4 w-full">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center">
              <Code
                className={cn(
                  "w-6 h-6 mr-2",
                  theme === Theme.dark ? "text-indigo-300" : "text-indigo-600"
                )}
              />
              <h3 className="text-xl font-bold">Barun Tiwary</h3>
            </div>
            <p className={cn(theme === Theme.dark && "text-indigo-200")}>
              Full Stack Web Developer passionate about creating elegant,
              scalable, and user-friendly applications with modern technologies.
            </p>
            <div className="pt-2">
              <span
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2",
                  theme === Theme.dark
                    ? "text-indigo-200 bg-indigo-800/50"
                    : "text-indigo-100 bg-indigo-800"
                )}
              >
                <Zap className="w-3 h-3 mr-1" />
                React
              </span>
              <span
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2",
                  theme === Theme.dark
                    ? "text-indigo-200 bg-indigo-800/50"
                    : "text-indigo-100 bg-indigo-800"
                )}
              >
                Node.js
              </span>
              <span
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2",
                  theme === Theme.dark
                    ? "text-indigo-200 bg-indigo-800/50"
                    : "text-indigo-100 bg-indigo-800"
                )}
              >
                TypeScript
              </span>
              <span
                className={cn(
                  "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2",
                  theme === Theme.dark
                    ? "text-indigo-200 bg-indigo-800/50"
                    : "text-indigo-100 bg-indigo-800"
                )}
              >
                Next.js
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://codefirst.fun"
                  className={cn(
                    "flex items-center transition-colors duration-200",
                    theme === Theme.dark
                      ? "text-indigo-200 hover:text-white"
                      : "text-indigo-800 hover:text-indigo-600"
                  )}
                  target="_blank"
                >
                  <Globe className="w-4 h-4 mr-2" />
                  Community
                </a>
              </li>
              <li>
                <Link
                  to="/projects"
                  className={cn(
                    "flex items-center transition-colors duration-200",
                    theme === Theme.dark
                      ? "text-indigo-200 hover:text-white"
                      : "text-indigo-800 hover:text-indigo-600"
                  )}
                >
                  <Code className="w-4 h-4 mr-2" />
                  Projects
                </Link>
              </li>
              <li>
                <a
                  href="/#journey"
                  className={cn(
                    "flex items-center transition-colors duration-200",
                    theme === Theme.dark
                      ? "text-indigo-200 hover:text-white"
                      : "text-indigo-800 hover:text-indigo-600"
                  )}
                >
                  <Clock className="w-4 h-4 mr-2" />
                  Experience
                </a>
              </li>
              <li>
                <button
                  className={cn(
                    "flex items-center transition-colors duration-200",
                    theme === Theme.dark
                      ? "text-indigo-200 hover:text-white"
                      : "text-indigo-800 hover:text-indigo-600"
                  )}
                  onClick={() => {
                    navigator.clipboard.writeText("contact@baruntiwary.dev");
                    alert(
                      "Email copied 'contact@baruntiwary.dev' to clipboard"
                    );
                  }}
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Let's Connect</h3>
            <p className={cn(theme === Theme.dark && "text-indigo-200")}>
              Feel free to reach out for collaborations or just a friendly chat.
            </p>
            <Button variants="primary" size="md">
              <Link to="/quick-call">Schedule a Call</Link>
            </Button>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/Barun355"
                className="bg-indigo-800 p-2 rounded-full hover:bg-indigo-700 transition-colors duration-200"
                target="_blank"
              >
                <Github className={cn("w-5 h-5 text-white")} />
              </a>
              <a
                href="https://linkedin.com/in/barun-tiwary"
                className="bg-indigo-800 p-2 rounded-full hover:bg-indigo-700 transition-colors duration-200"
                target="_blank"
              >
                <Linkedin className={cn("w-5 h-5 text-white")} />
              </a>
              <a
                href="https://x.com/21me60"
                className="bg-indigo-800 p-2 rounded-full hover:bg-indigo-700 transition-colors duration-200"
                target="_blank"
              >
                <Twitter className={cn("w-5 h-5 text-white")} />
              </a>
              <a
                href="mailto:contact@baruntiwary.dev"
                className="bg-indigo-800 p-2 rounded-full hover:bg-indigo-700 transition-colors duration-200"
              >
                <Mail className={cn("w-5 h-5 text-white")} />
              </a>
            </div>
          </div>
        </div>

        <div className="w-full border-t border-indigo-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className={cn("text-sm", theme === Theme.dark && "text-indigo-200")}>
            &copy; {new Date().getFullYear()} Jane Developer. All rights
            reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <a
              href="#"
              className={cn("text-sm transition-colors duration-200 mx-3", theme === Theme.dark ? "text-indigo-200" : "text-indigo-800")}
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className={cn("text-sm transition-colors duration-200 mx-3", theme === Theme.dark ? "text-indigo-200" : "text-indigo-800")}
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
