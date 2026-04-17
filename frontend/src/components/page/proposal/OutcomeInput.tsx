import Input from "components/utils/Input";
import type { OutcomeContract } from "types/proposal";

interface OutcomeInputProps {
  label: string;
  description: string;
  onDescriptionChange: (v: string) => void;
  mode: "xdr" | "contract" | "none";
  onModeChange: (m: "xdr" | "contract" | "none") => void;
  xdr?: string | null;
  onXdrChange?: (v: string) => void;
  contract?: OutcomeContract | null;
  onContractChange?: (c: OutcomeContract) => void;
  descriptionError?: string | null;
  xdrError?: string | null;
  contractError?: string | null;
}

const OutcomeInput: React.FC<OutcomeInputProps> = ({
  label,
  description,
  onDescriptionChange,
  mode,
  onModeChange,
  xdr,
  onXdrChange,
  contract,
  onContractChange,
  descriptionError,
  xdrError,
  contractError,
}) => {
  return (
    <div className="flex flex-col gap-3 p-4 border border-zinc-200 rounded-lg">
      <p className="text-sm font-semibold text-primary">{label}</p>

      <Input
        label="Description"
        placeholder={`Describe the ${label.toLowerCase()} outcome`}
        value={description}
        onChange={(e) => onDescriptionChange(e.target.value)}
        error={descriptionError}
      />

      <div className="flex gap-3">
        {(["none", "xdr", "contract"] as const).map((m) => (
          <label key={m} className="flex items-center gap-1.5 cursor-pointer text-sm text-primary">
            <input
              type="radio"
              name={`mode-${label}`}
              value={m}
              checked={mode === m}
              onChange={() => onModeChange(m)}
              className="w-3.5 h-3.5"
            />
            {m === "none" ? "No action" : m === "xdr" ? "XDR transaction" : "Contract call"}
          </label>
        ))}
      </div>

      {mode === "xdr" && (
        <Input
          label="XDR"
          placeholder="Base64 encoded XDR transaction"
          value={xdr ?? ""}
          onChange={(e) => onXdrChange?.(e.target.value)}
          error={xdrError}
        />
      )}

      {mode === "contract" && (
        <div className="flex flex-col gap-2">
          <Input
            label="Contract Address"
            placeholder="C..."
            value={contract?.address ?? ""}
            onChange={(e) =>
              onContractChange?.({ ...(contract ?? { address: "", execute_fn: "", args: [] }), address: e.target.value })
            }
            error={contractError}
          />
          <Input
            label="Function Name"
            placeholder="execute"
            value={contract?.execute_fn ?? ""}
            onChange={(e) =>
              onContractChange?.({ ...(contract ?? { address: "", execute_fn: "", args: [] }), execute_fn: e.target.value })
            }
          />
        </div>
      )}
    </div>
  );
};

export default OutcomeInput;
