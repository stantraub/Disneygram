export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';
export const OPEN_SHOW_MODAL = 'OPEN_SHOW_MODAL';

export const openModal = modal => {
    return {
        type: OPEN_MODAL,
        modal
    };
};

export const closeModal = () => {
    return {
        type: CLOSE_MODAL
    };
};

export const openShowModal = (modal, post) => {
    return {
        type: OPEN_SHOW_MODAL,
        modal,
        post
    }
}
