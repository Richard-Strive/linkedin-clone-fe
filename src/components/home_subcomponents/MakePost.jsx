import React, { PureComponent } from 'react'
import '../css/MakePost.scss'
import ModalPost from './ModalPost'

export default class MakePost extends PureComponent {

    state={
        showModal:true,
        post:{text:''},
        showPost:true
    }

    fetchPost=async()=>{
        let response = await fetch(
            process.env.REACT_APP_BASE_URL + `posts/`,
            {
                method: 'POST',
                body: JSON.stringify(this.state.post),
                headers: new Headers({
                    "Content-Type": "application/json",
                    "Authorization":`Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`
                })
            }
        )
        let result = await response.json()
        console.log(result)
    }

    postConfirm(){
        this.fetchPost()
        this.showModal()
    }

    showModal(){
        this.setState({showModal: !this.state.showModal})
    }
    fillUp=(e)=>{
        let text=''
        text=e.currentTarget.value
        if(text.length>0){
            this.setState({showPost: false})
        }else{this.setState({showPost: true})}
        this.setState({post:{text: text}})
    }



    render() {
        let showModal= this.state.showModal? '-200vh' : ''
        let showPost= this.state.showPost? 'grey' : '#0078b9'
        let canClick= this.state.showPost? 'none' : 'all'
        return (
            <div id='create-post'>
                <ModalPost
                show={showModal}
                showFunction={this.showModal.bind(this)}
                fillFunction={this.fillUp}
                postFunction={this.postConfirm.bind(this)}
                showPost={showPost}
                clickable={canClick}
                ></ModalPost>
                <div className="start-post">
                    <button
                    onClick={this.showModal.bind(this)}
                    >
                        <ion-icon name="create-outline"></ion-icon>
                        <p>Start a Post</p> 
                    </button>
                </div>
                <div className="upload-media">
                    <button>
                    <i className="fas fa-image"></i>
                    <p>Photo</p>
                    </button>
                    <button>
                    <i className="fab fa-youtube"></i>
                    <p>Video</p>
                    </button>
                    <button>
                    <i className="far fa-calendar-alt"></i>
                    <p>Events</p>
                    </button>
                    <button>
                    <i className="far fa-newspaper"></i>
                    <p>Write Article</p>
                    </button>
                </div>
            </div>
        )
    }
}
