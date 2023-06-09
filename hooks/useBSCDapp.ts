import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import { useGlobalContext } from '@/utils/context/globalContext'
import { ContractAddresses } from '@/utils/constants/addresses'

// using require here because using import causes issues
const contractArtifact = require('@/utils/constants/contract_abis/nft_abi.json')

const useBSCDapp = () => {
    const { chainId, provider, signer, account, reRenderHelper } = useGlobalContext()
    const [contractSigner, setContractSigner] = useState<any>(null) // Define contract state
    const [contractReader, setContractReader] = useState<any>(null) // Define contract state
    const [nftsOwned, setNftsOwned] = useState<number[]>([]) // Define contract state

    useEffect(() => {
        const loadContractABI = async () => {
            try {
                const abi = contractArtifact
    
                // Create a reader contract instance
                const contractAddress = ContractAddresses[chainId].NFT_contract // Address of the deployed contract
                const newContract = new ethers.Contract(contractAddress!, abi, provider!)

                // Set the contract state
                setContractReader(newContract)

                // Create a signer contract instance
                const _signer = provider!.getSigner()
                const newContractSigner = new ethers.Contract(contractAddress!, abi, _signer)
                setContractSigner(newContractSigner)

            } catch (error) {
                console.error('Error loading contract ABI:', error)
            }
        }
        // if(!signer) return
        if (provider){
            loadContractABI()
        }

    }, [provider, chainId])
    
    useEffect(() => {
        const getOwnedNFTs = async () => {
            try {
                
                const nftIds = await contractReader?.getAllTokensOwned(account)
                const arr = nftIds?.map((id: any) => parseInt(id._hex))

                setNftsOwned(arr)
            } catch (error) {
                console.error('Error getting NFT balance:', error)
            }
        }
        
        if (contractReader && account !== ""){
            getOwnedNFTs()
        }

    }, [contractReader, signer, account, reRenderHelper])

    const getUri = async (id: number) => {
        try {
            const uri = await contractReader?.tokenURI(id)
            return uri
        } catch (error) {
            console.error('Error getting NFT URI:', error)
        }
    }

    return { 
        contractSigner, 
        contractReader,
        nftsOwned,
        getUri
    }
}

export default useBSCDapp