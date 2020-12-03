import React from "react";

import { Container, Row, Col } from "react-bootstrap";

import Posts from "../home_subcomponents/Posts";
import MakePost from "../home_subcomponents/MakePost";
import LeftSide from "../sideComponents/LeftSide";
import RightSide from "../sideComponents/RightSide";

class Home extends React.Component {
	// fetch posts here
	// pass fetch func to down make post
	state = {
		showModal: true,
		post: { text: "" },
		showPost: true,
		postSize: 0,
	};

	fetchPost = async () => {
		let response = await fetch(process.env.REACT_APP_BASE_URL + `posts/`, {
			method: "POST",
			body: JSON.stringify(this.state.post),
			headers: new Headers({
				"Content-Type": "application/json",
				Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
			}),
		});
		let result = await response.json();
		console.log(result);
	};

	postConfirm = () => {
		this.fetchPost();
		this.showModal();
		this.setState({ postSize: this.state.postSize + 1 });
	};

	showModal = () => {
		this.setState({ showModal: !this.state.showModal });
	};

	fillUp = (e) => {
		let text = "";
		text = e.currentTarget.value;
		if (text.length > 0) {
			this.setState({ showPost: false });
		} else {
			this.setState({ showPost: true });
		}
		this.setState({ post: { text: text } });
	};

	render() {
		let showModal = this.state.showModal ? "-200vh" : "";
		let showPost = this.state.showPost ? "grey" : "#0078b9";
		let canClick = this.state.showPost ? "none" : "all";
		return (
			<div>
				<Container>
					<Row>
						<Col xs={3}>
							<LeftSide />
						</Col>
						<Col xs={6}>
							<MakePost
								show={showModal}
								showFunction={this.showModal}
								fillFunction={this.fillUp}
								postFunction={this.postConfirm}
								showPost={showPost}
								clickable={canClick}
								onClick={this.showModal}
							/>
							<Posts postSize={this.state.postSize} />
						</Col>
						<Col xs={3}>
							<RightSide />
						</Col>
					</Row>
				</Container>
			</div>
		);
	}
}

export default Home;
