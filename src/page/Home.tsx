import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, LucideNetwork, Twitter } from "lucide-react";
import SkillScroll from "../components/SkillScroll";

function Home() {
  const roles = ["Freelancer", "Full Stack", "CF Founder"];
  const typeAnimationSequence = [
    "React",
    1000,
    "Rest API",
    1000,
    "React Native",
    1000,
    "Next.js",
    1000,
    "Node.js",
    1000,
  ];

  const socials = [
    {
      icon: Linkedin,
      slug: "https://linkedin.com/in/barun-tiwary",
    },
    {
      icon: Twitter,
      slug: "https://x.com/21me60",
    },
    {
      icon: Github,
      slug: "https://github.com/Barun355",
    },
    {
      icon: LucideNetwork,
      slug: "https://codefirst.fun",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <section
        className="flex flex-col gap-10 lg:flex-row justify-between items-center h-full"
        id="hero"
      >
        <div className="flex flex-col gap-4 w-full lg:w-[58%]">
          <div className="flex gap-2 md:gap-3">
            {roles.map((role, index) => (
              <div
                className="flex justify-center items-center gap-2 md:gap-4"
                key={role}
              >
                <span className="px-4 text-xs py-1 bg-blue-500/20 text-blue-600 shadow-xl/40 shadow-blue-500/50 w-fit rounded-full">
                  {role}
                </span>
                {index !== roles.length - 1 && (
                  <span className="animate-pulse h-3 w-3 rounded-full bg-indigo-500 shadow-2xl shadow-indigo-500"></span>
                )}
              </div>
            ))}
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-4">
            Building{" "}
            <a href="https://codefirst.fun" target="_blank">
              <b className="text-blue-400 hover:underline">CodeFirst.fun</b>
            </a>{" "}
            for Students and Professionals.
          </h1>
          <h2 className="text-xl lg:text-3xl font-bold">
            <span>Experience in </span>
            <TypeAnimation
              sequence={typeAnimationSequence}
              wrapper="b"
              style={{ color: "#38bdf8" }}
              speed={10}
              repeat={Infinity}
            />
          </h2>
          <p className="text-md">
            If you are a founder, bussiness owner, company HR, etc... and want
            to ship your tech product v1 as soon as possible. Or looking for the
            Skilled Developer for Contract / Freelance Job. You are in the
            rightplace.
          </p>
          <div className="flex flex-col gap-8">
            <p>
              Want to see my skills?{" "}
              <Link to="/projects" className="text-indigo-400 hover:underline">
                My work
              </Link>{" "}
            </p>
            <div className="flex gap-4 justify-start items-center">
              {socials.map((social) => (
                <a
                  className="h-[42px] w-[42px] rounded-full flex justify-center items-center"
                  key={social.slug}
                  href={social.slug}
                  target="_blank"
                >
                  <social.icon className="duration-150 transform transition-all hover:stroke-blue-400" />
                </a>
              ))}
            </div>
            <Button variants="outline-primary" size="md">
              <a
                href="https://www.linkedin.com/posts/barun-tiwary_recently-i-created-a-community-called-codefirst-activity-7243986727164379136-0Zum?utm_source=share&utm_medium=member_desktop"
                target="_blank"
              >
                Client Reviews
              </a>
            </Button>
          </div>
        </div>
        <div className="flex w-full lg:w-[42%] h-full justify-center items-center gap-20 lg:gap-4">
          <img
            src="/hero.png"
            alt="Barun Tiwary"
            className="h-[20rem] w-[20rem] md:h-[32rem] md:w-[32rem] rounded-md lg:rounded-full object-cover"
          />
        </div>
      </section>
      <section className="py-10">
        <SkillScroll />
      </section>
    </div>
  );
}

export default Home;
