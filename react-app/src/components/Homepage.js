import React from "react"
// import GameJamBox from "./gamejams/GameJamBox";
// import GameBox from "./games/GameBox"

import { useDispatch} from "react-redux";
import { useHistory } from "react-router-dom"
import { login } from "../store/session"



import {
    Flex,
    Box,
    Heading,
    Button
} from "@chakra-ui/react"


export default function Homepage() {
        const path = process.env.PUBLIC_URL;
        let image = `${path}logo_W.png`;
        let image2 = `${path}logo_H.png`;
        let image3 = `${path}logo_I.png`;
        let image4 = `${path}logo_S.png`;
        let image5 = `${path}logo_K.png`;

        const dispatch = useDispatch();

        const history = useHistory();


        let demoUserPageLoader = () => {
            dispatch(login('chad@aa.io', 'password'))
            history.push(`/profile/${3}`)
        }

    return (

        <Flex h="100vh" w="100vw" direction="column" classname="hp-main-body">
        <Box
        className="hp-main-img"
        >
             <img src={image}/>
             <img src={image2}/>
             <img src={image3}/>
             <img src={image4}/>
             <img src={image5}/>
        </Box>

        <Box>
                <Box id="welcome-div">
                <h1 id="welcome-msg">Welcome to Whisk!</h1>
                <p id="welcome-msg-p"><div className="action-call">Fuel your creativity.</div>
                <br /> — Join the Whisk community —
                <br />A home to all game developers.
                <br />Join us and share your story.</p>
        </Box>
        </Box>
                <Box  className="h-pg__sign-up-btn" ><Button variant="link" onClick={demoUserPageLoader}>Demo Login</Button></Box>

        </Flex>
    )
}

    // {/* <Box>
    //         <Heading className="hp-heading">
    //         <h1>
    //         Sample Gamjams
    //         </h1>
    //         </Heading>
    //         <GameJamBox />
        // </Box> */}
