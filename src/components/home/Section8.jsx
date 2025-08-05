import React, { useState, useMemo } from "react";
import SearchInput from "@/components/input/SearchInput";
import ButtonStar from "../buttons/ButtonStar";
import BlogCard from "../cards/BlogCard";
import { blogs } from "@/assets/data";

const Section8 = ({
  showFeatureTag = true,
  headingPart1 = "Latest Insights: Shaping the",
  headingPart2 = "Future of AI",
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchActivated, setSearchActivated] = useState(false);

  const sortedBlogs = useMemo(() => {
    return [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date));
  }, []);

  const filteredBlogs = useMemo(() => {
    if (!searchActivated || searchQuery.trim() === "") return [];
    return sortedBlogs.filter(
      (b) =>
        b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        b.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, sortedBlogs, searchActivated]);

  const showSearchResults = searchActivated && searchQuery.trim().length > 0;

  const mainBlog = sortedBlogs[0];
  const sideBlogs = sortedBlogs.slice(1, 4);

  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-36 py-4 sm:py-12 lg:py-16 flex flex-col items-center gap-12">
      <div className="w-full max-w-[1160px] flex flex-col items-start gap-6">
        {/* Heading */}
        <div className="w-full flex flex-col gap-6 justify-center sm:justify-start ">
          {showFeatureTag && (
            <div className="inline-flex justify-center sm:justify-start items-center gap-2 ">
              <ButtonStar>Features Blogs</ButtonStar>
            </div>
          )}

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-4">
            <div className="flex-1 flex flex-col gap-4">
              <div className="text-2xl sm:text-4xl md:text-5xl leading-snug sm:leading-[64px]">
                <span className="text-gray-900 font-normal">{headingPart1} </span>
                <span className="font-semibold text-primary">{headingPart2}</span>
              </div>
            </div>
            <SearchInput
              title="Search Article"
              buttonText="Search"
              onSearch={(value) => {
                setSearchQuery(value);
                setSearchActivated(true);
              }}
            />
          </div>
        </div>

        {/* Blog Display */}
        {showSearchResults ? (
          <div className="flex flex-col gap-6 w-full">
            {filteredBlogs.map((blog, idx) => (
              <BlogCard blog={blog} key={idx} fullWidth showExcerpt={true} />
            ))}
            {filteredBlogs.length === 0 && (
              <div className="text-gray-500">No articles found.</div>
            )}
          </div>
        ) : (
          <div className="w-full flex flex-col lg:flex-row gap-6">
            <BlogCard blog={mainBlog} showExcerpt={true} />
            <div className="flex flex-col gap-6 flex-1">
              {sideBlogs.map((blog, idx) => (
                <BlogCard blog={{ ...blog, small: true }} key={idx} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Section8;
