import React, { Component } from "react";
import bootstrap, { Row, Col } from "react-bootstrap";
class RightSide extends Component {
  render() {
    return (
      <div>
        <div class="card" style={{ width: "16rem", borderRadius: "10px" }}>
          <div class="card-body">
            <h5 class="card-title">Add to your feed</h5>
            <Row>
              <Col xs={2}>
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://via.placeholder.com/20C/O https://placeholder.com/"
                ></img>
              </Col>
              <Col xs={5}>
                <span style={{ fontSize: "14px" }}>#linkedin</span>
              </Col>
              <Col xs={5}>
                <button style={{ fontSize: "11px", border: "0" }}>
                  + Follow
                </button>
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://via.placeholder.com/20C/O https://placeholder.com/"
                ></img>
              </Col>
              <Col xs={5}>
                <span style={{ fontSize: "14px" }}>#motivation</span>
              </Col>
              <Col xs={5}>
                <button style={{ fontSize: "11px", border: "0" }}>
                  + Follow
                </button>
              </Col>
            </Row>
            <Row>
              <Col xs={2}>
                <img
                  style={{ borderRadius: "50%" }}
                  src="https://via.placeholder.com/20C/O https://placeholder.com/"
                ></img>
              </Col>
              <Col xs={5}>
                <span style={{ fontSize: "14px" }}>Bill Gates</span>
              </Col>
              <Col xs={5}>
                <button style={{ fontSize: "11px", border: "0" }}>
                  + Follow
                </button>
              </Col>
            </Row>
          </div>
        </div>

        <div
          class="card"
          style={{ width: "16rem", borderRadius: "10px", marginTop: "5px" }}
        >
          <img
            src="https://via.placeholder.com/150C/O https://placeholder.com/"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <ul
              style={{
                listStyle: "none",
                textAlign: "center",
                marginRight: "31px",
              }}
            >
              <li>
                <a href="/">About </a>
              </li>
              <li>
                <a href="/">Accessibility </a>
              </li>
              <li>
                <a href="/">Help Center </a>
              </li>
              <li>
                <a href="/">Privacy Terms </a>
              </li>
              <li>
                <a href="/">Ad Choices </a>
              </li>
              <li>
                <a href="/">Advertising </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default RightSide;
