import React, { useState, useMemo, useEffect } from "react";
import BlogCardV2 from "../cards/BlogCardV2";
import ButtonGradient from "../buttons/ButtonGradient";
import ButtonPlain from "../buttons/ButtonPlain";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { blogs } from "@/assets/data";
import { useCategory } from "@/context/CategoryContext";

const Section3 = () => {
  const { selectedCategory, setSelectedCategory } = useCategory();
  const [visibleCount, setVisibleCount] = useState(3);

  const categories = useMemo(() => {
    const unique = [...new Set(blogs.map((b) => b.category))];
    return ["All", ...unique];
  }, []);

  const adjustedVisibleCount = useMemo(() => {
    const selectedIndex = categories.indexOf(selectedCategory);
    if (selectedIndex === -1) return 4;
    return Math.max(selectedIndex + 1, 4);
  }, [categories, selectedCategory]);

  const [visibleCategoryCount, setVisibleCategoryCount] = useState(adjustedVisibleCount);

  // Expand visible buttons if needed
  useEffect(() => {
    setVisibleCategoryCount((prev) => Math.max(prev, adjustedVisibleCount));
  }, [adjustedVisibleCount]);

  // Scroll to category section on load
  useEffect(() => {
    if (window.location.hash === "#categoryBlogDiv") {
      document.getElementById("categoryBlogDiv")?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  }, []);

  const filteredBlogs = useMemo(() => {
    const sorted = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
    if (selectedCategory === "All") return sorted;
    return sorted.filter((b) => b.category === selectedCategory);
  }, [selectedCategory]);

  const handleLoadMoreBlogs = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const handleMoreCategories = () => {
    setVisibleCategoryCount((prev) => Math.min(prev + 3, categories.length));
  };

  const handleLessCategories = () => {
    setVisibleCategoryCount((prev) => Math.max(4, prev - 3));
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setVisibleCount(3);
    setTimeout(() => {
      const el = document.querySelector(`[data-category="${category}"]`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      }
    }, 100);
  };

  const showMoreButton = visibleCategoryCount < categories.length;
  const showLessButton = visibleCategoryCount > 4;

  return (
    <div
      id="categoryBlogDiv"
      className="w-full px-4 sm:px-6 md:px-12 lg:px-24 py-8 bg-white flex flex-col items-center gap-8"
    >
      {/* Category Buttons */}
      <div className="w-full max-w-6xl flex flex-wrap gap-3 justify-start items-center">
        {categories.slice(0, visibleCategoryCount).map((item) => {
          const isActive = item === selectedCategory;
          const ButtonComponent = isActive ? ButtonGradient : ButtonPlain;

          return (
            <ButtonComponent
              key={item}
              data-category={item}
              onClick={() => handleCategoryChange(item)}
              className={`w-fit text-sm ${
                !isActive
                  ? "bg-[#f8f8ff] outline-2 outline-gray-200 text-slate-500 shadow-none"
                  : ""
              }`}
            >
              {item}
            </ButtonComponent>
          );
        })}

        {showMoreButton && (
          <ButtonPlain onClick={handleMoreCategories}>
            More <IoIosArrowDown size={16} className="ml-1" />
          </ButtonPlain>
        )}

        {showLessButton && (
          <ButtonPlain onClick={handleLessCategories}>
            Less <IoIosArrowUp size={16} className="ml-1" />
          </ButtonPlain>
        )}
      </div>

      {/* Blog Cards */}
      <div className="w-full max-w-6xl flex flex-col items-center gap-8">
        <div className="w-full flex flex-wrap justify-center gap-6">
          {filteredBlogs.slice(0, visibleCount).map((blog, index) => (
            <BlogCardV2 key={index} blog={blog} />
          ))}
        </div>
      </div>

      {/* Load More Button */}
      {visibleCount < filteredBlogs.length && (
        <ButtonGradient onClick={handleLoadMoreBlogs}>
          Load More <IoIosArrowDown size={20} className="ml-2" />
        </ButtonGradient>
      )}
    </div>
  );
};

export default Section3;
