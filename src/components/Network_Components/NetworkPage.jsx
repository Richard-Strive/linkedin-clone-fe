import React, { PureComponent } from "react";
import "./Network_Style/NetworkPage.scss";
import SideBarNetwork from "./SideBarNetwork";
import { Container, Row, Col } from "react-bootstrap";
import Invitations from "./Invitations";
import Events from "./Events";

export default class NetworkPage extends PureComponent {
  state = {
    counter: 0,
  };

  counterFunction = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return (
      <Container id="network-page">
        <Row>
          <Col xs={4}>
            <SideBarNetwork counter={this.state.counter} />
          </Col>
          <Col xs={8}>
            <Invitations
              userList={this.props.userList}
              counterFunction={this.counterFunction}
            />
            <Events />
          </Col>
        </Row>
      </Container>
    );
  }
}
