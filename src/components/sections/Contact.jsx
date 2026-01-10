import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Twitter, Instagram, Globe, Facebook } from 'lucide-react';

export const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'vincebryant42@gmail.com',
      href: 'mailto:your.email@example.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+63 968 200 1034',
      href: 'tel:+12345678900'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Cebu City, Philippines',
      href: null
    }
  ];

  const socialLinks = [
    { 
      name: 'GitHub', 
      icon: Github, 
      url: 'https://github.com/pulmonaryveins',
      color: 'hover:bg-gray-800 dark:hover:bg-gray-200'
    },
    { 
      name: 'LinkedIn', 
      icon: Linkedin, 
      url: 'https://www.linkedin.com/in/vince-bryant-cabunilas-366704346/',
      color: 'hover:bg-blue-600'
    },
    { 
      name: 'Facebook', 
      icon: Facebook, 
      url: 'https://www.facebook.com/vincebryant.cabunilas',
      color: 'hover:bg-pink-600'
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 pb-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">Get in Touch</h2>
          <div className="w-20 h-1 bg-black dark:bg-white mx-auto mb-6"></div>
          <p className="text-center text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-16">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            const content = (
              <div className="bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-black dark:hover:border-white hover:shadow-xl transition-all text-center group">
                <div className="w-14 h-14 bg-black dark:bg-white rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <IconComponent size={24} className="text-white dark:text-black" />
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-500 font-medium mb-2">{info.label}</p>
                <p className="font-semibold text-gray-900 dark:text-gray-100">{info.value}</p>
              </div>
            );

            return info.href ? (
              <a key={index} href={info.href} className="block">
                {content}
              </a>
            ) : (
              <div key={index}>
                {content}
              </div>
            );
          })}
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold mb-10">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-16 h-16 bg-white dark:bg-gray-950 border-2 border-gray-200 dark:border-gray-800 rounded-full flex items-center justify-center ${social.color} hover:border-transparent transition-all hover:scale-110 hover:shadow-xl`}
                  aria-label={social.name}
                >
                  <IconComponent size={26} className="text-black dark:text-white group-hover:text-white transition-colors" />
                  
                  {/* Tooltip */}
                  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-black dark:bg-white text-white dark:text-black text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {social.name}
                  </span>
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
