import { useState } from "react";

interface ExpandableTextProps {
  text: string;
  maxLength?: number;
  className?: string;
}

export const ExpandableText: React.FC<ExpandableTextProps> = ({
  text,
  maxLength = 200,
  className = "",
}) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = text.length > maxLength;

  return (
    <div className={className}>
      <p className="text-sm text-secondary leading-relaxed">
        {isLong && !expanded ? `${text.slice(0, maxLength)}…` : text}
      </p>
      {isLong && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-1 text-xs text-primary underline focus:outline-none"
          aria-expanded={expanded}
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
    </div>
  );
};
