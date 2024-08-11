import Link from 'next/link';

const Footer = () => {

  return (
<footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t mt-40">
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          © 2024 Medical Student AI. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/tou">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="privacy-policy">
            Privacy
          </Link>
        </nav>
      </footer>
  );
};

export default Footer;