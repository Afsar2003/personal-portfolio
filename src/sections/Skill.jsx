import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaCuttlefish,
  FaDatabase,
  FaJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiTailwindcss,
  SiAngular,
  SiPostman,
  SiCplusplus,
} from "react-icons/si";

import { useRef } from "react";

const skills = [
  { name: "API Testing", icon: <SiPostman /> },
  { name: "JWT", icon: <FaJs /> },
  { name: "Node.js", icon: <FaNodeJs /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "Web Development", icon: <FaJs /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "React Native", icon: <FaReact /> },
  { name: "AngularJS", icon: <SiAngular /> },
  { name: "Angular CLI", icon: <SiAngular /> },
  { name: "Apex Programming", icon: <FaDatabase /> },
  { name: "React.js", icon: <FaReact /> },
  { name: "Java", icon: <FaJava /> },
  { name: "C", icon: <FaCuttlefish /> },
  { name: "C++", icon: <SiCplusplus /> },
  { name: "Python", icon: <FaPython /> },
  { name: "SQL", icon: <FaDatabase /> },
  { name: "Javascript", icon: <FaJs /> },
  { name: "Postman", icon: <SiPostman /> },
];

export const Skill = () => {
  const cardRefs = useRef([]);

  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 12;
    const rotateY = (x / rect.width - 0.5) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const resetTilt = (index) => {
    const card = cardRefs.current[index];
    if (!card) return;
    card.style.transform = "rotateX(0) rotateY(0) scale(1)";
  };

  return (
    <section id="skill" className="py-32 relative overflow-hidden scroll-mt-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-muted-foreground">
            Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-secondary-foreground mt-4">
            Technical{" "}
            <span className="italic font-serif text-white">Expertise.</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {skills.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => resetTilt(index)}
              className="group relative flex flex-col items-center justify-center p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md cursor-pointer transition duration-300 active:scale-95"
              style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
              }}
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition" />

              {/* Icon */}
              <div className="text-4xl text-primary mb-4 transform group-hover:scale-110 transition">
                {item.icon}
              </div>

              {/* Name */}
              <p className="text-sm text-center text-secondary-foreground">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
