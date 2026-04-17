import { VoteType } from "types/proposal";

interface VoteTypeCheckboxProps {
  voteType: VoteType;
  currentVoteType?: VoteType | null;
  size?: "sm" | "md";
}

const iconMap: Record<VoteType, string> = {
  [VoteType.APPROVE]: "/icons/check-approve.svg",
  [VoteType.REJECT]: "/icons/check-reject.svg",
  [VoteType.CANCEL]: "/icons/check-cancel.svg",
};

const blankIcon = "/icons/check-blank.svg";

const VoteTypeCheckbox: React.FC<VoteTypeCheckboxProps> = ({
  voteType,
  currentVoteType,
  size = "md",
}) => {
  const isSelected = currentVoteType === voteType;
  const iconSize = size === "sm" ? "w-5 h-5" : "w-7 h-7";

  return (
    <img
      src={isSelected ? iconMap[voteType] : blankIcon}
      alt={voteType}
      className={`${iconSize} flex-shrink-0`}
    />
  );
};

export default VoteTypeCheckbox;
