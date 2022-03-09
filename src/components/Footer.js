import { ButtonGroup, Box, IconButton, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py={{
        base: "12",
        md: "16",
      }}
      bgColor={"pink.300"}
    >
      <Stack
        spacing={{
          base: "4",
          md: "5",
        }}
      >
        <Stack justify="center" direction="row" align="center">
          <ButtonGroup variant="ghost">
            <IconButton
              as="a"
              href="https://www.instagram.com/dolceparma2018/"
              aria-label="Instagram"
              icon={<FaInstagram fontSize="1.25rem" />}
              target={"_blank"}
            />
            <IconButton
              as="a"
              href="https://www.facebook.com/DolceParma2018"
              aria-label="Facebook"
              icon={<FaFacebook fontSize="1.25rem" />}
              target={"_blank"}
            />
            
          </ButtonGroup>
        </Stack>
        <Text fontSize="sm" color="subtle" textAlign={"center"}>
          &copy; {new Date().getFullYear()} Dolce Parma - Diseño Independiente
        </Text>
      </Stack>
    </Box>
  );
};
