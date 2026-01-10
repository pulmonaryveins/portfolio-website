import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { SiFigma, SiAdobephotoshop, SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiTailwindcss, SiGithub} from 'react-icons/si';

const OrbitingIcons = () => {
  const floatingIcons = [
    { Icon: SiFigma, color: '#F24E1E', top: '15%', left: '10%', delay: 0, duration: 20, hideOnMobile: false },
    { Icon: SiReact, color: '#61DAFB', top: '25%', left: '85%', delay: 2, duration: 25, hideOnMobile: false },
    { Icon: SiJavascript, color: '#F7DF1E', top: '70%', left: '12%', delay: 4, duration: 22, hideOnMobile: true },
    { Icon: SiTailwindcss, color: '#06B6D4', top: '80%', left: '80%', delay: 1, duration: 28, hideOnMobile: true },
    { Icon: SiAdobephotoshop, color: '#31A8FF', top: '35%', left: '5%', delay: 3, duration: 24, hideOnMobile: false },
    { Icon: SiHtml5, color: '#E34F26', top: '60%', left: '88%', delay: 5, duration: 26, hideOnMobile: false },
    { Icon: SiCss3, color: '#1572B6', top: '10%', left: '75%', delay: 2.5, duration: 23, hideOnMobile: true },
    { Icon: SiGithub, color: '#ffffff', top: '85%', left: '50%', delay: 4.5, duration: 27, hideOnMobile: true },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Floating Icons Scattered Around */}
      {floatingIcons.map(({ Icon, color, top, left, delay, duration, hideOnMobile }, index) => (
        <motion.div
          key={index}
          className={`absolute w-10 h-10 md:w-16 md:h-16 flex items-center justify-center rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10 ${hideOnMobile ? 'hidden md:flex' : ''}`}
          style={{ top, left }}
          initial={{ opacity: 0, scale: 0, y: 0 }}
          animate={{ 
            opacity: [0.3, 0.7, 0.3],
            scale: [0.9, 1.1, 0.9],
            y: [0, -30, 0],
          }}
          transition={{
            opacity: { duration: 4, repeat: Infinity, delay },
            scale: { duration: 4, repeat: Infinity, delay },
            y: { duration, repeat: Infinity, delay, ease: "easeInOut" },
          }}
        >
          <Icon size={28} className="md:w-8 md:h-8" style={{ color }} />
        </motion.div>
      ))}

      {/* Additional Icons for Better Fill */}
      <motion.div
        className="absolute w-10 h-10 md:w-12 md:h-12 hidden md:flex items-center justify-center rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10"
        style={{ top: '45%', left: '92%' }}
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          scale: [0.9, 1.1, 0.9],
          x: [0, -20, 0],
        }}
        transition={{
          opacity: { duration: 4, repeat: Infinity, delay: 1.5 },
          scale: { duration: 4, repeat: Infinity, delay: 1.5 },
          x: { duration: 25, repeat: Infinity, delay: 1.5, ease: "easeInOut" },
        }}
      >
        <SiFigma size={24} style={{ color: '#F24E1E' }} />
      </motion.div>

      <motion.div
        className="absolute w-10 h-10 md:w-12 md:h-12 hidden md:flex items-center justify-center rounded-xl bg-white/5 dark:bg-white/5 backdrop-blur-sm border border-white/10"
        style={{ top: '50%', left: '3%' }}
        animate={{ 
          opacity: [0.3, 0.7, 0.3],
          scale: [0.9, 1.1, 0.9],
          y: [0, 30, 0],
        }}
        transition={{
          opacity: { duration: 4, repeat: Infinity, delay: 3 },
          scale: { duration: 4, repeat: Infinity, delay: 3 },
          y: { duration: 24, repeat: Infinity, delay: 3, ease: "easeInOut" },
        }}
      >
        <SiReact size={24} style={{ color: '#61DAFB' }} />
      </motion.div>

      {/* Gradient Accents */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-500/10 via-pink-500/10 to-transparent rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-br from-violet-500/10 to-transparent rounded-full blur-3xl" />
    </div>
  );
};

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <OrbitingIcons />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight px-2">
            Hi, I'm <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Vince Bryant</span>
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-300 px-2">
            UI/UX Designer & Frontend Developer
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto px-4">
          Turning complex ideas into clean, functional, and intuitive digital experiences.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-3 sm:gap-4 justify-center mb-12 px-4"
        >
          <a
            href="#contact"
            className="px-6 sm:px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 transition-opacity text-sm sm:text-base min-h-[44px] flex items-center"
          >
            Get in Touch
          </a>
          <a
            href="/public/CABUNILAS-RESUME.pdf"
            download
            className="px-6 sm:px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-2 text-sm sm:text-base min-h-[44px]"
          >
            <Download size={20} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4 sm:gap-6 justify-center px-4"
        >
          <a
            href="https://github.com/pulmonaryveins"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:opacity-60 transition-opacity p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="GitHub"
          >
            <Github size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/vince-bryant-cabunilas-366704346/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:opacity-60 transition-opacity p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-black dark:text-white hover:opacity-60 transition-opacity p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Email"
          >
            <Mail size={24} className="w-5 h-5 sm:w-6 sm:h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
