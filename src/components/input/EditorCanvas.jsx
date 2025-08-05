import React, { useEffect, useRef, useMemo } from "react";
import customTheme from "@/lib/customTheme";

import {
  useCreateBlockNote,
  SuggestionMenuController,
  getDefaultReactSlashMenuItems,
} from "@blocknote/react";

import { BlockNoteView } from "@blocknote/mantine";
import { customCodeBlock } from "@/lib/blocknoteCustomCodeBlock"; 

import "@blocknote/mantine/style.css";
import "@blocknote/core/fonts/inter.css";

import {
  BlockNoteSchema,
  combineByGroup,
  filterSuggestionItems,
} from "@blocknote/core";
import * as locales from "@blocknote/core/locales";

import {
  getMultiColumnSlashMenuItems,
  multiColumnDropCursor,
  locales as multiColumnLocales,
  withMultiColumn,
} from "@blocknote/xl-multi-column";

import { showErrorToast } from "@/lib/Toast";

const EditorCanvas = ({ onEditorReady }) => {
  const containerRef = useRef(null);

  // Create editor with multi-column support, without initial content
  const editor = useCreateBlockNote({
  codeBlock: customCodeBlock,
    schema: withMultiColumn(BlockNoteSchema.create()),
    dropCursor: multiColumnDropCursor,
    dictionary: {
      ...locales.en,
      multi_column: multiColumnLocales.en,
    },
    tables: {
      splitCells: true,
      cellBackgroundColor: true,
      cellTextColor: true,
      headers: true,
    },
  });

  // Merge default + multi-column slash menu items
  const getCustomSlashMenuItems = useMemo(() => {
    return async (query) =>
      filterSuggestionItems(
        combineByGroup(
          getDefaultReactSlashMenuItems(editor),
          getMultiColumnSlashMenuItems(editor)
        ),
        query
      );
  }, [editor]);

  // Load markdown from file
  useEffect(() => {
    const loadMarkdown = async () => {
      try {
        const response = await fetch("/content/mdfile.md");
        const markdown = await response.text();
        const blocks = await editor.tryParseMarkdownToBlocks(markdown);

        if (blocks && blocks.length > 0) {
          editor.replaceBlocks(editor.document, blocks);
          editor.focus();
        }
      } catch (error) {
        console.error("Error loading markdown file:", error);
        if (error.message.includes("Unsupported conditional")) {
          showErrorToast(
            "The selected code contains unsupported regex syntax for JavaScript.",
            "Unsupported Regex"
          );
        } else {
          showErrorToast(
            "Failed to load markdown content. Check console for details.",
            "Load Error"
          );
        }
      }
    };

    if (editor) {
      loadMarkdown();
      if (onEditorReady) onEditorReady(editor);
    }
  }, [editor, onEditorReady]);

  return (
    <div
      ref={containerRef}
      data-lenis-prevent-wheel
      className="rounded-xl w-full max-h-[500px] h-[500px] overflow-auto relative"
    >
      <BlockNoteView
        editor={editor}
        theme={customTheme}
        slashMenu={false}
        className="h-full w-full px-4 py-2"
      >
        <SuggestionMenuController
          triggerCharacter="/"
          getItems={getCustomSlashMenuItems}
        />
      </BlockNoteView>
    </div>
  );
};

export default EditorCanvas;
