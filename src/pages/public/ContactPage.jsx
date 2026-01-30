import { Helmet } from "react-helmet-async";
import Section1 from "@/components/contact/Section1";
import Section2 from "@/components/contact/Section2";
import Section3 from "@/components/contact/Section3";
import Section7 from "@/components/home/Section7";
import Footer from "@/components/layouts/Footer";
import Navbar from "@/components/layouts/Navbar";
import AnimatedGridWrapper from "@/components/ui/AnimatedGridWrapper";
import React from "react";

const ContactPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>Contact Us | d2dspot - Start Your Project</title>
        <meta name="description" content="Ready to build your product? Contact d2dspot for a free consultation. Let's discuss your MVP build, SaaS platform, or AI integration project today." />
        <link rel="canonical" href="https://www.d2dspot.com/contact" />
        <meta property="og:title" content="Contact Us | d2dspot - Start Your Product Journey" />
        <meta property="og:description" content="Get in touch with d2dspot for expert MVP and AI product development." />
        <meta property="og:url" content="https://www.d2dspot.com/contact" />
        <meta property="og:image" content="https://www.d2dspot.com/assets/d2dspot.png" />
      </Helmet>
      <Navbar />

      {/* Background Wrapper */}
      <div className="relative w-full mx-auto overflow-hidden sm:overflow-visible py-12 flex items-center justify-center px-4 sm:px-6 lg:px-0">
        {/* Radial & Linear Backgrounds */}
        <div className="absolute -top-50 -left-60 w-[80vw] lg:w-[60vw] h-[100vh] bg-[radial-gradient(circle,rgba(99,102,241,0.3)_0%,rgba(255,255,255,0)_50%)] blur-3xl"></div>
        <div className="absolute -top-50 -right-60 w-[80vw] lg:w-[60vw] h-[100vh] bg-[radial-gradient(circle,rgba(99,102,241,0.3)_0%,rgba(255,255,255,0)_50%)] blur-3xl"></div>
        <div className="absolute -top-50 right-0 w-full h-[90vh] bg-[linear-gradient(to_bottom,rgba(99,102,241,0.5)_0%,rgba(255,255,255,0)_100%)] blur-3xl"></div>

        <Section1 />
      </div>

      <Section2 />
      <Section3 />
      <Section7 />

      <div className="overflow-hidden rounded-tl-[42px] rounded-tr-[42px]">
        <AnimatedGridWrapper />
        <Footer
          title={"Ready to Transform Your Business with AI?"}
          desc={
            "Let's discuss how D2dspot's responsible and sustainable AI solutions can drive your growth. Our experts are here to help you unlock new possibilities."
          }
          buttonText={"Request a Free Consultation"}
        />
      </div>
    </div>
  );
};

export default ContactPage;
