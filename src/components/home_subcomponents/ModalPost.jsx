import React, { PureComponent } from 'react'
import '../css/ModalPost.scss'
import {Modal, Button, Row, Col} from 'react-bootstrap'
import ModalFooterData from './PostModalDataExample/ModalFooterData.json'

export default class ModalPost extends PureComponent {
    state={
        user:{}
    }

    fetchGet = async ()=>{
        
        let response = await fetch(process.env.REACT_APP_BASE_URL+`profile/me`,{
            headers:{
                "Authorization":`Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
            }
        })
        let result = await response.json()
        this.setState({user: result})
        console.log(this.state.user)
    }

    componentDidMount(){
        this.fetchGet()
    }


    render() {
        let {show, showFunction, fillFunction, postFunction, showPost, clickable}=this.props
        return (
            <Modal.Dialog style={{marginTop:`${show}`}}>
                <Modal.Header closeButton onClick={showFunction}>
                    <Modal.Title>Create a post</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Row className='body-header'>
                        <Col xs={2}>
                            <img src={this.state.user.image} alt=""/>
                        </Col>
                        <Col xs={10}>
                            <p>{this.state.user.name}</p>
                            <button>
                            <i className="fas fa-globe-europe"></i>
                            <p>Anyone</p>
                            <i className="fas fa-sort-down"></i>
                            </button>
                        </Col>
                    </Row>
                    <textarea 
                    name="" 
                    id="" 
                    cols="30" 
                    rows="10" 
                    placeholder='Write your post'
                    onChange={(e)=>fillFunction(e)}
                    ></textarea>
                    <div className="hashtag">
                        <button>Add hashtag</button>
                        <p>Help the right people see your post</p>
                    </div>
                </Modal.Body>

                <Modal.Footer>
                    <Row className='modal-footer-header'>
                        <div className="add">
                            <i className="fas fa-plus"></i>
                            <i className="fas fa-image"></i>
                            <i className="fab fa-youtube"></i>
                            <i className="far fa-newspaper"></i>
                        </div>
                        <button
                        onClick={postFunction}
                        style={
                            {
                                backgroundColor:`${showPost}`,
                                pointerEvents:`${clickable}`
                            }}
                        >Post</button>
                    </Row>
                    <Row className='modal-footer-body'>
                        <i className="fas fa-caret-up"></i>
                        {ModalFooterData.map((item, index)=>{
                            return(
                                <Col xs={6} key={index}>
                                    <button>{item.name}</button>
                                </Col>
                            )
                        })}
                    </Row>
                </Modal.Footer>
            </Modal.Dialog>
        )
    }
}
