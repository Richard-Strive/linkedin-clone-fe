/*Whole profile page details will be here*/
import React from "react";
import "../../css/Profile.css";
import TopHeader from "../profile_subcomponents/TopHeader";
import AboutBlock from "../profile_subcomponents/AboutBlock";
import Dashboard from "../profile_subcomponents/Dashboard";
import Activity from '../profile_subcomponents/Activity'
import EducationBlock from '../profile_subcomponents/EducationBlock'
import Interests from "../profile_subcomponents/Interests";
import Skills from "../profile_subcomponents/Skills";
class Profile extends React.Component {
	state = { user: {} };

	getProfileInfo = async () => {
		try {
			const response = await fetch(
				process.env.REACT_APP_BASE_URL + "profile/me",
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

	componentDidMount() {
		this.getProfileInfo();
	}
	render() {
		return (
			<div className='profile-container'>
				<TopHeader user={this.state.user} />
				<AboutBlock />
				<Dashboard />
				<Activity/>
				<EducationBlock/>
				<Skills/>
				<Interests/>
			</div>
		);
	}
}

export default Profile;
