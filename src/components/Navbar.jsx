import Link from "next/link";
import Logo from "./Logo";
import { useRouter } from "next/router";
import twitterUrl from "../../public/images/svgs/twitter.svg?url";
import Image from "next/image";
import githubUrl from "../../public/images/svgs/github.svg?url";
import linkedinUrl from "../../public/images/svgs/linkedin.svg?url";
import { motion } from "framer-motion";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { useState } from "react";
import sunIconUrl from "../../public/images/svgs/sunny-filled-loop-to-moon-filled-loop-transition.svg?url";
import moonIconUrl from "../../public/images/svgs/moon-filled-to-sunny-filled-loop-transition.svg?url";

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group text`}>
      {title}
      <span
        className={`absolute inline-block h-[1px] bg-dark bottom-0 left-0 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group text-light dark:text-dark my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`absolute inline-block h-[1px] bg-light bottom-0 left-0 
        group-hover:w-full transition-[width] ease duration-300
        ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}
      >
        &nbsp;
      </span>
    </button>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">
      <button
        className=" flex-col justify-center items-center hidden lg:flex"
        onClick={handleClick}
      >
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm  ${
            isOpen ? "rotate-45 translate-y-1" : " -translate-y-0.5"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        ></span>
        <span
          className={`bg-dark dark:bg-light transition-all duration-300 block h-0.5 w-6 rounded-sm  ${
            isOpen ? "-rotate-45 -translate-y-1" : " translate-y-0.5"
          }`}
        ></span>
      </button>

      <div className="w-full flex justify-between items-center lg:hidden">
        <nav>
          <CustomLink href="/" title="Home" className="mr-4 text-lg" />
          <CustomLink href="/about" title="About" className="mx-4 text-lg" />
          <CustomLink
            href="/projects"
            title="Projects"
            className="mx-4 text-lg"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <motion.a
            href="https://twitter.com/veryordinary11"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mr-3"
          >
            <Image src={twitterUrl} alt="Twitter" className="w-full h-auto" />
          </motion.a>
          <motion.a
            href="https://github.com/veryordinary11"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 mx-3"
          >
            <Image src={githubUrl} alt="Github" className="w-full h-auto" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/%E5%AD%90%E5%B1%B9-%E6%9D%8E-71a502229/"
            target={"_blank"}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 ml-3"
          >
            <Image src={linkedinUrl} alt="Linkedin" className="w-full h-auto" />
          </motion.a>

          <button
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
            className={`ml-6 flex items-center justify-center rounded-full p-1 ${
              mode === "light" ? "bg-light" : "bg-light"
            }`}
          >
            {mode === "dark" ? (
              <Image src={sunIconUrl} alt="Sun" className={"fill-dark"} />
            ) : (
              <Image src={moonIconUrl} alt="Moon" className={"fill-dark"} />
            )}
          </button>
        </nav>
      </div>

      {isOpen ? (
        <motion.div
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="min-w-[70vw] flex flex-col z-30 justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -tarnslate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32"
        >
          <nav className="flex items-center flex-col justify-center">
            <CustomMobileLink
              href="/"
              title="Home"
              className=" text-lg"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/about"
              title="About"
              className=" text-lg"
              toggle={handleClick}
            />
            <CustomMobileLink
              href="/projects"
              title="Projects"
              className=" text-lg"
              toggle={handleClick}
            />
          </nav>

          <nav className="flex items-center justify-center flex-wrap mt-4">
            <motion.a
              href="https://twitter.com/veryordinary11"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mr-3 sm:mr-1"
            >
              <Image src={twitterUrl} alt="Twitter" className="w-full h-auto" />
            </motion.a>
            <motion.a
              href="https://github.com/veryordinary11"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 mx-3 sm:mx-1"
            >
              <Image src={githubUrl} alt="Github" className="w-full h-auto" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/%E5%AD%90%E5%B1%B9-%E6%9D%8E-71a502229/"
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              className="w-8 ml-3 sm:ml-1"
            >
              <Image
                src={linkedinUrl}
                alt="Linkedin"
                className="w-full h-auto"
              />
            </motion.a>

            <button
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              className={`ml-6 flex items-center justify-center rounded-full p-1 ${
                mode === "light" ? "bg-light" : "bg-light"
              }`}
            >
              {mode === "dark" ? (
                <Image src={sunIconUrl} alt="Sun" className={"fill-dark"} />
              ) : (
                <Image src={moonIconUrl} alt="Moon" className={"fill-dark"} />
              )}
            </button>
          </nav>
        </motion.div>
      ) : null}

      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
