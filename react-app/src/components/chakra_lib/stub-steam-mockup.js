import React from "react";
import {
    Badge,
    Box,
    Button,
    Container,
    Flex,
    Grid,
    GridItem,
    Image,
    SimpleGrid,
    Square,
    Stack,
    Text
} from "@chakra-ui/react";
import * as PropTypes from "prop-types";
import SampleForm from "./sample-form";
import CardSample from "./card-sample";

function Card(props) {
    return null;
}

Card.propTypes = {
    longLine: PropTypes.string,
    product: PropTypes.string,
    summary: PropTypes.string
};

function StarIcon(props) {
    return null;
}

StarIcon.propTypes = {color: PropTypes.any};
export default function StubSteamMockup(){
  const property = {
    imageUrl: "https://oyster.ignimgs.com/wordpress/stg.ign.com/2012/12/AC3.jpg?fit=bounds&width=640&height=480",
    imageAlt: "A super cool game!",
    beds: 3,
    baths: 2,
    title: "An awesome game that I made in 3 days.",
    time: "10 days",
    reviewCount: 34,
    rating: 4,
  }


    return(
        <box bg="grey" w="100%" h="100%">

            <Box bg="grey" w="100%" h="80%" spacing={4} p={4} color="white">
                <Flex color="white">
                  <Square size="100x">
                    <CardSample property={property} />
                    <CardSample property={property} />
                    <CardSample property={property} />
                    <CardSample property={property} />



                  </Square>
                </Flex>
            </Box>
            <Box bg="black" w="100%" h="10%" spacing={4} p={4} color="white">
                <Flex color="white">
                  <Square size="100x">
                      <p>THINGS</p>
                      <p>THINGS</p>
                      <p>THINGS</p>
                      <p>THINGS</p>
                      <p>THINGS</p>

                  </Square>
                </Flex>
            </Box>
        </box>

    )
}