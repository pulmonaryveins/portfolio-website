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
      image: "/images/projects/1.png",
      images: [
        "/images/projects/6.png",
        "/images/projects/7.png",
        "/images/projects/8.png",
        "/images/projects/9.png",
        "/images/projects/10.png",
        "/images/projects/11.png",
        "/images/projects/12.png",
        "/images/projects/13.png",
        "/images/projects/14.png",
        "/images/projects/15.png",
        "/images/projects/16.png",
        "/images/projects/17.png",
        "/images/projects/18.png",
        "/images/projects/19.png",
        "/images/projects/20.png",
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
      github: "https://github.com/CryoYohan/Lamoy-Simple-Food-Ordering-System",
      demo: ""
    },
    {
      title: "OrgaFlow – Event Management System",
      category: "Development",
      description: "Integrated platform for event planning and management designed for student organizations.",
      fullDescription: "OrgaFlow is a comprehensive event management system developed as a capstone project to streamline event coordination in student organizations. As UI/UX Designer & Frontend Developer, I designed clean, interactive interfaces that simplify event planning, task tracking, and team communication. The platform integrates all aspects of event management into one cohesive system, making it easier for student organizations to plan, execute, and track their events efficiently.",
      image: "/images/projects/2.png",
      images: [
        "/images/projects/2.png"
        
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
      github: "https://github.com/Just-tine-44/orgaflow",
      demo: ""
    },
    {
      title: "OJT Tracker – Mobile Application",
      category: "Development",
      description: "Personal project to track student internship hours and generate exportable reports efficiently.",
      fullDescription: "OJT Tracker is a mobile application designed to help students accurately track their internship hours and maintain comprehensive records. This personal project focuses on solving the common problem of manual hour tracking by providing a user-friendly mobile interface for easy logging and management of internship data. The app includes features for generating exportable reports, making it simple for students to submit their required documentation while improving efficiency and accuracy in record-keeping.",
      image: "/images/projects/3.png",
      images: [
        "/images/projects/4.png",
         "/images/projects/5.png"
        
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
      github: "https://github.com/pulmonaryveins/ojt-tracker-mobile",
      demo: ""
    },
    {
      title: "Neighborly – Homeowners Management System",
      category: "Development",
      description: "Comprehensive community management platform for homeowners associations with centralized services.",
      fullDescription: "Neighborly is a full-featured homeowners association management system built with ASP.NET that centralizes all community operations into one unified platform. As one of the Full-Stack Developer, we designed and implemented a multi-role system serving homeowners, administrators, and staff members with role-based access control. The platform streamlines amenity bookings, service requests, community communication, and association management, creating a seamless digital hub for residential communities. With features ranging from announcement broadcasting to community polling, Neighborly transforms traditional homeowners association management into a modern, efficient, and engaging experience.",
      image: "/images/projects/24.png",
      images: [
        "/images/projects/24.png",
        "/images/projects/25.png",
        "/images/projects/26.png",
        "/images/projects/27.png",
        "/images/projects/28.png",
        "/images/projects/29.png",
        "/images/projects/30.png",
        "/images/projects/31.png",
        "/images/projects/32.png",
        "/images/projects/33.png",
        "/images/projects/34.png",
        "/images/projects/35.png",
        "/images/projects/36.png",
        "/images/projects/37.png",
        "/images/projects/38.png",
        "/images/projects/39.png",
        "/images/projects/40.png",
        "/images/projects/41.png",
        "/images/projects/42.png",
        "/images/projects/43.png",
        "/images/projects/44.png",
        "/images/projects/45.png",
        "/images/projects/46.png",
        "/images/projects/47.png",
        "/images/projects/48.png",
        "/images/projects/49.png",
        "/images/projects/50.png",
        "/images/projects/51.png",
        "/images/projects/52.png",
        "/images/projects/53.png",
        "/images/projects/54.png"

      ],
      technologies: ["ASP.NET", "C#", "MSSQL", "Bootstrap", "JavaScript"],
      features: [
        "Amenity booking and reservation system",
        "Service request management and tracking",
        "Centralized announcement board for staff/admin",
        "Community forum for resident discussions",
        "Interactive calendar for events and bookings",
        "Polling system to gather homeowner feedback",
        "Three-tier user system (Homeowners, Staff, Admin)",
        "Role-based access control with varying permissions",
        "Real-time notifications and updates",
        "Payment tracking and association fee management",
        "Document repository for community resources",
        "Dashboard analytics for administrators"
      ],
      github: "",
      demo: ""
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
    <section id="projects" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Development Projects</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-8 sm:mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              layout
              className="bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
              onClick={() => handleProjectClick(project)}
            >
              <div className="relative overflow-hidden aspect-[3/2] bg-gray-100 dark:bg-gray-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
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
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-semibold mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors">{project.title}</h3>
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
