import http from '../../helpers/http'
import qs from 'qs'

const getMyProfile = (token) => ({
    type: 'GET_PROFILE',
    payload: http(token).get('user/detail')
})
const editMyName = (token,user_name) =>({
    type: 'EDIT_NAME',
    payload: http(token).patch('user', qs.stringify({user_name}))
})
const editBio = (token,Bio) =>({
    type: 'EDIT_BIO',
    payload: http(token).patch('user', qs.stringify({Bio}))
})
const editAvatar = (token,data) =>({
    type: 'EDIT_AVA',
    payload: http(token).patch('user', data)
})

export {getMyProfile, editMyName, editBio, editAvatar}