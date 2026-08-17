# Africa Plan Foundation — Head of Cohort Voting System

A frontend voting application built for the Africa Plan Foundation Head of Cohort election.

The application allows a fixed group of 20 voters to cast one vote each for a candidate. Candidates can be entered manually, votes are tracked in real time, voting automatically closes after all 20 voters have voted, and the two candidates with the highest votes are presented as Head of Cohort and Assistant Head of Cohort.

## 🚀 Features

- 20 predefined voters
- Voter selection through a dropdown
- One vote per voter
- Voters are automatically removed from the dropdown after voting
- Candidates can be entered manually
- Candidate names are normalized to prevent duplicate candidates caused by capitalization
- Real-time candidate vote counts
- Live voting progress indicator
- Automatic election closure at 20 votes
- Voting form becomes disabled after the election closes
- Winner calculation based on the highest vote counts
- Head of Cohort and Assistant Head of Cohort results
- Vote percentages displayed in the results modal
- Tie detection
- Winners displayed in a modal
- Election data persists after browser refresh using `localStorage`
- Responsive interface
- Reset functionality planned for clearing the current election

## 🛠️ Tech Stack

- **Next.js** — React framework using the Pages Router
- **React** — UI development
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Styling
- **TanStack React Query** — Included in the project setup for future data/query management
- **React Icons** — Icons
- **localStorage** — Frontend persistence

## Hosted by Vercel
https://voting-system-nextjs-three.vercel.app/

## 📁 Project Structure

```text
src/
├── components/
│   └── voting/
│       └── WinnersModal.tsx
│
├── data/
│   └── voters.ts
│
├── layout/
│   ├── footer.tsx
│   ├── layout.tsx
│   └── navbar.tsx
│
├── pages/
│   ├── _app.tsx
│   └── index.tsx
│
├── styles/
│   └── globals.css
│
└── types/
    └── voting.ts
