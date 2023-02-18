// imorts
import React, { useEffect } from "react";
import Loading from "../../../components/Loading/Loading";

// logout page
export default function Logout() {
    useEffect(() => {
        localStorage.clear();
        window.location.assign("/");
    });
    return (
        <>
            <div>
                <Loading />
            </div>
        </>
    );
}
