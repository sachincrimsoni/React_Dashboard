import React from 'react';
import { Card } from 'react-bootstrap';

const NoMatchPage = () => {
    return (
        <div>
            <Card className="cardcontainer">
                <Card.Body>
                    <Card.Title className="heading1">404 - Not found</Card.Title>
                    <Card.Text>Page Not Found</Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};
export default NoMatchPage;