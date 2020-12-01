import React from "react";
import { ListGroup } from "react-bootstrap";
class ShowSearchResult extends React.Component {
	state = { users: [] };

	componentDidUpdate(prevProps, prevState) {
		if (prevProps.users !== this.props.users) {
			this.setState({
				users: this.props.users,
				keyword: this.props.keyword,
			});
		}
	}
	render() {
		const { users } = this.props;
		console.log("searched", users);
		return (
			//     <Button variant="primary" onClick={handleShow}>
			//     Launch demo modal
			//   </Button>
			<div
				className='search-result-popup'
				style={{
					display: this.props.show ? "block" : "none",
				}}>
				<ListGroup>
					<ListGroup.Item
						style={{
							textAlign: "right",
							display: this.props.show ? "block" : "none",
						}}>
						<span onClick={this.props.onHide}>&#10005;</span>
					</ListGroup.Item>
					{users.length > 0 &&
						users.map((user) => {
							return (
								<ListGroup.Item key={user._id}>
									{user.name} {user.surname}
								</ListGroup.Item>
							);
						})}
				</ListGroup>
			</div>
		);
	}
}

export default ShowSearchResult;
