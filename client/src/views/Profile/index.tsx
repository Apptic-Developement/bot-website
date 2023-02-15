import React, { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
export default function UserProfile() {
    const {user} = useContext(AuthContext);
    return (
        <h1>{user?.username}</h1>
    )
}