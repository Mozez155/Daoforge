interface DatePickerProps {
  label?: string;
  value: Date;
  onChange: (date: Date) => void;
  min?: Date;
  max?: Date;
  error?: string | null;
}

export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  error,
}) => {
  // Convert Date to local datetime-local string (YYYY-MM-DDTHH:mm)
  const toLocalIso = (d: Date) => {
    const pad = (n: number) => String(n).padStart(2, "0");
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
  };

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-semibold text-primary">{label}</label>
      )}
      <input
        type="datetime-local"
        value={toLocalIso(value)}
        min={min ? toLocalIso(min) : undefined}
        max={max ? toLocalIso(max) : undefined}
        onChange={(e) => {
          const d = new Date(e.target.value);
          if (!isNaN(d.getTime())) onChange(d);
        }}
        className={`rounded-md border px-3 py-2 text-primary bg-transparent focus:outline-none focus:ring-2 focus:ring-primary ${
          error ? "border-red-500" : "border-zinc-700"
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};
