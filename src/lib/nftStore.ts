let nfts: { 
  title: string; 
  description: string; 
  image: string; 
  ipfsUrl: string; 
  owner: string; 
}[] = [];

export function addNFT(nft: { 
  title: string; 
  description: string; 
  image: string; 
  ipfsUrl: string; 
  owner: string; 
}) {
  nfts.push(nft);
}

export function getNFTs() {
  return nfts;
}

export function getNFTsByOwner(address: string) {
  return nfts.filter(n => n.owner.toLowerCase() === address.toLowerCase());
}
