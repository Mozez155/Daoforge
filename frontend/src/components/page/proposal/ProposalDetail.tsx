import Markdown from "markdown-to-jsx";
import type { ProposalOutcome } from "types/proposal";

interface ProposalDetailProps {
  ipfsLink: string | null;
  description: string;
  outcome: ProposalOutcome | null;
}

const ProposalDetail: React.FC<ProposalDetailProps> = ({
  ipfsLink,
  description,
  outcome,
}) => {
  return (
    <div className="flex flex-col gap-8">
      {/* Description */}
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-primary mb-4">Description</h2>
        {description ? (
          <div className="prose prose-sm max-w-none text-primary">
            <Markdown>{description}</Markdown>
          </div>
        ) : (
          <p className="text-secondary italic">No description available.</p>
        )}
        {ipfsLink && (
          <a
            href={ipfsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-xs text-blue-600 underline"
          >
            <img src="/icons/ipfs.svg" className="w-4 h-4" alt="IPFS" />
            View on IPFS
          </a>
        )}
      </div>

      {/* Outcomes */}
      {outcome && Object.keys(outcome).length > 0 && (
        <div className="bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-primary mb-4">Outcomes</h2>
          <div className="flex flex-col gap-4">
            {outcome.approved && (
              <OutcomeBlock label="Approved" color="text-approve" data={outcome.approved} />
            )}
            {outcome.rejected && (
              <OutcomeBlock label="Rejected" color="text-reject" data={outcome.rejected} />
            )}
            {outcome.cancelled && (
              <OutcomeBlock label="Cancelled" color="text-abstain" data={outcome.cancelled} />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

const OutcomeBlock: React.FC<{
  label: string;
  color: string;
  data: { description?: string; xdr?: string };
}> = ({ label, color, data }) => (
  <div className="flex flex-col gap-1 border-l-4 border-zinc-200 pl-4">
    <p className={`text-sm font-semibold ${color}`}>{label}</p>
    {data.description && (
      <p className="text-sm text-secondary">{data.description}</p>
    )}
    {data.xdr && (
      <p className="text-xs font-mono text-zinc-500 break-all">
        XDR: {data.xdr.slice(0, 40)}…
      </p>
    )}
  </div>
);

export default ProposalDetail;
