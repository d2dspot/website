import React from "react";
import ButtonStar from "../buttons/ButtonStar";
import ClientCard from "../cards/ClientCard";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { clientLogo } from "@/assets/data";

const Section2 = () => {
  return (
    <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[150px] py-4 sm:py-12">
      <div className="flex flex-col gap-8 items-center justify-center w-full max-w-[1440px] mx-auto">
        <ButtonStar>Client Confidence</ButtonStar>

        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight font-normal tracking-normal text-center max-w-[625px]">
          Future-Driven{" "}
          <span className="font-semibold text-primary">Companies</span>
        </h3>

        {/* Velocity Scroll Section */}
        <div className="relative w-full flex items-center justify-center overflow-hidden">
          <VelocityScroll defaultVelocity={-1} numRows={1}>
            <div className="inline-flex flex-nowrap gap-6 sm:gap-10 px-1 whitespace-nowrap">
              {clientLogo
                .filter((client) => client.status)
                .map((client, idx) => (
                  <ClientCard key={idx} img={client.logo} />
                ))}
            </div>
          </VelocityScroll>
          {/* Optional: Gradient fade effects */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white/80" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white/80" />
        </div>
      </div>
    </div>
  );
};

export default Section2;
