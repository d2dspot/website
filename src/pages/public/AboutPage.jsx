import { Helmet } from "react-helmet-async";
import Section1 from "@/components/about/Section1";
import Section2 from "@/components/about/Section2";
import Section3 from "@/components/about/Section3";
import Section4 from "@/components/about/Section4";
import Section7 from "@/components/home/Section7";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import AnimatedGridWrapper from "@/components/ui/AnimatedGridWrapper";
import React from "react";

const AboutPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>About Us | d2dspot - Our Story & Vision</title>
        <meta name="description" content="Learn about d2dspot's journey, our mission to empower founders with MVP development, and our technical expertise in UI/UX and AI integration." />
        <link rel="canonical" href="https://d2dspot.com/about" />
        <meta property="og:title" content="About Us | d2dspot - Product Development Agency" />
        <meta property="og:description" content="Discover d2dspot's mission: helping startups scale with design and engineering excellence." />
        <meta property="og:url" content="https://d2dspot.com/about" />
        <meta property="og:image" content="https://d2dspot.com/assets/d2dspot.png" />
      </Helmet>
      <Navbar />
      <div className=" overflow-hidden">
        <AnimatedGridWrapper />
        <Section1 />
      </div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section7 className='bg-violet-50' />
      <div className="overflow-hidden rounded-tl-[42px] rounded-tr-[42px]  ">
        <AnimatedGridWrapper />
        <Footer
          title={"Is Your Brand Ready for a Digital Upgrade?"}
          desc={
            "Transform your presence with design systems, intelligent interfaces, and seamless experiences built to engage users and grow your business."
          }
          buttonText={"Request a Free Consultation"}
        />
      </div>
    </div>
  );
};

export default AboutPage;
