import React, { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import ButtonSimple from '@/components/buttons/ButtonSimple';
import ButtonSimpleFilled from '@/components/buttons/ButtonSimpleFilled';
import DashboardLayout from '@/components/layouts/DashboardLayout';
import EditorCanvas from "@/components/input/EditorCanvas";
import { Import } from "iconsax-reactjs";

const ContentEditor = ({ onSave = () => {}, onCancel = () => {} }) => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const title = state?.title || "Editor";
  const navigateTo = state?.backPath || "/admin";
  const content = state?.content || "";

  const [editorContent, setEditorContent] = useState(content);
  const [editorInstance, setEditorInstance] = useState(null);
  const fileInputRef = useRef();

  const triggerImport = () => {
    if (fileInputRef.current) fileInputRef.current.click();
  };

  const handleImport = async (e) => {
    const file = e.target.files?.[0];
    if (!file || !editorInstance) return;

    const text = await file.text();
    const blocks = await editorInstance.tryParseMarkdownToBlocks(text);

    if (blocks && blocks.length > 0) {
      editorInstance.replaceBlocks(editorInstance.document, blocks);
    } else {
      alert("Failed to import Markdown.");
    }
  };

  return (
    <DashboardLayout activeMenu={title + "s"}>
      <div className="w-full py-6 flex flex-col gap-6">
        <div className="flex items-center gap-3 px-3">
          <h2 className="text-gray-900 text-3xl font-medium">{title}</h2>
          <div className="border-r-1 border-zinc-400 w-1 h-8"></div>
          <button
            onClick={() => navigate(navigateTo)}
            className="text-primary text-lg"
          >
            Back to {title} table
          </button>
        </div>

        <div className="flex-1 w-full p-6 bg-violet-50 rounded-3xl shadow-md flex flex-col gap-6">
          <div className="flex flex-col gap-2 w-full">
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-row gap-6 items-center justify-center">
                <h3 className="text-gray-900 text-2xl font-semibold">{title} Content</h3>
                <ButtonSimpleFilled onClick={triggerImport} className="h-fit">
                  <Import /> Import md File
                </ButtonSimpleFilled>
                <input
                  type="file"
                  accept=".md"
                  ref={fileInputRef}
                  onChange={handleImport}
                  className="hidden"
                />
              </div>
              <div className="flex gap-3 w-72">
                <ButtonSimple className="self-stretch w-full" onClick={onCancel}>
                  Cancel
                </ButtonSimple>
                <ButtonSimpleFilled
                  className="self-stretch w-full"
                  onClick={() => onSave(editorContent)}
                >
                  Save
                </ButtonSimpleFilled>
              </div>
            </div>
            <hr className="border border-gray-100" />
          </div>

          {/* Editor */}
            <EditorCanvas onEditorReady={setEditorInstance}  />
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ContentEditor;
