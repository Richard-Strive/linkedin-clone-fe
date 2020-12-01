import React, { PureComponent } from 'react'
import '../css/EducationBlock.scss'
import ModalForEduBlock from './ModalForEduBlock'
import {Row, Col, Form} from 'react-bootstrap'
import ExperienceForm from '../dataExamples/ExperienceForm.json'
import SchoolForm from '../dataExamples/SchoolForm.json'

export default class EducationBlock extends PureComponent {
    state={
        experience:{
            role:'',
            employment:'',
            company:'',
            area:'',
            startDate:'',
            endDate:''
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
        fillFunction:'',
        saveFunction:'',
        results:[]
    }

    showModal(){
        this.setState({showModal: !this.state.showModal})
    }

    experienceForm(){
        this.setState(
            {
                form: ExperienceForm, 
                titleModal: 'Add Experience', 
                fillFunction: this.fillExp,
                saveFunction: this.saveExp
            })
        this.showModal()
    }

    fillExp = (e)=>{
        let exp = {...this.state.experience}
        let currentId = e.currentTarget.id
        exp[currentId]=e.currentTarget.value
        this.setState({experience: exp})
    }

    saveExp = async ()=>{
        let id = this.props.user._id
        console.log(id)
        let response = await fetch(
            process.env.REACT_APP_BASE_URL + `profile/${id}/experiences`,
            {
                method: 'POST',
                body: JSON.stringify(this.state.experience),
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
                })
            }
        )
        let result = await response.json()
        console.log(this.state.experience, result)
        this.showModal()
    }

    loadExp = async()=>{
        let id = this.props.user._id
        let response = await fetch(
            process.env.REACT_APP_BASE_URL + `profile/${id}/experiences`,
            {
                headers:{
                    Authorization:`Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
                }
            }
        )
        let result = await response.json()
        this.setState({results: result})
        console.log(result, this.state.results)
    }

    componentDidMount(){
        setTimeout(()=>{
            this.loadExp()
        },1000)
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
                save={this.state.saveFunction}
                >
                    <Form>
                        {this.state.form.filter(input=>input.as!=="select"||input.as==="textarea").map((input, index)=>{
                            return(
                                <Form.Group key={index}>
                                    <Form.Label htmlFor={input.htmlFor}>{input.title}</Form.Label>
                                    <Form.Control
                                        required
                                        type={input.type}
                                        name={input.name}
                                        id={input.id}
                                        placeholder={input.placeholder}
                                        as={input.as}
                                        rows={input.rows}
                                        onChange={this.state.fillFunction}
                                    />

                                </Form.Group>
                            )
                        })}
                        {this.state.form.filter(input=>input.as==="select").map((input, index)=>{
                            return(
                                <Form.Group key={index}>
                                    <Form.Label htmlFor={input.htmlFor}>{input.title}</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name={input.name}
                                        id={input.id}
                                    >
                                        {input.options.map((title, index)=>{
                                            return(
                                                <option key={index}>{title}</option>
                                            )
                                        })}
                                    </Form.Control>
                                </Form.Group>
                            )
                        })}
                    </Form>   
                </ModalForEduBlock>

                {/* Experience */}

                <Row className='section experience'>
                    
                    <header>
                        <span>Experience</span>
                        <i className="fas fa-plus" onClick={this.experienceForm.bind(this)}></i>
                    </header>
                    {this.state.results.map(result=>{
                        return(
                            <>
                                <Col xs={2}>
                                <img src="" alt=""/>
                                </Col>
                                <Col xs={10}>
                                    <p>{result.role}</p>
                                    <p>{result.company}</p>
                                    <p>
                                        <span>{result.startDate}</span>
                                        <span>{result.endDate}</span>
                                    </p>
                                </Col>
                            </>
                        )
                    })}
                    
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
