import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

import {Box, useColorModeValue, Container} from "@chakra-ui/react";

import GameJamInfoCard from "../gamejams/GameJamInfoCard"

import { getGameJam } from "../../store/game_jam"
import { getUsers, getUser } from "../../store/user"

import { usersQuery } from "../../utils/queryFunctions"



export default function TeamInfoBox(){

  const dispatch = useDispatch()
  const gameJams = useSelector(state => state.gameJams)
  const users = useSelector(state => state.userReducer.users)


  // useEffect(() => {
  //   // if(!users) {
  //   //   return
  //   // }
  //   console.log("GIVE ME YOUR SECRETS", users.email);

  // }, [users])

  // console.log("REDUX IS A PAIN", users.email);

  console.log("MAKE IT CRAZY", users);

  const { id } = useParams()

  useEffect(() => {

      dispatch(getGameJam(id))
      // dispatch(getUsers(usersQuery({})))
      dispatch(getUser(id, usersQuery({})))

  }, [dispatch, id])

    return(
      <>
        { users ?
          <>
          <Box className="your-gamejams">Your gamejams: {users.username}</Box>
          </>
          :
          <Box className="your-gamejams">Loading...</Box>
        }
        <Box
          maxW={'350px'}
          w="50%"
          bg={useColorModeValue('white', 'gray.800')}
          pos={"relative"}
          // top={"25px"}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'auto'}
          className="gamejam-box-profile"
          >
            {/* <Flex justify="space-around" align="stretch" direction="column" h="30rem"> */}
            <Container>
                  {
                      Object.values(gameJams).map((game, idx) =>

                       <GameJamInfoCard key={idx} game={game}  /> )
                  }
            </Container>
            {/* </Flex> */}
        </Box>
    </>
    )
}
