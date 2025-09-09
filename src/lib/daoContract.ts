import { BrowserProvider, Contract } from "ethers";

const DAO_CONTRACT_ADDRESS = "0xa7cf69bc5e305e998727299b30c5f196cb931944";

const DAO_CONTRACT_ABI = [
  {
    "inputs": [
      { "internalType": "string", "name": "_title", "type": "string" },
      { "internalType": "string", "name": "_description", "type": "string" }
    ],
    "name": "createProposal",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      { "internalType": "uint256", "name": "_id", "type": "uint256" },
      { "internalType": "bool", "name": "_support", "type": "bool" }
    ],
    "name": "vote",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "getAllProposals",
    "outputs": [
      { "internalType": "uint256[]", "name": "ids", "type": "uint256[]" },
      { "internalType": "string[]", "name": "titles", "type": "string[]" },
      { "internalType": "string[]", "name": "descriptions", "type": "string[]" },
      { "internalType": "uint256[]", "name": "yesVotes", "type": "uint256[]" },
      { "internalType": "uint256[]", "name": "noVotes", "type": "uint256[]" },
      { "internalType": "bool[]", "name": "actives", "type": "bool[]" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [{ "internalType": "uint256", "name": "_id", "type": "uint256" }],
    "name": "getProposal",
    "outputs": [
      { "internalType": "uint256", "name": "id", "type": "uint256" },
      { "internalType": "string", "name": "title", "type": "string" },
      { "internalType": "string", "name": "description", "type": "string" },
      { "internalType": "uint256", "name": "votesYes", "type": "uint256" },
      { "internalType": "uint256", "name": "votesNo", "type": "uint256" },
      { "internalType": "bool", "name": "active", "type": "bool" }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "proposalCount",
    "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" },
      { "indexed": false, "internalType": "string", "name": "title", "type": "string" },
      { "indexed": false, "internalType": "string", "name": "description", "type": "string" }
    ],
    "name": "ProposalCreated",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      { "indexed": false, "internalType": "uint256", "name": "id", "type": "uint256" },
      { "indexed": false, "internalType": "address", "name": "voter", "type": "address" },
      { "indexed": false, "internalType": "bool", "name": "support", "type": "bool" }
    ],
    "name": "Voted",
    "type": "event"
  }
];

async function getContract() {
  const provider = new BrowserProvider((window as any).ethereum);
  const signer = await provider.getSigner();
  return new Contract(DAO_CONTRACT_ADDRESS, DAO_CONTRACT_ABI, signer);
}

export async function createProposal(title: string, description: string) {
  const contract = await getContract();
  const tx = await contract.createProposal(title, description);
  await tx.wait();
}

export async function voteProposal(id: number, support: boolean) {
  const contract = await getContract();
  const tx = await contract.vote(id, support);
  await tx.wait();
}

export async function fetchProposals() {
  const contract = await getContract();
  const result = await contract.getAllProposals();

  return result.ids.map((_: any, i: number) => ({
    id: Number(result.ids[i]),
    title: result.titles[i],
    description: result.descriptions[i],
    votesYes: Number(result.yesVotes[i]),
    votesNo: Number(result.noVotes[i]),
    active: result.actives[i],
  }));
}
