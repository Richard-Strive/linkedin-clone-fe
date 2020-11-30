import React, { Component } from "react";
import { Card, Button, Row, Col, Image } from "react-bootstrap";

export default class PeopleYouMayKnow extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title className="text-left">People you may know</Card.Title>
            <Row>
              <Col xs={6} md={4}>
                <Image
                  src="https://media-exp1.licdn.com/dms/image/C4D03AQG2hZXAmmDeXA/profile-displayphoto-shrink_100_100/0/1595170353862?e=1612396800&v=beta&t=Sn-42XLaNxD7yGxPs2cIEBHrTBd2AG1iovL2L0qmZgI"
                  roundedCircle
                />
              </Col>
              <Col>
                <b>Manuel Desole</b>
                <p>Studente presso Accademia di belle arti mario sironi</p>
                <hr />
              </Col>
              <Col xs={6} md={4}></Col>
            </Row>
          </Card.Body>
          <hr />
          <Card.Text className="mb-2">Show more </Card.Text>
        </Card>
      </div>
    );
  }
}
