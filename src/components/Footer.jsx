import React, { Component } from "react";
import bootstrap, {
  Col,
  Container,
  Row,
  Image,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
import footericon from "./images/footericon.png";

class Footer extends Component {
  render() {
    return (
      <div>
        <Container>
          <Image
            src={footericon}
            style={{
              height: "70px",
              width: "150px",
              bottom: "0",
              display: "flex",
              left: "0",
              marginLeft: "38px",
            }}
          />
          <Row>
            <Col>
              <ul style={{ listStyle: "none", textAlign: "left" }}>
                <li>About</li>
                <li>Community Guidelines</li>
                <li>Privacy Terms </li>
                <li>Sales Solutions</li>
                <li>Safety Center</li>
              </ul>
            </Col>
            <Col>
              <ul style={{ listStyle: "none", textAlign: "left" }}>
                <li>Accessibility</li>
                <li>Careers</li>
                <li>Ad Choices</li>
                <li>Mobile</li>
              </ul>
            </Col>
            <Col>
              <ul style={{ listStyle: "none", textAlign: "left" }}>
                <li>Talent Solutions</li>
                <li>Marketing Solutions</li>
                <li>Advertising</li>
                <li>Small Business</li>
              </ul>
            </Col>
            <Col>
              <ul style={{ listStyle: "none", textAlign: "left" }}>
                <li>
                  Questions? <br />
                  <p>Visit our Help Center.</p>
                </li>
                <li>
                  Manage your account and privacy <br />
                  <p>Go to your Settings.</p>
                </li>
              </ul>
            </Col>
            <Col>
              Select Language
              <DropdownButton
                className="footerbutton"
                title="English"
                style={{ borderRadius: "0", backgroundColor: "white" }}
              >
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default Footer;
