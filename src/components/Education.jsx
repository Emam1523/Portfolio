import { motion } from "framer-motion";
import { FaGraduationCap, FaBookOpen } from "react-icons/fa6";
import { LuScrollText } from "react-icons/lu";

const eduData = [
  {
    icon: <FaGraduationCap className="text-blue-500" />,
    degree: "B.Sc. in Software Engineering",
    school: "Institute of Information Technology, University of Dhaka",
    session: "2022 - Present",
    details:
      "Concentration: Focusing on Software Architecture, Algorithms and Full Stack Development",
  },
  {
    icon: <FaBookOpen className="text-purple-500" />,
    degree: "Higher Secondary Certificate (HSC)",
    school: "Government Rajendra College,\n Faridpur",
    session: "2020 - 2021",
    details: "Concentration: Science | GPA: 5.00",
  },
  {
    icon: <LuScrollText className="text-green-500" />,
    degree: "Secondary School Certificate (SSC)",
    school: "Faridpur High School,\n Faridpur",
    session: "2018 - 2019",
    details: "Concentration: Science | GPA: 5.00",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-14 text-center"
        >
          <h2 className="text-[1.5rem] sm:text-4xl md:text-5xl font-bold">
            Academic Background
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {eduData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="p-5 sm:p-8 rounded-2xl bg-white dark:bg-[#101723]/40 border border-gray-200 dark:border-white/5 shadow-lg shadow-black/5 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
            >
              <div className="mb-4 sm:mb-5 p-2.5 sm:p-3 bg-gray-100 dark:bg-white/5 rounded-xl w-fit">
                {edu.icon}
              </div>
              <h3 className="text-base sm:text-lg font-bold mb-2 leading-snug">
                {edu.degree}
              </h3>
              <p className="text-blue-500 text-xs sm:text-sm font-semibold mb-2 sm:mb-3">
                {edu.school.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
              <p className="text-gray-400 text-[10px] sm:text-xs uppercase tracking-widest mb-3 sm:mb-4 font-medium">
                {edu.session}
              </p>
              <div className="h-px bg-gray-200 dark:bg-white/5 mb-3 sm:mb-4" />
              <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm leading-relaxed">
                {edu.details}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
