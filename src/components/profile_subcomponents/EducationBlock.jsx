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
        results:[],
        idToEdit:''
    }

    //SHOW MODAL FUNCTION
    showModal(){
        this.setState({showModal: !this.state.showModal})
    }

    //PASSING FORM DATA FOR INPUTS ON MODAL

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

    
    schoolForm(){
        this.setState({form: SchoolForm, titleModal: 'Add Education'})
        this.showModal()
    }

    //FILL FUNCTION

    fillExp = (e)=>{
        let exp = {...this.state.experience}
        let currentId = e.currentTarget.id
        exp[currentId]=e.currentTarget.value
        this.setState({experience: exp})
    }

    //EDIT FUNCTION

    editFillExp = (id)=>{
        this.setState(
            {
                form: ExperienceForm, 
                titleModal: 'Edit Experience', 
                fillFunction: this.fillExp,
                saveFunction: this.saveExp,
                idToEdit: id
            })
            console.log(this.state.idToEdit, id)
        this.showModal()
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
        this.setState({results: [...this.state.results, result]})
        console.log(result)
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
        this.setState({results: [...this.state.results, ...result]})
        console.log(result, this.state.results)
    }

    // editExp = async ()=>{

    // }

    componentDidMount(){
        setTimeout(()=>{
            this.loadExp()
        },1000)
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.results !== this.state.results){
            console.log(this.state.results)
        }
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
                            <Row className='exp-details' key={result._id}>
                                <Col xs={2}>
                                    <img src="" alt=""/>
                                </Col>
                                <Col xs={10}>
                                    <p>{result.role}</p>
                                    <p>{result.company}</p>
                                    <p>{result.startDate.substring(0, 10)} {result.endDate.substring(0, 10)}</p>
                                    <p>{result.area}</p>
                                    <i 
                                    className="fas fa-pencil-alt" 
                                    onClick={this.editFillExp.bind(this, result._id)}
                                    ></i>
                                </Col>
                            </Row>
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
