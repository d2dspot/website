import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";
import remarkEmoji from "remark-emoji";

const Section3 = ({ content = "" }) => {
  // Show loading or error messages
  if (!content) {
    return (
      <div className="text-center py-10 text-gray-400">Loading blog content...</div>
    );
  }

  if (content === "Content not available.") {
    return (
      <div className="text-center py-10 text-red-500">Failed to load content.</div>
    );
  }

  // Memoized markdown rendering
  const renderedContent = useMemo(
    () => (
      <ReactMarkdown
        remarkPlugins={[remarkEmoji]}
        rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings, rehypeHighlight]}
        components={{
          h1: ({ node, ...props }) => (
            <h1
              className="scroll-mt-[100px] font-[Poppins] text-[30px] sm:text-[36px] md:text-[40px] font-semibold leading-[1.2] tracking-tight my-6 break-normal whitespace-pre-wrap sm:whitespace-normal"
              {...props}
            />
          ),
          h2: ({ node, ...props }) => (
            <h2
              className="scroll-mt-[100px] font-[Poppins] text-[24px] sm:text-[28px] md:text-[32px] font-medium leading-[1.3] tracking-tight my-5 break-normal whitespace-pre-wrap sm:whitespace-normal"
              {...props}
            />
          ),
          p: ({ node, ...props }) => (
            <p
              className="font-[Poppins] text-[16px] sm:text-[17px] leading-[28px] my-4 break-normal whitespace-pre-wrap sm:whitespace-normal"
              {...props}
            />
          ),
          img: ({ node, ...props }) => (
            <div className="w-full flex flex-col items-center my-8">
              <img
                className="w-full max-w-full sm:max-w-[818px] h-auto object-contain rounded-lg"
                loading="lazy"
                {...props}
              />
              <div className="mt-2 text-center text-sm font-[Poppins] text-[#183B56] leading-relaxed italic break-normal whitespace-pre-wrap sm:whitespace-normal">
                {props.alt || "Image"}
              </div>
            </div>
          ),
          ul: ({ node, ...props }) => (
            <ul
              className="list-disc list-inside font-[Poppins] text-[16px] leading-[28px] my-2 ml-4 break-normal whitespace-pre-wrap sm:whitespace-normal  "
              {...props}
            />
          ),
          ol: ({ node, ...props }) => (
            <ol
              className="list-decimal list-inside font-[Poppins] text-[16px] leading-[28px] my-2  ml-4 break-normal whitespace-pre-wrap sm:whitespace-normal"
              {...props}
            />
          ),
          li: ({ node, ...props }) => (
            <li className="mb-2 break-normal whitespace-pre-wrap sm:whitespace-normal " {...props} />
          ),
          a: ({ node, ...props }) => (
            <a
              className="text-blue-600 underline font-[Poppins] hover:text-blue-800 transition break-normal whitespace-pre-wrap"
              target="_blank"
              rel="noopener noreferrer"
              {...props}
            />
          ),
          blockquote: ({ node, ...props }) => (
            <blockquote
              className="border-l-4 border-blue-300 pl-4 italic text-gray-600 my-4 break-normal whitespace-pre-wrap sm:whitespace-normal"
              {...props}
            />
          ),
          pre: ({ node, ...props }) => (
            <pre
              className="bg-[#f5f5f5] text-sm text-gray-800 font-mono p-4 my-4 rounded-lg overflow-auto whitespace-pre-wrap break-normal"
              {...props}
            />
          ),
          code: ({ node, inline, ...props }) =>
            inline ? (
              <code
                className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono break-normal whitespace-pre-wrap"
                {...props}
              />
            ) : (
              <code
                className="block break-normal whitespace-pre-wrap"
                {...props}
              />
            ),
          table: ({ node, ...props }) => (
            <div className="overflow-x-auto my-4">
              <table
                className="min-w-full border border-gray-300 text-sm text-left"
                {...props}
              />
            </div>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    ),
    [content]
  );

  return (
    <div className="sm:max-w-[818px] w-full mx-auto px-4 sm:px-6 md:px-10 py-10 text-[#183B56]">
      {renderedContent}
    </div>
  );
};

export default Section3;
