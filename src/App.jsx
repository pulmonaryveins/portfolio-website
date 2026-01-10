import { ThemeProvider } from './context/ThemeContext';
import { FloatingDock } from './components/ui/FloatingDock';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Design } from './components/sections/Design';
import { Experience } from './components/sections/Experience';
import { Certificates } from './components/sections/Certificates';
import { Contact } from './components/sections/Contact';
import { Footer } from './components/sections/Footer';
import { Home, User, FolderGit2, Briefcase, Award, Mail, Moon, Sun, Palette } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 p-3 sm:p-3.5 bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 rounded-full hover:border-black dark:hover:border-white hover:shadow-xl transition-all shadow-lg hover:scale-110 active:scale-95"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
};

const AppContent = () => {
  const { isDark, toggleTheme } = useTheme();
  
  const navItems = [
    { title: "Home", icon: <Home size={20} />, href: "#hero" },
    { title: "About", icon: <User size={20} />, href: "#about" },
    { title: "Projects", icon: <FolderGit2 size={20} />, href: "#projects" },
    { title: "Design", icon: <Palette size={20} />, href: "#design" },
    { title: "Experience", icon: <Briefcase size={20} />, href: "#experience" },
    { title: "Certificates", icon: <Award size={20} />, href: "#certificates" },
    { title: "Contact", icon: <Mail size={20} />, href: "#contact" }
  ];

  const themeToggleButton = (
    <button
      onClick={toggleTheme}
      className="p-2 sm:p-2.5 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900 rounded-full transition-all hover:scale-110 active:scale-95"
      aria-label="Toggle theme"
    >
      {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
    </button>
  );

  return (
    <LoadingScreen>
      <div className="min-h-screen">
        <FloatingDock items={navItems} themeToggle={themeToggleButton} />
        <Hero />
        <About />
        <Projects />
        <Design />
        <Experience />
        <Certificates />
        <Contact />
        <Footer />
        <ThemeToggle />
      </div>
    </LoadingScreen>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
