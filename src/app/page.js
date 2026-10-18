"use client";

import Image from "next/image";
import FloatingBlobs from "./components/FloatingBlobs";
import AnimatedTitle from "./components/AnimatedTitle";
import { useEffect, useState } from "react";

import { motion, useScroll } from "framer-motion";

import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaExternalLinkAlt,
  FaFigma,
  FaGraduationCap,
  FaBriefcase,
  FaBars,
  FaTimes,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { SiMongodb, SiJavascript, SiExpress, SiPostman } from "react-icons/si";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const roles = [
    "Software Engineer",
    "Full-Stack Developer",
    "Next.js Developer",
    "React Native Developer",
    "Product Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  const [displayText, setDisplayText] = useState("");

  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const sections = ["about", "skills", "projects", "timeline", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(entry.target.id);

            setActiveSection(entry.target.id);
          }
        });
      },

      {
        rootMargin: "-40% 0px -40% 0px",
      },
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);

      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);

        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);
  useEffect(() => {
    const currentRole = roles[roleIndex];

    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + currentRole[charIndex]);

        setCharIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setDisplayText("");
        setCharIndex(0);

        setRoleIndex((prev) => (prev === roles.length - 1 ? 0 : prev + 1));
      }, 1500);
    }
  }, [charIndex, roleIndex]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const { scrollYProgress } = useScroll();

  const skills = [
    {
      name: "React.js",
      icon: <FaReact />,
    },
    {
      name: "Next.js",
      icon: <FaReact />,
    },
    {
      name: "React Native",
      icon: <FaReact />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Express.js",
      icon: <SiExpress />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },
    {
      name: "Figma",
      icon: <FaFigma />,
    },
    {
      name: "Postman",
      icon: <SiPostman />,
    },
  ];


  const timeline = [
    {
      year: "2023 - Present",
      title: "BS Software Engineering",
      company: "University of Central Punjab",
      description:
        "Currently in my 7th semester, developing a strong foundation in software engineering, algorithms, databases, networking, system design, and modern application development.",
      icon: <FaGraduationCap />,
    },

    {
      year: "2024 - Present",
      title: "Full-Stack & Mobile Developer",
      company: "Independent Projects & Client Work",
      description:
        "Building and delivering web and mobile applications using React, Next.js, React Native, Node.js, Express.js, MongoDB, REST APIs, and modern UI/UX practices.",
      icon: <FaBriefcase />,
    },
  ];
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex flex-col items-center justify-center text-white text-center px-6">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
Abdullah Badar
        </h1>

        <p className="text-blue-500 text-xl">
          Software Engineer • Full-Stack Developer
        </p>

        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
          }}
          className="mt-8"
        >
          Loading...
        </motion.div>
      </div>
    );
  }
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      <div className="hidden md:block">
        <FloatingBlobs />
      </div>
      {/* Scroll Progress */}

      <motion.div
        style={{
          scaleX: scrollYProgress,
        }}
        className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-[100]"
      />

      {/* Cursor Glow */}

      <div
        className="fixed w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-[120px] pointer-events-none z-0 hidden md:block"
        style={{
          left: mousePosition.x - 200,

          top: mousePosition.y - 200,
        }}
      />

      {/* Background Grid */}

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none"></div>

      {/* Navbar */}

      <nav className="fixed w-full top-0 z-50 bg-black/40 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-lg md:text-2xl font-bold">Abdullah Badar</h1>

          {/* Desktop Menu */}

          <div className="hidden md:flex gap-8">
            <a
              href="#about"
              className={`transition-all duration-300 ${
                activeSection === "about"
                  ? "text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  : "hover:text-blue-400"
              }`}
            >
              About
            </a>

            <a
              href="#skills"
              className={`transition-all duration-300 ${
                activeSection === "skills"
                  ? "text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  : "hover:text-blue-400"
              }`}
            >
              Skills
            </a>

            <a
              href="#projects"
              className={`transition-all duration-300 ${
                activeSection === "projects"
                  ? "text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  : "hover:text-blue-400"
              }`}
            >
              Projects
            </a>

            <a
              href="#timeline"
              className={`transition-all duration-300 ${
                activeSection === "timeline"
                  ? "text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]"
                  : "hover:text-blue-400"
              }`}
            >
              Journey
            </a>

            <a
              href="#contact"
              className={`transition-all duration-300 ${
                activeSection === "contact"
                  ? "text-blue-500"
                  : "hover:text-blue-400"
              }`}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}

          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div className="md:hidden bg-black border-t border-gray-800 px-6 py-6 flex flex-col gap-6">
            <a href="#about">About</a>

            <a href="#skills">Skills</a>

            <a href="#projects">Projects</a>
            <a href="#timeline">Journey</a>

            <a href="#contact">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero */}

      <section className="min-h-screen flex items-center justify-center px-6 pt-40 relative z-10">
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
          >
            <p className="text-blue-400 tracking-[5px] uppercase mb-5 text-sm">
              Software Engineer • Full-Stack Developer
            </p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Abdullah 
              <br />
              Badar
            </h1>

            {/* Dynamic Typing */}

            <h2 className="text-2xl md:text-4xl text-blue-500 font-bold mb-8 min-h-[60px]">
              {displayText}
              <span className="animate-pulse">|</span>
            </h2>

            <p className="text-gray-400 text-lg leading-8 max-w-xl mb-10">
              I build modern web and mobile applications for businesses,
              startups, and real-world products — from idea and interface to
              development, APIs, databases, and deployment.
            </p>

            <div className="flex flex-wrap gap-5">
              <a
                href="#projects"
                className="px-8 py-4 rounded-full bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(59,130,246,0.5)]"
              >
                View My Work
              </a>

              <a
                href="https://github.com/hafizalbadar-cyber"
                target="_blank"
                className="px-8 py-4 rounded-full border border-gray-700 hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                Lets Work Together
              </a>
            </div>

            {/* Social */}

            <div className="flex gap-6 mt-10 text-3xl">
              <a
                href="https://github.com/hafizalbadar-cyber"
                target="_blank"
                className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/abdullah-badar-6a2812361"
                target="_blank"
                className="hover:text-blue-400 hover:scale-125 transition-all duration-300"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="relative flex justify-center mt-10 lg:mt-0"
          >
            <div className="absolute w-[250px] md:w-[350px] h-[250px] md:h-[350px] rounded-full bg-blue-500 blur-[120px] animate-pulse"></div>

            <motion.div
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 w-[250px] h-[320px] md:w-[340px] md:h-[440px] rounded-[40px] overflow-hidden border border-gray-800 hover:border-blue-500 hover:shadow-[0_0_60px_rgba(59,130,246,0.5)] transition-all duration-500"
            >
              <Image
                src="/images/profile.jpeg"
                alt="Abdullah Badar"
                width={340}
                height={440}
                className="w-full h-full object-cover  "
                style={{
                  objectPosition: "center 15%",
                }}
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About */}

      <section id="about" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <AnimatedTitle title="About Me" />
          <p className="text-gray-400 text-lg leading-10 max-w-4xl">
            I’m a final-year Software Engineering student at the University of
            Central Punjab and a full-stack developer focused on building modern
            web and mobile applications. I work across React, Next.js, React
            Native, Node.js, Express.js, MongoDB, REST APIs, and modern UI/UX.
            <br />
            <br />
            My experience includes personal products, academic systems, and real
            client projects — from business and healthcare websites to mobile
            applications and full-stack platforms. I enjoy taking an idea from
            requirements and interface design through development, API
            integration, database implementation, testing, and deployment.
            <br />
            <br />
            Currently, I’m completing my final year while continuing to work on
            real-world products and my Final Year Project, SafeZone — a smart
            emergency evacuation system combining web, mobile, IoT, and
            intelligent routing.
          </p>
        </div>
      </section>

      {/* Skills */}

      <section id="skills" className="py-24 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          <AnimatedTitle title="Skills & Technologies" />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 80,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.08,
                }}
                className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8 flex flex-col items-center justify-center hover:border-blue-500 hover:-translate-y-4 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] transition-all duration-300"
              >
                <div className="text-5xl text-blue-500 mb-5">{skill.icon}</div>

                <h3 className="text-xl font-semibold text-center">
                  {skill.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

     

      {/* Journey */}

      {/* Journey */}

      <section id="timeline" className="py-32 px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center">
            <AnimatedTitle title="My Journey" />
          </div>

          <div className="relative border-l border-blue-500/40 ml-6">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -80,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                className="mb-20 ml-10 relative"
              >
                <div className="absolute -left-[58px] top-2 w-10 h-10 rounded-full bg-blue-500 shadow-[0_0_30px_rgba(59,130,246,0.8)] flex items-center justify-center">
                  {item.icon}
                </div>

                <div className="bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-500">
                  <p className="text-blue-400 mb-3">{item.year}</p>

                  <h3 className="text-3xl font-bold mb-2">{item.title}</h3>

                  <h4 className="text-gray-400 mb-5">{item.company}</h4>

                  <p className="text-gray-400 leading-8">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}

      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <AnimatedTitle title="Contact Me" />

          <p className="text-gray-400 text-lg mb-20">
            Let’s connect and build amazing projects together.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.a
              href="mailto:hafizalbadar@gmail.com"
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              className="group bg-white/5 border border-gray-800 rounded-3xl p-10 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-all duration-500">
                <FaEnvelope className="text-4xl text-blue-500" />
              </div>

              <h3 className="text-2xl font-bold mb-4">Email</h3>

              <p className="text-gray-400">hafizalbadar@gmail.com</p>
            </motion.a>

            <motion.a
              href="https://wa.me/923008115288"
              target="_blank"
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              className="group bg-white/5 border border-gray-800 rounded-3xl p-10 hover:border-green-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.4)] transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-all duration-500">
                <FaWhatsapp className="text-4xl text-green-500" />
              </div>

              <h3 className="text-2xl font-bold mb-4">WhatsApp</h3>

              <p className="text-gray-400">03008115288</p>
            </motion.a>

            <motion.div
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
              className="group bg-white/5 border border-gray-800 rounded-3xl p-10 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all duration-500"
            >
              <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-8 group-hover:rotate-12 transition-all duration-500">
                <FaMapMarkerAlt className="text-4xl text-blue-500" />
              </div>

              <h3 className="text-2xl font-bold mb-4">Location</h3>

              <p className="text-gray-400">Lahore, Pakistan</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}

      <footer className="border-t border-gray-800 py-10 px-6 text-center relative z-10">
        <p className="text-gray-400">
          © {new Date().getFullYear()} Abdullah Badar. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
