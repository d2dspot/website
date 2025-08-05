import React from 'react';
import ButtonStar from '../buttons/ButtonStar';
import { whycards } from '@/assets/data';

const Section6 = () => {
  return (
    <div className="flex flex-col w-full mx-auto self-stretch px-4 sm:px-10 lg:px-28 py-16 bg-violet-50 justify-start items-center gap-12">
      <div className="w-full max-w-[1200px] flex flex-col justify-start items-center gap-12">
        
        {/* Heading Section */}
        <div className="w-full flex flex-col justify-center items-center sm:justify-start sm:items-start gap-6">
          <ButtonStar>Why D2D Spot?</ButtonStar>

          <div className="w-full flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="flex-1 flex flex-col justify-center items-start gap-6">
              <h2 className="flex flex-col sm:flex-row w-full text-3xl sm:text-4xl lg:text-5xl font-normal leading-snug text-center  sm:text-left">
                Your Growth Is{" "}
                <span className="text-primary font-semibold">Our Expertise</span>
              </h2>
              <p className="text-slate-800 text-base sm:text-lg font-normal leading-relaxed text-center sm:text-left">
                Discover how ValOpt’s innovative AI solutions empower businesses to thrive ethically and efficiently in the digital age.
              </p>
            </div>

            {/* Hidden on mobile for now */}
            <div className="hidden lg:flex h-11 pl-3 pr-2 py-2 opacity-0 bg-indigo-100 rounded-xl shadow-[1px_0.77px_0.77px_0px_rgba(255,255,255,0.07),_inset_0px_0px_4.3px_0px_rgba(75,78,252,1.00)] items-center gap-[3.06px]">
              <div className="text-indigo-600 text-base font-medium leading-tight">Read More</div>
              <div className="size-5 relative overflow-hidden">
                <div className="w-1.5 h-3.5 left-[7px] top-[3.50px] absolute outline-2 outline-offset-[-0.98px] outline-indigo-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whycards.map((card, idx) => (
            <div key={idx} className="w-full p-5 bg-[#F8F8FF] rounded-[20px]  outline-1 outline-offset-[-1px] outline-Color flex flex-col justify-start items-start gap-6">
              <div className="w-full flex flex-col justify-start items-center gap-6">
                <div className="size-14 relative overflow-hidden">
                  {Array.isArray(card.img) ? (
                    <>
                      {card.img[0] && (
                        <img
                          className="size-4 left-[22.50px] top-[4.66px] absolute bg-blend-overlay"
                          src={card.img[0]}
                        />
                      )}
                      {card.img[1] && (
                        <img
                          className="w-14 h-8 left-[2.59px] top-[21.72px] absolute bg-blend-overlay"
                          src={card.img[1]}
                        />
                      )}
                    </>
                  ) : (
                    <img
                      className="w-11 h-12 left-[6px] top-[6px] absolute bg-blend-overlay"
                      src={card.img}
                    />
                  )}
                </div>

                <div className="w-full flex flex-col justify-start items-center gap-3.5">
                  <h3 className="text-center text-xl font-medium text-primary">{card.title}</h3>
                  <p className="text-center text-sm text-slate-800 leading-tight">{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Section6;
