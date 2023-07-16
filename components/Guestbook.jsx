import { Box, Button, Text, VStack, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { fetchEntries, signMessage } from "../src/pages/api/db";
import { useEffect } from "react";
import Identicon from "react-identicons";
import { useAccount, useConnect, useSignMessage } from "wagmi";
const Guestbook = () => {
  const { address, isConnected } = useAccount();
  const toast = useToast();
  const [entries, setEntries] = useState();
  const { signMessageAsync } = useSignMessage();
  // const truncatedAddress=address.substring(0.6)+"..."+address.substring(address.length-4,address.length);
  useEffect(() => {
    const fetching = async () => {
      const { data, error } = await fetchEntries();
      if (data) {
        console.log(data);
        setEntries(data);
      }
      if (error) {
        console.log("Error while fetching", error);
        return {
          error: error,
        };
      }
    };
    fetching();
  }, []);

  const handleSignMessage = async () => {
    if (!isConnected) {
      toast({
        description: "Please Connect Your Wallet!",
        status: "error",
        duration: 1000,
      });
      return;
    }

    const message = "LFG🚀";
    const signature = await signMessageAsync({ message });
    console.log("Signature", signature);
    if (!signature) {
      toast({
        description: "Please Connect Your Wallet!",
        status: "error",
        duration: 1000,
      });
      return;
    }

    const { data, error } = await signMessage(address, message, signature);
    if (data && !error) {
      toast({
        description: "Signed Successfully!",
        status: "success",
        duration: 1000,
      });
    } else {
      console.log(error);
      toast({
        description: "Signature failed!",
        status: "error",
        duration: 1000,
      });
    }
  };

  console.log("Entries:", entries);
  return (
    <div className=" bg-dark-teal text-black mt-[75px] h-88 z-50">
      <VStack className=" h-fit mt-20 pt-20">
        <Button className="bg-teal-500" onClick={handleSignMessage}>
          Sign my Guestbook
        </Button>
        <div className="flex gap-8 flex-wrap">
          {" "}
          {entries &&
            entries.map((entry) => {
              return (
                <div className="flex gap-2 rounded-md m-2 bg-[whitesmoke] w-fit p-2 text-black">
                  <Identicon bg="whitesmoke" size={25} string={entry.signer} />
                  <Text>
                    {entry.signer.substring(0, 6) +
                      "..." +
                      entry.signer.substring(
                        entry.signer.length - 4,
                        entry.signer.length
                      )}
                  </Text>
                </div>
              );
            })}
        </div>
      </VStack>
    </div>
  );
};

export default Guestbook;
