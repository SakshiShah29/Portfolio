import { Flex, Text } from '@chakra-ui/react'
import React from 'react'
import Blockies from "react-blockies";
const GuestMessage = (props) => {
  return (
   <Flex>
<Blockies seed="Jeremy"/>
<Text>{props.address}</Text>
   </Flex>
  )
}

export default GuestMessage