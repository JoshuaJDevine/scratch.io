import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import { useHistory } from "react-router-dom"
import {Button} from "@chakra-ui/react";

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory()
  const onLogout = async (e) => {
    dispatch(logout());
    history.push("/")
  };

  return <Button colorScheme="white" variant="link" className="navbar buttons" onClick={onLogout}>Logout</Button>;
};

export default LogoutButton;
