import React from "react";

import { useSelector } from "react-redux"
import {Box, useColorModeValue, Flex, Container} from "@chakra-ui/react";

import GameJamInfoCard from "../gamejams/GameJamInfoCard"

// import {
//     Heading,
//     Avatar,
//     Box,
//     Image,
//     Flex,
//     Text,
//     Stack,
//     Button,
//     useColorModeValue
// } from '@chakra-ui/react';



export default function TeamInfoBox(){

  const gameJams = useSelector(state => state.gameJams)

    return(
        <Box
          maxW={'270px'}
          w="100%"
          bg={useColorModeValue('white', 'gray.800')}
          pos={"relative"}
          top={"25px"}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}
          className="gamejam-box-profile"
          >
            <Flex justify="space-around" align="stretch" direction="column" h="40rem">
            <Container>
                  <GameJamInfoCard gameJams={gameJams}/>
            </Container>
            </Flex>
        </Box>
    )
}


/* <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                "https://musicweek.ua/wp-content/uploads/2020/12/76.-Blob-Opera.png"
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>

          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Blob Opera
              </Heading>
              <Text color={'gray.500'}>Gam Jam Developer</Text>
            </Stack>

            <Stack direction={'row'} justify={'center'} spacing={6}>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>100</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Participated In
                </Text>
              </Stack>
              <Stack spacing={0} align={'center'}>
                <Text fontWeight={600}>100</Text>
                <Text fontSize={'sm'} color={'gray.500'}>
                  Creations
                </Text>
              </Stack>
            </Stack>

            <Button
              w={'full'}
              mt={8}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Follow
            </Button>
          </Box> */



