import { Helmet } from "react-helmet-async";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogs } from "@/assets/data";
import Section1 from "@/components/BlogOpenPage/Section1";
import Section2 from "@/components/BlogOpenPage/Section2";
import Section3 from "@/components/BlogOpenPage/Section3";
import Section4 from "@/components/BlogOpenPage/Section4";
import Section8 from "@/components/home/Section8";
import AnimatedGridWrapper from "@/components/ui/AnimatedGridWrapper";
import Footer from "@/components/layouts/Footer";

const BlogDetailPage = () => {
  const { id } = useParams();
  const blog = blogs.find((item) => item.id === id);
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(`/content/${id}.md`)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent("Content not available."));
  }, [id]);

  if (!blog)
    return (
      <div className="p-10 text-center text-red-600 font-semibold text-xl">
        Blog not found
      </div>
    );

  return (
    <div className="w-full">
      <Helmet>
        <title>{`${blog.title} | d2dspot Blog`}</title>
        <meta name="description" content={blog.excerpt || `Read the full article about ${blog.title} on d2dspot's professional blog.`} />
        <link rel="canonical" href={`https://d2dspot.com/blog/${id}`} />
      </Helmet>
      {/* Blog Header */}
      <Section1 blog={blog} />

      {/* Main Content + TOC */}
      <div className=" w-full sm:max-w-screen-xl px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 mx-auto py-12">
        <div className="flex flex-col lg:flex-row gap-12">

          {/* Sticky TOC - Hidden on small screens */}
          <div className="hidden sm:block w-[268px] flex-shrink-0">
            <Section2 content={content} />
          </div>

          {/* Main Blog Content Area */}
          <div className="w-full  flex-1 flex flex-col gap-8">
            <Section4
              title="Key Insight"
              content="Always validate your assumptions before shipping production code. Clear documentation can prevent team misalignment and customer confusion."
            />
            <Section3 content={content} />
          </div>
        </div>
      </div>


      {/* Featured Articles */}
      <Section8
        showFeatureTag={false}
        headingPart1="Featured "
        headingPart2="Articles"
      />

      {/* Footer */}
      <div className="overflow-hidden rounded-tl-[42px] rounded-tr-[42px] relative z-20">
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
  );
};

export default BlogDetailPage;
