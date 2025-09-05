const proposals: {
  id: number;
  title: string;
  description: string;
  votesYes: number;
  votesNo: number;
}[] = [];

let counter = 1;

export function addProposal(title: string, description: string) {
  proposals.push({
    id: counter++,
    title,
    description,
    votesYes: 0,
    votesNo: 0,
  });
}

export function getProposals() {
  return proposals;
}

export function vote(proposalId: number, support: boolean) {
  const proposal = proposals.find(p => p.id === proposalId);
  if (!proposal) return;

  if (support) proposal.votesYes++;
  else proposal.votesNo++;
}
