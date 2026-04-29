import { Navbar } from "@/layout/Navbar";
import SplashCursor from "@/components/SplashCursor";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";
import { Experiences } from "@/sections/Experiences";
import { Achievements } from "@/sections/Achievements";
import { Certificates } from "@/sections/Certificates";
import { Skill } from "@/sections/Skill";

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SplashCursor />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experiences />
        <Achievements />
        <Certificates />
        <Skill />
        <Contact />
      </main>
    </div>
  );
}

export default App;
