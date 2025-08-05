import Section3 from "@/components/BlogPage/Section3";
import Section8 from "@/components/home/Section8";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import AnimatedGridWrapper from "@/components/ui/AnimatedGridWrapper";
import React from "react";

const BlogPage = () => {
  return (
    <div className="flex flex-col w-full mx-auto">
      <Navbar />

      {/* Hero Section with Visuals */}
    {/* Hero Section with Visuals */}
<div className="relative w-full mt-16 sm:mt-20 mx-auto  sm:overflow-visible py-4 sm:py-12 flex items-center justify-center overflow-hidden">
  {/* Radial & Linear Backgrounds */}
  <div className="absolute -top-50 -left-100 w-[60vw] h-[100vh] bg-[radial-gradient(circle,rgba(99,102,241,0.3)_0%,rgba(255,255,255,0)_50%)] blur-3xl"></div>
  <div className="absolute -top-50 -right-100 w-[60vw] h-[100vh] bg-[radial-gradient(circle,rgba(99,102,241,0.3)_0%,rgba(255,255,255,0)_50%)] blur-3xl"></div>
  <div className="absolute -top-50 right-0 w-[100vw] h-[90vh] bg-[linear-gradient(to_bottom,rgba(99,102,241,0.5)_0%,rgba(255,255,255,0)_100%)] blur-3xl"></div>

  {/* Section8 Content Layer */}
  <div className="relative z-10 w-full">
    <Section8 />
  </div>
</div>


      {/* Blog Section */}
      <div className=" relative z-20 mx-auto">
        <Section3 />
      </div>

      {/* Footer and Animation */}
      <div className="overflow-hidden rounded-tl-[42px] rounded-tr-[42px] relative z-20">
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

export default BlogPage;
