import React from "react";


import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Container
} from '@chakra-ui/react';





export default function TeamInfoBoxTwo({ team }) {
    return (
        <Box>
          {/* <Box>
            <p> This is a blurb that has a lot of info on the team</p>
          </Box> */}
          <Box
              maxW={'270px'}
              w={'full'}
              h="250px"
              bg={useColorModeValue('white', 'gray.800')}
              pos={"relative"}
              top={"25px"}
              boxShadow={'2xl'}
              rounded={'md'}
              overflow={'hidden'}
              marginRight={'10px'}
              padding={'6px'}
              className="team-info-box-two-card">
              <p> 
                {team?.blurb}
              </p>

              <Heading
                  padding="5px"
                  margin="5px"
                  borderBottom="solid 2px black"
                  fontSize="lg"
                  >
                  <p>
                      Wanted Skills
                  </p>
              </Heading>
              {team?.skills.map((skill) => {
                return (
                  `${skill.name} `
                )
              })}

          </Box>
        </Box>
    )
}


{/* <Image
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
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
    }
    alt={'Author'}
    css={{
      border: '2px solid white',
      zIndex: 2
    }}
  />
</Flex>

<Box p={6}>
  <Stack spacing={0} align={'center'} mb={5}>
    <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
      Your name
    </Heading>
    <Text color={'gray.500'}>Gamjam Developer</Text>
  </Stack>

  <Stack direction={'row'} justify={'center'} spacing={6}>
    <Stack spacing={0} align={'center'}>
      <Text fontWeight={600}>100</Text>
      <Text fontSize={'sm'} color={'gray.500'}>
        Followers
      </Text>
    </Stack>
    <Stack spacing={0} align={'center'}>
      <Text fontWeight={600}>100</Text>
      <Text fontSize={'sm'} color={'gray.500'}>
        Following
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
</Box> */}