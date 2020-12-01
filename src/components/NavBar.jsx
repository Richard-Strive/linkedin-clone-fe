import React, { Component } from "react";
import "../App.css";
import { Link, withRouter } from "react-router-dom";
import bootstrap, {
  Container,
  Row,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Col,
  Image,
} from "react-bootstrap";
import logo from "./images/logo.png";

class NavBar extends Component {
  render() {
    return (
      <div>
        <Navbar
          className="mb-4 navnavbar "
          style={{ height: 50 }}
          bg="light"
          expand="lg"
        >
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <Row
            className="align-items-center justify-content-center mt-4 collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <Col md={1}>
              <Link to="/">
                <Image
                  style={{
                    height: 50,
                    width: 50,
                    marginBottom: "15px",
                  }}
                  src={logo}
                />
              </Link>
            </Col>
            <Col md={4}>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 mb-3"
                  style={{ width: "390px" }}
                />
              </Form>
            </Col>
            <Col md={7}>
              <ul className="navul">
                <Link to="/">
                  <li className="navli">
                    <i className="fas nav-icons fa-home ">
                      <br />
                      <span className="nav-icon-text">Home</span>
                    </i>
                  </li>
                </Link>
                <Link to="/">
                  <li className="navli">
                    <i className="fas nav-icons fa-network-wired ">
                      <br />
                      <span className="nav-icon-text">MyNetwork</span>
                    </i>
                  </li>
                </Link>
                <Link to="/">
                  <li className="navli">
                    <i className="fas nav-icons fa-briefcase ">
                      <br /> <span className="nav-icon-text">Jobs</span>
                    </i>
                  </li>
                </Link>
                <Link to="/">
                  <li className="navli">
                    <i className=" nav-icons far fa-comment-dots ">
                      <br />
                      <span className="nav-icon-text">Messaging</span>
                    </i>
                  </li>
                </Link>
                <Link to="/">
                  <li className="navli">
                    <i className="fas nav-icons fa-bell ">
                      <br />
                      <span className="nav-icon-text">Notifications</span>
                    </i>
                  </li>
                </Link>
                <Link to="/">
                  <li className="navli">
                    <i className="fas nav-icons fa-user-circle ">
                      <br /> <span className="nav-icon-text">Me</span>
                    </i>
                  </li>
                </Link>
                <Link to="/">
                  <li className="navli">
                    <i className="fas nav-icons fa-bars ">
                      <br />
                      <span className="nav-icon-text">Works</span>
                    </i>
                  </li>
                </Link>
              </ul>
            </Col>
          </Row>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(NavBar);
