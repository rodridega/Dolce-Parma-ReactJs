import React from "react";
import {
  Box,
  Button,
  Image,
  Text,
  Divider,
  AspectRatio,
  Stack,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export const Card = ({
  prod,
  setProdCarrito,
  prodCarrito,
  
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  const handleProduct = () => {
    const prodObj = {
      title: prod.title,
      price: prod.price,
      image: prod.image,
      id: prod.id,
      cantidad: 1,
    };

    const existe = prodCarrito.some((prod) => prod.title === prodObj.title);
    if (existe) {
      const compras = prodCarrito.map((compra) => {
        if (compra.title === prodObj.title) {
          compra.cantidad++;
          compra.price += prodObj.price;
          return compra;
        } else {
          return compra;
        }
      });
      setProdCarrito([...compras]);
    } else {
      setProdCarrito([...prodCarrito, prodObj]);
    }
  };

  return (
    <>
      <Box
        maxWidth="32rem"
        borderWidth={1}
        margin={{ base: 2, md: 6 }}
        _hover={{
          boxShadow:
            "inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px white, 0.3em 0.3em 1em rgba(0, 0, 0, 0.3);",
          cursor: "pointer",
        }}
      >
        <AspectRatio ratio={1 / 1}>
          <Image
            src={prod.image}
            alt={prod.title}
            key={prod.id}
            maxW="300px"
            margin={"auto"}
            objectFit={"contain !important"}
            p={4}
            onClick={onOpen}
          />
        </AspectRatio>
        <Stack
          textAlign={"center"}
          bgColor={"pink.50"}
          fontSize={{ base: 12, md: 18 }}
        >
          <Text
            fontWeight="500"
            lineHeight={"1.5"}
            mt={2}
            mx={8}
            isTruncated
            align={{ base: "center", md: "stretch" }}
            fontSize={'3xl'}
          >
            {prod.title}
          </Text>

          <Divider />
          <Text my={2} color="gray.500">
            Precio: {prod.price} $
          </Text>
          <Button
            fontSize={{ base: 12, md: 14 }}
            alignSelf={"center"}
            w={"80%"}
            color={"white"}
            bgColor={"pink.300"}
            _hover={{
              background: "pink.200",
              color: "black",
            }}
            onClick={handleProduct}
          >
            Agregar al Canasto
          </Button>
        </Stack>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <AspectRatio ratio={1 / 1}>
              <Image
                src={prod.image}
                alt={prod.title}
                key={prod.id}
                maxW="300px"
                margin={"auto"}
                objectFit={"contain !important"}
                p={2}
                onClick={onOpen}
              />
            </AspectRatio>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack textAlign={"center"} fontSize={{ base: 12, md: 18 }}>
              <Text
                fontWeight="600"
                lineHeight={"1.5"}
                mt={2}
                mx={8}
                fontSize={30}
                align={{ base: "center", md: "stretch" }}
              >
                {prod.title}
              </Text>

              <Text>{prod.description}</Text>
              <Divider />
              <Text my={2} color="gray.800" align={"right"}>
                Precio: {prod.price} $
              </Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="pink" mr={3} onClick={handleProduct}>
              Agregar al carrito
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cerrar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
