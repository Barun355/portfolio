import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiExpress,
  SiNextdotjs,
  SiPostman,
  SiPrisma,
  SiShadcnui,
} from "react-icons/si";
// import { useTheme } from "../hooks/useTheme";
import { Theme } from "../types";
import { useContext, useEffect, useRef, useState } from "react";
import { cn } from "../utils";
import { useAnimation, motion } from "framer-motion";
import { ThemeContext } from "../context/themeContext";

type SkillType = {
  label: string;
  icon: LucideIcon | IconType;
  bgColor: string;
  textColor: string;
};

const SkillScroll = ({
  skills = [
    {
      label: "HTML",
      icon: FaHtml5,
      bgColor: "bg-red-500/20",
      textColor: "text-red-600",
    },
    {
      label: "CSS",
      icon: FaCss3,
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-600",
    },
    {
      label: "JavaScript",
      icon: FaJs,
      bgColor: "bg-yellow-500/20",
      textColor: "text-yellow-600",
    },
    {
      label: "React.js",
      icon: FaReact,
      bgColor: "bg-blue-500/20",
      textColor: "text-blue-600",
    },
    {
      label: "Shadcn",
      icon: SiShadcnui,
      bgColor: "bg-white/20",
      textColor: "text-white",
    },
    {
      label: "Node.js",
      icon: FaNodeJs,
      bgColor: "bg-green-500/20",
      textColor: "text-green-600",
    },
    {
      label: "Express.js",
      icon: SiExpress,
      bgColor: "bg-yellow-500/20",
      textColor: "text-yellow-600",
    },
    {
      label: "Rest API",
      icon: SiPostman,
      bgColor: "bg-orange-500/20",
      textColor: "text-orange-600",
    },
    {
      label: "Next.js",
      icon: SiNextdotjs,
      bgColor: "bg-white/20",
      textColor: "text-white",
    },
    {
      label: "Prisma",
      icon: SiPrisma,
      bgColor: "bg-white/20",
      textColor: "text-white",
    },
  ],
}: {
  skills?: SkillType[];
}) => {
  const [localSkills, setLocalSkills] = useState<SkillType[]>(skills);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();

  // const { theme } = useTheme();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    if (localSkills.length === 0) {
      return;
    }

    const updatedSkills: any = localSkills.map((skill) => {
      let bgColor = "",
        textColor = "";
      if (skill.bgColor.includes("white") && theme === Theme.light) {
        bgColor = skill.bgColor.replace("white/20", "base/5");
      } else {
        bgColor = skill.bgColor;
      }

      if (skill.textColor.includes("white") && theme === Theme.light) {
        textColor = skill.textColor.replace("white", "base");
      } else {
        textColor = skill.textColor;
      }

      return { ...skill, bgColor, textColor };
    });
    setLocalSkills(updatedSkills);
  }, [theme]);

  useEffect(() => {
    const scrollContainer = containerRef.current;
    if (!scrollContainer) return;

    let animationFrame: any;
    let startTime: any = null;
    const duration = 100000;

    const animate = (timestamp: any) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = (elapsed % duration) / duration;
      const scrollPosition = progress * scrollContainer.scrollWidth;

      controls.set({ x: -scrollPosition });

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);
  
  return (
    <div className="overflow-hidden relative">
      <div
        className={cn(
          "absolute left-0 top-0 bottom-0 w-5 md:w-[8rem] lg:w-[20rem] bg-gradient-to-r z-10",
          theme === Theme.light ? "from-white" : "from-base-100",
          "to-transparent"
        )}
      ></div>
      <div
        className={cn(
          "absolute right-0 top-0 bottom-0 w-5 md:w-[8rem] lg:w-[20rem] bg-gradient-to-l to-transparent z-10",
          theme === Theme.light ? "from-white" : "from-base-100"
        )}
      ></div>
      <motion.div
        className="flex gap-4 justify-start items-center w-[20rem] md:w-full h-20 z-50"
        ref={containerRef}
        whileInView="visible"
        viewport={{ once: true }}
        animate={controls}
        transition={{ type: "tween", ease: "circIn" }}
      >
        {localSkills.length > 0 &&
          localSkills.map((skill) => (
            <span
              className={cn(
                `flex justify-center w-full items-center gap-3 rounded-full px-[0.8rem] py-2 text-xs border-2`,
                theme === Theme.light ? 'border-black/20' : 'border-white/10',
                skill.bgColor,
                skill.textColor
              )}
              key={skill.label}
            >
              <skill.icon />
              <label className="w-16">{skill.label}</label>
            </span>
          ))}
      </motion.div>
    </div>
  );
};
export default SkillScroll;
