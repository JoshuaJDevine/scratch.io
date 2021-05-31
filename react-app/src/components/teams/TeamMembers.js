import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOneTeam } from "../../store/team"

import { Box } from "@chakra-ui/react";
import TeamCarousel from "./TeamCarousel";

export default function ProfilePage() {
    return (
        <Box>
            <TeamCarousel />
        </Box>
    )
}