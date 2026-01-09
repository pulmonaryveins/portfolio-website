import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { ProjectModal } from '../ui/ProjectModal';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Lamoy – Food Ordering System",
      category: "Development",
      description: "An intuitive platform for browsing and ordering authentic local Filipino dishes with modern design.",
      fullDescription: "Lamoy is a comprehensive food ordering system designed to bring Filipino cuisine to customers through an intuitive digital platform. As UI/UX Designer & Frontend Developer, I created user-friendly interfaces and implemented responsive frontend components using modern web technologies. The platform features seamless order management, real-time menu updates, and an optimized user experience focused on making Filipino food accessible and easy to order.",
      image: "/images/projects/lamoy-1.jpg",
      images: [
        "/images/projects/lamoy-1.jpg",
        "/images/projects/lamoy-2.jpg",
        "/images/projects/lamoy-3.jpg"
      ],
      technologies: ["React", "Tailwind CSS", "NeonDB", "ASP.NET", "Figma"],
      features: [
        "Browse and search local Filipino dishes",
        "Real-time order tracking and management",
        "Responsive design for mobile and desktop",
        "User authentication and profile management",
        "Shopping cart with order customization",
        "Admin dashboard for menu and order management",
        "Optimized frontend performance"
      ],
      github: "https://github.com/yourusername/lamoy",
      demo: "https://lamoy-demo.example.com"
    },
    {
      title: "OrgaFlow – Event Management System",
      category: "Development",
      description: "Integrated platform for event planning and management designed for student organizations.",
      fullDescription: "OrgaFlow is a comprehensive event management system developed as a capstone project to streamline event coordination in student organizations. As UI/UX Designer & Frontend Developer, I designed clean, interactive interfaces that simplify event planning, task tracking, and team communication. The platform integrates all aspects of event management into one cohesive system, making it easier for student organizations to plan, execute, and track their events efficiently.",
      image: "/images/projects/orgaflow-1.jpg",
      images: [
        "/images/projects/orgaflow-1.jpg",
        "/images/projects/orgaflow-2.jpg",
        "/images/projects/orgaflow-3.jpg"
      ],
      technologies: ["Laravel", "MySQL", "Tailwind CSS", "Blaze", "Figma"],
      features: [
        "Event creation and scheduling",
        "Task assignment and tracking system",
        "Team collaboration and communication tools",
        "Budget management and expense tracking",
        "Attendance tracking and registration",
        "Calendar integration and notifications",
        "Role-based access control",
        "Analytics and reporting dashboard"
      ],
      github: "https://github.com/yourusername/orgaflow",
      demo: "https://orgaflow-demo.example.com"
    },
    {
      title: "OJT Tracker – Mobile Application",
      category: "Development",
      description: "Personal project to track student internship hours and generate exportable reports efficiently.",
      fullDescription: "OJT Tracker is a mobile application designed to help students accurately track their internship hours and maintain comprehensive records. This personal project focuses on solving the common problem of manual hour tracking by providing a user-friendly mobile interface for easy logging and management of internship data. The app includes features for generating exportable reports, making it simple for students to submit their required documentation while improving efficiency and accuracy in record-keeping.",
      image: "/images/projects/ojt-tracker-1.jpg",
      images: [
        "/images/projects/ojt-tracker-1.jpg",
        "/images/projects/ojt-tracker-2.jpg"
      ],
      technologies: ["React Native", "TypeScript", "Tailwind CSS", "Supabase"],
      features: [
        "Quick and easy internship hour logging",
        "Daily, weekly, and monthly time tracking",
        "Automatic calculation of total hours",
        "Exportable reports in multiple formats (PDF, CSV)",
        "Activity and task documentation",
        "Calendar view of logged hours",
        "Offline mode with sync capability",
        "Data backup and cloud storage"
      ],
      github: "https://github.com/yourusername/ojt-tracker",
      demo: "https://ojt-tracker-demo.example.com"
    },
    {
      title: "Brand Identity Design",
      category: "Design",
      description: "Complete brand identity design including logo, color palette, and style guide for a tech startup.",
      fullDescription: "A comprehensive brand identity project for a technology startup. This project includes logo design, color palette selection, typography system, and a complete brand style guide. The design emphasizes modern aesthetics while maintaining professional credibility.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop"
      ],
      technologies: ["Figma", "Adobe Illustrator", "Adobe Photoshop"],
      features: [
        "Modern logo design with multiple variations",
        "Comprehensive color palette",
        "Typography system and font pairing",
        "Complete brand style guide",
        "Business card and stationery design",
        "Social media templates"
      ],
      demo: "https://demo.example.com"
    },
    {
      title: "Mobile App UI/UX",
      category: "Design",
      description: "User interface and experience design for a fitness tracking mobile application.",
      fullDescription: "A complete UI/UX design project for a fitness tracking mobile app. The design focuses on user engagement, intuitive navigation, and data visualization. Includes wireframes, high-fidelity mockups, interactive prototypes, and a comprehensive design system.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop"
      ],
      technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
      features: [
        "User research and persona development",
        "Wireframes and user flow diagrams",
        "High-fidelity mockups for iOS and Android",
        "Interactive prototypes",
        "Component-based design system",
        "Accessibility considerations"
      ],
      demo: "https://demo.example.com"
    },
    {
      title: "Portfolio Website Design",
      category: "Design",
      description: "Modern portfolio website design with focus on minimalism and user experience.",
      fullDescription: "A sleek and minimal portfolio website design created for a creative professional. The design emphasizes clean aesthetics, smooth animations, and an intuitive user experience. Includes multiple page layouts, responsive design considerations, and an interactive prototype.",
      image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
      images: [
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop"
      ],
      technologies: ["Figma", "Adobe XD", "ProtoPie"],
      features: [
        "Minimalist design approach",
        "Smooth scroll animations",
        "Project showcase with lightbox",
        "Contact form with validation",
        "Dark/light theme toggle",
        "Fully responsive layouts"
      ],
      demo: "https://demo.example.com"
    }
  ].filter(project => project.category === 'Development');

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Development Projects</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              layout
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-black/80 dark:bg-white/80 text-white dark:text-black rounded-full backdrop-blur-sm">
                    {project.category}
                  </span>
                </div>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    View Details
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 text-sm text-gray-500 dark:text-gray-500">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-3 text-sm">
                  {project.github && (
                    <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Github size={16} />
                      GitHub
                    </span>
                  )}
                  {project.demo && (
                    <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <ExternalLink size={16} />
                      Live Demo
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Project Modal */}
        <ProjectModal 
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={closeModal}
        />
      </div>
    </section>
  );
};
