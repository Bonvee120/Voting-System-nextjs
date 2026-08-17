type WinnersModalProps = {
  isOpen: boolean;
  onClose: () => void;
  winner?: {
    name: string;
    votes: number;
  };
  runnerUp?: {
    name: string;
    votes: number;
  };
  hasTie: boolean;
};

const WinnersModal = ({
  isOpen,
  onClose,
  winner,
  runnerUp,
  hasTie,
}: WinnersModalProps) => {
  if (!isOpen) {
    return null;
  }

  const getPercentage = (votes: number) => {
    return (votes / 20) * 100;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-6">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-2xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-[#7C2D12]">
            Election Results
          </p>

          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            {hasTie ? "Manual Resolution Required" : "Winners"}
          </h2>
        </div>

        {hasTie ? (
          <div className="mt-8 rounded-xl border border-amber-200 bg-amber-50 p-5 text-center">
            <p className="font-semibold text-amber-800">
              There is a tie among the leading candidates.
            </p>

            <p className="mt-2 text-sm text-amber-700">
              The election requires manual resolution before the Head and
              Assistant positions can be confirmed.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {winner && (
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7C2D12]">
                      Head of Cohort
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-gray-900">
                      {winner.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      {winner.votes}
                    </p>

                    <p className="text-sm text-gray-500">
                      {getPercentage(winner.votes)}%
                    </p>
                  </div>
                </div>
              </div>
            )}

            {runnerUp && (
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#7C2D12]">
                      Assistant Head of Cohort
                    </p>

                    <h3 className="mt-1 text-xl font-bold text-gray-900">
                      {runnerUp.name}
                    </h3>
                  </div>

                  <div className="text-right">
                    <p className="text-2xl font-bold text-gray-900">
                      {runnerUp.votes}
                    </p>

                    <p className="text-sm text-gray-500">
                      {getPercentage(runnerUp.votes)}%
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        <button
          type="button"
          onClick={onClose}
          className="mt-8 w-full rounded-lg bg-[#7C2D12] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#65250F]"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default WinnersModal;