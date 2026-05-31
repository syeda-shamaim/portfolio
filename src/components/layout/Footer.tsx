import { personalInfo } from '../../data/portfolio';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-red/15 bg-black/50">
      <div className="container-custom flex flex-col items-center gap-6 px-4 py-10 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <p className="text-sm text-gray-500">
          © {year} {personalInfo.name}
        </p>

        <div className="flex items-center gap-4">
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-gray-500 transition-colors hover:bg-red/10 hover:text-red focus:outline-none focus-visible:ring-2 focus-visible:ring-red"
            aria-label="GitHub profile"
          >
            <FiGithub size={20} />
          </a>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full p-2 text-gray-500 transition-colors hover:bg-red/10 hover:text-red focus:outline-none focus-visible:ring-2 focus-visible:ring-red"
            aria-label="LinkedIn profile"
          >
            <FiLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
