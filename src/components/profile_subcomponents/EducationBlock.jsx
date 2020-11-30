import React, { PureComponent } from 'react'
import '../css/EducationBlock.scss'
import ModalForEduBlock from './ModalForEduBlock'
import {Row} from 'react-bootstrap'

export default class EducationBlock extends PureComponent {
    state={
        experience:{
            title:'',
            employment:'',
            company:'',
            location:'',
            time:''
        },
        education:{
            schoolName:'',
            degree:'',
            batchYr:''
        },
        license:{
            name:'',
            organization:'',
            time:''
        },
        showModal:true
    }

    showModal(){
        this.setState({showModal: !this.state.showModal})
    }

    render() {
        let show= this.state.showModal? '-100%' : ''
        return (
            <div id='edu-section'>

                <ModalForEduBlock 
                style={show} 
                showModal={this.showModal.bind(this)}
                />

                {/* Experience */}

                <Row className='section experience'>
                    
                    <header>
                        <span>Experience</span>
                        <i className="fas fa-plus" onClick={this.showModal.bind(this)}></i>
                    </header>
                </Row>

                {/* Education */}

                <Row className='section education'>
                   
                    <header>
                        <span>Education</span>
                        <i className="fas fa-plus" onClick={this.showModal.bind(this)}></i>
                    </header>
                </Row>

                {/* Licenses and certifications */}

                <Row className='section license'>
                    
                    <header>
                        <span>Licenses and Certifications</span>
                        <i className="fas fa-plus" onClick={this.showModal.bind(this)}></i>
                    </header>
                </Row>


            </div>
        )
    }
}
