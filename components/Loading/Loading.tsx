// imports
import React from "react";

// custom css
import "./index.css";
// props
type Props = {};

// loading
function Loading({}: Props) {
    return (
        <div className="flex">
            <span className="loader"></span>
        </div>
    );
}

// export
export default Loading;
