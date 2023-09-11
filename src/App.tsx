import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is the Header</h1>
            <img
                src="data:image/png;base64,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"
                alt="My Favorite Team is the Patriots"
            />
            <ol>
                <li>Mac Jones</li>
                <li>Ezekiel Elliot</li>
                <li>Devonte Parker</li>
                <li>Rhamondre Stevenson</li>
            </ol>
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        First Column
                        <div
                            style={{
                                height: 200,
                                width: 100,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        Second Column
                        <div
                            style={{
                                height: 200,
                                width: 100,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Suhas Bolledula. {"Hello World"}
            </p>
        </div>
    );
}

export default App;
