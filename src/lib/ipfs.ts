import axios from "axios";

const PINATA_API = "https://api.pinata.cloud/pinning/pinFileToIPFS";
const PINATA_JWT = process.env.NEXT_PUBLIC_PINATA_JWT!;

export async function uploadToIPFS(
  name: string,
  description: string,
  file: File
) {
  const formData = new FormData();

  formData.append("file", file);

  const metadata = JSON.stringify({
    name: name,
    keyvalues: {
      description: description,
    },
  });
  formData.append("pinataMetadata", metadata);

  try {
    const res = await axios.post(PINATA_API, formData, {
      maxBodyLength: Infinity,
      headers: {
        Authorization: `Bearer ${PINATA_JWT}`,
      },
    });

    const IpfsHash = res.data.IpfsHash; 
    console.log("Uploaded to Pinata:", IpfsHash);

    return `ipfs://${IpfsHash}`;
  } catch (error) {
    console.error("Pinata upload error:", error);
    throw error;
  }
}
