import React from "react";
import {Link} from "react-router-dom";

function BCVideo(props) {
    return (
        <ul>
            <li>
                <Link to={"/video/animation"}>Animation</Link>
            </li>
            <li>
                <Link to={"/video/movie"}>Movie</Link>
            </li>
        </ul>
    )
}

export default BCVideo