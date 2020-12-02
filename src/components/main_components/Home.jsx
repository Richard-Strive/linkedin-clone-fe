import React from "react";
import RightSide from "../sideComponents/RightSide";
import { Container, Row, Col } from "react-bootstrap";

import Posts from "../home_subcomponents/Posts";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col>
              <RightSide />
            </Col>
            <Col>
              <Posts />
            </Col>
            <Col>
              <RightSide />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
