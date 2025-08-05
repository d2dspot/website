import { formatDate } from "@/lib/utils";
import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCardV2 = ({ blog }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="w-full max-w-[358px] h-auto sm:h-[405px] bg-[#F8F8FF] rounded-[20px] border border-gray-200 flex flex-col justify-start overflow-hidden cursor-pointer hover:shadow-md transition-all"
    >
      {/* Image + Category */}
      <div className="relative w-full h-[200px] sm:h-[203px]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover rounded-t-[20px]"
        />
        <div className="absolute top-2 right-2 h-8 px-4 py-1 bg-white rounded-2xl shadow text-blue-950 text-xs font-medium flex items-center">
          {blog.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 sm:gap-3 p-3 sm:p-4">
        {/* Meta */}
        <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-blue-950 max-w-full whitespace-nowrap overflow-hidden">
          <img
            src={blog.headLogo}
            alt="logo"
            className="w-[23px] h-3 aspect-[23.9/12]"
          />
          <span className="capitalize">{blog.head}</span>
          <div className="w-1 h-1 bg-blue-950 rounded-full" />
          <span>{formatDate(blog.date)}</span>
          <div className="w-1 h-1 bg-blue-950 rounded-full" />
          <span>{blog.readTime}</span>
        </div>

        {/* Title */}
        <div className="text-blue-950 font-semibold text-sm sm:text-base leading-5">
          {blog.title}
        </div>
        
        {/* Excerpt */}
        <div className="text-neutral-500 text-sm leading-normal line-clamp-3">
          {blog.excerpt}
        </div>
      </div>
    </div>
  );
};

export default BlogCardV2;
