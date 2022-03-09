import React from "react";
import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import logo from "../assets/logo2.jpeg";

export const Hero = () => {
  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "pink.300",
                zIndex: -1,
              }}
            >
              Dolce Parma
            </Text>
            <br /> <Text as={"span"}>Diseño Independiente</Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            San Benito. Entre Ríos . Argentina.
            <hr/>
            Cartucheras, portacosméticos, porta termo y muchísimas cosas más.
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <Button
              rounded={"full"}
              bg={"pink.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              as={'a'}
              href='index.html#titulo'
            >
              Ver productos
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={logo} />
      </Flex>
    </Stack>
  );
};
