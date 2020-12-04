import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";

export default class EditAdd extends Component {
  render() {
    return (
      <div>
        <Card className="mb-3" style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Text>
              Edit public profile & URL{" "}
              <i class="fas fa-question-circle ml-2"></i>
            </Card.Text>
            <hr />
            <Card.Text>
              Add profile in another language
              <i class="fas fa-question-circle "></i>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
