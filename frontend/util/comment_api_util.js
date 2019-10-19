export const createComment = (comment) => (
    $.ajax({
        method: 'post',
        url: `/api/comments`,
        data: { comment }
    })
)

export const fetchComments = () => (
    $.ajax({
        url: `api/comments`,
        method: 'get'
    })
)

export const deleteComment = (commentId) => (
    $.ajax({
        method: 'delete',
        url: `/api/comments/${Id}`
    })
)