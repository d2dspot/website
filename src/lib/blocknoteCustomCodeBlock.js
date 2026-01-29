import { codeBlock as defaultCodeBlock } from "@blocknote/code-block";

export const customCodeBlock = {
  ...defaultCodeBlock,
  defaultLanguage: "text",
  supportedLanguages: Object.fromEntries(
    Object.entries(defaultCodeBlock.supportedLanguages).filter(
      ([key]) => key !== "swift"
    )
  ),
  createHighlighter: async () => {
    const { createHighlighter } = await import("shiki");
    return createHighlighter({
      themes: ["github-dark"],
      langs: [
        "javascript",
        "typescript",
        "html",
        "css",
        "python",
        "json",
        "markdown",
        "bash",
        "sql",
      ],
    });
  },
};
