import { useState } from "react";

interface CopyButtonProps {
  textToCopy: string;
  size?: "sm" | "md";
  className?: string;
}

const CopyButton: React.FC<CopyButtonProps> = ({
  textToCopy,
  size = "md",
  className = "",
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // fallback
      const el = document.createElement("textarea");
      el.value = textToCopy;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const iconSize = size === "sm" ? "w-4 h-4" : "w-5 h-5";

  return (
    <button
      onClick={handleCopy}
      title={copied ? "Copied!" : "Copy to clipboard"}
      aria-label={copied ? "Copied!" : "Copy to clipboard"}
      className={`inline-flex items-center justify-center rounded p-1 transition-colors ${className}`}
    >
      {copied ? (
        <img src="/icons/check.svg" alt="Copied" className={iconSize} />
      ) : (
        <img src="/icons/clipboard.svg" alt="Copy" className={iconSize} />
      )}
    </button>
  );
};

export default CopyButton;
