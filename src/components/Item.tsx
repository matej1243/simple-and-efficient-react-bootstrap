import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Item = (): React.ReactElement => {
    return (
        <Card style={{ minWidth: '18rem', margin: '20px' }}>
            <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png" />
            <Card.Body>
                <Card.Title>Example Card</Card.Title>
                <Card.Text>This is an example React card</Card.Text>
                <Button variant="primary">Example Button</Button>
            </Card.Body>
        </Card>
    );
};

export default Item;
