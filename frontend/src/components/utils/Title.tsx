import type { ReactNode } from "react";

interface TitleProps {
  title: ReactNode;
  description?: ReactNode;
}

const Title: React.FC<TitleProps> = ({ title, description }) => (
  <div className="flex flex-col gap-2">
    <h2 className="text-xl sm:text-2xl font-bold text-primary leading-tight">
      {title}
    </h2>
    {description && (
      <p className="text-sm sm:text-base text-secondary leading-relaxed">
        {description}
      </p>
    )}
  </div>
);

export default Title;
