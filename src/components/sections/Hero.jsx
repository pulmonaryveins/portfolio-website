import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Hi, I'm <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">Vince Bryant</span>
          </h1>
          <h2 className="text-1xl sm:text-1xl lg:text-3xl font-medium mb-6 text-gray-700 dark:text-gray-300">
            UI/UX Designer & Frontend Developer
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          Turning complex ideas into clean, functional, and intuitive digital experiences.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="#contact"
            className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium hover:opacity-80 transition-opacity"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            download
            className="px-8 py-3 border-2 border-black dark:border-white text-black dark:text-white rounded-lg font-medium hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-6 justify-center"
        >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:opacity-60 transition-opacity"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black dark:text-white hover:opacity-60 transition-opacity"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:your.email@example.com"
            className="text-black dark:text-white hover:opacity-60 transition-opacity"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
