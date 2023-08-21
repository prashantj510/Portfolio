import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import weatherapp from "../../public/images/projects/weatherApp.png";
import Todoapp from "../../public/images/projects/Todo.png";
import tinDogapp from "../../public/images/projects/tinDogApp.png";
import Portfolio from "../../public/images/projects/Portfolio.png";
import TransitionEffect from "@/components/TransitionEffect";

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
  return (
    <article className=" w-full flex item-center justify-between rounded-3xl border border-solid shadow-2xl border-dark bg-light p-12 relative dark:bg-dark     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4">
      <div className=" absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light/75 rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]"></div>
      <Link
        href={link}
        target="_blank"
        className=" w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto rounded-xl"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className=" w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className=" text-primary dark:text-primaryDark font-medium text-xl xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2"
        >
          <h2 className=" w-full font-bold my-2 text-4xl  text-left dark:text-light sm:text-sm">
            {title}
          </h2>
        </Link>
        <p className=" my-2 font-medium text-dark dark:text-light/75 sm:text-sm">
          {summary}
        </p>
        <div className=" mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light ml-6 sm:px-4 sm:text-base"
          >
            Demo
          </Link>
        </div>
      </div>
    </article>
  );
};
const Project = ({ type, title, img, link, github }) => {
  return (
    <article className=" w-full flex flex-col items-center justify-center rounded-2xl border border-solid shadow-2xl border-dark bg-light p-6 dark:bg-dark dark:border-light/75 relative xs:p-4 md:mr-3">
      <div className=" absolute top-0 -right-2 -z-10 w-[101%] h-[102%] rounded-2xl bg-dark md:-right-2 md:w-[101%]  xs:h-[102%] xs:rounded-[1.5rem]"></div>
      <Link
        href={link}
        target="_blank"
        className=" w-full cursor-pointer overflow-hidden rounded-lg "
      >
        <Image
          src={img}
          alt={title}
          className="w-full h-auto"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>
      <div className=" w-full flex flex-col items-start justify-between mt-4 ">
        <span className=" text-primary font-medium text-xl  dark:text-primaryDark lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          className=" hover:underline underline-offset-2 md:text-base"
        >
          <h2 className=" w-full font-bold my-2 text-3xl  text-left lg:text-2xl ">
            {title}
          </h2>
        </Link>
        {/* <p className=" my-2 font-medium text-dark">{summary}</p> */}
        <div className="w-full justify-between mt-2 flex items-center">
          <Link href={github} target="_blank" className="w-10 md:w-8">
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg  font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light xs:px-3 xs:text-base"
          >
            Demo
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Projects</title>
        <meta
          name="description"
          content="Projects Page For Prashant Portfolio Website"
        />
      </Head>
      <TransitionEffect />
      <main className="w-full flex flex-col items-center justify-center mb-16 dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Projects"
            className="mb-16 lg:!text-7xl sm:!text-6xl sm:mb-8 xs:!text-4xl"
          />
          <div className=" grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">
            <div className="col-span-12">
              <FeaturedProject
                title="Portfolio App"
                type="Featured Project"
                link="https://prashantj510.github.io/Portfolio/"
                github="https://github.com/prashantj510/Portfolio.git"
                img={Portfolio}
                summary="Made Using NextJs Tailwind Css Framer Motion ,Modern and Responsive Design Compatible On Both Large and Mobile Screens"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="tinDog App"
                type="Project"
                link="https://prashantj510.github.io/BootStrap/"
                github="https://github.com/prashantj510/BootStrap"
                img={tinDogapp}
                // summary="Made Using Bootstrap,Modern and Responsive Design ,Compatible On Both Large and Mobile Screens"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                title="Todo App"
                type="Project"
                link="https://prashantj510.github.io/Todo/"
                github="https://github.com/prashantj510/Todo"
                img={Todoapp}
                // summary="Using UseState Hook ,Using UseEffect Hook ,Compatible On Both Large and Mobile Screens"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                title="Weather App"
                type="Featured Project"
                link="https://prashantj510.github.io/weather-app/"
                github="https://github.com/prashantj510/weather-app.git"
                img={weatherapp}
                summary="Using Open Weather API and Axios ,Modern and Responsive Design Compatible On Both Large and Mobile Screens"
              />
            </div>
          </div>
        </Layout>
      </main>
    </>
  );
};

export default Projects;
