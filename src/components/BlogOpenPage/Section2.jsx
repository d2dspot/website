import React, { useEffect, useState } from "react";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const Section2 = ({ content = "" }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [isVisible, setIsVisible] = useState(true); 

  useEffect(() => {
    const lines = content.split("\n");
    const extracted = lines
      .filter((line) => line.startsWith("#"))
      .map((line) => {
        const level = line.match(/^#+/)[0].length;
        if (level > 2) return null;

        const text = line
          .replace(/^#+\s*/, "")
          .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
          .trim();

        const id = text
          .toLowerCase()
          .replace(/[^\w\s-]/g, "")
          .replace(/\s+/g, "-");

        return { level, text, id };
      })
      .filter(Boolean);
    setHeadings(extracted);
  }, [content]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible?.target?.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0.4   }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  return (
    <div className=" w-[268px] h-fit gap-3 rounded-[8px] md:flex flex-col sticky top-24 bg-white text-[#183B56] text-sm hidden sm:block">
      {/* Header with Toggle Button */}
      <div className="flex justify-between items-center px-3 pt-3">
        <h3 className="text-2xl font-medium leading-8 tracking-normal overflow-hidden whitespace-nowrap">
          Table of Contents
        </h3>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-xl text-primary"
        >
          {isVisible ? <FaEye /> : <FaEyeSlash className=" text-slate-400"/>}
        </button>
      </div>

      {/* TOC Links */}
      {isVisible && (
        <nav className="space-y-2 w-full rounded-[8px] border p-3 gap-2.5 border-[#eaf2ff]">
          {headings.map((h, i) => {
            const isActive = activeId === h.id;
            return (
              <a
                key={i}
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.getElementById(h.id);
                  if (target) {
                    const yOffset = -100;
                    const y =
                      target.getBoundingClientRect().top +
                      window.scrollY +
                      yOffset;
                    window.scrollTo({ top: y, behavior: "smooth" });
                  }
                }}
                className={`flex flex-row p-[13px]  gap-2.5 text-base font-medium leading-normal tracking-normal transition-colors ${
                  isActive
                    ? "bg-[#EAF2FF] border-l-1 border-[#1565D8] rounded-r-md "
                    : "border-l-2 border-transparent"
                }`}
                style={{
                  paddingLeft: `${(h.level ) * 5}px`,
                  cursor: "pointer",
                }}
              >
                {h.text}
              </a>
            );
          })}
        </nav>
      )}
    </div>
  );
};

export default Section2;
