export type Voter = {
  id: number;
  name: string;
};

export type Candidate = {
  name: string;
  votes: number;
};

export type ElectionState = {
  voters: Voter[];
  candidates: Candidate[];
  totalVotes: number;
  isVotingOpen: boolean;
};