import { Box, Button, useToast } from '@chakra-ui/react'
import React from 'react'
import {fetchEntries, signMessage} from "../src/pages/api/db"
import { useEffect } from 'react'
import { useAccount, useConnect, useSignMessage } from 'wagmi'
const Guestbook = () => {
    const {address,isConnected}=useAccount();
    const toast=useToast();
    const {signMessageAsync}=useSignMessage()
    useEffect(()=>{
        const fetching= async()=>{
            const {data,error}= await fetchEntries();
            if(data){console.log(data)}
            if(error){
                console.log("Error while fetching",error);
                return{
                    error:error.message,
                }
            }return{
                entries:data,
            }
           
        }
        fetching()
    })
    
    const handleSignMessage=async()=>{
        if(!isConnected){
            toast({
                description:"Please Connect Your Wallet!",
                status:"error",
                duration:1000,
            })
            return;
        }

        const message="LFG🚀";
        const signature=await signMessageAsync({message});
        console.log("Signature",signature)
        if(!signature){
            toast({
                description:"Please Connect Your Wallet!",
                status:"error",
                duration:1000,
            })
            return;
        }

        const {data,error}= await signMessage(address,message,signature);
        if(data && !error){
            toast({
                description:"Signed Successfully!",
                status:"success",
                duration:1000,
            })
            
        }else{
            console.log(error.message);
            toast({
                description:"Signature failed!",
                status:"error",
                duration:1000,
            })
            
        }
    }
  return (
    <div className=' text-black mt-40 h-88 z-50'>
    <Box>
    <Button onClick={handleSignMessage}>Sign my Guestbook</Button>
    </Box>
    </div>
  )
}

export default Guestbook;

