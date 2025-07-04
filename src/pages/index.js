import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { myWorks, clientWorks } from "../lib/projects";
import Navbar from "../components/Navbar";
import EducationTimeline from "@/components/EducationTimeLine";


export default function Home() {
  const [selected, setSelected] = useState("mine");

  return (
    <main className="bg-zinc-900 text-white font-sans scroll-smooth">

      <Navbar />
      {/* Hero */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm Kritika 👩‍💻</h1>
        <p className="text-lg text-gray-300">Full-stack Developer & Security Enthusiast</p>
        <a href="#about" className="mt-6 inline-block bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition">Explore ↓</a>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300">
          I’m a full-stack developer focused on building secure and scalable applications.
          I love simulating real-world workflows and crafting dev tools.
          I'm a super introvert nurtured in a small state Haryana, India,
          passionate about building impactful products that leverage technology to make a difference.
          I often share my work to contribute to the community.
          In addition to my development work, I'm always exploring new ideas, particularly in areas like machine learning.
        </p>
      </section>



      {/* Projects */}
      <section id="projects" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Projects</h2>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="relative inline-flex bg-zinc-800 border border-white/10 rounded-full p-1">
            <div
              className={`absolute top-1 left-1 h-8 w-28 bg-white rounded-full transition-all duration-300 ${selected === "clients" ? "translate-x-full" : "translate-x-0"
                }`}
            />
            <button
              onClick={() => setSelected("mine")}
              className={`relative z-10 w-28 h-8 text-sm font-medium rounded-full transition-colors ${selected === "mine" ? "text-black" : "text-white"
                }`}
            >
              My Works
            </button>
            <button
              onClick={() => setSelected("clients")}
              className={`relative z-10 w-28 h-8 text-sm font-medium rounded-full transition-colors ${selected === "clients" ? "text-black" : "text-white"
                }`}
            >
              Client Works
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">
          {(selected === "mine" ? myWorks : clientWorks).map((project, i) => (
            <ProjectCard key={i} {...project} />
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-6 max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300">
          I’m a full-stack developer focused on building secure and scalable applications. I love simulating real-world financial workflows and crafting dev tools.
        </p>
        <EducationTimeline />
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-gray-300 mb-4">kritikavermasiren@gmail.com</p>
        <a
          href="mailto:kritikavermasiren@gmail.com"
          className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition"
        >
          Email Me
        </a>
      </section>
    </main>
  );
}
