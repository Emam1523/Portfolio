import { motion } from "framer-motion";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    title: "VitaBridge – Online Health Care Platform",
    desc: "A digital healthcare platform connecting doctors and patients. Features AI symptom checking, telemedicine, and OCR medical data extraction.",
    tags: ["React", "Spring Boot", "Django"],
    link: "https://github.com/Emam1523/VitaBridge",
    image: "/assets/vitabridge.jpg",
  },
  {
    title: "Incepta Ramadan Timing",
    desc: "Official application for Incepta Pharmaceuticals featuring real-time location-based schedules and PDF calendars.",
    tags: ["JavaScript", "HTML", "CSS"],
    image: "/assets/incepta.jpg",
  },
  {
    title: "NewsPortal — News Manager",
    desc: "A responsive React app for creating and browsing news with user authentication and protected routes.",
    tags: ["React", "Spring Boot"],
    link: "https://github.com/Emam1523/NewsApp",
    image: "/assets/news_app.webp",
  },
  {
    title: "BCO Admit Card Generator",
    desc: "Spring Boot app that automates student admit card generation (PDF) and batch emailing via SMTP.",
    tags: ["Java", "Spring Boot", "SMTP"],
    image: "/assets/bco.jpg",
  },
  {
    title: "Saiful Store — E-commerce",
    desc: "Responsive React + Vite SPA for product browsing, cart UI, and checkout flow using Context API.",
    tags: ["React", "Vite"],
    image: "/assets/ecommerce.webp",
  },
  {
    title: "PharmaQR-Portal",
    desc: "Web app for managing pharmaceutical files via QR-linked folders with secure passcode access.",
    tags: ["React", "Node.js", "PostgreSQL"],
    image: "/assets/PharmaQR.avif",
  },
  {
    title: "Prediction Electric Bill",
    desc: "A machine learning model that predicts electricity bills based on historical data and usage patterns.",
    tags: ["Django", "Naive Bayes"],
    link: "https://github.com/Emam1523/Bill-Prediction-Model",
    image: "/assets/Bill_predict.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-12 text-center"
        >
          <h2 className="text-[1.5rem] sm:text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mt-2 sm:mt-3 max-w-md mx-auto">
            Real-world applications I've designed, built, and shipped.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white dark:bg-[#101723]/40 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-blue-500/40 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-blue-500/5"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-medium text-white bg-blue-500/80 backdrop-blur-sm px-3 py-1.5 rounded-lg hover:bg-blue-500 transition-colors inline-flex items-center gap-1.5"
                    >
                      <FiGithub size={12} />
                      Source Code
                    </a>
                  )}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-bold mb-2 leading-snug text-sm">
                  {project.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed mb-3 line-clamp-2">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
