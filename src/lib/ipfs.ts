import { NFTStorage, File } from "nft.storage";

const client = new NFTStorage({
  token: process.env.NEXT_PUBLIC_NFT_STORAGE_KEY!,
});

export async function uploadToIPFS(
  name: string,
  description: string,
  file: File
) {
  const metadata = await client.store({
    name,
    description,
    image: file,
  });

  console.log("Stored metadata:", metadata.url);
  return metadata.url; 
}
