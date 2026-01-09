import { motion } from 'framer-motion';
import { useState } from 'react';
import { DesignModal } from '../ui/DesignModal';

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
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export const Design = () => {
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('All');

  const designs = [
    {
      title: "Brand Identity Design",
      description: "Complete brand identity including logo, color palette, and style guide for a tech startup.",
      image: "/images/design/brand-identity.jpg",
      tools: ["Figma", "Adobe Illustrator", "Photoshop"],
      category: "Graphic Design"
    },
    {
      title: "Mobile App UI/UX",
      description: "User interface design for a fitness tracking mobile application with focus on engagement.",
      image: "/images/design/mobile-app-ui.jpg",
      tools: ["Figma", "Adobe XD", "Principle"],
      category: "UI/UX Design"
    },
    {
      title: "Portfolio Website Design",
      description: "Modern portfolio design with minimalism and smooth animations for creative professionals.",
      image: "/images/design/portfolio-design.jpg",
      tools: ["Figma", "Adobe XD", "ProtoPie"],
      category: "UI/UX Design"
    },
    {
      title: "E-commerce Landing Page",
      description: "Conversion-focused landing page design with clean product showcase and checkout flow.",
      image: "/images/design/ecommerce-landing.jpg",
      tools: ["Figma", "Adobe Photoshop"],
      category: "UI/UX Design"
    },
    {
      title: "Dashboard UI Design",
      description: "Analytics dashboard with data visualization and intuitive navigation for SaaS platform.",
      image: "/images/design/dashboard-ui.jpg",
      tools: ["Figma", "Adobe XD"],
      category: "UI/UX Design"
    },
    {
      title: "Social Media Graphics",
      description: "Cohesive social media templates and graphics for brand consistency across platforms.",
      image: "/images/design/social-media.jpg",
      tools: ["Figma", "Canva", "Adobe Illustrator"],
      category: "Graphic Design"
    }
  ];

  const filteredDesigns = selectedFilter === 'All' 
    ? designs 
    : designs.filter(design => design.category === selectedFilter);

  return (
    <section id="design" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Design Work</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-8"></div>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-4 mb-12">
          {['All', 'UI/UX Design', 'Graphic Design'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedFilter === filter
                  ? 'bg-black dark:bg-white text-white dark:text-black'
                  : 'bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredDesigns.map((design, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onClick={() => setSelectedDesign(design)}
              className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            >
              {/* Image */}
              <div className="w-full h-full bg-gray-200 dark:bg-gray-800">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-800" style={{ display: 'none' }}>
                  <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                  </svg>
                </div>
              </div>

              {/* Overlay with content on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {design.title}
                </h3>
                <p className="text-gray-200 text-sm mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  {design.description}
                </p>
                <div className="flex flex-wrap gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                  {design.tools.map((tool, toolIndex) => (
                    <span
                      key={toolIndex}
                      className="px-2 py-1 text-xs font-medium bg-white/20 backdrop-blur-sm text-white rounded-md border border-white/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Design Modal */}
      <DesignModal
        design={selectedDesign}
        isOpen={!!selectedDesign}
        onClose={() => setSelectedDesign(null)}
      />
    </section>
  );
};
