import React from "react";
import { ListGroup, Badge, Button } from "react-bootstrap";
import { Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
class CommentList extends React.Component {
	state = {
		comments: [],
		isLoading: true,

		deletedSize: 0,
		errorMessage: false,
		user: {},
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
			this.setState({ user });
		} catch (err) {
			console.log(err);
		}
	};
	getComments = async () => {
		try {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/" +
					this.props.postId,
				{
					headers: new Headers({
						Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
					}),
				}
			);

			if (response.ok) {
				let comments = await response.json();

				this.setState({ comments, isLoading: false });
			} else {
				this.setState({ isLoading: false, errorMessage: true });
			}
		} catch (e) {
			this.setState({ isLoading: false, errorMessage: true });
		}
	};

	handleDelete = async (e) => {
		let id = e.currentTarget.id;
		try {
			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/comments/${id}`,
				{
					method: "DELETE",
					headers: new Headers({
						Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
					}),
				}
			);

			if (response.ok) {
				let filteredComments = this.state.comments.filter(
					(comment) => comment._id !== id
				);
				this.setState({
					comments: filteredComments,
					isloading: false,
					deletedSize: this.state.deletedSize + 1,
				});
			} else {
				alert("something went wrong :(");
			}
		} catch (err) {
			console.log(err);
			this.setState({ isLoading: false, errorMessage: true });
		}
	};

	// componentWillUnmount() {
	// 	this.getComments();
	// }

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.submittedSize !== this.props.submittedSize) {
			this.getComments();
			// this.setState({ update: !this.state.update });
		}
		if (prevProps.fetchComment !== this.props.fetchComment) {
			this.getProfileInfo();
			this.getComments();
		}
	}
	render() {
		let body;
		let { user } = this.state;
		if (!this.state.isLoading && this.state.comments.length !== 0) {
			body = (
				<div className='mb-5'>
					{this.state.comments.map((comment, index) => {
						return (
							<ListGroup
								key={index}
								className='comment-item d-flex justify-content-between mt-2'>
								<ListGroup.Item className='text-dark d-flex flex-column'>
									<div>
										<Link to={`/profile/${user._id}`}>
											<img
												className='user-img float-left'
												src={user.image}
												alt='user-avatar'
											/>
											<div className='user-info float-left d-flex flex-column'>
												<h5 className='ml-0'>
													{user.name} {user.surname}
													&middot; <span>1st</span>
												</h5>
												<p
													style={{
														textAlign: "left",
													}}
													className='ml-2 '>
													{user.title}
												</p>
											</div>
										</Link>
										<div className='mt-1 '>
											<i className='three-dot float-right fas fa-ellipsis-h'></i>
										</div>
									</div>
									<p
										style={{ textAlign: "left" }}
										className='float-left'>
										{comment.comment}
									</p>
								</ListGroup.Item>
							</ListGroup>
						);
					})}
				</div>
			);
		} else if (
			this.state.comments.length === 0 &&
			!this.state.isLoading &&
			!this.state.errorMessage
		) {
			body = (
				<div className='d-flex justify-content-center align-items-center mt-3'>
					<Alert variant='primary'>&#9780; There is no comment</Alert>
				</div>
			);
		} else if (this.state.errorMessage) {
			body = (
				<div className='d-flex justify-content-center align-items-center mt-3'>
					<Alert variant='danger'>
						&#9762; Something went wrong!
					</Alert>
				</div>
			);
		} else {
			body = (
				<Spinner
					style={{ marginLeft: "10%" }}
					animation='grow'
					variant='primary'
				/>
			);
		}
		return body;
	}
}

export default CommentList;
