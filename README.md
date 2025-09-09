# Mintora

[Live Preview](https://mintora-one.vercel.app/)

Mintora is a Web3-powered DApp that combines an NFT Marketplace with DAO Governance.
It is built with Next.js 15, MUI, wagmi, and RainbowKit, and now runs fully on the Sepolia Testnet.

---

## Features (On-Chain, Sepolia)

- **NFT Mint**
  - Uploads image + metadata to **Pinata (IPFS)**.
  - Stores metadata.json on IPFS.
  - Calls the MintoraNFT.sol smart contract to mint NFT on Sepolia.

- **Marketplace**
  - Reads totalSupply from smart contract.

  - Fetches each NFT’s metadata from IPFS (tokenURI).

  - Displays NFT title, description, and image.

- **Profile**
  - Reads ownerOf from contract.

  - Displays only NFTs owned by the connected wallet.

- **DAO Governance (Simulation)**
  - MintoraDAO.sol deployed on Sepolia.

  - Users can create proposals (createProposal).

  - Wallet holders can vote Yes/No (vote).

  - Proposal data is read live with getAllProposals.

---

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/gizemsangur1/mintora.git
   cd mintora

2. Install dependencies:
```
npm install
```
3. Create a .env.local file and add:
```
NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID=your_walletconnect_id
NEXT_PUBLIC_PINATA_JWT=your_pinata_jwt
```
4. Run the development server:
```
npm run dev
```

## Future Roadmap (when Sepolia ETH is available)

Add Marketplace Listings (buy/sell NFTs).

DAO proposal deadlines + quorum system.

ENS integration for wallet addresses.

Role-based features (e.g. only NFT holders can create proposals).