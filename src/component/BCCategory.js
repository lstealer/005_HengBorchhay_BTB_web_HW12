import React from "react";

function BCCategory(props) {
    return(
        <div>
            <h1 style={{textTransform:'capitalize'}}>{props.match.params.animation} category</h1>
        </div>
    )
}
export default BCCategory