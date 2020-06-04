import React from "react";
import {Link} from "react-router-dom";

function BCMovie() {
    return (
        <ul>
            <li><Link to={'/video/movie/adventure'}>Adventure</Link></li>
            <li><Link to={'/video/movie/comedy'}>Comedy</Link></li>
            <li><Link to={'/video/movie/crime'}>Crime</Link></li>
            <li><Link to={'/video/movie/documentary'}>Documentary</Link></li>
        </ul>
    )
}

export default BCMovie