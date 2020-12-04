import React, { Component } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

export default class PeopleAlsoViewed extends Component {
  render() {
    return (
      <div>
        <Card className="mt-3 mb-3" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-left">People also viewed</Card.Title>
            {this.props.deta.slice(3, 5).map((user) => {
              return (
                <Row style={{ height: "100px", overflow: "hidden" }}>
                  <Col xs={4} md={4}>
                    <Image
                      style={{ height: "61px", width: "65px" }}
                      src={user.image}
                      roundedCircle
                    />
                  </Col>
                  <Col xs={4}>
                    <b>{user.name}</b>
                    <p style={{ fontSize: "10px" }}>{user.bio}</p>
                    <hr />
                  </Col>
                  <Col
                    xs={4}
                    md={4}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      height: "100%",
                    }}
                  >
                    <i className="fas fa-paper-plane"></i>
                  </Col>
                </Row>
              );
            })}
          </Card.Body>
          <hr />
          <Card.Text>Show more </Card.Text>
        </Card>
      </div>
    );
  }
}
