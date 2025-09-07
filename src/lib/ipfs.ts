import axios from "axios";

const PINATA_FILE_API = "https://api.pinata.cloud/pinning/pinFileToIPFS";
const PINATA_JSON_API = "https://api.pinata.cloud/pinning/pinJSONToIPFS";
const PINATA_JWT = process.env.NEXT_PUBLIC_PINATA_JWT!;

export async function uploadToIPFS(
  name: string,
  description: string,
  file: File
) {
  const formData = new FormData();
  formData.append("file", file);

  const fileRes = await axios.post(PINATA_FILE_API, formData, {
    maxBodyLength: Infinity,
    headers: {
      Authorization: `Bearer ${PINATA_JWT}`,
    },
  });

  const imageHash = fileRes.data.IpfsHash;
  const imageURI = `https://ipfs.io/ipfs/${imageHash}`;

  const metadata = {
    name,
    description,
    image: imageURI,
  };

  const metaRes = await axios.post(PINATA_JSON_API, metadata, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${PINATA_JWT}`,
    },
  });

  const metadataHash = metaRes.data.IpfsHash;
  return `https://ipfs.io/ipfs/${metadataHash}`;
}
