import React, { PureComponent } from 'react'
import '../css/ModalForEduBlock.scss'
import {Modal, Button, Form} from 'react-bootstrap'


export default class ModalForEduBlock extends PureComponent {
    render() {
        let {style, showModal, typeForm, titleModal}=this.props
        return (
            <>
                <Modal.Dialog style={{marginTop:`${style}`}}>
                    <Modal.Header closeButton onClick={showModal}>
                        <Modal.Title>{titleModal}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {typeForm.map((input, index)=>{
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
                                    {input.options}
                                </Form.Group>
                            )
                        })}
                        
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary" onClick={showModal}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
            </>
        )
    }
}
