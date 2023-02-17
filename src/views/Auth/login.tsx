import React from "react";
import config from '../../../config.json'
import getLoginUrl from "../../../helpers/getLoginUrl";
const Login = () => {
    window.location.href = getLoginUrl()
    return (
        <>
        </>
    )
}
export default  Login;