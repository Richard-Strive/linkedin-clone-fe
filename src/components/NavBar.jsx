import React, { Component } from "react";
import "../App.css";
import { Link, withRouter } from "react-router-dom";
import bootstrap, {
	Container,
	Row,
	Navbar,
	Nav,
	NavDropdown,
	Form,
	FormControl,
	Button,
	Col,
	Image,
	InputGroup,
} from "react-bootstrap";
import logo from "./images/logo.png";

class NavBar extends Component {
	render() {
		return (
			<div>
				<Navbar
					className='mb-4 navnavbar  '
					style={{ height: 50 }}
					bg='light'
					expand='lg'>
					<button
						className='navbar-toggler'
						type='button'
						data-toggle='collapse'
						data-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'>
						<span className='navbar-toggler-icon'></span>
					</button>
					<Row
						className='align-items-center justify-content-center mt-4 collapse navbar-collapse'
						id='navbarSupportedContent'>
						<Col md={1}>
							<Link to='/'>
								<Image
									style={{
										height: 60,
										width: 60,
									}}
									src={logo}
								/>
							</Link>
						</Col>
						<Col md={4}>
							{/* <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2 "
                  style={{
                    width: "390px",
                    height: "45px",
                    marginLeft: "-35px",
                  }}
                />  </Form>*/}

							<Form inline>
								<InputGroup>
									<FormControl
										aria-label='search'
										aria-describedby='basic-addon1'
										placeholder='Search'
										className='mr-sm-2 '
										value={this.props.searchString}
										onKeyDown={this.props.handleSearch}
										onChange={this.props.handleSearch}
										style={{
											width: "390px",
											height: "45px",
											marginLeft: "-35px",
										}}
									/>
								</InputGroup>
							</Form>
						</Col>
						<Col md={7}>
							<ul className='navul'>
								<Link to='/'>
									<li className='navli'>
										<i className='fas nav-icons fa-home '>
											<br />
											<span className='nav-icon-text'>
												Home
											</span>
										</i>
									</li>
								</Link>
								<Link to='/'>
									<li className='navli'>
										<i className='fas nav-icons fa-network-wired '>
											<br />
											<span className='nav-icon-text'>
												MyNetwork
											</span>
										</i>
									</li>
								</Link>
								<Link to='/'>
									<li className='navli'>
										<i className='fas nav-icons fa-briefcase '>
											<br />{" "}
											<span className='nav-icon-text'>
												Jobs
											</span>
										</i>
									</li>
								</Link>
								<Link to='/'>
									<li className='navli'>
										<i className=' nav-icons far fa-comment-dots '>
											<br />
											<span className='nav-icon-text'>
												Messaging
											</span>
										</i>
									</li>
								</Link>
								<Link to='/'>
									<li className='navli'>
										<i className='fas nav-icons fa-bell '>
											<br />
											<span className='nav-icon-text'>
												Notifications
											</span>
										</i>
									</li>
								</Link>
								<Link to='/'>
									<li className='navli'>
										<i className='fas nav-icons fa-user-circle '>
											<br />{" "}
											<span className='nav-icon-text'>
												Me
											</span>
										</i>
									</li>
								</Link>
								<Link to='/'>
									<li className='navli'>
										<i className='fas nav-icons fa-bars '>
											<br />
											<span className='nav-icon-text'>
												Works
											</span>
										</i>
									</li>
								</Link>
							</ul>
						</Col>
					</Row>
				</Navbar>
			</div>
		);
	}
}
export default withRouter(NavBar);
