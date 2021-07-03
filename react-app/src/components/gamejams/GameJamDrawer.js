import React, { useEffect, useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";

import { useDisclosure } from "@chakra-ui/hooks";
import { Box,
    Button,
    Stack,
    Select,
    Textarea,
} from "@chakra-ui/react";
import {
    Input,
    InputGroup,
    InputLeftAddon,
    InputRightAddon,
} from "@chakra-ui/react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import {
    FormLabel,
} from "@chakra-ui/react";

import { getGameJams } from "../../store/game_jam";
import { gameJamQuery } from "../../utils/queryFunctions";

export default function GameJamDrawer() {
    const dispatch = useDispatch();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [searchTerm, setSearchTerm] = useState("");
    const [date, setDate] = useState("");

    const handleClick = (e) => {
        // e.preventDefault();
        const searchQuery = gameJamQuery({
            searchTerm: searchTerm,
            date: date,
            getJoinedTags: true,
        });
        dispatch(getGameJams(searchQuery, "search"));
    }

    return (
        <>
            <Button colorScheme="teal" onClick={onOpen}>
                Create user
            </Button>
            <Drawer
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader borderBottomWidth="1px">
                        Filter Jams
                    </DrawerHeader>

                    <DrawerBody>
                        <Stack spacing="24px">
                            <Box>
                                <FormLabel htmlFor="game-jam__drawer-search">Search</FormLabel>
                                <Input
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    id="game-jam__drawer-search"
                                    placeholder="Please enter a search term"
                                />
                            </Box>

                            <Box>
                                <FormLabel htmlFor="game-jam__drawer-date">When</FormLabel>
                                <Select
                                    id="game-jam__drawer-date"
                                    defaultValue="all"
                                    onChange={(e) => setDate(e.target.value)}
                                >
                                    <option value="day">Starts This Day</option>
                                    <option value="week">Starts This Week</option>
                                    <option value="month">Starts This Month</option>
                                    <option value="year">Starts This Year</option>
                                    <option value="all">Show All</option>
                                </Select>
                            </Box>

                            <Box>
                                <FormLabel htmlFor="url">Url</FormLabel>
                                <InputGroup>
                                    <InputLeftAddon>http://</InputLeftAddon>
                                    <Input
                                        type="url"
                                        id="url"
                                        placeholder="Please enter domain"
                                    />
                                    <InputRightAddon>.com</InputRightAddon>
                                </InputGroup>
                            </Box>

                            <Box>
                                <FormLabel htmlFor="desc">Description</FormLabel>
                                <Textarea id="desc" />
                            </Box>
                        </Stack>
                    </DrawerBody>

                    <DrawerFooter borderTopWidth="1px">
                        <Button variant="outline" mr={3} onClick={onClose}>
                            Cancel
                        </Button>
                        <Button colorScheme="blue" onClick={handleClick}>
                            Submit
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
