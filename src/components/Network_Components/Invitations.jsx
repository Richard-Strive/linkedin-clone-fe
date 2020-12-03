import React, { PureComponent } from 'react'
import './Network_Style/Invitations.scss'

export default class Invitations extends PureComponent {
    state={
        invitations:[]
    }

    


    render() {
        console.log(this.props.userList)
        return (
            this.props.userList.map(user=>{
                return(
                    <>
                        <div id='invitations'>
                            <header>
                                <p>Invitations</p>
                                <button>Manage</button>
                            </header>
                            <div className="invitation-card">
                                <img src={user.image} alt=""/>
                                <div className="invitation-info">
                                    <p>{user.name} {user.surname}</p>
                                    <p>{user.bio}</p>
                                    <p>{user.area}</p>
                                </div>
                                <div className="choose-invitation">
                                    <button>Ignore</button>
                                    <button>Accept</button>
                                </div>
                            </div>
                        </div>
                    </>
                )
            })
            
        )
    }
}
