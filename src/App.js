import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import NavBar from "./components/NavBar";

import Profile from "./components/main_components/Profile";

import { BrowserRouter as Router, Route } from "react-router-dom";

import ShowSearchResult from "./components/main_components/ShowSearchResult";

import Home from "./components/main_components/Home";
import LandingPage from "./components/main_components/LandingPage";
import NetworkPage from "./components/Network_Components/NetworkPage";
import JobsPage from "./components/Jobs_Compnents/JobsPage";
import MsgPage from "./components/Messaging_Component/MsgPage";
class App extends React.Component {
	state = {
		userList: [],
		filteredUserList: [],
		showResult: false,
		searchString: "",
	};

	getUserList = async () => {
		try {
			const response = await fetch(
				process.env.REACT_APP_BASE_URL + "profile/",
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
					},
				}
			);
			const userList = await response.json();
			console.log("All user list", userList);
			this.setState({ userList });
		} catch (err) {
			console.log(err);
		}
	};

	handleSearch = (e) => {
		if (e.keyCode === 13 || e.key === "Enter") {
			e.preventDefault();

			let filteredUserList = this.state.userList.filter(
				(user) =>
					(user.name &&
						user.name
							.toLowerCase()
							.includes(this.state.searchString)) ||
					(user.surname &&
						user.surname
							.toLowerCase()
							.includes(this.state.searchString))
			);

			this.setState({ filteredUserList });
			this.setState({ showResult: true });
		} else {
			this.setState({
				searchString: e.currentTarget.value,
				filteredUserList: this.state.userList,
			});
		}
	};

	componentDidMount() {
		this.getUserList();
	}
	render() {
		return (
			<div className='App'>
				<Router>
					<ShowSearchResult
						keyword={this.state.searchString}
						users={this.state.filteredUserList}
						onHide={() => this.setState({ showResult: false })}
						show={this.state.showResult}
					/>
					<NavBar
						searchString={this.state.searchString}
						handleSearch={this.handleSearch}
					/>
					<Route
						path='/'
						exact
						render={(props) => (
							<LandingPage userList={this.state.userList} />
						)}
					/>
					<Route path='/feed' exact component={Home} />
					<Route path='/profile/:id' component={Profile} />
          			<Route path='/mynetwork' render={(props)=><NetworkPage userList={this.state.userList}/>}/>
					<Route path='/jobs' component={JobsPage} />
					<Route path='/message' component={MsgPage} />
					
				</Router>
			</div>
		);
	}
}
export default App;
