import { Helmet } from "react-helmet-async";
import AnimatedGridWrapper from "@/components/ui/AnimatedGridWrapper";
import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Section4 from "@/components/home/Section4";
import Section5 from "@/components/home/Section5";
import Section6 from "@/components/home/Section6";
import Section7 from "@/components/home/Section7";
import Section8 from "@/components/home/Section8";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

const HomePage = () => {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>d2dspot | Product Development Agency | UI/UX & AI Product Studio</title>
        <meta name="description" content="d2dspot turns your vision into market-ready digital products. Specializing in MVP development for founders, expert UI/UX design, and AI integration for SaaS." />
        <link rel="canonical" href="https://d2dspot.com/" />
      </Helmet>
      <Navbar />
      <div className="overflow-hidden">
        <AnimatedGridWrapper />
        <Section1 />
      </div>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
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

export default HomePage;
