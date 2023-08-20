import React from "react";
import { motion } from "framer-motion";

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light  shadow-dark absolute dark:bg-light dark:text-dark cursor-pointer py-3 px-6 "
      whileHover={{ scale: 1.05 }}
      initial={{x:0,y:0}}
      whileInView={{ x:x,y:y ,transition:{duration:1.5}}}
      viewport={{once:true}}
      
    >
      {name}
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className=" font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className=" flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="CSS" x="-5vw" y="-10vw"/>
        <Skill name="HTML" x="-25vw" y="2vw"/>
        <Skill name="React Js" x="20vw" y="6vw"/>
        <Skill name="JavaScript" x="0vw" y="12vw"/>
        <Skill name="TailWind CSS" x="-20vw" y="-15vw"/>
        <Skill name="BootStrap" x="15vw" y="-12vw"/>
      </div>
    </>
  );
};

export default Skills;
