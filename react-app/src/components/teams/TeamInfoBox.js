import React from "react";


import {
    Heading,
    Avatar,
    Box,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue
} from '@chakra-ui/react';


export default function TeamInfoBox() {
    const path = process.env.PUBLIC_URL;
    return (
        <Box
            maxW={'270px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            pos={"relative"}
            top={"5px"}
            boxShadow={'2xl'}
            rounded={'md'}
            overflow={'hidden'}
            className="team-info-box-main"
        //paddingX="10px"
        >
            <Image
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
                        `${path}/images/teamAvatars/UnrealMotor.png`
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
                        Unreal Motor
              </Heading>
                    <Text color={'gray.500'}>Gam Jam Team</Text>
                </Stack>

                <Stack direction={'row'} justify={'center'} spacing={6}>
                    <Stack spacing={0} align={'center'}>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Participated In
                        </Text>
                        <Text fontWeight={600}>100</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Game Jams
                        </Text>
                    </Stack>
                    <Stack spacing={0} align={'center'}>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Created
                        </Text>
                        <Text fontWeight={600}>100</Text>
                        <Text fontSize={'sm'} color={'gray.500'}>
                            Games
                        </Text>
                    </Stack>
                </Stack>
                <Text className="team-info-box-recruiting">
                    Recruiting: Yes!
                </Text>
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
                    Apply
            </Button>
            </Box>
        </Box>
    )
}