'use client';
import { useGlobalContext } from '../../utils/context/globalContext';
import { motion } from "framer-motion"


export default function QNectButton() {
    const { setConnectModalOpen, account } = useGlobalContext();
  
    return (
    <motion.div 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
    transition={{ duration: 0.04 }}
    className={`border border-gray-300 z-40
    fixed top-4 right-4 font-bold px-2 py-1
    text-white flex justify-center 
    items-center rounded-xl cursor-pointer
    ${account ? 'bg-green-500' : 'bg-funBlue'}
    `}
    onClick={()=>setConnectModalOpen(true)}
    >
       {account ? `${account.slice(0, 6)}...${account.slice(-4)}` : 'Connect'}
    </motion.div>
    );
}