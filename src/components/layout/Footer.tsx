import { site } from '@/config/site';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          © {currentYear} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
