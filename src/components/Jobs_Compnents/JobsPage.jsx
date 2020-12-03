import React, { PureComponent } from 'react'
import './Jobs_Styles/JobsPage.scss'
import SearchJob from './SearchJob'
import {Container} from 'react-bootstrap'

export default class JobsPage extends PureComponent {
    render() {
        return (
            <Container id='jobs-page'>
                <nav className='jobs-nav'>
                    <ul className='jobs-nav-list'>
                        <li>
                            <i className="fas fa-bookmark"></i>
                            My Jobs
                        </li>
                        <li>
                            <i className="fas fa-bell"></i>
                            Job Alerts
                        </li>
                        <li>
                            <i className="fas fa-money-bill"></i>
                            Salary
                        </li>
                        <li>
                            <i className="fas fa-sticky-note"></i>
                            Interview Prep
                        </li>
                        <li>
                            More
                            <i className="fas fa-sort-down"></i>
                        </li>
                    </ul>
                    <button>
                        <ion-icon name='create-outline'></ion-icon>
                        Post a free job
                    </button>
                </nav>
                <SearchJob/>
            </Container>
        )
    }
}
