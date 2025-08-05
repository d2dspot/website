import React from "react";
import { More, Copy, Edit, Trash } from "iconsax-reactjs";
import { PlayCircle } from "iconsax-reactjs";
import { MdFullscreen, MdDownload } from "react-icons/md";
import { FaFileCode, FaFileImage, FaPlay } from "react-icons/fa";
import { BsFillFileEarmarkRichtextFill } from "react-icons/bs";
import { FolderCloud } from "iconsax-reactjs";
import ButtonSimple from "@/components/buttons/ButtonSimple";
import ButtonSimpleFilled from "@/components/buttons/ButtonSimpleFilled";
import { formatDate } from "@/lib/utils";

const DetailAsideCard = ({
  title,
  dateModified,
  imageUrl,
  fileUrl,
  fileType = "document",
  onEdit,
  onDelete,
  onClose,
  onPreviewRequest,
}) => {
  const typeToIcon = {
    folder: FolderCloud,
    video: FaPlay,
    code: FaFileCode,
    document: BsFillFileEarmarkRichtextFill,
    image: FaFileImage,
    default: BsFillFileEarmarkRichtextFill,
  };

  const IconComponent = typeToIcon[fileType] || typeToIcon.default;
  const isPreviewable = ["image", "video", "document", "code"].includes(
    fileType
  );

  return (
    <div className="w-80 p-6 bg-violet-50 rounded-3xl shadow-[0px_4px_8px_0px_rgba(183,183,183,0.20)] flex flex-col items-center gap-6">
      {/* Header */}
      <div className="w-full py-2 border-b border-slate-300 flex justify-between items-center">
        <div className="text-slate-800 text-base font-bold">File Details</div>
        <button onClick={onClose} title="Close Panel">
          <More
            size={20}
            color="#1f2937"
            className="rotate-90 cursor-pointer"
          />
        </button>
      </div>

      {/* Media Preview */}
      <div className="w-full h-52 relative rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-[inset_1px_1px_10px_#4b4efc]">
        {fileType === "image" && imageUrl ? (
          <img
            src={imageUrl}
            alt="Preview"
            className="w-full h-full object-cover"
          />
        ) : fileType === "video" && fileUrl ? (
          <div className="relative w-full h-full">
            <video
              src={fileUrl}
              muted
              controls
              className="w-full h-full object-cover pointer-events-none"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/10">
              <PlayCircle
                size={64}
                className="text-white opacity-70"
                variant="Bold"
              />
            </div>
          </div>
        ) : fileUrl &&
          ![".xlsx", ".xls", ".csv"].some((ext) => title?.endsWith(ext)) ? (
          <iframe
            src={fileUrl}
            title={title}
            className="w-full h-full object-cover pointer-events-none"
          />
        ) : (
          <div className="flex flex-col justify-center items-center text-primary/40 h-full">
            <IconComponent size={72} />
            <span className="mt-2 text-sm capitalize text-primary">
              {fileType} file
            </span>
          </div>
        )}

        {/* Fullscreen or Download Button */}
        {isPreviewable ? (
          <button
            onClick={onPreviewRequest}
            title="View Fullscreen"
            className="absolute top-2 right-2 bg-white/60 hover:bg-gray-100 p-1 rounded-md shadow-md"
          >
            <MdFullscreen size={20} className="text-gray-700" />
          </button>
        ) : (
          fileUrl && (
            <a
              href={fileUrl}
              download
              title="Download File"
              className="absolute top-2 right-2 bg-white/80 hover:bg-gray-100 p-1 rounded-md shadow-md"
            >
              <MdDownload size={20} className="text-gray-700" />
            </a>
          )
        )}
      </div>

      {/* File Info */}
      <div className="w-full flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded flex justify-center items-center text-slate-400 text-xs">
            <IconComponent size={20} />
          </div>
          <div className="text-slate-800 text-lg font-semibold truncate">
            {title}
          </div>
        </div>
        <div className="text-slate-600 text-sm font-medium">
          Modified {formatDate(dateModified)}
        </div>
      </div>

      {/* Share Link */}
      <div className="w-full">
        <div className="w-full py-2 border-b border-slate-300 text-slate-800 text-base font-bold">
          Share Links
        </div>
        <div className="flex mt-2">
          <div className="flex-1 p-3 border border-primary-300 rounded-l-xl bg-white text-sm text-gray-700 truncate">
            {fileUrl || "Url"}
          </div>
          <button
            onClick={() => navigator.clipboard.writeText(fileUrl)}
            className="px-3 border border-l-0 border-primary-300 bg-white rounded-r-xl hover:bg-gray-100"
            title="Copy Link"
          >
            <Copy size={18} color="#1f2937" />
          </button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex gap-3">
        <ButtonSimple
          className="flex-1"
          icon={<Edit size={18} />}
          onClick={onEdit}
        >
          <Edit size={18} /> Edit
        </ButtonSimple>
        <ButtonSimpleFilled
          className="flex-1 bg-red-500 hover:bg-red-600 border-red-500"
          onClick={onDelete}
        >
          <Trash size={18} /> Delete
        </ButtonSimpleFilled>
      </div>
    </div>
  );
};

export default DetailAsideCard;
