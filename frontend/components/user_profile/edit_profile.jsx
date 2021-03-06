import React from 'react';

class EditProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            id: this.props.user.id,
            username: this.props.user.username,
            fullName: this.props.user.full_name,
            bio: this.props.user.bio,
            photoFile: null,
            profilePic: this.props.user.profile_pic
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.update = this.update.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append("user[bio]", this.state.bio);
        if (this.state.photoFile){
            formData.append("user[profile_pic]", this.state.photoFile);
        }
        
        this.props.updateUser(formData)
            .then(() => {
                this.props.history.push(`/users/${this.props.user.id}`)
            }).then(() => {
                this.props.closeModal()
            });
    }

    handleFile(e) {
        this.setState({ photoFile: e.currentTarget.files[0] });
    }

    render() {
        // console.log(this.props);
        return(
            <div className='upload-modal-div'>
                <h1 className="upload-modal-heading">Edit Profile</h1>
                <form onSubmit={this.handleSubmit}>
                    <textarea
                        className="post-caption-div"
                        type="text"
                        placeholder="Update bio..."
                        onChange={this.update("bio")}
                    />
                    <div className="edit-btn-wrapper">
                        {/* <div className="modal-upload-btns">
                                Change Profile Picture
                        </div> */}
                        <input type="file" className="edit-file-input" onChange={this.handleFile.bind(this)} />
                    </div>
                    <div>
                        <input type='submit' className="modal-upload-btns" value='Submit' />
                    </div>
                </form>
            </div>
        )
    }
}

export default EditProfile;