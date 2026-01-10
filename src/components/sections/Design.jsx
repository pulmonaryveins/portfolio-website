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
  const [showAll, setShowAll] = useState(false);

  const designs = [
    {
      title: "Dexter Poster",
      description: "",
      image: "/images/design/9.png",
      images: [
        "/images/design/9.png"
      ],
        tools: ["Abobe Photoshop", "Canva"],
      category: "Graphic Design"
    },
    
    {
      title: "Film Poster",
      description: "",
      image: "/images/design/15.png",
      tools: ["Abobe Photoshop" , "Canva"],
      category: "Graphic Design"
    },

    {
      title: "Bermonths Poster",
      description: "",
      image: "/images/design/14.png",
      tools: ["Abobe Photoshop" , "Canva"],
      category: "Graphic Design"
    },

    {
      title: "Motivational Poster",
      description: "",
      image: "/images/design/8.png",
      tools: ["Abobe Photoshop"],
      category: "Graphic Design"
    },

    {
      title: "All Souls' Day Poster",
      description: "",
      image: "/images/design/5.png",
      tools: ["Abobe Photoshop" , "Canva"],
      category: "Graphic Design"
    },

    {
      title: "Fathers' Day Poster",
      description: "",
      image: "/images/design/11.png",
      tools: ["Abobe Photoshop" , "Canva"],
      category: "Graphic Design"
    },

    {
      title: "Good Friday Poster",
      description: "",
      image: "/images/design/12.png",
      tools: ["Abobe Photoshop" , "Canva"],
      category: "Graphic Design"
    },

    {
      title: "Extragavaganza 2023",
      description: "",
      image: "/images/design/7.png",
      tools: ["Canva"],
      category: "Graphic Design"
    },

    {
      title: "Cesafi S3 Poster",
      description: "",
      image: "/images/design/13.png",
      tools: ["Abobe Photoshop"],
      category: "Graphic Design"
    },

    {
      title: "Cesafi S3 Group Standings",
      description: "",
      image: "/images/design/6.png",
      tools: ["Abobe Photoshop"],
      category: "Graphic Design"
    },

    {
      title: "C-SEC WORKSHOP",
      description: "",
      image: "/images/design/10.png",
      tools: ["Photoshop"],
      category: "Graphic Design"
    },

    {
      title: "Cesafi Pre-Season Poster",
      description: "",
      image: "/images/design/4.png",
      tools: ["Photoshop"],
      category: "Graphic Design"
    },

    {
      title: "Face of UC-Main Poster",
      description: "",
      image: "/images/design/2.png",
      tools: ["Photoshop"],
      category: "Graphic Design"
    },

    {
      title: "Extragavaganza 2025",
      description: "",
      image: "/images/design/1.png",
      tools: [ "Photoshop", "Canva"],
      category: "Graphic Design"
    },

    {
      title: "PSITS Recruitment",
      description: "",
      image: "/images/design/3.png",
      tools: ["Photoshop"],
      category: "Graphic Design"
    },

    {
      title: "Intrams T-Shirt Design",
      description: "",
      image: "/images/design/16.png",
      tools: ["Adobe Illustrator", "Photoshop"],
      category: "Graphic Design"
    },

    {
      title: "T-shirt Merchandise Design",
      description: "",
      image: "/images/design/17.png",
      tools: ["Adobe Illustrator", "Photoshop"],
      category: "Graphic Design"
    },

    {
      title: "Polo Shirt Design",
      description: "",
      image: "/images/design/18.png",
      tools: ["Photoshop"],
      category: "Graphic Design"
    },
    
  ];

  const displayedDesigns = showAll ? designs : designs.slice(0, 6);

  return (
    <section id="design" className="min-h-screen py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center">Design Work</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-8 sm:mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          key={showAll ? 'all' : 'limited'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        >
          {displayedDesigns.map((design, index) => (
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

        {/* Show More Button */}
        {designs.length > 6 && !showAll && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-all hover:scale-105 active:scale-95"
            >
              Show More
            </button>
          </motion.div>
        )}

        {/* Show Less Button */}
        {showAll && designs.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(false)}
              className="px-8 py-3 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-300 dark:hover:bg-gray-700 transition-all hover:scale-105 active:scale-95"
            >
              Show Less
            </button>
          </motion.div>
        )}
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
