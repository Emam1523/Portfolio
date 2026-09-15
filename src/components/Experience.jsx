import { motion } from 'framer-motion';
import TechGlobe from './TechGlobe';

const experiences = [
  {
    company: "LEADS Corporation Ltd. (BD)",
    role: "Intern Software Engineer",
    duration: "May 2026 - Present",
    desc: "Working on RTGS, NSPB, EFT (Banking Transaction Systems) Dynamic flow management software."
  },
  {
    company: "soft360d",
    role: "Part-time Software Engineer",
    duration: "November 2025 - Present",
    desc: "Developing and maintaining various web applications and client solutions.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 text-center"
        >
          <h2 className="text-[1.5rem] sm:text-4xl md:text-5xl font-bold">Work Experience</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid items-center gap-8 rounded-2xl border border-gray-200 bg-white/60 p-5 shadow-lg shadow-black/5 dark:border-white/5 dark:bg-[#101723]/30 sm:p-8 lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.9fr)] lg:gap-12"
        >
          <div className="relative space-y-6 sm:space-y-8 before:absolute before:left-[15px] sm:before:left-[19px] before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-white/10">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative pl-10 sm:pl-14"
              >
                <div className="absolute left-[7px] top-2 h-3 w-3 rounded-full border-4 border-white bg-blue-500 shadow-sm dark:border-[#060910] sm:left-3" />

                <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg shadow-black/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/5 dark:border-white/5 dark:bg-[#101723]/40 sm:p-6">
                  <div className="mb-3 flex flex-col gap-2 sm:mb-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-blue-500 sm:text-xl">{exp.role}</h3>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-200 sm:text-base">{exp.company}</p>
                    </div>
                    <span className="self-start whitespace-nowrap rounded-full bg-blue-100 px-2.5 py-1 text-[10px] font-medium text-blue-600 dark:bg-blue-500/10 dark:text-blue-300 sm:px-3 sm:text-xs">
                      {exp.duration}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed text-gray-600 dark:text-gray-400 sm:text-sm">{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative flex min-h-[390px] flex-col items-center justify-center border-t border-gray-200 pt-8 dark:border-white/10 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <div className="text-center">
            <h3 className="mt-2 text-xl font-bold sm:text-2xl">Tools I Work With</h3>
          </div>
          <TechGlobe />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;