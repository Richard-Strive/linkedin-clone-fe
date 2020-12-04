import React from "react";
import "../../App.css";

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

		formData: null,
	};

	saveImage = () => {
		const inputFile = document.querySelector("#post-image-upload-file");

		let formData = new FormData();
		formData.append("post", inputFile.files[0]);

		this.setState({ formData });
	};

	uploadImage = async (postId) => {
		try {
			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/posts/${postId}`,
				{
					method: "POST",
					body: this.state.formData,
					headers: new Headers({
						// "Content-Type": "multipart/form-data",
						Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
					}),
				}
			);

			if (response.ok) {
				const data = await response.json();
			}
		} catch (e) {
			console.log(e);
		}
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

		let imageUpload = await this.uploadImage(result._id);
	};

	postConfirm = () => {
		this.fetchPost();

		setTimeout(() => {
			this.showModal();
			this.setState({ postSize: this.state.postSize + 1 });
		}, 1000);
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
			<div id='home-page'>
				<Container>
					<Row>
						<Col xs={3}>
							<LeftSide />
						</Col>
						<Col xs={6}>
							<MakePost
								saveImage={this.saveImage}
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
