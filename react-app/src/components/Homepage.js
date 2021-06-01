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
        var path = process.env.PUBLIC_URL;
        var image = "logo_W.png";
        var image2 = "logo_H.png";
        var image3 = "logo_I.png";
        var image4 = "logo_S.png";
        var image5 = "logo_K.png";

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
             <img src={path + image}/>
             <img src={path + image2}/>
             <img src={path + image3}/>
             <img src={path + image4}/>
             <img src={path + image5}/>
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
