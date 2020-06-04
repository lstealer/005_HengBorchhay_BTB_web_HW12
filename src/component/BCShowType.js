import React from "react";
function BCShowType(props) {
    return(
        <div>
            <h1 style={{textTransform:'capitalize'}}>{props.match.params.type}</h1>
        </div>
    )
}
export default BCShowType