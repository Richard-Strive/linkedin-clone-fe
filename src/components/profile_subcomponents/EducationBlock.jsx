import React, { PureComponent } from 'react'
import '../css/EducationBlock.scss'
import ModalForEduBlock from './ModalForEduBlock'
import {Row, Col} from 'react-bootstrap'
import ExperienceForm from '../dataExamples/ExperienceForm.json'
import SchoolForm from '../dataExamples/SchoolForm.json'

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
        showModal:true,
        form:[],
        titleModal:'',
        filled:[]
    }

    showModal(){
        this.setState({showModal: !this.state.showModal})
    }

    experienceForm(){
        this.setState({form: ExperienceForm, titleModal: 'Add Experience'})
        this.showModal()
    }

    schoolForm(){
        this.setState({form: SchoolForm, titleModal: 'Add Education'})
        this.showModal()
    }

    render() {
        let show= this.state.showModal? '-150vh' : ''
        return (
            <div id='edu-section'>

                <ModalForEduBlock 
                style={show} 
                showModal={this.showModal.bind(this)}
                typeForm={this.state.form}
                titleModal={this.state.titleModal}
                />

                {/* Experience */}

                <Row className='section experience'>
                    
                    <header>
                        <span>Experience</span>
                        <i className="fas fa-plus" onClick={this.experienceForm.bind(this)}></i>
                    </header>
                    <Col xs={2}></Col>
                    <Col xs={10}></Col>
                </Row>

                {/* Education */}

                <Row className='section education'>
                   
                    <header>
                        <span>Education</span>
                        <i className="fas fa-plus" onClick={this.schoolForm.bind(this)}></i>
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
