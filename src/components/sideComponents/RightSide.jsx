import React, { Component } from "react";
import { Card, Row, Col } from "react-bootstrap";
import "../../App.css";

class RightSide extends React.Component {
  state = {
    user: {},
  };

  fetchUser = async () => {
    try {
      const response = await fetch(
        process.env.REACT_APP_BASE_URL + `profile/me`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
          },
        }
      );

      const user = await response.json();
      console.log(user);
      this.setState({ user });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <>
        <Card style={{ width: "14rem", borderRadius: "10px" }}>
          <Card.Header className="card-header">
            <Card.Img
              style={{
                height: "70px",
                width: "70px",
                borderRadius: "50%",
                alignSelf: "center",
              }}
              variant="top"
              src={this.state.user.image}
            />
          </Card.Header>

          <Card.Body>
            <Card.Title>
              Welcome,{this.state.user.name}! <br />
              <a style={{ fontSize: "12px" }} href="/">
                Add a Photo
              </a>
            </Card.Title>
            <hr />
            <Card.Text>
              <Row>
                <Col style={{ textAlign: "left" }}>
                  <div>
                    <div
                      style={{
                        color: "gray",
                        fontSize: "13px",
                      }}
                    >
                      <span>Connections</span>
                    </div>
                    <div>
                      <span style={{ fontSize: "13px" }}>
                        Grow your network
                      </span>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div>
                      <a
                        style={{
                          color: "gray",
                          fontSize: "13px",
                        }}
                      >
                        Access exclusive tools insights
                      </a>
                    </div>
                    <div>
                      <a style={{ fontSize: "13px" }}>
                        <i
                          class="fas fa-square"
                          style={{ color: "rgb(186, 189, 11)" }}
                        ></i>
                        Reactivate Premium
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p style={{ fontSize: "13px" }}>
                      <i class="fas fa-bookmark"></i>My items
                    </p>
                  </div>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "14rem", borderRadius: "10px", marginTop: "8px" }}
        >
          <Card.Body>
            <Card.Text>
              <Row>
                <Col style={{ textAlign: "left" }}>
                  <div>
                    <a href="/" style={{ fontSize: "13px" }}>
                      Groups
                    </a>
                  </div>
                  <div>
                    <a href="/" style={{ fontSize: "13px" }}>
                      Events
                    </a>
                  </div>
                  <div>
                    <a href="/" style={{ fontSize: "13px" }}>
                      Followed Hashtags
                    </a>
                  </div>
                </Col>
              </Row>
            </Card.Text>
          </Card.Body>

          <Card.Body className="discover">
            <div>
              <h6 style={{ textAlign: "center" }}>Discover more</h6>
            </div>
          </Card.Body>
        </Card>
      </>
    );
  }
}
export default RightSide;
