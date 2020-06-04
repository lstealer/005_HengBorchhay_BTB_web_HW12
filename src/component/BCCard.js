import React from "react";
import {Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";

function BCCard(props) {
    return (
        props.record.map((record) => {
            return (
                <Card key={record.id}style={{width: '13rem',margin:"3px"}}>
                    <Card.Img src={record.img} style={{width:"10vw",height:"10vh"}}/>
                    <Card.Body>
                        <Card.Title>{record.name}</Card.Title>
                        <Card.Text >
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Link to={"/post/"+record.id}>
                        <Button variant="primary">Go the content</Button>
                        </Link>
                    </Card.Body>
                </Card>
            )
        })
    )
}

export default BCCard