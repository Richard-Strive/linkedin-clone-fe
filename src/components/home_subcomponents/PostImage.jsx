import React, { Component } from "react";
import { Button, Form, Modal, Alert, Spinner } from "react-bootstrap";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
class PostImage extends Component {
	state = { message: "", isLoading: false, isImage: false };

	styles = {
		largeIcon: {
			width: "50px",
			height: "50px",
		},

		imagePreview: {
			width: "150px",
			height: "150px",
			borderRadius: "10px",
			marginLeft: "25%",
			backgroundColor: "gray",
			border: "3px",
		},
	};

	preview_image = (event) => {
		let reader = new FileReader();
		reader.onload = function () {
			let output = document.getElementById("output_image");
			output.src = reader.result;
		};
		reader.readAsDataURL(event.target.files[0]);
		this.setState({ isImage: true });
	};
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
				<Modal.Body>
					<div>
						<Form
							onSubmit={this.uploadImage}
							className='profile-image-upload'>
							<Form.Group>
								<Form.File
									onChange={this.preview_image}
									id='post-image-upload-file'
									type='file'
								/>
								<Form.Label
									style={{
										marginLeft: "40%",
										marginTop: "5%",
									}}
									htmlFor='post-image-upload-file'>
									<AddAPhotoIcon
										className='add-photo-icon'
										style={this.styles.largeIcon}
									/>
								</Form.Label>
							</Form.Group>

							<img
								style={this.styles.imagePreview}
								id='output_image'
							/>
							<Button
								className={
									this.state.isImage ? "d-block" : "d-none"
								}
								style={{ marginLeft: "30%", marginTop: "10%" }}
								type='submit'
								variant='primary'>
								Save Image
							</Button>
						</Form>
						{this.state.isLoading && (
							<Spinner
								style={{ marginLeft: "40%" }}
								className='main-page-spinner'
								animation='border'
								variant='primary'
							/>
						)}
						<div>
							{this.state.message && (
								<Alert variant='secondary' className='mt-3'>
									{this.state.message}
								</Alert>
							)}
						</div>
					</div>
				</Modal.Body>
			</Modal>
		);
	}
}

export default PostImage;
