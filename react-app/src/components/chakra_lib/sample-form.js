import React from 'react';
import {
    Box,
    FormControl,
    FormLabel, NumberDecrementStepper,
    NumberIncrementStepper,
    NumberInput,
    NumberInputField,
    NumberInputStepper
} from "@chakra-ui/react";

export default function SampleForm(){
    return(
        <div>
            <Box w="80%" h="100px" bgGradient="linear(to-r, red.200, pink.500)">
                <FormControl id="amount">
                  <FormLabel>Amount</FormLabel>
                  <NumberInput max={50} min={10}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                </FormControl>
            </Box>
        </div>
    )
}