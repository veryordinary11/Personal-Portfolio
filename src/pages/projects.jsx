import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";

const projects = () => {
  return (
    <div>
      <Head>
        <title>Project</title>
        <meta name="description" content="Project page" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <h2 className="font-bold text-7xl mb-16 w-full text-center xl:text-6xl lg:text-6xl md:text-5xl sm:text-3xl ">
            Projects
          </h2>

          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-12">
            <div className="col-span-12">
              <div className="grid grid-cols-2 lg:grid-cols-1 relative bg-light dark:bg-dark border-solid border-dark border-2 p-10 lg:p-8 md:p-6 sm:p-4 rounded-xl">
                <div className="absolute top-0 -right-6 -z-10 bg-dark w-[102%] h-[105%] rounded-[2rem] dark:bg-light" />
                <figure className="w-full h-auto">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2898&q=80"
                    alt="Markdown Pro"
                  />
                </figure>

                <div className="grid grid-cols-4 pl-6 gap-2">
                  <h2 className="text-6xl lg:text-6xl md:text-5xl sm:text-4xl font-bold col-span-4 lg:mt-4">
                    Markdown Pro
                    <p className="text-lg lg:text-base md:text-sm font-mont col-span-2 mt-2">
                      A simple markdown application.
                    </p>
                  </h2>

                  <div className="col-start-1 col-span-4">
                    <motion.div className="avatar" whileHover={{ scale: 1.1 }}>
                      <div className="w-16 rounded">
                        <img
                          src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
                          alt="tailwindCss"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="avatar" whileHover={{ scale: 1.1 }}>
                      <div className="w-16 rounded mx-2">
                        <img
                          src="https://www.svgrepo.com/show/452092/react.svg"
                          alt="react"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="avatar" whileHover={{ scale: 1.1 }}>
                      <div className="w-16 rounded mx-2">
                        <img
                          src="https://www.svgrepo.com/show/373595/firebase.svg"
                          alt="Firebase"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <a
                    className="btn text-base md:text-sm font-bold bg-dark dark:bg-light dark:text-dark text-light col-start-4 mt-40"
                    href="https://markdown-q7g1gc4uc-veryordinary11.vercel.app/"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>

            <div className="col-span-12">
              <div className="grid grid-cols-2 lg:grid-cols-1 relative bg-light dark:bg-dark border-solid border-dark border-2 p-10 lg:p-8 md:p-6 sm:p-4 rounded-xl">
                <div className="absolute top-0 -right-6 -z-10 bg-dark w-[102%] h-[105%] rounded-[2rem] dark:bg-light" />
                <figure className="w-full h-auto">
                  <img
                    className="rounded-xl"
                    src="https://images.unsplash.com/photo-1596451190630-186aff535bf2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                    alt="Poker Helper"
                  />
                </figure>

                <div className="grid grid-cols-4 pl-6 gap-2">
                  <h2 className="text-6xl lg:text-6xl md:text-5xl sm:text-4xl font-bold col-span-4 lg:mt-4">
                    PokerHelper
                    <p className="text-lg lg:text-base md:text-sm font-mont col-span-2 mt-2">
                      An assistant of Texas' Holdem Poker.
                    </p>
                  </h2>

                  <div className="col-start-1 col-span-4">
                    <motion.div className="avatar" whileHover={{ scale: 1.1 }}>
                      <div className="w-16 rounded">
                        <img
                          src="https://www.svgrepo.com/show/354431/tailwindcss-icon.svg"
                          alt="tailwindCss"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="avatar" whileHover={{ scale: 1.1 }}>
                      <div className="w-16 rounded mx-2">
                        <img
                          src="https://www.svgrepo.com/show/452092/react.svg"
                          alt="react"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="avatar" whileHover={{ scale: 1.1 }}>
                      <div className="w-16 rounded mx-2">
                        <img
                          src="https://www.svgrepo.com/show/452093/redux.svg"
                          alt="redux"
                        />
                      </div>
                    </motion.div>

                    <motion.div className="avatar" whileHover={{ scale: 1.1 }}>
                      <div className="w-16 rounded mx-2">
                        <img
                          src="https://www.svgrepo.com/show/354552/webpack.svg"
                          alt="Webpack"
                        />
                      </div>
                    </motion.div>
                  </div>

                  <a
                    className="btn text-base md:text-sm font-bold bg-dark dark:bg-light dark:text-dark text-light col-start-4 mt-40"
                    href="https://github.com/superfreeeee/poker"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          </div>

          <h2 className="font-bold text-7xl mt-64 w-full text-center xl:!text-6xl lg:!text-6xl md:!text-5xl sm:text-3xl">
            To be Continued...
          </h2>
        </Layout>
      </main>
    </div>
  );
};

export default projects;
