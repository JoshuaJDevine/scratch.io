import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux"
import { useParams } from "react-router-dom"

import {Box, useColorModeValue, Container, Image, Flex} from "@chakra-ui/react";

import GameJamInfoCard from "../gamejams/GameJamInfoCard"

import { getGameJams } from "../../store/game_jam"

import { gameJamQuery } from "../../utils/queryFunctions"






export default function TeamInfoBox(){

  const dispatch = useDispatch()
  const anotherUserState = useSelector(state => state.userReducer.users)
  const { id } = useParams()
  const [usersGj, setUsersGj] = useState(null)



  useEffect(() => {

    if (!anotherUserState) {
      return null
    } else {
      for (let key in anotherUserState) {
        if (key === id) {
          setUsersGj(anotherUserState[key])
        }
      }
    }
  })



  // useEffect(() => {

      // dispatch(getGameJams(gameJamQuery({})))
      // dispatch(getUsers(usersQuery({})))
      // dispatch(getUser(id, usersQuery({getJoinedGameJams: true})))


  // }, [dispatch, id])

return(
<>
        { usersGj ?
          <Box className="your-gamejams">

                <Box> Your gamejams: {usersGj.username}</Box>

          </Box>
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
            <Container>
            { usersGj ?

            <Box>
            {Object.keys(usersGj.owned_gamejams).map((key) => {
                return <Box key={key}>
                  <Flex align="center" justify="flex-start">
                  <Image
                  src={usersGj.owned_gamejams[key]?.avatar}
                  alt="img-gamejam"
                  h="50px"
                  />
                  <Box>{usersGj.owned_gamejams[key].name}</Box>
                  </Flex>
              </Box>
              })}
            </Box>
            :
          <Box>Loading...</Box>
        }
        </Container>
        </Box>
</>
    )
            }

//  {/* {
//                 usersGj ?
//                 <>
//                 {Object.values(usersGj).map((game, idx) => {
//                   console.log("WHAT IS THIS", idx, "------", game)
//                     return <Box key={idx}>{game.owned_gamejams.name}</Box>
//                 })}
//                 </>
//                   :
//                 <>
//                   <Box>Loading...</Box>
//                 </>
//               } */}

// {
// //   <>
//   {/* {console.log("THIS IS IT", usersGj)} */}
//   {/* {console.log("ACCESSING A PROP", usersGj.owned_gamejams)} */}
//     {/* Object.values(usersGj).map((game, idx) =>

//      <GameJamInfoCard key={idx} game={game}  /> ) */}
//   </>
// }
// {/* { usersGj ?
// <>
// {console.log(usersGj)}
// <Box>
// {Object.keys(usersGj.owned_gamejams).map((key) => {
// return <Box key={key}>{userGj.owned_gamejams[key].name}</Box>
// })}
// </Box>
// </>
// :
// <>
// <Box>Loading...</Box>
// </>
// } */}


// {
//   usersGj ?
//     <>
//         {Object.keys(usersGj.owned_gamejams).map(key => {
//         <Box className="profile-gj-boxes" h="300px">
//               <Box className="gj-intro-info">
//                   <Image
//                     src={usersGj.owned_gamejams[key].avatar}
//                     alt="img-gamejam"
//                     h="50px"
//                     />
//                   <div className="gj-info-entries">{usersGj.owned_gamejams[key].name}</div>
//               </Box>
//                   <div className="gj-info-entries theme">{`#${usersGj.owned_gamejams[key].theme}`}</div>

//                   <div className="gj-info-entries titles">A bit of info:</div>
//                   <div className="gj-info-entries blurb">{usersGj.owned_gamejams[key].blurb}</div>

//                   <div className="gj-info-entries userLimit">{`User limit: ${usersGj.owned_gamejams[key].userLimit}`}</div>

//               <div className="gj-info-entries titles">Sites:</div>
//               <div className="gj-info-entries sites">
//                   <div>{`The game: ${usersGj.owned_gamejams[key].website}`}</div>
//                   <div>{`Github: ${usersGj.owned_gamejams[key].github}`}</div>
//               </div>

//               <div className="gj-info-entries titles">Dates:</div>
//               <div className="gj-info-entries dates">
//                   <div>{`Start date: ${usersGj.owned_gamejams[key].startDate}`}</div>
//                   <div>{`End date: ${usersGj.owned_gamejams[key].endDate}`}</div>
//               </div>
//               <hr />
//   </Box>
//         })}
//   </>
//       :
//         <Box>Loading...</Box>
//     }
