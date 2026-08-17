import { useState } from "react";
import { voters } from "@/types/voters";
import type { Candidate } from "@/types/voting";
import WinnersModal from "@/components/voting/WinnersModal";

export default function Home() {
  const [selectedVoter, setSelectedVoter] = useState("");
  const [candidate, setCandidate] = useState("");
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [votedVoterIds, setVotedVoterIds] = useState<number[]>([]);
  const [isWinnerModalOpen, setIsWinnerModalOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);



  const isVotingOpen = votedVoterIds.length < 20;

  const sortedCandidates = [...candidates].sort(
    (a, b) => b.votes - a.votes
  );

  const winner = sortedCandidates[0];
  const runnerUp = sortedCandidates[1];

  const hasTie =
    sortedCandidates.length >= 2 &&
    sortedCandidates[0].votes === sortedCandidates[1].votes;

  const handleVote = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isVotingOpen) {
      alert("Voting has ended. All 20 voters have voted.");
      return;
    }

    if (!selectedVoter) {
      alert("Please select your name.");
      return;
    }

    const candidateName = candidate.trim();

    if (!candidateName) {
      alert("Please enter a candidate name.");
      return;
    }

    const voterId = Number(selectedVoter);

    if (votedVoterIds.includes(voterId)) {
      alert("This voter has already voted.");
      return;
    }

    const normalizedCandidate = candidateName.toLowerCase();

    setCandidates((currentCandidates) => {
      const existingCandidate = currentCandidates.find(
        (item) =>
          item.name.toLowerCase() === normalizedCandidate
      );

      if (existingCandidate) {
        return currentCandidates.map((item) =>
          item.name.toLowerCase() === normalizedCandidate
            ? {
                ...item,
                votes: item.votes + 1,
              }
            : item
        );
      }

      return [
        ...currentCandidates,
        {
          name: candidateName,
          votes: 1,
        },
      ];
    });

    setVotedVoterIds((currentIds) => [
      ...currentIds,
      voterId,
    ]);

    setSelectedVoter("");
    setCandidate("");

    alert("Vote submitted successfully.");
  };

  return (
    <section className="min-h-[calc(100vh-9rem)] px-6 py-12">
      <div className="mx-auto max-w-5xl">

        
        <div className="mb-10 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#7C2D12]">
            Africa Plan Foundation
          </p>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Head of Cohort Election
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-gray-600">
            Cast your vote.
          </p>
        </div>

        
        <div className="mx-auto max-w-2xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 sm:p-8">
          <div className="mb-7">
            <h2 className="text-xl font-bold text-gray-900">
              Cast Your Vote
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Select your name and enter the candidate you want to vote for.
            </p>
          </div>

          <form onSubmit={handleVote} className="space-y-6">

      
            <div>
              <label
                htmlFor="voter"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Select Voter
              </label>

              <select
                id="voter"
                value={selectedVoter}
                disabled={!isVotingOpen}
                onChange={(event) =>
                  setSelectedVoter(event.target.value)
                }
                className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition focus:border-[#7C2D12] focus:ring-2 focus:ring-[#7C2D12]/20 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
              >
                <option value="">
                  Select your name
                </option>

                {voters
                  .filter(
                    (voter) =>
                      !votedVoterIds.includes(voter.id)
                  )
                  .map((voter) => (
                    <option
                      key={voter.id}
                      value={voter.id}
                    >
                      {voter.name}
                    </option>
                  ))}
              </select>
            </div>

            
            <div>
              <label
                htmlFor="candidate"
                className="mb-2 block text-sm font-semibold text-gray-800"
              >
                Candidate
              </label>

              <input
                id="candidate"
                type="text"
                value={candidate}
                disabled={!isVotingOpen}
                onChange={(event) =>
                  setCandidate(event.target.value)
                }
                placeholder="Enter candidate name"
                className="h-12 w-full rounded-lg border border-gray-300 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-[#7C2D12] focus:ring-2 focus:ring-[#7C2D12]/20 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400"
              />
            </div>

          
            <button
              type="submit"
              disabled={!isVotingOpen}
              className="h-12 w-full rounded-lg bg-[#2563EB] px-5 text-sm font-semibold text-white transition hover:bg-[#1D4ED8] focus:outline-none focus:ring-2 focus:ring-[#2563EB]/40 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500"
            >
              {isVotingOpen
                ? "Submit Vote"
                : "Voting Closed"}
            </button>
          </form>
        </div>

      
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">

    
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200">
            <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
              Voting Progress
            </p>

            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-4xl font-bold text-gray-900">
                  {votedVoterIds.length} / 20
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  Votes Cast
                </p>
              </div>

              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  isVotingOpen
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {isVotingOpen
                  ? "Voting Open"
                  : "Voting Closed"}
              </span>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-[#2563EB] transition-all duration-300"
                style={{
                  width: `${
                    (votedVoterIds.length / 20) * 100
                  }%`,
                }}
              />
            </div>
          </div>

        
          <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
                Current Results
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Live candidate scores
              </p>
            </div>

            <div className="mt-5 space-y-3">
              {candidates.length === 0 ? (
                <div className="rounded-lg border border-dashed border-gray-300 p-6 text-center">
                  <p className="text-sm text-gray-500">
                    No votes have been cast yet.
                  </p>
                </div>
              ) : (
                candidates.map((candidate) => (
                  <div
                    key={candidate.name.toLowerCase()}
                    className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3"
                  >
                    <span className="font-medium text-gray-800">
                      {candidate.name}
                    </span>

                    <span className="font-bold text-[#7C2D12]">
                      {candidate.votes}{" "}
                      {candidate.votes === 1
                        ? "vote"
                        : "votes"}
                    </span>
                  </div>
                ))
              )}
            </div>

            
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                disabled={isVotingOpen}
                onClick={() =>
                  setIsWinnerModalOpen(true)
                }
                className="rounded-lg px-8 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-gray-500 enabled:bg-[#7C2D12] enabled:text-white enabled:hover:bg-[#65250F]"
              >
                View Winners
              </button>
            </div>
          </div>
        </div>
      </div>

    
      <WinnersModal
        isOpen={isWinnerModalOpen}
        onClose={() =>
          setIsWinnerModalOpen(false)
        }
        winner={winner}
        runnerUp={runnerUp}
        hasTie={hasTie}
      />
    </section>
  );
}