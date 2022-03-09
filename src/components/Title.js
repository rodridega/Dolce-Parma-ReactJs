import { Heading, Box, Container } from "@chakra-ui/react";
import React from "react";

export const Title = () => {
  return (
    <Container>
      <Box>
         <Heading as="h2" py={28} pb={8} fontSize={{base: '4xl', md: '6xl'}} textAlign='center' color={'pink.600'}	>Productos</Heading>
      </Box>
    </Container>
  );
};
