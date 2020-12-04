import React, { PureComponent } from 'react'
import './Network_Style/NetworkPage.scss'
import SideBarNetwork from './SideBarNetwork'
import {Container, Row, Col} from 'react-bootstrap'
import Invitations from './Invitations'
import Events from './Events'

export default class NetworkPage extends PureComponent {
    
    
    
    render() {
        return (
            <Container id='network-page'>
                <Row>
                    <Col xs={4}>
                        <SideBarNetwork/>
                    </Col>
                    <Col xs={8}>
                        <Invitations userList={this.props.userList}/>
                        <Events/>
                    </Col>
                </Row>
            </Container>
        )
    }
}
