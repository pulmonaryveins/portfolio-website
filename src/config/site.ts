/**
 * Single source of truth for identity/contact info reused across sections
 * (Hero, Contact, Footer) so it's edited in one place.
 */
export const site = {
  name: 'Vince Bryant Cabunilas',
  role: 'UI/UX Designer & Frontend Developer',
  email: 'vincebryant42@gmail.com',
  phone: '+63 968 200 1034',
  phoneHref: 'tel:+639682001034',
  location: 'Cebu City, Philippines',
  resumeUrl: '/CABUNILAS-RESUME.pdf',
  resumeFileName: 'CABUNILAS-RESUME.pdf',
  social: {
    github: 'https://github.com/pulmonaryveins',
    linkedin: 'https://www.linkedin.com/in/vince-bryant-cabunilas-366704346/',
    facebook: 'https://www.facebook.com/vincebryant.cabunilas',
  },
} as const;

export const mailtoHref = `mailto:${site.email}`;
