import React, {useEffect, useState} from 'react'
import useBSCDapp from '@/hooks/useBSCDapp'
import { useGlobalContext } from '@/utils/context/globalContext'
import { ContractAddresses } from '@/utils/constants/addresses'
import { ethers } from 'ethers'
import {MINTFEE} from '@/utils/constants/constants'

const Mint = () => {
    const { account,provider,chainId, setTransactionToCheck} = useGlobalContext()
    const { contractReader, erc20Reader, contractSigner } = useBSCDapp()
    const [balance, setBalance] = useState(0)
  
    useEffect(() => {
        const getBalance = async () => {
            const _balance = await erc20Reader.balanceOf(account)
            setBalance(Number(_balance) / 10 ** 18)
        }
        
        if (account !== "" && erc20Reader) {
            getBalance()
        }
    }, [account, erc20Reader, provider])

    const handleClick = async () => {
        const options = {
            gasLimit: 100000,
            value: MINTFEE
        }

        const tx = await contractSigner.safeMint(account,'1',options)
        // const tx = await erc20Signer.transfer("0xAc1c776DC91c1BE50AD69CFD5F465973ab2Cbe72", value, options) 
        // setTransactionToCheck(tx)
        console.log(tx)
    }

    return (
    <div>
        <div className='flex flex-col gap-4 bg-pinkFun mt-6'>
            Mint your NFT here!
        </div>
        <div>Price 0.1 BNB</div>
        <div>Balance: {balance} BUSD</div>
        <div 
            onClick={handleClick}
            className='bg-funYellow text-center rounded text-black cursor-pointer'>
            MINT!
        </div>
    </div>
  )
}

export default Mint