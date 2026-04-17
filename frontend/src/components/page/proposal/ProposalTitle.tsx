import Button from "components/utils/Button";
import type { ProposalView } from "types/proposal";

interface ProposalTitleProps {
  proposal: ProposalView | null;
  maintainers: string[];
  submitVote: () => void;
  executeProposal: () => void;
}

const statusColors: Record<string, string> = {
  active: "bg-green-100 text-green-800",
  voted: "bg-blue-100 text-blue-800",
  approved: "bg-lime text-primary",
  rejected: "bg-red-100 text-red-800",
  cancelled: "bg-zinc-100 text-zinc-600",
  malicious: "bg-orange-100 text-orange-800",
};

const ProposalTitle: React.FC<ProposalTitleProps> = ({
  proposal,
  submitVote,
  executeProposal,
}) => {
  if (!proposal) return null;

  const statusClass = statusColors[proposal.status] ?? "bg-zinc-100 text-zinc-600";
  const canVote = proposal.status === "active";
  const canExecute = proposal.status === "voted";

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl sm:text-3xl font-bold text-primary leading-tight">
            {proposal.title}
          </h1>
          <div className="flex items-center gap-3">
            <span
              className={`text-xs font-semibold px-2 py-0.5 rounded-full capitalize ${statusClass}`}
            >
              {proposal.status}
            </span>
            {proposal.publicVoting === false && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-100 text-purple-800">
                Anonymous
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          {canVote && (
            <Button onClick={submitVote}>
              Vote
            </Button>
          )}
          {canExecute && (
            <Button onClick={executeProposal}>
              Execute
            </Button>
          )}
        </div>
      </div>

      {proposal.votingEndsAt && (
        <p className="text-sm text-secondary">
          {canVote ? "Voting ends" : "Voting ended"}:{" "}
          <span className="font-medium text-primary">
            {new Date(proposal.votingEndsAt * 1000).toLocaleString()}
          </span>
        </p>
      )}
    </div>
  );
};

export default ProposalTitle;
