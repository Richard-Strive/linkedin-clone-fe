import React from "react";

import Posts from "../home_subcomponents/Posts";
import MakePost from '../home_subcomponents/MakePost'

class Home extends React.Component {
	state = {};
	render() {
		return (
			<div>
				<MakePost/>
				<Posts />
			</div>
		);
	}
}

export default Home;
