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
                </form>
                
            </div>
        )
    }
}

export default UploadForm;