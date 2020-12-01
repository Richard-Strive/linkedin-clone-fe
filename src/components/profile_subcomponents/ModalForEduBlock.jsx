import React, { PureComponent } from 'react'
import '../css/ModalForEduBlock.scss'
import {Modal, Button} from 'react-bootstrap'


export default class ModalForEduBlock extends PureComponent {
    
    render() {
        let {style, showModal, titleModal, children, save}=this.props
        return (
                <Modal.Dialog style={{marginTop:`${style}`}}>
                    <Modal.Header closeButton onClick={showModal}>
                        <Modal.Title>{titleModal}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        {children}                        
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary">Close</Button>
                        <Button variant="primary" onClick={save}>Save changes</Button>
                    </Modal.Footer>
                </Modal.Dialog>
        )
    }
}
