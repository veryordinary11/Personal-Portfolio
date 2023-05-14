import React, { useEffect, useRef } from "react";
import Head from "next/head";
import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import HoneyPic from "../../public/images/profile/honey.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 3000,
  });
  const isInview = useInView(ref, { once: true });

  useEffect(() => {
    if (isInview) {
      motionValue.set(value);
    }
  }, [isInview, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const about = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <h2 className="font-bold text-7xl mb-16 w-full text-center xl:!text-6xl lg:!text-6xl md:!text-5xl sm:text-3xl">
            Introduction
          </h2>
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col justify-start items-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="my-4 text-lg lg:text-sm sm:text-xs font-bold uppercase ">
                About Me ▼
              </h2>
              <p className="font-medium">
                I am an undergraduate student majoring in applied psychology at
                Zhejiang University, with a solid foundation in physics,
                mathematics, and statistics. I am interested in the application
                of psychology in the field of Human-Computer Interaction and
                User Interface.
              </p>

              <p className="font-medium mt-4">
                I have taken many courses in computer science in college,
                including Introduction to Computer Systems, Database Systems,
                Data Structure, Object-Oriented Programming, etc. Currently
                learning front-end development, my main tech stacks is React and
                Javascript.
              </p>

              <p className="font-medium mt-4">
                I&apos;m equipped with strong English reading and writing
                skills, I could read English Tech Docs fluently. Plan to go to
                the Netherlands to further study Data Science. What&apos;s more,
                I have certificate of TFU-4 and plan to learn Dutch.
              </p>
            </div>

            <div className="my-4 col-span-3 xl:col-span-4 md:col-span-8 md:order-1 relative h-max rounded-2xl border-2 border-solid border-dark bg-light dark:bg-dark p-8 ">
              <div className="absolute top-0 -right-4 -z-10 bg-dark dark:bg-light w-[102%] h-[105%] rounded-[2rem]" />
              <div>
                <Image className="w-full h-auto rounded-2xl" src={HoneyPic} />
              </div>
            </div>

            <div className="col-span-2 xl:col-span-8 xl:flex-row xl:items-center flex flex-col items-end justify-between my-4 md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold">
                  <AnimatedNumbers value={106} />
                </span>
                <h2 className="text-xl lg:text-lg md:text-sm sm:text-xs font-medium capitalize ">
                  TOEFL
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold">
                  <AnimatedNumbers value={324} />
                </span>
                <h2 className="text-xl lg:text-lg md:text-sm sm:text-xs font-medium capitalize ">
                  GRE
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-6xl lg:text-5xl md:text-4xl sm:text-3xl font-bold">
                  <AnimatedNumbers value={200} />+
                </span>
                <h2 className="text-xl lg:text-lg md:text-sm sm:text-xs font-medium capitalize ">
                  LeetCode problems
                </h2>
              </div>
            </div>
          </div>

          <Skills />
          <Experience />
        </Layout>
      </main>
    </div>
  );
};

export default about;
