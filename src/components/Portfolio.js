import React, { Component } from "react";
import { Row, Col, Container, Card, Button } from 'react-bootstrap'

export default class Portfolio extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Niche Movie Picker</Card.Title>
                                    <Card.Text>
                                        My first collaberative project for my bootcamp, uses the imdb API to filter
                                        out mainstream movies and reccomend some critically aclaimed lesser known movies by genre.
                                    </Card.Text>
                                    <Button variant="primary">Go to Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Weather Dashboard</Card.Title>
                                    <Card.Text>
                                        A super basic dashboar that shows multiple cities current weather plus a 4 day forecast
                                    </Card.Text>
                                    <Button variant="primary">Go to Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>Portfolio beta</Card.Title>
                                    <Card.Text>
                                        My first portfolio page, putting this here for reference to how i've grown in a
                                        few months. this version was pretty sloppy
                                    </Card.Text>
                                    <Button variant="primary">Go to Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title>UFO Tracker</Card.Title>
                                    <Card.Text>
                                        My second collaberative project. This is an app that uses the nuforc database and disperses that
                                        info across an American map and will display it upon clcking a state, in order to leave a comment you
                                        must first create an account, after that and any time you are logged in you will be able to comment
                                        on these sightings.
                                    </Card.Text>
                                    <Button variant="primary">Go to Site</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}