import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import TurnedInNotIcon from "@material-ui/icons/TurnedInNot";
import LinkIcon from "@material-ui/icons/Link";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
// import FlagIcon from "@material-ui/icons/Flag";
import VisibilityIcon from "@material-ui/icons/Visibility";
import "../css/DropdownPost.css";

import PostImage from "./PostImage";
class DropdownPost extends Component {
	state = { modalShow: false };
	render() {
		const { toggleModal, post, userId } = this.props;
		return (
			<div>
				<PostImage
					post={this.props.post}
					show={this.state.modalShow}
					onHide={() => this.setState({ modalShow: false })}
				/>
				<Dropdown className='dropdown-btn'>
					<Dropdown.Toggle variant={"trasparent-grey-post"}>
						<MoreHorizIcon />
					</Dropdown.Toggle>

					<Dropdown.Menu className='dropdown-post'>
						{userId === post.user._id && (
							<Dropdown.Item onClick={() => toggleModal(post)}>
								<TurnedInNotIcon /> <strong>Edit</strong>
								<p className='text-muted'>Save for later</p>
							</Dropdown.Item>
						)}

						<Dropdown.Item>
							<LinkIcon /> <strong>Copy link to post</strong>{" "}
						</Dropdown.Item>
						<Dropdown.Item>
							<HighlightOffIcon />{" "}
							<strong>Unfollow Person Name</strong>
							<p className='text-muted'>
								Stay connected but stop seing posts from Name
								Person in feed
							</p>
						</Dropdown.Item>
						<Dropdown.Item>
							<VisibilityOffIcon />{" "}
							<strong>Hide this post</strong>
							<p className='text-muted'>
								I don't want to see this post in my feed
							</p>{" "}
						</Dropdown.Item>
						<Dropdown.Item>
							{/* <FlagIcon /> <strong>Report this post</strong>{" "} */}
							<p className='text-muted'>
								This post is offensive or the account is hacked
							</p>
						</Dropdown.Item>
						<Dropdown.Item>
							<VisibilityIcon />{" "}
							<strong>Who can see this post?</strong>
							<p className='text-muted'>
								Visible to anyone on or off Linkedln
							</p>{" "}
						</Dropdown.Item>

						<Dropdown.Item
							onClick={() => this.setState({ modalShow: true })}>
							<p>Upload Image</p>
						</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</div>
		);
	}
}
export default DropdownPost;
