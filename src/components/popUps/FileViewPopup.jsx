import React from "react";
import { MdDownload } from "react-icons/md";

// Add `hideDownload` to props
const FileViewPopup = ({ fileType, fileUrl, imageUrl, title, hideDownload = false }) => {
  if (!fileUrl && !imageUrl) return <p className="text-gray-500">No file to preview.</p>;

  const fileExt = title?.split(".").pop()?.toLowerCase();
  const absoluteUrl = `${window.location.origin}${fileUrl || imageUrl}`;
  const isExcel = ["xlsx", "xls", "csv"].includes(fileExt);
  const isPublic = absoluteUrl.startsWith("https://");

  const getIframeSrc = () => {
    if (isExcel && isPublic) {
      return `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(absoluteUrl)}`;
    }
    return absoluteUrl;
  };

  const iframeSrc = getIframeSrc();
  const fileDownloadUrl = fileUrl || imageUrl;

  return (
    <div className="relative w-full max-h-[80vh] overflow-auto">
      {/* Conditionally show download button */}
      {!hideDownload && fileDownloadUrl && (
        <a
          href={fileDownloadUrl}
          download
          title="Download File"
          className="absolute top-3 right-3 z-10 bg-white/40 hover:bg-gray-100 p-2 rounded-md shadow-md"
        >
          <MdDownload size={20} className="text-gray-700" />
        </a>
      )}

      {/* Preview content */}
      {fileType === "image" && imageUrl ? (
        <img
          src={imageUrl}
          alt="Full Preview"
          className="w-full h-auto object-contain rounded-lg"
        />
      ) : fileType === "video" && fileUrl ? (
        <video
          src={fileUrl}
          controls
          autoPlay
          className="w-full max-h-[75vh] rounded-lg"
        />
      ) : iframeSrc && (fileType === "document" || fileType === "code" || isExcel) ? (
        <iframe
          src={iframeSrc}
          title={title}
          className="w-full h-[75vh] border border-gray-300 rounded-lg"
        />
      ) : (
        <p className="text-gray-500 p-4">
          Preview not supported. {isExcel && !isPublic && "Please host under HTTPS to preview."}
        </p>
      )}
    </div>
  );
};

export default FileViewPopup;
