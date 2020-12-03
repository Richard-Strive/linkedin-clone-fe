import React, { PureComponent } from 'react'
import './Network_Style/Invitations.scss'

export default class Invitations extends PureComponent {
    render() {
        return (
            <div id='invitations'>
                <header>
                    <p>Invitations</p>
                    <button>Manage</button>
                </header>
                <div className="invitation-card">
                    <img src="" alt=""/>
                    <div className="invitation-info">
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div className="choose-invitation">
                        <button>Ignore</button>
                        <button>Accept</button>
                    </div>
                </div>
            </div>
        )
    }
}
