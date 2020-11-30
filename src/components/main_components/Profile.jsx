/*Whole profile page details will be here*/
import React from "react";
import "../../css/Profile.css";
import TopHeader from "../profile_subcomponents/TopHeader";
import AboutBlock from "../profile_subcomponents/AboutBlock";
import Dashboard from "../profile_subcomponents/Dashboard";

import Activity from "../profile_subcomponents/Activity";
import EducationBlock from "../profile_subcomponents/EducationBlock";
import Interests from "../profile_subcomponents/Interests";
import Skills from "../profile_subcomponents/Skills";

import SeeJobs from "../sideComponents/SeeJobs";
import EditAdd from "../sideComponents/EditAdd";
import PeopleAlsoViewed from "../sideComponents/PeopleAlsoViewed";
import PeopleYouMayKnow from "../sideComponents/PeopleYouMayKnow";
import InLearning from "../sideComponents/InLearning";

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
			<div className='profile-container d-flex flex-row'>
				<div>
					<TopHeader user={this.state.user} />
					<AboutBlock />
					<Dashboard />
					<Activity />
					<EducationBlock />
				</div>
				<div className='side-components mt-3'>
					<EditAdd />
					<SeeJobs />
					<PeopleAlsoViewed />
					<PeopleYouMayKnow />
					<InLearning />
				</div>
			</div>
		);
	}
}

export default Profile;
