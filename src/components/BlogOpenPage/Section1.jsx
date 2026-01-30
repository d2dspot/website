import { useCategory } from "@/context/CategoryContext";
import { formatDate } from "@/lib/utils";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Section1 = ({ blog }) => {
  const { category, title, head, headLogo, date, readTime } = blog;
  const { setSelectedCategory } = useCategory();
  const navigate = useNavigate();

  const handleCategoryClick = () => {
    navigate(`/blog#categoryBlogDiv`);
    setSelectedCategory(category);

    setTimeout(() => {
      const categoryDiv = document.getElementById("categoryBlogDiv");
      if (categoryDiv) {
        categoryDiv.scrollIntoView({
          behavior: "smooth", // Smooth scrolling
          block: "center", // Align 
          inline: "nearest", // horizontal alignment
        });
      }
    }, 100); // Small delay to ensure the page is fully loaded 
  };

  return (
    <div className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-12 mx-auto max-w-screen-xl flex flex-col gap-10">
      <div className="w-full flex flex-col gap-6">
        {/* Breadcrumb & Title */}
        <div className="text-base sm:text-lg md:text-xl text-blue-950 font-medium leading-relaxed tracking-tight">
          <Link
            to="/blog"
            className="mx-1 text-blue-950 hover:underline hover:text-blue-600"
          >
            Blog
          </Link>
          |
          <span
            onClick={handleCategoryClick}
            className="mx-1 cursor-pointer text-blue-950 hover:underline hover:text-blue-600"
          >
            {category}
          </span>
          | <span className="mx-1">{title}</span>
        </div>

        {/* Main Heading */}
        <div className="flex flex-col">
          <h1 className="text-blue-950 text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            {title}
          </h1>
        </div>

        {/* Author, Date, Read Time */}
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center text-sm sm:text-base text-blue-950 font-normal">
          <div className="flex items-center gap-3">
            <img src={headLogo} alt="head logo" className="w-8 h-8 rounded-full object-cover" />
            <span className="capitalize">{head}</span>
          </div>

          <div className="w-2 h-2 bg-blue-950 rounded-full" />

          <span>{formatDate(date)}</span>

          <div className="w-2 h-2 bg-blue-950 rounded-full" />

          <span>{readTime}</span>
        </div>
      </div>
    </div>
  );
};

export default Section1;