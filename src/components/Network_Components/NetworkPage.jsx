import React, { PureComponent } from 'react'
import './Network_Style/NetworkPage.scss'
import SideBarNetwork from './SideBarNetwork'
import {Container, Row, Col} from 'react-bootstrap'

export default class NetworkPage extends PureComponent {
    render() {
        return (
            <Container id='network-page'>
                <Row>
                    <Col xs={4}>
                        <SideBarNetwork/>
                    </Col>
                    <Col xs={8}></Col>
                </Row>
            </Container>
        )
    }
}
