import { proposalTemplates } from "constants/proposalTemplates";

interface Template {
  name: string;
  content: string;
}

interface TemplateSelectorProps {
  onTemplateSelect: (template: Template) => void;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onTemplateSelect }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <span className="text-sm text-secondary self-center">Templates:</span>
      {proposalTemplates.map((template) => (
        <button
          key={template.name}
          type="button"
          onClick={() => onTemplateSelect(template)}
          className="text-xs px-3 py-1 rounded-full border border-zinc-300 text-primary hover:bg-zinc-100 transition-colors"
        >
          {template.name}
        </button>
      ))}
    </div>
  );
};

export default TemplateSelector;
