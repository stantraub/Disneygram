import React from 'react';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = Object.assign({}, this.props.post, { photoFile: null});
        this.handleSubmit = this.handleSubmit.bind(this); 
        // this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        this.setState({photoFile: e.currentTarget.files[0]});
    }


    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("post[body]", this.state.body);
        formData.append("post[photo]", this.state.photoFile);
        this.props.createPost(formData)
            .then(() => {
                this.props.history.push("/feed")
            }).then(() => {
                this.props.closeModal()
            });
        
    }

    render() {
        return(
            <div className='upload-modal-div'>
                <h1 className="upload-modal-heading">New Post</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea 
                        className="post-caption-div"
                        type="text"
                        placeholder="Write a caption..."
                        onChange={this.update("body")}
                    />
                    <div className="upload-btn-wrapper">
                        <button className="modal-upload-btns">
                            Upload Photo
                        </button>
                        <input type="file" onChange={this.handleFile.bind(this)} />
                    </div>
                    <div>
                        <input type='submit' className="modal-upload-btns" value='Share'/>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default UploadForm;