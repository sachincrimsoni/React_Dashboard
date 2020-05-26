import React from 'react';
import { Card } from 'react-bootstrap';

const About = () => {
    return(
        <div>
            <Card className="cardcontainer">
                <Card.Body>
                    <Card.Title className="heading1">Website About Us Page</Card.Title>
                    <Card.Text>
                        install react router dom<br/>
                        npm install --save react-router-dom<br/><br/>
                        install sass for the project <br/>
                        npm install node-sass<br/><br/>
                        install react bootstrap <br/>
                        npm install react-bootstrap bootstrap
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    )
}
export default About;