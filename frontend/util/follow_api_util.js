export const createFollow = (follow) => (
    $.ajax({
        method: 'post',
        url: `/api/follows`,
        data: { follow }
    })
)

export const fetchFollows = () => (
    $.ajax({
        url: `/api/follows`,
        method: 'get'
    })
)

export const deleteFollow = (followId) => (
    $.ajax({
        method: 'delete',
        url: `/api/follows/${followId}`
    })
)