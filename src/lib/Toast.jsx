import { Toaster, toast } from "react-hot-toast";
import { LuTrash2 } from "react-icons/lu";
import { BsCheckCircle } from "react-icons/bs";
import { PiWarningCircle } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

// Toast container component
export const ToastContainer = () => (
  <Toaster
    position="bottom-right"
    reverseOrder={true}
    gutter={10}
    toastOptions={{
      duration: 3000,
      style: {
        pointerEvents: "auto",
        maxWidth: "90%",
      },
    }}
    containerStyle={{
      zIndex: 9999,
      pointerEvents: "none",
    }}
  />
);

// Base layout for custom toasts
const buildToast = (id, Icon, color, title, message) => (
  <div
    className="pointer-events-auto flex w-full max-w-sm gap-3 rounded-lg border bg-white p-4 shadow-md"
    style={{ borderLeft: `3px solid ${color}` }}
  >
    {/* Icon */}
    <div className={`mt-1 text-[${color}]`}>
      <Icon size={20} color={color} />
    </div>

    {/* Message */}
    <div className="flex-1">
      <h4 className="font-semibold text-slate-800 text-sm">{title}</h4>
      <p className="text-sm text-slate-600">{message}</p>
    </div>

    {/* Close */}
    <button
      onClick={() => toast.dismiss(id)}
      className="text-slate-400 hover:text-slate-600 transition"
    >
      <IoClose size={20} className="h-full font-light " />
    </button>
  </div>
);

// Critical / Delete Toast
export const showErrorToast = (
  message = "This action cannot be undone.",
  title = "Delete Action",
  duration = 5000
) => {
  toast.custom((t) => buildToast(t.id, LuTrash2, "#ef4444", title, message), {
    duration,
  });
};

// Success Toast
export const showSuccessToast = (
  message = "Operation completed successfully.",
  title = "Success",
  duration = 5000
) => {
  toast.custom((t) => buildToast(t.id, BsCheckCircle, "#22c55e", title, message), {
    duration,
  });
};

// Warning Toast
export const showWarningToast = (
  message = "Something needs your attention.",
  title = "Warning",
  duration = 5000
) => {
  toast.custom((t) => buildToast(t.id, PiWarningCircle, "#facc15", title, message), {
    duration,
  });
};

// Info Toast
export const showInfoToast = (
  message = "Just so you know.",
  title = "Info",
  duration = 5000
) => {
  toast.custom((t) => buildToast(t.id, PiWarningCircle, "#3b82f6", title, message), {
    duration,
  });
};

// Loading Toast (uses built-in)
export const showLoadingToast = (message = "Loading...") => {
  toast.loading(message, {
    className:
      "text-sm px-4 py-3 rounded-md shadow-md bg-primary/40 border border-primary text-primary",
  });
};

export const dismissAllToasts = () => {
  toast.dismiss();
};
