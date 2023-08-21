import React, { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" my-8 first:mt-0 last: mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%] "
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
        className=""
      >
        <h3 className=" capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className=" capitalize font-medium text-dark/75 dark:text-light xs:text-sm">
          {time}| {place}
        </span>
        <p className=" font-medium w-full md:text-sm">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className=" my-64">
      <h2 className=" font-bold text-8xl tracking-wide mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Education
      </h2>
      <div ref={ref} className=" w-[75%] mx-auto relative">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className=" absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-center justify-between ml-4 xs:ml-2 ">
          <Details
            type="Master of Computer Application(MCA)"
            time="2023-Present"
            place="Online"
            info="Pursuing MCA from Amity University."
          />
          <Details
            type="Bachelor of Computer Applications(BCA)"
            time="2020-2023"
            place="Janakpuri,New Delhi"
            info="Completed My BCA from Maharshi Dayanand University(MDU) Rohtak"
          />
          <Details
            type="10+2"
            time="2018-2020"
            place="Online"
            info="Completed My 12th from NIOS"
          />
          <Details
            type="10th"
            time="2015-2016"
            place="Bethany Mission School,WB"
            info="Completed My 10th from CBSE"
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;
