import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import ActionButtons from "./ActionButtons";
import AddComment from "./AddComment";

import CommentList from "./CommentList";
import PostImage from "./PostImage";
import DropdownPost from "./DropdowPost";
import ImagePreviewModal from "../main_components/ImagePreviewModal";
class PostContent extends Component {
	state = {
		comments: [],
		addComment: {
			comment: "",
			author: {},
			test: "test",
			rate: 1,
			elementId: this.props.post._id,
		},
		submittedSize: 0,
		showComment: false,
		fetchComment: false,
		user: {},
		postImage: null,
		imgPreviewModal: false,
		isDeleted: false,
	};

	getProfileInfo = async () => {
		const userId = JSON.parse(window.localStorage.getItem("userId"));
		try {
			const response = await fetch(
				process.env.REACT_APP_BASE_URL + `profile/${userId}`,
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
					},
				}
			);

			const user = await response.json();
			console.log(user);
			this.setState({ user }, () => {
				let addComment = { ...this.state.addComment };
				addComment.author = this.state.user;

				this.setState({ addComment });
			});
		} catch (err) {
			console.log(err);
		}
	};
	handleComment = () => {
		this.setState({
			showComment: !this.state.showComment,
			fetchComment: !this.state.fetchComment,
		});
	};

	updateCommentField = (e) => {
		if (e.keyCode === 13 || e.key === "Enter") {
			e.preventDefault();
			this.submitComment();
		} else {
			let addComment = { ...this.state.addComment };
			let currentId = e.currentTarget.name;

			addComment[currentId] = e.currentTarget.value;

			this.setState({ addComment });
		}
	};

	submitComment = async () => {
		// e.preventDefault();

		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/",
				{
					method: "POST",
					body: JSON.stringify(this.state.addComment),
					headers: new Headers({
						"Content-Type": "application/json",
						Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
					}),
				}
			);

			if (response.ok) {
				// alert("Comment saved!");
				this.setState({
					addComment: {
						comment: "",
						author: "",
						rate: 1,
						elementId: this.props.post._id,
					},
					errMessage: "",
					submittedSize: this.state.submittedSize + 1,
				});
			} else {
				alert("something went wrong");
				let error = await response.json();
			}
		} catch (e) {
			alert("something went wrong");
			console.log(e); // Error
		}
	};

	componentDidMount() {
		this.getProfileInfo();
		// this.getPostImage();
	}
	render() {
		const { post } = this.props;
		return (
			<>
				{!this.state.isDeleted && (
					<div className='post-card mb-3' id={this.props.id}>
						<ImagePreviewModal
							image={post.image && post.image}
							show={this.state.imgPreviewModal}
							onHide={() => {
								this.setState({
									imgPreviewModal: false,
								});
							}}
						/>
						<Container>
							<DropdownPost
								toggleModal={true}
								post={post}
								userId={post.user._id}></DropdownPost>
							<Row>
								<Col md={12} className='mt-4'>
									<Link to={`/profile/${post.user._id}`}>
										{post.user.image && (
											<img
												className='user-img float-left'
												src={post.user.image}
												alt='user-avatar'
											/>
										)}
										<div className='user-info float-left d-flex flex-column'>
											<h5 className='ml-0'>
												{post.user.name}{" "}
												{post.user.surname}
												&middot; <span>1st</span>
											</h5>
											<p
												style={{ textAlign: "left" }}
												className='ml-2 '>
												{post.user.title}
											</p>
										</div>
									</Link>

									<div className='mt-1 edit-post-button'>
										{/* <i className='three-dot float-right fas fa-ellipsis-h'></i> */}
									</div>
								</Col>
								<hr />
								<Col md={12}>
									<p className='post-text float-left'>
										{post.text}
									</p>
								</Col>
								<Col md={12}>
									{post.image && (
										<img
											className='post-img'
											onClick={() =>
												this.setState({
													imgPreviewModal: true,
												})
											}
											style={{ width: "100%" }}
											src={post.image}
											alt='post-image'
										/>
									)}

									{/* <PostImage postId={post._id} /> */}
								</Col>
								<Col
									md={12}
									className='icon-container d-flex flex-row'>
									<ActionButtons
										onComment={this.handleComment}
									/>
								</Col>

								<div
									className={
										this.state.showComment
											? "d-block"
											: "d-none"
									}>
									<Col md={12}>
										<AddComment
											addComment={this.state.addComment}
											onChangeElement={
												this.updateCommentField
											}
											postId={post._id}
										/>
									</Col>

									<Col md={12}>
										<CommentList
											fetchComment={
												this.state.fetchComment
											}
											submittedSize={
												this.state.submittedSize
											}
											postId={post._id}
										/>
									</Col>
								</div>
							</Row>
						</Container>
					</div>
				)}
			</>
		);
	}
}

export default PostContent;
