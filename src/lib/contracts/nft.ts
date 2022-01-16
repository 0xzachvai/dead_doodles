import { ethers } from "ethers"
import NFT_ABI from "./abi"

module Nft {
    const NFT_ADDRESS = "0x9Cf74e3B1A5240d7CdB4ac7c07332ceCB6c10Ebb"
    const TOKEN_PRICE = ethers.utils.parseEther("0.025")

    let contract

    export async function connectWallet() {
        await window.ethereum?.enable()

        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()

        contract = new ethers.Contract(NFT_ADDRESS, NFT_ABI, signer)
    }

    export async function getMinted() {
        return await contract.totalSupply()
    }

    export async function mint(amount: number) {
        if (contract == null) await connectWallet()

        // TODO: calculate ether price

        let totalSupply = await getMinted()
        let paidTokens = 1000

        return await contract.mint(amount)
    }
}

export default Nft