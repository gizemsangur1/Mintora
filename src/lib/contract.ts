import { BrowserProvider, Contract } from "ethers";

export const CONTRACT_ADDRESS = "0xe1d30e9c4a02c9167dfd99b8024b6f2bc2f57eb8";

export const CONTRACT_ABI = [
  {
    inputs: [
      { internalType: "address", name: "recipient", type: "address" },
      { internalType: "string", name: "tokenURI", type: "string" },
    ],
    name: "mintNFT",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "tokenId", type: "uint256" }],
    name: "tokenURI",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
];

function resolveIPFS(uri: string) {
  if (!uri) return "";
  return uri.startsWith("ipfs://")
    ? `https://ipfs.io/ipfs/${uri.replace("ipfs://", "")}`
    : uri;
}

export async function fetchNFTs() {
  if (typeof window.ethereum === "undefined") return [];

  const provider = new BrowserProvider(window.ethereum);
  const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI, provider);

  const totalSupply = await contract.totalSupply();
  const nfts: any[] = [];

  for (let i = 1; i <= totalSupply; i++) {
    const tokenURI = await contract.tokenURI(i);
    const resolvedURI = resolveIPFS(tokenURI);

    try {
      const response = await fetch(resolvedURI);
      const contentType = response.headers.get("content-type") || "";

      let metadata: any;
      if (contentType.includes("application/json")) {
        metadata = await response.json();
      } else {
        metadata = {
          name: `NFT #${i}`,
          description: "No metadata available",
          image: resolvedURI,
        };
      }

      nfts.push({
        id: i,
        title: metadata.name,
        description: metadata.description,
        image: resolveIPFS(metadata.image),
        ipfsUrl: resolvedURI,
      });
    } catch (err) {
      console.error("Failed to load metadata:", resolvedURI, err);
    }
  }

  return nfts;
}
