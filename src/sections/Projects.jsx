import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";

const projects = [
  {
    title: "Gen AI + Full Stack Web Development Project",
    description:
      "A real-world product where users can upload their resumes, analyze job descriptions, detect skill gaps, and generate AI-powered interview questions and ATS-optimized resumes.",
    image: "/projects/project3.jpeg",
    tags: ["React", "NodeJS", "JWT", "Gemini", "MongoDB"],
    link: "https://full-stack-gen-ai-weld.vercel.app",
    github: "https://github.com/Afsar2003/full-stack-gen-ai",
  },

  {
    title: "Personal Portfolio",
    description:
      "A responsive personal portfolio using ReactJS and TailwindCSS.",
    image: "/projects/project2.jpeg",
    tags: ["ReactJS", "TailwindCSS"],
    link: "https://personal-portfolio-coral-two-20.vercel.app",
    github: "https://github.com/Afsar2003/personal-portfolio",
  },

  {
    title: "Login Page UI",
    description:
      "A modern built a fully functional Login & Register Page UI from scratch using HTML, CSS, and JavaScript — no frameworks, just pure code. The UI features a custom cursor effect with a glowing particle trail that follows your mouse, and an animated dark theme with soft glowing orbs floating in the background, giving it a deep space aesthetic.",
    image: "/projects/project4.jpeg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://afsar2003.github.io/synent-task3-login-page-ui-afsar/",
    github: "https://github.com/Afsar2003/synent-task3-login-page-ui-afsar",
  },

  {
    title: "Woosh - A To Do Web App",
    description:
      "A fully functional task management app with a retro-futuristic terminal UI, add, complete, and delete tasks with smooth animations and live clock, efficiency progress bar & HUD stats",
    image: "/projects/project5.jpeg",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://afsar2003.github.io/synent-task5-todoapp-afsar/",
    github: "https://github.com/Afsar2003/synent-task5-todoapp-afsar",
  },
  /*
  {
    title: "Event Management System",
    description: "The system is done through Salesforce.",
    image: "/projects/project1.png",
    tags: ["Salesforce Admin", "Apex"],
    link: "#",
    github: "#",
  },

  {
    title: "IPL Score Predictor",
    description: "IPL Match Score",
    image: "/projects/project1.png",
    tags: ["Python", "MySQL"],
    link: "#",
    github: "#",
  },
  */
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            My recent works, from web applications to innovative tools that
            solve real-world problems.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                {/* Overlay Link */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <FaGithub className="w-5 h-5" />
                    </a>
                  }
                </div>
              </div>
              {/* Contents */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <a
            href="https://github.com/Afsar2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5 " />
            </AnimatedBorderButton>
          </a>
        </div>
      </div>
    </section>
  );
};
