"use client";
import { useAppContext } from "@/context/AppContext";
import { Code, LayoutDashboard, Rocket, Link as LinkIcon } from "lucide-react";

const projects = [
  {
    name: "Game Website",
    link: "https://gamify-io-suraj.vercel.app/",
    achievements: [
      "Developed a fully responsive gaming website with smooth animations.",
      "Built with Next.js, Tailwind CSS, and Framer Motion.",
      "Optimized for SEO, performance, and user experience.",
    ],
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    name: "Freelancing Gigs Platform",
    link: "https://jobifyio.vercel.app/",
    achievements: [
      "Developed a freelancing marketplace for students.",
      "Integrated authentication, payments, and chat functionality.",
      "Created an intuitive UI with a dashboard.",
    ],
    technologies: ["Next.js", "TypeScript", "Supabase", "ShadCN UI"],
  },
  {
    name: "AI Resume Builder",
    link: "https://ai-resumebuilderr.vercel.app/",
    achievements: [
      "Built an AI-powered resume generator using OpenAI’s API.",
      "Formatted resumes to be ATS-friendly.",
      "Added a real-time preview and downloadable PDF feature.",
    ],
    technologies: ["React", "Tailwind CSS", "OpenAI API", "Vercel"],
  },
];

export default function ExperienceDetails() {
  const { swiper } = useAppContext() || { swiper: null };

  return (
    <div className="p-6 bg-gradient-to-r from-gray-900 to-black backdrop-blur-md rounded-2xl w-full text-white h-[70vh] w-[350px] sm:w-[500px] md:w-[800px] lg:w-[1000px] overflow-y-auto scroll-smooth scrollbar-thin scrollbar-thumb-cyan-500 scrollbar-track-gray-800">
      {/* Header */}
      <div className="border-b border-cyan-500 pb-4 flex items-center gap-4">
        <div className="p-3 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-sm">
          <Rocket className="text-cyan-400 w-8 h-8" />
        </div>
        <div>
          <h1 className="md:text-3xl text-2xl font-bold">
            My Journey as a Frontend Developer 🚀
          </h1>
          <p className="text-sm text-gray-400">
            Crafting sleek & interactive web experiences.
          </p>
        </div>
      </div>

      {/* What I Bring to the Table */}
      <div className="mt-4 p-4 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold flex items-center gap-2 text-cyan-400">
          <LayoutDashboard className="text-cyan-400 w-6 h-6" />
          What I Bring to the Table 🛠️
        </h2>
        <ul className="mt-2 text-gray-300 list-disc pl-5">
          <li>💡 Passion for UI/UX and creating pixel-perfect designs.</li>
          <li>⚡ Strong knowledge of React, Next.js, and modern frontend tools.</li>
          <li>🚀 Always eager to learn and improve.</li>
        </ul>
      </div>

      {/* Featured Projects */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b border-cyan-500 pb-2 text-cyan-400">
          Featured Projects
        </h2>
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gradient-to-r from-gray-800 to-gray-900 shadow-lg border border-gray-700 p-4 rounded-md mt-4"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-bold text-cyan-400 hover:underline flex items-center gap-2"
            >
              {project.name}
              <LinkIcon className="text-cyan-400 w-4 h-4" />
            </a>

            <ul className="mt-2 text-gray-300 list-disc pl-5">
              {project.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ul>

            {/* Display Technologies */}
            <div className="flex gap-2 flex-wrap mt-3">
              {project.technologies?.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm text-gray-300 px-2 py-1 rounded-md bg-gray-700 border border-gray-600"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}