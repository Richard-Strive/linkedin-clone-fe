import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Link } from "react-router-dom";
import ActionButtons from "./ActionButtons";
import AddComment from "./AddComment";

import CommentList from "./CommentList";
class PostContent extends Component {
	state = {
		comments: [],
		addComment: {
			comment: "",
			author: this.props.post.user._id,
			rate: 1,
			elementId: this.props.post._id,
		},
		submittedSize: 0,
		showComment: false,
		fetchComment: false,
	};

	handleComment = () => {
		this.setState({
			showComment: !this.state.showComment,
			fetchComment: !this.state.fetchComment,
		});
	};
	updateCommentField = (e) => {
		let addComment = { ...this.state.addComment };
		let currentId = e.currentTarget.id;

		addComment[currentId] = e.currentTarget.value;

		this.setState({ addComment });
	};

	submitComment = async (e) => {
		e.preventDefault();

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

	render() {
		const { post } = this.props;
		return (
			<div className='post-card mb-3'>
				<Container>
					<Row>
						<Col md={12} className='mt-4'>
							<Link to={`/profile/${post.user._id}`}>
								<img
									className='user-img float-left'
									src={post.user.image}
									alt='user-avatar'
								/>
								<div className='user-info float-left d-flex flex-column'>
									<h5 className='ml-0'>
										{post.user.name} {post.user.surname}
										&middot; <span>1st</span>
									</h5>
									<p
										style={{ textAlign: "left" }}
										className='ml-2 '>
										{post.user.title}
									</p>
								</div>
							</Link>

							<div className='mt-1 '>
								<i className='three-dot float-right fas fa-ellipsis-h'></i>
							</div>
						</Col>
						<hr />
						<Col md={12}>
							<p className='post-text float-left'>{post.text}</p>
						</Col>

						<Col md={12} className='icon-container d-flex flex-row'>
							<ActionButtons onComment={this.handleComment} />
						</Col>

						<div
							className={
								this.state.showComment ? "d-block" : "d-none"
							}>
							<Col md={12}>
								<AddComment
									addComment={this.state.addComment}
									onChangeElement={this.updateCommentField}
									onSubmitComment={this.submitComment}
									postId={post._id}
								/>
							</Col>

							<Col md={12}>
								<CommentList
									fetchComment={this.state.fetchComment}
									submittedSize={this.state.submittedSize}
									postId={post._id}
								/>
							</Col>
						</div>
					</Row>
				</Container>
			</div>
		);
	}
}

export default PostContent;
