import React, { useState } from "react";
import ButtonStar from "../buttons/ButtonStar";
import { FaPlay } from "react-icons/fa";
import Modal from "../layouts/Modal";
import FileViewPopup from "../popUps/FileViewPopup";

const Section3 = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoUrl] = useState("/content/sample.mp4");

  return (
    <div className="w-full px-4 sm:px-10 lg:px-20 py-12 sm:py-16 bg-white flex flex-col items-center">
      <div className="w-full flex flex-col lg:flex-row items-start gap-8 sm:gap-10 max-w-[1140px]">
        {/* Video Block */}
        <div className="relative rounded-[20px] overflow-hidden w-full lg:w-[555px] h-[240px] sm:h-96 group">
          <video
            src={videoUrl}
            className="w-full h-full object-cover"
          />
          {/* Play Button */}
          <button
            className="absolute inset-0 flex items-center justify-center"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-full flex items-center justify-center shadow-lg transition-transform group-hover:scale-105">
              <FaPlay size={24} className="text-[#4B4EFC] ml-1" />
            </div>
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex flex-col gap-8 sm:gap-12">
          {/* Heading */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <ButtonStar>In Fact Survey</ButtonStar>
            <p className="text-slate-800 text-lg sm:text-2xl leading-relaxed sm:leading-[162%]">
              <span className="font-medium">
                87% of professionals pursue learning for direct career benefits
                like promotions or new career paths.
              </span>{" "}
              <span className="font-normal">
                D2dspot Academy delivers the mentorship guidance that propels
                you forward.
              </span>
            </p>
          </div>

          {/* Testimonial */}
          <div className="flex  justify-start items-center gap-4 flex-wrap">
            <img
              src="/assets/pfp.jpg"
              alt="Vincent Luggerius"
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-[0px_34px_68px_rgba(0,0,0,0.1)]"
            />
            <div className="flex flex-col">
              <div className="text-blue-950 text-base sm:text-xl font-medium tracking-tight">
                Vincent Luggerius
              </div>
              <div className="text-slate-500 text-sm sm:text-base">
                HRD in A Company
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Video Preview"
        className="max-w-4xl w-[90vw]"
      >
        <FileViewPopup
          fileType="video"
          fileUrl={videoUrl}
          title="D2dspot Introduction"
          hideDownload={true}
        />
      </Modal>
    </div>
  );
};

export default Section3;
