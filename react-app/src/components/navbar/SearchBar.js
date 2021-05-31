import React, { useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Box, Input, InputGroup, InputRightElement, Select, IconButton, Flex } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons"

import { getGameJams } from "../../store/game_jam";
import { gameJamQuery } from "../../utils/queryFunctions";

export default function SearchBar() {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const [date, setDate] = useState("");

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(getGameJams(gameJamQuery({searchTerm: searchTerm, date: date})));
    }

    return (
    <>
        <Box className="MainSeachBar">
            <Flex flexDirection='row'>
                <InputGroup>
                    <Input
                        placeholder="Search"
                        variant="filled"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <InputRightElement>
                        <IconButton aria-label="Search database" icon={<SearchIcon />}  onClick={handleClick}/>
                    </InputRightElement>
                </InputGroup>
                <Select placeholder="Select Date" bgColor="gray.200" w="15%" onChange={(e) => setDate(e.target.value)}>
                    <option value="day">Next Day</option>
                    <option value="week">Next Week</option>
                    <option value="month">Next Month</option>
                    <option value="year">Next Year</option>
                    <option value="all">All Game Jams</option>
                </Select>
            </Flex>
        </Box>
    </>
    )
}
