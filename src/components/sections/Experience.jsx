import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

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

export const Experience = () => {
  const experiences = [
    {
      role: "Alliance Software Inc. — Jumpstart Program",
      company: "Student Trainee",
      period: "August 2025 – December 2025",
      description: [
        "Designed and developed the frontend interface for a Food Ordering System, ensuring a smooth and intuitive user experience.",
        "Collaborated closely with a team of developers, enhancing communication, workflow, and problem-solving skills in a real-world, industry-based environment.",
        "Gained practical experience in UI/UX design and frontend development best practices.",
      ]
    },
    {
      role: "CESAFI Esports League ",
      company: "Creatives Department | Graphic Designer",
      period: "April 2024 – August 2025",
      description: [
        "Produced creative visual content for pre-season and season 3 events, engaging the Cebu gaming community.",
        "Managed design deliverables under tight deadlines, strengthening time management and creative problem-solving skills.",
        "Expanded expertise in graphic design and learned to perform under high-pressure, live-event environments.",
      
      ]
    },
    {
      role: "Philippine Society of Information Technology Students (PSITS)",
      company: "Media Director | Public Relations Officer",
      period: "September 2023 – Present",
      description: [
        "Progressed from media volunteer to Media Director, leading a team in graphic design, photography, and video editing for organizational communication.",
        "Developed and implemented media strategies to effectively disseminate information to students and faculty.",
        "Mentored team members, improving their technical skills and fostering collaboration within the media team.",
       
      ]
    },

    {
      role: "University of Cebu Council of Presidents - Main Campus",
      company: "Assistant Undersecretary for Operations Unit / Assistant Media Head",
      period: "April 2023 – Present",
      description: [
        "Supported planning and execution of major university events, managing both technical operations and media coverage.",
        "Assisted in streamlining event coordination and media workflows for the organization.",
        "Strengthened leadership, communication, and organizational skills through hands-on experience in large-scale projects.",
       
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Experience</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-12"></div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-xl hover:border-black dark:hover:border-white transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <Briefcase size={24} className="text-black dark:text-white flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{exp.role}</h3>
                  <p className="text-lg text-gray-700 dark:text-gray-300 font-medium mb-2">{exp.company}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500">
                    <Calendar size={16} />
                    <span className="font-medium">{exp.period}</span>
                  </div>
                </div>
              </div>
              <ul className="space-y-2.5">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-700 dark:text-gray-300 flex items-start gap-3">
                    <span className="text-black dark:text-white mt-1.5 font-bold">•</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
