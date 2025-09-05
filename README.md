# Mintora

[Live Preview](https://mintora-one.vercel.app/)

Mintora is a **Web3-powered DApp** that combines an NFT Marketplace with DAO Governance.  
Currently, the project runs in **simulation mode** (no live blockchain writes yet) but is fully prepared for real deployment once Sepolia ETH is available.  

Built with **Next.js 15, MUI, wagmi, and RainbowKit**.

---

## Current Features (Simulation Mode)

- **NFT Mint (Simulation)**
  - Uploads image + metadata to **Pinata (IPFS)**.
  - Returns an IPFS URI (`ipfs://...`).
  - Smart contract mint function is implemented but commented out (to be enabled with Sepolia ETH).

- **Marketplace**
  - Displays all minted NFTs.
  - Each card shows title, description, preview image, and a link to metadata.

- **Profile**
  - Displays only NFTs owned by the connected wallet address.
  - In simulation mode, ownership is stored locally.

- **DAO Governance (Simulation)**
  - Users can create new proposals.
  - Other users can vote **Yes** / **No**.
  - Voting results are tracked locally.

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

Enable real smart contract integration:

MintoraNFT.sol for minting NFTs (mintNFT).

MintoraDAO.sol for proposals & voting.

Replace local stores with on-chain data (using wagmi contract reads).

Display minted NFTs directly from the blockchain (tokenURI).

Improve DAO with proposal deadlines and quorum logic.