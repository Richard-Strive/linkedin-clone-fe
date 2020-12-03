import React, { PureComponent } from 'react'
import './Network_Style/Invitations.scss'

export default class Invitations extends PureComponent {
    state={}

    fetchGet=async(content, contentId)=>{
        let response = await fetch(process.env.REACT_APP_BASE_URL=`https://striveschool-api.herokuapp.com/api/${content}/${contentId}`, {
            headers: {
                Authorization : `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
            }
        })
        let result = await response.json()
        console.log(result)

    }

    componentDidMount(){
        this.fetchGet('profile', '')
    }

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
