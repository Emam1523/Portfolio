import { motion } from 'framer-motion';
import { FiMail, FiMessageCircle, FiMapPin, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    {
      icon: <FiMail className="text-red-500" />,
      label: "Email",
      value: "bsse1523@iit.du.ac.bd",
      href: "mailto:bsse1523@iit.du.ac.bd"
    },
    {
      icon: <FiMessageCircle className="text-green-500" />,
      label: "WhatsApp",
      value: "+8801307947274",
      href: "https://wa.me/8801307947274"
    },
    {
      icon: <FiLinkedin className="text-blue-600" />,
      label: "LinkedIn",
      value: "emam-hassan",
      href: "https://linkedin.com/in/emam-hassan-6131592a5"
    },
    {
      icon: <FiGithub className="text-gray-800 dark:text-gray-200" />,
      label: "GitHub",
      value: "Emam1523",
      href: "https://github.com/Emam1523"
    }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[1.5rem] sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Let's Build Something</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base mb-10 sm:mb-14 max-w-lg mx-auto">
            Open to internships, freelance collaborations, and product-minded teams.
            Reach out and let's make an impact together.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {contactInfo.map((item, index) => (
            <motion.a
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="p-4 sm:p-6 rounded-xl border border-gray-200 dark:border-white/5 bg-white dark:bg-[#101723]/40 hover:border-blue-500/50 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-300 flex flex-col items-center gap-2 sm:gap-3 group"
            >
              <div className="p-2 sm:p-3 rounded-lg bg-gray-100 dark:bg-white/5 group-hover:scale-110 group-hover:bg-blue-500/10 transition-all duration-300">
                {item.icon}
              </div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-400">{item.label}</span>
              <span className="text-[11px] sm:text-sm font-medium break-all">{item.value}</span>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 sm:mt-12 p-4 sm:p-5 rounded-xl bg-gray-50/50 dark:bg-white/[0.02] border border-gray-200 dark:border-white/5 inline-flex flex-col items-center gap-2 text-gray-500 mx-auto text-[11px] sm:text-xs"
        >
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
            <FiMapPin className="text-blue-500 shrink-0" />
            <span>Fazlul Haque Muslim Hall, University of Dhaka</span>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
            <FiPhone className="text-green-500 shrink-0" />
            <span>+8801307947274</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;