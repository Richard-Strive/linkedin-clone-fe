import React from "react";
import { Col, Container, Row, Dropdown, DropdownButton } from "react-bootstrap";
import "../css/TopHeader.css";
import striveLogo from "../images/strive-logo.jpeg";
class TopHeader extends React.Component {
	state = {};

	render() {
		const { user } = this.props;
		return (
			<div className='top-header-card'>
				<Row>
					<Col md={12} className='images-container'>
						<img
							className='header-img'
							src='https://media-exp1.licdn.com/dms/image/C4D16AQGmIeY20UG-TA/profile-displaybackgroundimage-shrink_200_800/0/1601315645175?e=1612396800&v=beta&t=AbFSYaklOIuXGuLEY-usz4EZRg1rbhXC_jLq1X22GDI'
							alt='top-image'
						/>
						<img
							className='profile-img'
							src={user.image}
							alt='profile-pic'
						/>
						<div className='edit-profile-icon float-right mr-4 mt-4'>
							<i className=' fas fa-pencil-alt fa-lg '></i>
						</div>
					</Col>

					{/* <Col md={12}></Col> */}
				</Row>

				<Row className='header-text justify-content-between ml-0 text-left '>
					<Col md={6} className=''>
						<h3>
							{user.name} {user.surname}
						</h3>
					</Col>

					<Col md={6} className='d-flex flex-row '>
						<img
							className='ml-5'
							style={{ width: "23px", height: "23px" }}
							src={striveLogo}
							alt='strive'
						/>
						<p style={{ fontWeight: "600" }} className='ml-1'>
							Strive School
						</p>
					</Col>
					<Col md={6}>
						<p>{user.title}</p>
					</Col>
				</Row>

				<div className='text-left d-flex flex-row'>
					<p className='ml-3 mr-3'>{user.area}</p>

					<p className=' mr-3 connections'>500+ Connections</p>

					<p className='contact'>Contact Info</p>
				</div>

				<div className='d-flex flex-row mb-4'>
					<DropdownButton className='ml-3 mr-3 blue' title='Open To'>
						<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
						<Dropdown.Item href='#/action-2'>
							Another action
						</Dropdown.Item>
						<Dropdown.Item href='#/action-3'>
							Something else
						</Dropdown.Item>
					</DropdownButton>

					<DropdownButton
						className='mr-3'
						variant='secondary'
						id='dropdown-basic-button'
						title='Add profile section'>
						<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
						<Dropdown.Item href='#/action-2'>
							Another action
						</Dropdown.Item>
						<Dropdown.Item href='#/action-3'>
							Something else
						</Dropdown.Item>
					</DropdownButton>

					<DropdownButton
						id='dropdown-basic-button'
						variant='success'
						title='More'>
						<Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
						<Dropdown.Item href='#/action-2'>
							Another action
						</Dropdown.Item>
						<Dropdown.Item href='#/action-3'>
							Something else
						</Dropdown.Item>
					</DropdownButton>
				</div>
			</div>
		);
	}
}

export default TopHeader;
