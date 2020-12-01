import React from "react";
import { Container, Form, Row, Col } from "react-bootstrap";

class EditProfileForm extends React.Component {
	state = {
		user: {
			name: "",
			surname: "",
			title: "",
			area: "",
			email: "",
		},
	};

	componentDidMount() {
		let { user } = { ...this.state };
		for (let value in user) {
			user[value] = this.props.user[value];
		}
		this.setState({ user });
	}
	fillForm = (e) => {
		let currentValue = e.currentTarget.id;

		let user = { ...this.state.user };

		user[currentValue] = e.currentTarget.value;

		this.setState({ user });
	};

	handleFormSubmit = (e) => {
		e.preventDefault();

		//TODO Fill this function or put PROFILE component
	};
	render() {
		const { user } = this.props;
		return (
			<Container>
				<Form onSubmit={this.handleFormSubmit}>
					<Row>
						<Col>
							<Form.Group>
								<Form.Label htmlFor='name'>
									First Name
								</Form.Label>
								<Form.Control
									id='name'
									name='name'
									placeholder='First name'
									value={this.state.user.name}
									onChange={this.fillForm}
								/>
							</Form.Group>
						</Col>
						<Col>
							<Form.Group>
								<Form.Label htmlFor='surname'>
									Last Name
								</Form.Label>
								<Form.Control
									id='surname'
									name='surname'
									placeholder='Last name'
									value={this.state.user.surname}
									onChange={this.fillForm}
								/>
							</Form.Group>
						</Col>
					</Row>

					<div className='form-disabled-info mt-5'>
						<h4>+ Record name pronunciation</h4>
						<p>
							Name pronunciation can only be added using our
							mobile app.
						</p>
					</div>

					<Form.Group>
						<Form.Label>Headline</Form.Label>
						<Form.Control
							id='title'
							as='textarea'
							value={this.state.user.title}
							rows={2}
							onChange={this.fillForm}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Country/Region</Form.Label>
						<Form.Control
							id='area'
							placeholder='Last name'
							value={this.state.user.area}
							onChange={this.fillForm}
						/>
					</Form.Group>

					<Form.Group>
						<Form.Label>Contact Info</Form.Label>
						<Form.Control
							id='email'
							placeholder='Contact Info'
							value={this.state.user.email}
							onChange={this.fillForm}
						/>
					</Form.Group>
				</Form>
			</Container>
		);
	}
}

export default EditProfileForm;
