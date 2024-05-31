"use client"
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Service = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] relative">
      <div className="container relative z-10">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <motion.div 
              className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                What Do I Do
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form
              </p>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4 relative">
          <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-600 to-transparent rounded-full h-80 w-80 blur-3xl absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"></div>
          <ServiceCard
            title="Front-End Development"
            details="Employ JavaScript and frameworks such as React, nextjs to build dynamic and interactive user interfaces. Focus on optimal user experience (UX) and intuitive design."
            icon="/images/coding.png"
            from="left"
          />
          <ServiceCard
            title="Create Responsive Website"
            details="Utilize the latest technologies such as HTML5, CSS3, and frameworks like Bootstrap or Tailwind CSS to ensure websites function seamlessly across various devices and screen sizes."
            icon="/images/coding.png"
            from="right"
          />
            <ServiceCard
            title="API Integration"
            details="Implement and integrate APIs to connect websites with third-party services or backends. Use technologies like RESTful API and GraphQL for efficient communication between the front-end and back-end."
            icon="/images/cloud-server.png"
            from="left"
          />
          <ServiceCard
            title="Web Performance Optimization"
            details="Enhance website speed and performance through optimization techniques such as lazy loading, CSS/JS minification, and caching. Ensure fast and responsive websites for a better user experience."
            icon="/images/cloud-server.png"
            from="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details, from }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, x: from === "left" ? -130 : 130 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="w-full px-4 md:w-1/2 z-10"
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 1 }}
    >
      <div className="mb-8 rounded-[20px] p-10 shadow-md hover:shadow-lg md:px-7 xl:px-10 h-80 relative bg-white">
        <div className={`mb-8 flex h-[70px] w-[70px] p-3 items-center justify-center rounded-2xl bg-pink-200`}>
          <Image 
            src={icon}
            width={46}
            height={46}
            alt=""
          />
        </div>
        <h4 className="mb-3 text-xl font-semibold text-dark">{title}</h4>
        <p className="text-body-color">{details}</p>
      </div>
    </motion.div>
  );
};
