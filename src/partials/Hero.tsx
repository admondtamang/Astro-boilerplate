import { motion } from 'framer-motion';

import Highlight from '@/components/highlight';

import {
  CONTAINER_STAGGER,
  CONTENT_VARIANTS,
  DECLARE_ANIMATION,
} from '../utils/animationData';

const Hero = () => {
  return (
    <>
      <motion.section
        variants={CONTAINER_STAGGER}
        {...DECLARE_ANIMATION}
        // initial="initial"
        // animate="animate"
        className="body-font text-gray-600 dark:text-gray-200"
      >
        <div className="container mx-auto flex flex-col items-center px-5 py-12 md:flex-row">
          <div className="mb-16 flex flex-col items-center gap-8 text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:grow lg:pr-24">
            <motion.p
              variants={CONTENT_VARIANTS}
              className="nue-rounded rounded-3xl border-4 border-gray-600 bg-white px-4 py-1 font-bold dark:text-gray-800   "
            >
              Web Developer
            </motion.p>

            <motion.span
              variants={CONTENT_VARIANTS}
              className="primary-highlight title-font font-sans text-2xl font-extrabold dark:text-white sm:text-4xl"
            >
              Admond Tamang
            </motion.span>

            <motion.h1
              variants={CONTENT_VARIANTS}
              className="title-font font-sans text-2xl font-extrabold text-gray-700 dark:text-slate-200  sm:text-4xl"
            >
              A Developer based in Nepal
            </motion.h1>
            <motion.p
              variants={CONTENT_VARIANTS}
              className="mb-8 leading-relaxed dark:text-slate-400"
            >
              I love building and re-thiking what we do.
              <br />
              I&apos;m a competent, youthful developer who prioritizes more on
              <Highlight>human-centered design.</Highlight> <br />
              <br />
              Moreover, a desire to learn
              <Highlight>
                new technologies and application architecture
              </Highlight>
              and to <Highlight> collaborate in a team.</Highlight>
              <br />
              <br />I love <Highlight>learning and building</Highlight> web with
              new architecture and technologies.
            </motion.p>
            <motion.div
              variants={CONTENT_VARIANTS}
              className="flex justify-center gap-4"
            >
              <a href="https://www.linkedin.com/in/admond-tamang-78a39a134/">
                <button className="nue-button text-md shadow-offset-black rounded border-2 border-black bg-indigo-300 py-2 px-6 hover:bg-lime-600 hover:text-lime-50 dark:text-black">
                  Linked In
                </button>
              </a>

              <a href="https://github.com/admondtamang">
                <button className="nue-button text-md shadow-offset-black rounded border-2 border-black bg-lime-300 py-2 px-6 hover:bg-indigo-600 hover:text-lime-50 dark:text-black">
                  Github
                </button>
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={CONTENT_VARIANTS}
            className="w-5/6 md:w-1/2 lg:w-full lg:max-w-lg"
          >
            <img
              className="nue rounded object-cover object-center"
              alt="profile"
              src="/profile.jpg"
              width={400}
              height={200}
            />
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};
export { Hero };
