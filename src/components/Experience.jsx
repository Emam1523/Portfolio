import { motion } from 'framer-motion';

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
    duration: "2024 - Present",
    desc: "Developing and maintaining various web applications and client solutions.",
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-16 px-4 sm:px-6 bg-gray-50/50 dark:bg-white/[0.02]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 text-center"
        >
          <h2 className="text-[1.5rem] sm:text-4xl md:text-5xl font-bold">Work Experience</h2>
        </motion.div>

        <div className="relative space-y-6 sm:space-y-8 before:absolute before:left-[15px] sm:before:left-[19px] before:top-0 before:bottom-0 before:w-0.5 before:bg-gray-200 dark:before:bg-white/10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative pl-10 sm:pl-14"
            >
              {/* Timeline dot */}
              <div className="absolute left-[7px] sm:left-3 top-2 w-3 h-3 rounded-full bg-blue-500 border-4 border-white dark:border-[#060910] shadow-sm" />

              <div className="p-4 sm:p-6 rounded-2xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#101723]/40 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-0.5 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-3 sm:mb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-blue-500">{exp.role}</h3>
                    <p className="text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200">{exp.company}</p>
                  </div>
                  <span className="text-[10px] sm:text-xs font-medium px-2.5 sm:px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-300 whitespace-nowrap self-start">
                    {exp.duration}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;