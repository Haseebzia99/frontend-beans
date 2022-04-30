export const getUsername = (data) => {
    return data.owner.username
}

export const getImage = (data) => {
    return data.owner.profile_pic_url
}

export const getLocation = (data) => {
    return data.location.name
}