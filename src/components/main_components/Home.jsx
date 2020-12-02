import React from "react";

import {Container, Row, Col} from 'react-bootstrap'


import Posts from "../home_subcomponents/Posts";
import MakePost from '../home_subcomponents/MakePost'

class Home extends React.Component {

	state = {};
	render() {
		return (
			<div>
				<Container>
					<Row>
						<Col xs={3}>
							left component
						</Col>
						<Col xs={6}>
						<MakePost/>
						<Posts />
						</Col>
						<Col xs={3}>
							right component
						</Col>
					</Row>
				</Container>
				
			</div>
		);
	}
}

export default Home;
