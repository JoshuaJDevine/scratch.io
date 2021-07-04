import React, { useEffect, useState, useRef} from "react";
import { useSelector, useDispatch } from "react-redux";

import { useDisclosure } from "@chakra-ui/hooks";
import {
    Box,
    Container,
    Button,
    Stack,
    Select,
    Textarea,
    HStack,
    Wrap,
} from "@chakra-ui/react";
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton,
} from "@chakra-ui/react"
import {
    Input,
    InputGroup,
    InputLeftAddon,
    InputLeftElement,
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
    const [currTag, setCurrTag] = useState("");
    const [searchTags, setSearchTags] = useState(new Set());
    const [date, setDate] = useState("");

    const handleSubmitClick = (e) => {
        console.log(`searchTags`, [...searchTags])
        const searchQuery = gameJamQuery({
            searchTerm: searchTerm,
            searchTags: [...searchTags],
            date: date,
            getTags: 100,
        });
        dispatch(getGameJams(searchQuery, "search"));
    }

    const handleTagSubmit = (e) => {
        setSearchTags(state => {
            const set = new Set(state);
            set.add(currTag);
            return set;
        });
        setCurrTag("");
    }

    const handleTagCancel = (e) => {
        setSearchTags(state => {
            const set = new Set(state);
            set.delete(currTag);
            return set;
        });
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
                                <FormLabel htmlFor="game-jam__drawer-tags">Tags</FormLabel>
                                <Box>
                                    <Wrap>
                                        {[...searchTags].map(tag => {
                                                return (
                                                    <Tag>
                                                        <TagLabel>{tag}</TagLabel>
                                                        <TagCloseButton
                                                            value={tag}
                                                            onClick={e => {
                                                                handleTagCancel()
                                                            }}
                                                        />
                                                    </Tag>
                                                )
                                            })}
                                    </Wrap>
                                </Box>
                                <Input
                                    value={currTag}
                                    onChange={(e) => setCurrTag(e.target.value)}
                                    onKeyPress={e => {
                                        if (e.key === "Enter" && currTag !== "")
                                            handleTagSubmit();
                                    }}
                                    id="game-jam__drawer-tags"
                                    placeholder="Please enter a search tag"
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
                        <Button colorScheme="blue" onClick={handleSubmitClick}>
                            Submit
                        </Button>
                    </DrawerFooter>
                </DrawerContent>
            </Drawer>
        </>
    )
}
