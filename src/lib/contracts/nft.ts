import { ethers } from "ethers"
import NFT_ABI from "./abi"

module Nft {
    const NFT_ADDRESS = "0x7Ce3CcAb165Ff4553810723eA275F8B3d4f36ccc"
    const TOKEN_PRICE = ethers.utils.parseEther("0.023")

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

        let totalSupply: ethers.BigNumber = await getMinted()

        // let paidTokens: ethers.BigNumber = ethers.BigNumber.from(min(max((totalSupply.toNumber() + amount) - 1462, 0), amount))
        let paidTokens = ethers.BigNumber.from(amount)

        return await contract.mint(amount, { value: paidTokens.mul(TOKEN_PRICE).add(1) })
    }
}

function min(a, b) {
    return a < b ? a : b
}

function max(a, b) {
    return a > b ? a : b
}

export default Nft