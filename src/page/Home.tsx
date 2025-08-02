import { Link } from "react-router-dom";
import Button from "../components/ui/button";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Calendar,
  Github,
  Globe,
  Linkedin,
  LucideNetwork,
  MapPin,
  Quote,
  Star,
  Twitter,
} from "lucide-react";
import SkillScroll from "../components/SkillScroll";
import { useContext, useState } from "react";
import { cn } from "../utils";
import { Theme } from "../types";
import { ThemeContext } from "../context/themeContext";
import BlogSection from "../components/BlogSection";

function Home() {
  const roles = ["Freelancer", "Full Stack", "CF Founder"];
  const { theme } = useContext(ThemeContext);

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
  const journey = [
    {
      title: "Foruppo",
      description:
        "During my project management internship at Foruppo, I was involved in over three distinct projects, where I applied my theoretical knowledge to real-world scenarios. I supported project lifecycles from initiation to closure, gaining hands-on experience in planning, execution, and monitoring. This role honed my problem-solving skills and my ability to collaborate with various teams to address project challenges and adapt to changing needs, preparing me for a future role as a software engineer.",
      skills: ["Wordpress", "HTML", "CSS", "JavaScript"],
      images: [
        {
          slug: "https://foruppo.com/storage/2022/12/Foruppo-Logo.png",
          object: "cover",
          bg: null,
        },
      ],
      start: "Dec 2023",
      end: "May 2024",
      position: "Project Manager Intern",
      place: "Remote",
      website: "https://foruppo.com/",
      social: [
        { icon: Linkedin, link: "https://www.linkedin.com/company/foruppo" },
      ],
    },
    {
      title: "Generix Info Tech",
      description:
        "As a Full Stack Development Teacher at Genrix Info Tech, I guided a batch of students through an internship focused on building a custom e-commerce platform from the ground up. I provided instruction on full-stack development using Raw PHP with MySQL for the backend and Vanilla HTML, CSS, and JavaScript for the frontend. Under my mentorship, students developed a deep understanding of core concepts by building a unique e-commerce product, not a clone, which included a secure authentication system, product listing, detailed product pages, a shopping cart, and a product upload feature. This experience solidified their foundational knowledge and prepared them for future real-world projects.",
      skills: ["Team Management", "HTML", "CSS", "JS", "PHP"],
      images: [{ slug: "/generix-gallery.jpeg", object: "cover", bg: null }],
      start: "March 2024",
      end: "Sept 2024",
      position: "Web Dev Trainer",
      place: "Onsite",
      website: "https://www.generixinfo.com/",
      social: [
        {
          icon: Linkedin,
          link: "https://www.linkedin.com/company/generix-info-tech-jamshedpur",
        },
      ],
    },
    {
      title: "Autonmis",
      description:
        "At Autonmis, a data-driven solutions startup, I worked as a Full Stack Developer on various features, with a primary focus on developing data connectors. My work enabled clients, including data scientists and analysts, to seamlessly integrate data from multiple sources like Snowflake, Google Analytics, and HubSpot into our platform. This consolidation of data provided a unified source for generating valuable insights and creating comprehensive dashboards.",
      skills: [
        "Python",
        "Airflow",
        "Next.js",
        "Typescript",
        "React.js",
        "Node.js",
      ],
      images: [
        {
          slug: "https://autonmis.com/logo-main-dark.svg",
          object: "contain",
          bg: "white",
        },
      ],
      start: "Jan 2025",
      end: "March 2025",
      position: "Full Stack Developer",
      place: "Remote",
      website: "https://autonmis.com",
      social: [
        { icon: Linkedin, link: "https://www.linkedin.com/company/autonmis" },
        { icon: Twitter, link: "https://x.com/helloautonmis" },
      ],
    },
  ];

  const clientReviews = [
    {
      name: "Manasjrmanas M",
      review:
        "Your work is very smooth and it's great and making time there was few changes and few bugs after informing you , yuh have been updated now it's running smooth",
      rating: 5,
      image: "/clients-review/client-review-1.png",
      style: {
        dark: {
          backgroundImage: "linear-gradient(0deg, #7028e4 0%, #e5b2ca 100%)",
        },
        light: {
          backgroundImage: "linear-gradient(90deg, #fdfbfb 0%, #ebedee 100%)",
        },
      },
    },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState<{
    [key: number]: number;
  }>({});

  // Initialize image indexes if not set
  const getImageIndex = (itemIndex: number) => {
    if (currentImageIndex[itemIndex] === undefined) {
      return 0;
    }
    return currentImageIndex[itemIndex];
  };

  const handlePrevImage = (itemIndex: number, imagesLength: number) => {
    setCurrentImageIndex({
      ...currentImageIndex,
      [itemIndex]: (getImageIndex(itemIndex) - 1 + imagesLength) % imagesLength,
    });
  };

  const handleNextImage = (itemIndex: number, imagesLength: number) => {
    setCurrentImageIndex({
      ...currentImageIndex,
      [itemIndex]: (getImageIndex(itemIndex) + 1) % imagesLength,
    });
  };

  const renderRatingStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <Star
          key={i}
          size={16}
          className={
            i < rating
              ? "fill-yellow-400 text-yellow-400"
              : theme === Theme.dark
              ? "text-gray-500"
              : "text-gray-300"
          }
        />
      ));
  };

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
            <div className="flex gap-4 flex-col md:flex-row">
              <Button variants="primary" size="md">
                <Link to="/quick-call">Schedule a Call</Link>
              </Button>
            </div>
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
      <section className="py-10 w-full" id="skills">
        <SkillScroll />
      </section>
      <section className="w-full py-10" id="about">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-4">
            About Me
          </h1>
          <p className="text-md">
            I am a tech enthusiast working towards building great softwares that
            solve real world problems. If you are building something great and
            need a hand to help you out in tech, I am here to walk you
            throughout your journey of building your product, whether you have
            just an Idea or a working prototype or want me to help you out in
            your exising products. Here are my{" "}
            <a href="#" className="font-base text-blue-500 hover:underline">
              Skills
            </a>{" "}
            and{" "}
            <Link
              to="/projects"
              className="font-base text-blue-500 hover:underline"
            >
              Projects
            </Link>{" "}
            which showcase my skills and capabilities of what I can do with{" "}
            <a
              href="#clients"
              className="font-base text-blue-500 hover:underline"
            >
              Clients
            </a>{" "}
            testimonials as a proof of work.
          </p>
          <div className="flex flex-col gap-4 space-y-6 mt-4" id="journey">
            <h3 className="text-lg md:text-3xl font-bold mt-4">
              Here is my journey.
            </h3>
            <div className="flex flex-col gap-3 space-y-4">
              {journey.length > 0 &&
                journey.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "w-full rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl",
                      theme === Theme.dark
                        ? "bg-white/10 text-white border-8 border-blue-600/10"
                        : "bg-white text-gray-800 border-8 border-gray-200"
                    )}
                  >
                    <div className="flex flex-col lg:flex-row">
                      {/* Image Section */}
                      <div className="lg:w-1/3 relative">
                        <div className="h-64 md:h-80 lg:h-full w-full relative overflow-hidden">
                          <img
                            src={item.images[getImageIndex(index)].slug}
                            alt={`${item.title} image`}
                            className={cn(
                              `h-full w-full object-${
                                item.images[getImageIndex(index)]
                                  ? item.images[getImageIndex(index)].object
                                  : "cover"
                              } transition-transform duration-500 hover:scale-105`,
                              item.images[getImageIndex(index)].bg &&
                                `bg-${item.images[getImageIndex(index)].bg}`
                            )}
                          />

                          {item.images.length > 1 && (
                            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-4 z-10">
                              <button
                                onClick={() =>
                                  handlePrevImage(index, item.images.length)
                                }
                                className={cn(
                                  "p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors",
                                  "flex items-center justify-center"
                                )}
                                aria-label="Previous image"
                              >
                                <ArrowLeft size={18} className="text-white" />
                              </button>
                              <button
                                onClick={() =>
                                  handleNextImage(index, item.images.length)
                                }
                                className={cn(
                                  "p-2 rounded-full bg-black/50 hover:bg-black/70 transition-colors",
                                  "flex items-center justify-center"
                                )}
                                aria-label="Next image"
                              >
                                <ArrowRight size={18} className="text-white" />
                              </button>
                            </div>
                          )}

                          {/* Image counter */}
                          <div className="absolute top-4 right-4 bg-black/60 px-2 py-1 rounded text-white text-sm">
                            {getImageIndex(index) + 1}/{item.images.length}
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                        <div className="space-y-6">
                          {/* Header */}
                          <div>
                            <h2 className="text-3xl font-bold flex items-center gap-2">
                              <span>@{item.title}</span>
                            </h2>

                            <div className="mt-2 space-y-2">
                              <div className="flex items-center gap-2 text-lg">
                                <Briefcase className="h-5 w-5 text-blue-400" />
                                <span
                                  className={
                                    theme === Theme.dark
                                      ? "text-gray-200"
                                      : "text-gray-600"
                                  }
                                >
                                  {item.position}
                                </span>
                              </div>

                              <div className="flex items-center gap-2 text-lg">
                                <MapPin className="h-5 w-5 text-blue-400" />
                                <span
                                  className={
                                    theme === Theme.dark
                                      ? "text-gray-100"
                                      : "text-gray-600"
                                  }
                                >
                                  {item.place}
                                </span>
                              </div>

                              <div className="flex items-center gap-2 text-lg">
                                <Calendar className="h-5 w-5 text-blue-400" />
                                <span className="font-medium">
                                  {item.start} - {item.end}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Description */}
                          <div>
                            <p
                              className={cn(
                                "text-base leading-relaxed",
                                theme === Theme.dark
                                  ? "text-gray-300"
                                  : "text-gray-600"
                              )}
                            >
                              {item.description}
                            </p>
                          </div>

                          {/* Skills */}
                          {item.skills && item.skills.length > 0 && (
                            <div>
                              <h3 className="text-lg font-semibold mb-2">
                                Skills
                              </h3>
                              <div className="flex flex-wrap gap-2">
                                {item.skills.map((skill, idx) => (
                                  <span
                                    key={idx}
                                    className={cn(
                                      "px-3 py-1 rounded-full text-sm font-medium",
                                      theme === Theme.dark
                                        ? "bg-blue-900/40 text-blue-300"
                                        : "bg-blue-100 text-blue-700"
                                    )}
                                  >
                                    {skill}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Links Section */}
                        <div className="mt-6 pt-4 border-t border-gray-700/30 flex flex-wrap items-center gap-4">
                          {item.website && (
                            <a
                              href={item.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={cn(
                                "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
                                theme === Theme.dark
                                  ? "bg-gray-700 hover:bg-gray-600 text-white"
                                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                              )}
                            >
                              <Globe className="h-5 w-5" />
                              <span>Website</span>
                            </a>
                          )}

                          {item.social &&
                            item.social.length > 0 &&
                            item.social.map((social, idx) => (
                              <a
                                key={idx}
                                href={social.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                  "flex items-center gap-2 px-4 py-2 rounded-md transition-colors",
                                  theme === Theme.dark
                                    ? "bg-gray-700 hover:bg-gray-600 text-white"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                                )}
                              >
                                <social.icon className="h-5 w-5" />
                                <span>{social.icon.name}</span>
                              </a>
                            ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      {clientReviews.length > 2 && (
        <section className="w-full py-10" id="clients">
          <div className="flex flex-col gap-4">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mt-4">
              Client Reviews
            </h1>
            <div className="flex gap-4 md:space-y-6 mt-4 justify-start items-center flex-col md:flex-row">
              {clientReviews.length > 0 &&
                clientReviews.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] group",
                      "flex flex-col h-full w-full sm:w-[28rem]",
                      theme === Theme.dark
                        ? "bg-white/10 text-white border-8 border-indigo-800/20"
                        : "bg-white text-gray-800 border-8 border-gray-200"
                    )}
                  >
                    <div
                      className={cn(
                        "relative h-64 md:h-48 lg:h-60 w-full overflow-hidden",
                        "after:absolute after:inset-0 after:bg-gradient-to-b after:from-transparent after:to-black/70"
                      )}
                    >
                      <img
                        src={item.image}
                        alt={`${item.name}'s review`}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />

                      {/* Quote icon overlay */}
                      <div className="absolute top-4 right-4 z-10 bg-white/20 backdrop-blur-md p-2 rounded-full overflow-hidden">
                        <Quote
                          size={24}
                          className={
                            theme === Theme.dark
                              ? "text-white"
                              : "text-gray-800"
                          }
                        />
                      </div>
                    </div>

                    <div
                      className={cn(
                        "relative flex-grow p-6 rounded-b-xl",
                        theme === Theme.dark
                          ? "bg-white/10 text-white border-t-4 border-blue-500/50"
                          : "bg-white text-gray-800 border-t-4 border-blue-400"
                      )}
                      style={
                        theme === Theme.light
                          ? item.style.light
                          : item.style.dark
                      }
                    >
                      {/* Top border accent */}
                      <div className="mb-3 flex items-center justify-between">
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <div className="flex">
                          {renderRatingStars(item.rating)}
                        </div>
                      </div>

                      <p
                        className={cn(
                          "text-sm leading-relaxed italic",
                          theme === Theme.dark
                            ? "text-gray-200"
                            : "text-gray-600"
                        )}
                      >
                        "{item.review}"
                      </p>

                      {/* Visual element for additional style */}
                      <div
                        className={cn(
                          "absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 w-16 rounded-full",
                          theme === Theme.dark
                            ? "bg-blue-400/70"
                            : "bg-blue-500"
                        )}
                      ></div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      )}
      <section className="w-full py-10" id="blogs">
        <BlogSection />
      </section>
    </div>
  );
}

export default Home;
