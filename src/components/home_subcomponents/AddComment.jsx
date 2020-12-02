import React from "react";
import { Form, Row, Button } from "react-bootstrap";
const AddComment = (props) => {
	return (
		<Form
			className='add-comment-form w-100 mb-5'
			onSubmit={props.onSubmitComment}>
			<Form.Group>
				<Form.Control
					className='commentArea'
					as='textarea'
					name='comment'
					id='comment'
					rows={1}
					cols={50}
					placeholder='Add a comment...'
					value={props.addComment.comment}
					onChange={props.onChangeElement}
					onKeyDown={props.onChangeElement}
				/>
			</Form.Group>

			<Row className='flex justify-content-center mr-2'>
				<Button variant='secondary' type='submit'>
					Send
				</Button>
			</Row>
		</Form>
	);
};

export default AddComment;
