import React, { PureComponent } from 'react'
import './Messaging_Styles/MainMsg.scss'

export default class MainMsg extends PureComponent {

    state={
        msg:[],
        targetMsg:[],
        sendComment:{
            comment: "",
			author: '',
			rate: 1,
			elementId: '5fca3098d0446f00154e1016',
        },
        me:'',
        lastMsg:'',
        receiveFrom:''
    }

    getProfileUserName=async()=>{
        let response= await fetch(process.env.REACT_APP_BASE_URL + `profile/me`,
        {
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
            },
        })
        let result = await response.json()
        console.log(result)
        this.setState({me:result.username, sendComment:{...this.state.sendComment, author:result.username}})
    }

    getCommentForMsg = async () => {
			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/5fca3098d0446f00154e1016",
				{
					headers: new Headers({
						Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
					}),
				}
			);
            let comments = await response.json();
            console.log(comments)
            this.setState({msg:comments})
            let lastComment=comments[comments.length -1]
            this.setState({targetMsg: [...this.state.targetMsg, lastComment]})

    };
    
    sendCommentMsg = async () => {
		// e.preventDefault();

			let response = await fetch(
				"https://striveschool-api.herokuapp.com/api/comments/",
				{
					method: "POST",
					body: JSON.stringify(this.state.sendComment),
					headers: new Headers({
						"Content-Type": "application/json",
						Authorization: `Bearer ${process.env.REACT_APP_ACCESS_TOKEN}`,
					}),
				}
			);
            let result = await response.json()
            console.log(result)
            let lastComment=result
            this.setState({lastMsg: lastComment})
            
	};

    componentDidMount=async()=>{
        let profile=await this.getProfileUserName()
        let msg= await this.getCommentForMsg()
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.targetMsg !== this.state.targetMsg){}
    }

    writeText=(e)=>{
        let comment = e.currentTarget.value
		this.setState({ sendComment:{...this.state.sendComment, comment: comment} });
    }

    whoText=(e)=>{
        let receiver = e.currentTarget.value
        this.setState({receiveFrom: receiver})
    }

    sendText=async()=>{
        let msg = await this.sendCommentMsg()
        let lastMsg = this.getCommentForMsg()
    }

    render() {
        return (
            <div id='main-msg'>
                <header>
                    New Message
                </header>
                <input 
                type="text" 
                placeholder='Type a name or multiple names...'
                onChange={this.whoText}
                />
                <div className="msg-dialog">
                    {/* {this.state.msg.filter(msg=>msg.author==='Reniejr').map((msg, index)=>{
                        return(
                        <p key={index} className='sender'>{msg.comment}</p>
                        )
                    })}
                    {this.state.msg.filter(msg=>msg.author==='orhanors').map((msg, index)=>{
                        return(
                        <p key={index} className='received'>{msg.comment}</p>
                        )
                    })} */}
                    {this.state.targetMsg.map((msg, index)=>{
                        return(
                            <div 
                            className='dialog'
                            style={{
                                alignItems: this.state.lastMsg.author===this.state.me? 'flex-end' : 'flex-start'
                            }}
                            >
                                <p
                                style={{
                                    color: this.state.lastMsg.author===this.state.me? 'green' : 'blue'
                                }}
                                >{msg.author}</p>
                                <p 
                                key={index}
                                style={{
                                    backgroundColor: this.state.lastMsg.author===this.state.me? 'green' : 'blue'
                                }}
                                
                                >{msg.comment}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="msg-sender">
                    <input 
                    type="text" 
                    placeholder='Write here your text...'
                    onChange={(e)=>this.writeText(e)}
                    />
                    <button onClick={()=>this.sendText()}>
                        <i className="fas fa-chevron-up"></i>
                    </button>
                </div>
                <div className="media-uploads">
                    <div className="media-icons">

                        <i className="fas fa-image"></i>
                        <i className="fas fa-paperclip"></i>
                        <span>GIF</span>
                        <i className="far fa-smile"></i>
                        <i className="fas fa-video"></i>
                    </div>
                    <div className="msg-options">
                        <button>Send</button>
                        <i className="fas fa-ellipsis-h"></i>
                    </div>
                </div>
            </div>
        )
    }
}
