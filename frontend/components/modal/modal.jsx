import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import UploadFormContainer from '../user_profile/upload_form_container';
import EditProfileContainer from '../user_profile/edit_profile_container';
import PostShowContainer from '../post/post_show_container';

function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    let component;
    switch (modal.modal) {
        case 'upload':
            component = <UploadFormContainer />;
            break;
        case 'edit':
            component = <EditProfileContainer />;
            break;
        case 'show':
            component = <PostShowContainer post={modal.post}/>
            break;
        default:
            return null;
    }
    return (
        <div className="modal-background" onClick={closeModal}>
            <div className="modal-child" onClick={e => e.stopPropagation()}>
                {component}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        modal: state.ui.modal
    };
};

const mapDispatchToProps = dispatch => {
    return {
        closeModal: () => dispatch(closeModal())
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
