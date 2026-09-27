import { MotionConfig } from 'framer-motion';
import { ThemeProvider } from '@/context/ThemeContext';
import { useTheme } from '@/hooks/useTheme';
import { IconButton } from '@/components/ui/IconButton';
import { FloatingDock, type DockItem } from '@/components/layout/FloatingDock';
import { LoadingScreen } from '@/components/layout/LoadingScreen';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';
import { Design } from '@/components/sections/Design';
import { Experience } from '@/components/sections/Experience';
import { Certificates } from '@/components/sections/Certificates';
import { Contact } from '@/components/sections/Contact';
import { Home, User, FolderGit2, Briefcase, Award, Mail, Moon, Sun, Palette } from 'lucide-react';

const AppContent = () => {
  const { isDark, toggleTheme } = useTheme();

  const navItems: DockItem[] = [
    { title: 'Home', icon: <Home size={20} />, href: '#hero' },
    { title: 'About', icon: <User size={20} />, href: '#about' },
    { title: 'Projects', icon: <FolderGit2 size={20} />, href: '#projects' },
    { title: 'Design', icon: <Palette size={20} />, href: '#design' },
    { title: 'Experience', icon: <Briefcase size={20} />, href: '#experience' },
    { title: 'Certificates', icon: <Award size={20} />, href: '#certificates' },
    { title: 'Contact', icon: <Mail size={20} />, href: '#contact' },
  ];

  const themeToggleButton = (
    <IconButton onClick={toggleTheme} aria-label="Toggle theme" className="p-2 sm:p-2.5 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-900">
      {isDark ? <Sun size={18} className="sm:w-5 sm:h-5" /> : <Moon size={18} className="sm:w-5 sm:h-5" />}
    </IconButton>
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
      </div>
    </LoadingScreen>
  );
};

function App() {
  return (
    <ThemeProvider>
      {/* Makes every motion component below respect the OS's
          prefers-reduced-motion setting automatically (Phase 1, Task 03) —
          no per-component reduced-motion checks needed for the shared
          reveal system. Hero's OrbitingIcons has its own explicit check
          instead, since its keyframes aren't safe to auto-strip (see
          Hero.tsx). No effect at all when the OS doesn't request reduced
          motion — normal animation is unchanged. */}
      <MotionConfig reducedMotion="user">
        <AppContent />
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
