import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Tech } from '../components';
import profilePic from "../assets/profilepicture.jpeg";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-white rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-black text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>

    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] w-full leading-[30px]"
      >
        <div className="flex pb-12">
        
          <div className="w-full">
            
            <motion.div variants={textVariant()}>
              <p className={styles.sectionSubText}>Nathaniel Klump</p>
              <div className="pt-4 flex">
                <h2 className={styles.sectionHeadText}>Overview.</h2>
              </div>
            </motion.div>

            <div className="pt-12">
              Software Developer with a strong foundation in online service platforms. 
              Proficient in operations automation across environments. Experienced in 
              creating command-line utilities with the .Net framework. Skilled in API 
              design & implementation and cloud service integration.
            </div>
          </div>
          <div className="z-10 flex justify-center">
            <div
              className="relative z-0 ml-20 before:absolute before:-top-5 before:-left-5
              before:w-full before:rounded-lg before:max-w-[400px] md:before:max-w-[600px] before:h-full 
              before:border-2 before:border-clay-red before:z-[-1]"
            >
              <img
                alt="profile"
                className="rounded-lg hover:filter hover:saturate-50 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[400px]"
                src={profilePic}
              />
            </div>
          </div>
        </div>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <a href={`#${service.id}`}>
          <ServiceCard key={service.title} index={index} {...service} />
          </a>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
