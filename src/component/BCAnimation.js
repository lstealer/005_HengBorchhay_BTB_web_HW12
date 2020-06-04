import React from "react";
import {Link} from "react-router-dom";

function BCAnimaton() {
    return (
        <ul>
            <li><Link to={'/video/animation/action'}>Action</Link></li>
            <li><Link to={'/video/animation/romance'}>Romance</Link></li>
            <li><Link to={'/video/animation/comedy'}>Comedy</Link></li>
        </ul>
    )
}

export default BCAnimaton