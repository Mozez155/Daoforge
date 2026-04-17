import { useState } from "react";
import Markdown from "markdown-to-jsx";

interface SimpleMarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SimpleMarkdownEditor: React.FC<SimpleMarkdownEditorProps> = ({
  value,
  onChange,
  placeholder = "Write markdown here...",
}) => {
  const [preview, setPreview] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Toolbar */}
      <div className="flex gap-2 border-b border-zinc-200 px-3 py-2 bg-zinc-50">
        <button
          type="button"
          onClick={() => setPreview(false)}
          className={`text-xs px-2 py-1 rounded ${!preview ? "bg-primary text-white" : "text-secondary hover:bg-zinc-200"}`}
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => setPreview(true)}
          className={`text-xs px-2 py-1 rounded ${preview ? "bg-primary text-white" : "text-secondary hover:bg-zinc-200"}`}
        >
          Preview
        </button>
        <span className="ml-auto text-xs text-secondary self-center">
          {value.length} chars
        </span>
      </div>

      {preview ? (
        <div className="min-h-[200px] p-3 prose prose-sm max-w-none text-primary">
          {value ? (
            <Markdown>{value}</Markdown>
          ) : (
            <p className="text-secondary italic">Nothing to preview</p>
          )}
        </div>
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={10}
          className="w-full p-3 text-sm text-primary bg-transparent resize-y focus:outline-none"
        />
      )}
    </div>
  );
};

export default SimpleMarkdownEditor;
