import React, { PureComponent } from 'react'
import '../css/ModalForEduBlock.scss'
import {Modal, Button, Form} from 'react-bootstrap'


export default class ModalForEduBlock extends PureComponent {
    
    render() {
        let {style, showModal, typeForm, titleModal}=this.props
        return (
                <Modal.Dialog style={{marginTop:`${style}`}}>
                    <Modal.Header closeButton onClick={showModal}>
                        <Modal.Title>{titleModal}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {typeForm.filter(input=>input.as!=="select"||input.as==="textarea").map((input, index)=>{
                            return(
                                <Form.Group key={index}>
                                    <Form.Label htmlFor={input.htmlFor}>{input.title}</Form.Label>
                                    <Form.Control
                                        required
                                        type={input.type}
                                        name={input.name}
                                        id={input.id}
                                        placeholder={input.placeholder}
                                        as={input.as}
                                        rows={input.rows}
                                    />

                                </Form.Group>
                            )
                        })}
                        {typeForm.filter(input=>input.as==="select").map((input, index)=>{
                            return(
                                <Form.Group key={index}>
                                    <Form.Label htmlFor={input.htmlFor}>{input.title}</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name={input.name}
                                        id={input.id}
                                    >
                                        {input.options.map((title, index)=>{
                                            return(
                                                <option key={index}>{title}</option>
                                            )
                                        })}
                                    </Form.Control>
                                </Form.Group>
                            )
                        })}

                        
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary" onClick={showModal}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
        )
    }
}
