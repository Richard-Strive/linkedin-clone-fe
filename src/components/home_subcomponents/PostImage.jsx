import React, { Component } from "react";
import { Button, Form, Modal, Alert, Spinner } from "react-bootstrap";
class PostImage extends Component {
	state = { message: "", isLoading: false };

	uploadImage = async (e) => {
		e.preventDefault();

		this.setState({ isLoading: true });
		let postId = this.props.post._id;

		const inputFile = document.querySelector("#post-image-upload-file");

		let formData = new FormData();
		formData.append("post", inputFile.files[0]);

		try {
			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/posts/${postId}`,
				{
					method: "POST",
					body: formData,
					headers: new Headers({
						// "Content-Type": "multipart/form-data",
						Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
					}),
				}
			);

			if (response.ok) {
				const data = await response.json();
				this.setState({
					message: "Successfully Uploaded",
					isLoading: false,
				});
			} else {
				this.setState({
					message: "Something went wrong",
					isLoading: false,
				});
			}
		} catch (e) {
			this.setState({
				message: "Something went wrong",
				isLoading: false,
			});
		}
	};
	render() {
		return (
			<Modal
				{...this.props}
				className='edit-image-modal'
				size='lg'
				aria-labelledby='contained-modal-title-vcenter'
				centered>
				<Modal.Header closeButton>
					<Modal.Title id='contained-modal-title-vcenter'>
						Upload Image
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<div>
						<Form
							onSubmit={this.uploadImage}
							className='profile-image-upload'>
							<Form.Group>
								<Form.File
									id='post-image-upload-file'
									type='file'
								/>
							</Form.Group>

							<Button type='submit' variant='primary'>
								Submit
							</Button>
						</Form>

						<div>
							{this.state.message && (
								<Alert variant='secondary' className='mt-2'>
									{this.state.message}
								</Alert>
							)}
						</div>
					</div>

					{this.state.isLoading && (
						<Spinner
							className='main-page-spinner'
							animation='border'
							variant='primary'
						/>
					)}
				</Modal.Body>
			</Modal>
		);
	}
}

export default PostImage;
