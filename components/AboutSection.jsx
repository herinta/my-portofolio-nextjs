"use client"
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import AchievementsSection from "./AchievementsSection";

const AboutSection = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <section id="about" className="pt-28">
      <div
        ref={ref}
        className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16"
      >
        <motion.div
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <Image src="/images/about-image.jpeg" width={500} height={500} alt="" />
        </motion.div>
        <motion.div
          className="mt-4 md:mt-0 text-left flex flex-col h-full"
          initial="hidden"
          animate={controls}
          variants={sectionVariants}
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
          Iam an Informatics student who has a great interest in web development. 
          I am experienced in using HTML, CSS, JavaScript, as well as frameworks such as React and Next.js. 
          With experience in various web projects, I am always eager to learn new technologies and implement innovative solutions. 
          My commitment to quality and detail, as well as the ability to work both in a team and independently, 
          makes me ready to contribute to the web development industry.
          </p>
          <div className="w-full">
            <AchievementsSection />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
