export const createLike = (like) => (
    $.ajax({
        method: 'post',
        url: '/api/likes',
        data: { like }
    })
)

export const deleteLike = (id) => (
    $.ajax({
        method: 'delete',
        url: `/api/likes/${id}`
    })
)