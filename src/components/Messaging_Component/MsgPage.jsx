import React, { PureComponent } from 'react'
import MainMsg from './MainMsg'
import './Messaging_Styles/MsgPage.scss'
import '../css/RightSide.scss'
import MsgSide from './MsgSide'
import footericon from '../images/footericon.png'

export default class MsgPage extends PureComponent {
    render() {
        return (
            <div id='msg-page'>
                <div className="main-body">
                    <MsgSide/>
                    <MainMsg/>
                </div>
                <div id='footer-right' style={{position:'sticky', top:'60px'}}>
                <div className="links-footer-right">
                    <span>About</span>
                    <span>Accessibility</span>
                    <span>Help Center</span>
                    <span>Privacy & Terms</span>
                    <span>Ad Choices</span>
                    <span>Advertising</span>
                    <span>Business Services</span>
                    <span>Get the LinkedIn app</span>

                </div>
                <p>More</p>
                <div className="linkedin-rights">
                    <span><img src={footericon} alt=""/></span>
                    <span>Linkedin Corporation © 2020</span>
                </div>
                </div>
            </div>
        )
    }
}
