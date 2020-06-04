import React from "react";
function BCCardContent(props) {
    return(
        <h1>
            This is content from {props.match.params.id}
        </h1>
    )
}
export default BCCardContent