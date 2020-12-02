import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Posts from "../home_subcomponents/Posts";
import MakePost from "../home_subcomponents/MakePost";
import LeftSide from "../sideComponents/LeftSide";
import RightSide from "../sideComponents/RightSide";

class Home extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col xs={3}>
              <LeftSide />
            </Col>
            <Col xs={6}>
              <MakePost />
              <Posts />
            </Col>
            <Col xs={3}>
              <RightSide/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Home;
