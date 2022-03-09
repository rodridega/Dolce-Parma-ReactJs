import React from "react";
import {
  Box,
  Heading,
  Container,
  Flex,
  Spacer,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { Cart } from "./Cart";

export const MyMenu = ({prodCarrito, setProdCarrito}) => {
  return (
    <Box
      bg={"pink.300"}
      w="100%"
      p={4}
      color="white"
      position={"fixed"}
      zIndex={"banner"}
      display={'flex'}
    >
      <Container maxW="container.xl">
        <Flex>
          <Box>
            <Heading as="h1">Dolce Parma</Heading>
          </Box>
          <Spacer />
          
        </Flex>
      </Container>
      <Cart prodCarrito={prodCarrito} setProdCarrito={setProdCarrito} />
    </Box>
  );
};
