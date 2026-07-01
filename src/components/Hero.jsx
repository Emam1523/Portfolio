import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight, FiCode, FiBriefcase, FiGitBranch} from 'react-icons/fi';

const stats = [
  { icon: <FiBriefcase />, value: '1+', label: 'Years Experience' },
  { icon: <FiCode />, value: '5+', label: 'Projects Delivered' },
  { icon: <FiGitBranch />, value: '8+', label: 'Technologies' },
];

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100dvh] flex items-center pt-16 sm:pt-20 pb-12 px-4 sm:px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <p className="text-blue-500 font-semibold tracking-widest uppercase text-xs sm:text-sm mb-3 sm:mb-4">
            Software Engineer & Full Stack Developer
          </p>

          <h1 className="text-[1.75rem] sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-blue-400 via-[#7ae2ff] to-blue-500 bg-clip-text text-transparent">
              Emam Hassan
            </span>
          </h1>

          <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-lg leading-relaxed">
            I build high-performance digital products with clean architecture,
            polished interfaces, and a relentless focus on user experience.
          </p>

          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8 sm:mb-10">
            <a
              href="#projects"
              className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 bg-blue-500 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105 transition-all text-xs sm:text-sm"
            >
              View Projects
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/assets/My_CV.pdf"
              download
              className="group flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 border border-gray-300 dark:border-white/20 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-white/5 hover:border-blue-500 transition-all text-xs sm:text-sm"
            >
              <FiDownload />
              Resume
            </a>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 pt-5 sm:pt-6 border-t border-gray-200 dark:border-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <div className="p-1.5 sm:p-2 rounded-lg bg-blue-500/10 text-blue-500">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-lg sm:text-xl font-bold leading-tight">{stat.value}</p>
                  <p className="text-[10px] sm:text-xs text-gray-500">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative justify-self-center order-1 md:order-2"
        >
          <div className="relative">
            <div className="w-40 h-44 sm:w-64 sm:h-72 md:w-72 md:h-80 bg-gradient-to-br from-blue-400 via-[#7ae2ff] to-purple-500 rounded-2xl p-1 rotate-2 hover:rotate-0 transition-transform duration-700 shadow-2xl shadow-blue-500/20">
              <img
                src="/assets/profile.jpg"
                alt="Emam Hassan"
                className="w-full h-full object-cover rounded-[1.3rem]"
              />
            </div>
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              className="absolute -bottom-3 -right-3 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white dark:bg-[#101723] border border-gray-200 dark:border-white/10 shadow-lg flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-medium"
            >
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-500" />
              Available for hire
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
