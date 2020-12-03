import React, { Component } from "react";
import { Button, Form, Modal, Alert, Spinner } from "react-bootstrap";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
class ProfileImage extends Component {
	state = { message: "", isLoading: false, isImage: false };

	styles = {
		largeIcon: {
			width: "50px",
			height: "50px",
		},

		imagePreview: {
			width: "150px",
			height: "150px",
			borderRadius: "50%",
			marginLeft: "25%",
			backgroundColor: "gray",
			border: "3px",
		},
	};

	preview_image = (event) => {
		let reader = new FileReader();
		reader.onload = function () {
			let output = document.getElementById("output_image_user");
			output.src = reader.result;
		};
		reader.readAsDataURL(event.target.files[0]);
		this.setState({ isImage: true });
	};

	uploadImage = async (e) => {
		e.preventDefault();

		this.setState({ isLoading: true });
		let userId = JSON.parse(window.localStorage.getItem("userId"));

		const inputFile = document.querySelector("#profile-image-upload-file");

		let formData = new FormData();
		formData.append("profile", inputFile.files[0]);

		try {
			let response = await fetch(
				`https://striveschool-api.herokuapp.com/api/profile/${userId}/picture`,
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
									id='profile-image-upload-file'
									type='file'
								/>
								<Form.Label
									style={{
										marginLeft: "40%",
										marginTop: "5%",
									}}
									htmlFor='profile-image-upload-file'>
									<AddAPhotoIcon
										className='add-photo-icon'
										style={this.styles.largeIcon}
									/>
								</Form.Label>
							</Form.Group>

							<img
								style={this.styles.imagePreview}
								id='output_image_user'
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
								className='main-page-spinner'
								animation='border'
								variant='primary'
							/>
						)}
						<div>
							{this.state.message && (
								<Alert variant='secondary' className='mt-2'>
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

export default ProfileImage;
