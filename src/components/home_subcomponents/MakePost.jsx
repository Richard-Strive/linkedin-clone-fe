import React, { PureComponent } from 'react'
import '../css/MakePost.scss'
import ModalPost from './ModalPost'

export default class MakePost extends PureComponent {
    
    render() {
        return (
            <div id='create-post'>
                <ModalPost></ModalPost>
                <div className="start-post">
                    <button>
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
