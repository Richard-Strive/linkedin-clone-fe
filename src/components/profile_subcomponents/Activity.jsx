import React, { PureComponent } from 'react'
import '../css/Activity.scss'
import activityData from '../dataExamples/ActivityData.json'

export default class Activity extends PureComponent {
    follwers = activityData.filter(about=>about.about==="Followers")

    activities = activityData.filter(about=>about.about==="Activity Detail")

    render() {

        return (
            <div id='activity'>
                <header>
                    <span className='title'>
                        <span>Activity</span>
                        <span>See all</span>
                    </span>
                    <span className='details'>
                        <span>{this.follwers[0].n} followers</span>
                        <span>Manage Followers</span>
                    </span>
                </header>
                <div className='activity-body'>
                    {this.activities.map((activity, index)=>{
                        return(
                            <div className='activity' key={index}>
                                <span>
                                    <img src={activity.img} alt=""/>
                                </span>
                                <span>
                                    <p>{activity.title}</p>
                                    <p>Username shared this</p>
                                    <p>{activity["reactions-n"]} Reactions</p>
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
