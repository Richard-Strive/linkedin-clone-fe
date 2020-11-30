import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class EditAdd extends Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>Edit public profile & URL</Card.Text>
            <hr />
            <Card.Text>Add profile in another language</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
