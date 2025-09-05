// Basit in-memory store 
let nfts: { title: string; description: string; image: string; ipfsUrl: string }[] = [];

export function addNFT(nft: { title: string; description: string; image: string; ipfsUrl: string }) {
  nfts.push(nft);
}

export function getNFTs() {
  return nfts;
}
