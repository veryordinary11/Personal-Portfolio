import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";

const Details = ({ position, company, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col  justify-between">
      <div>
        <h3 className="capitalize font-bold text-2xl lg:text-xl">
          {position}&nbsp;@{company}
        </h3>
        <span className="capitalize font-medium text-dark/75">
          {time} | {address}
        </span>
        <p className="font-medium w-full text-lg lg:text-base">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  return (
    <div className="my-64">
      <h2 className="font-bold text-7xl w-full text-center mb-32 xl:!text-6xl lg:!text-6xl md:!text-5xl sm:text-3xl ">
        Experience
      </h2>
      <div className="w-full mx-auto relative">
        <div className="absolute left-6 top-0 w-[6px] h-full bg-dark dark:bg-light origin-top"></div>

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Operation/Model"
            company="ZJUsnap"
            time="2021.10-2022.06"
            address="ZheJiang University"
            work="Assist in the establishment and daily operation in Instagram and Wechat. Help organization find potential partners and businesses cooperation"
          />

          <Details
            position="Research Assistant"
            company="Fu's team"
            time="2022.06-2022.09"
            address="ZheJiang University"
            work="Assist in analysing experiment data (SPSS, Python) and write weekly report."
          />

          <Details
            position="Front-End Developer"
            company="SuperFree's team"
            time="2023.04-now"
            address="Remote"
            work="Side Project. Develop a Texas Hold'em hands recording system, which has the function of recording hands and statistics. Responsible for front-end web development, using git for teamwork."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
