import React from 'react';

class UploadForm extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className='upload-modal-div'>
                <form>
                    <h1 className="upload-modal-heading">New Post</h1>
                    <textarea 
                        className="post-caption-div"
                        type="text"
                        placeholder="Write a caption..."
                    />
                    <div>
                    <button className="modal-upload-btns">
                        Upload Photo
                    </button>
                    </div>
                    <div>
                    <button className="modal-upload-btns">
                        Share
                    </button>
                    </div>
                </form>
                
            </div>
        )
    }
}

export default UploadForm;