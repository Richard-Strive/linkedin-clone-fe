import React, { PureComponent } from 'react'
import '../css/ModalForEduBlock.scss'
import {Modal, Button} from 'react-bootstrap'


export default class ModalForEduBlock extends PureComponent {
    render() {
        let {style, showModal}=this.props
        return (
            <>
                <Modal.Dialog style={{marginTop:`${style}`}}>
                    <Modal.Header closeButton onClick={showModal}>
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Modal body text goes here.</p>
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
