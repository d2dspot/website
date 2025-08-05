import { useNavigate } from "react-router-dom";
import { formatDate } from "@/lib/utils";

const BlogCard = ({ blog, fullWidth = false, showExcerpt = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${blog.id}`);
  };

  const isHorizontal = fullWidth || blog.small;

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer p-4 sm:p-5 bg-purple-50 rounded-[20px]  outline-1 outline-offset-[-1px] outline-gray-300 hover:shadow-md transition-all
        flex ${isHorizontal ? "flex-col sm:flex-row" : "flex-col"} gap-4 sm:gap-6 
        w-full ${fullWidth ? "h-auto sm:h-[163px]" : "max-w-[558px]"}
      `}
    >
      {/* Image Container */}
      <div
        className={`relative ${isHorizontal
          ? "w-full sm:w-[192px] h-[180px] sm:h-[123px] flex-shrink-0"
          : "w-full h-[200px] sm:w-[518px] sm:h-[290px]"
        }`}
      >
        <img
          src={blog.image}
          alt={blog.title}
          className={`rounded-[12px] object-cover w-full h-full`}
        />
        <div className="absolute top-2 right-2 h-8 px-4 py-1 bg-white rounded-2xl shadow text-blue-950 text-xs font-medium flex items-center">
          {blog.category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3.5 w-full">
        <div className="flex flex-wrap items-center gap-2 text-sm text-blue-950 max-w-full whitespace-nowrap overflow-hidden">
          <img src={blog.headLogo} alt="logo" className="w-5 h-3 aspect-[23.9/12]" />
          <span className="capitalize text-xs sm:text-sm">{blog.head}</span>
          <div className="w-1 h-1 bg-blue-950 rounded-full" />
          <span className="text-xs sm:text-sm">{formatDate(blog.date)}</span>
          <div className="w-1 h-1 bg-blue-950 rounded-full" />
          <span className="text-xs sm:text-sm">{blog.readTime}</span>
        </div>

        <div className="text-blue-950 font-semibold text-base sm:text-lg leading-6">
          {blog.title}
        </div>

        {showExcerpt && blog.excerpt && (
          <div className="text-neutral-500 text-sm sm:text-base leading-normal hidden sm:block">
            {blog.excerpt}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogCard;
