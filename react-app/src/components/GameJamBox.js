import React from "react";

import { Box, SimpleGrid } from "@chakra-ui/react";

import MainGJBoxes from "./MainGJBoxes";

export default function GameJamBox() {

return (
  <SimpleGrid
  bg="rgba(4, 5, 10, 0.315)"
  columns={{ sm: 5 }}
  spacing="8"
  p="10"
  textAlign="center"
  rounded="lg"
  color="gray.400">
    <MainGJBoxes />
  </SimpleGrid>
    )
}
