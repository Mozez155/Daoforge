interface StepProps {
  step: number;
  totalSteps: number;
}

const Step: React.FC<StepProps> = ({ step, totalSteps }) => (
  <div className="flex items-center gap-2" aria-label={`Step ${step} of ${totalSteps}`}>
    {Array.from({ length: totalSteps }, (_, i) => (
      <div
        key={i}
        className={`h-1.5 rounded-full transition-all duration-300 ${
          i + 1 === step
            ? "w-6 bg-primary"
            : i + 1 < step
              ? "w-3 bg-primary opacity-60"
              : "w-3 bg-zinc-300"
        }`}
      />
    ))}
    <span className="text-xs text-secondary ml-1">
      {step}/{totalSteps}
    </span>
  </div>
);

export default Step;
