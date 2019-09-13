export const fetchUsers = () => (
    $.ajax({
        method: 'get',
        url: '/api/users'
    })
)

export const fetchUser = (id) => (
    $.ajax({
        method: 'get',
        url: `/api/users/${id}`
    })
)

export const updateUser = (user) => {
    return ($.ajax({
        method: 'patch',
        url: `/api/users/${user.id}`,
        data: { user } 
    }))
    
}