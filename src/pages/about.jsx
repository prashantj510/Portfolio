import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilepic from "../../public/images/profile/5454.jpg";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";


const AnimatedNumbers =({value})=>{
    const ref =useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue,{duration:3000})
    const isInView =useInView(ref,{once: true});

    useEffect(() => {
      if(isInView){
        motionValue.set(value);
      }
    }, [isInView,value,motionValue])
    
    useEffect(() => {
      springValue.on("change",(latest)=>{
        if(ref.current && latest.toFixed(0)<= value){
            ref.current.textContent = latest.toFixed(0);
        }
      })
    }, [springValue,value])
    

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
      <Head>
        <title>Portfolio | About</title>
        <meta
          name="description"
          content="About Page For Prashant Portfolio Website"
        />
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Prashant Kumar Jha." className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 font-bold uppercase text-lg text-dark/75 ">
                About Me.
              </h2>
              <p className=" font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                voluptates a ad asperiores id aut sint repellendus quia sequi
                odit deserunt placeat hic aspernatur ea et, perspiciatis dolore
                pariatur velit?
              </p>
              <p className="my-4 font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                voluptates a ad asperiores id aut sint repellendus quia sequi
                odit deserunt placeat hic aspernatur ea et, perspiciatis dolore
                pariatur velit?
              </p>
              <p className=" font-medium">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
                voluptates a ad asperiores id aut sint repellendus quia sequi
                odit deserunt placeat hic aspernatur ea et, perspiciatis dolore
                pariatur velit?
              </p>
            </div>
            <div className=" col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light">
              <div className=" absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark"></div>
              <Image
                src={profilepic}
                alt="Profile"
                className="w-full h-auto rounded-2xl p-2"
              />
            </div>
            <div className=" col-span-2 flex flex-col items-end justify-evenly ">
              <div className=" flex flex-col items-center justify-center">
                <span className=" inline-block text-7xl font-bold"><AnimatedNumbers value={10}/> +</span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 ">Projects Completed</h2>
              </div>
              <div className="flex flex-col items-center justify-center">
                <span className=" inline-block text-7xl font-bold"><AnimatedNumbers value={1}/>+</span>
                <h2 className=" text-xl font-medium capitalize text-dark/75 ">Years Of Experience</h2>
              </div>
            </div>
          </div>
          <Skills/>
          <Education/>
          <Experience/>
        </Layout>
      </main>
    </>
  );
};

export default about;
