import { Helmet } from "react-helmet-async";
import Section1 from '@/components/academy/Section1'
import Section2 from '@/components/academy/Section2'
import Section3 from '@/components/academy/Section3'
import Section4 from '@/components/academy/Section4'
import Section5 from '@/components/academy/Section5'
import Section6 from '@/components/academy/Section6'
import Footer from '@/components/layouts/Footer'
import Navbar from '@/components/layouts/Navbar'
import AnimatedGridWrapper from '@/components/ui/AnimatedGridWrapper'
import React from 'react'

const AcademyPage = () => {
  return (
    <div className="flex flex-col w-full">
      <Helmet>
        <title>d2d Academy | Premier AI Education & Product Growth</title>
        <meta name="description" content="Master the future of technology at d2d Academy. We provide premier AI education and workshops focused on integrating artificial intelligence into modern product development." />
        <link rel="canonical" href="https://d2dspot.com/academy" />
      </Helmet>
      <Navbar />
      <div className=" overflow-hidden">
        <AnimatedGridWrapper />
        <Section1 />
        <Section2 />
      </div>
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
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
  )
}

export default AcademyPage
