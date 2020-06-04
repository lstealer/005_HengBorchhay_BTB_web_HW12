import React from "react";
import {Link} from "react-router-dom";
import queryString from "query-string";
function quering(que) {
    return que===undefined?"There is no name in the query string":"The name in the query string is "+que;
}
function BCAccount(props) {
    let a=queryString.parse(props.location.search)
    console.log(a.name)
    return (
        <div>
            <h1>Accounts</h1>
            <ul>
            <li><Link to={"/account?name=netflix"}>Netflix</Link></li>
            <li><Link to={"/account?name=zillow"}>Zillow Group</Link></li>
            <li><Link to={"/account?name=yahoo"}>Yahoo</Link></li>
            <li><Link to={"/account?name=modus"}>Modus Create</Link></li>
            </ul>
            <h1>{quering(a.name)}</h1>
        </div>
    )
}
export default BCAccount