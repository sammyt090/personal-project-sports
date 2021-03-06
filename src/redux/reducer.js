const initialState={
    username: '',
    first_name: '',
    last_name: '',
    profile_pic:'',
    id: null
}

const GET_USER = 'GET_USER'
const LOGOUT_USER = 'LOGOUT_USER'
const EDIT_PROFILE = 'EDIT_PROFILE'

export function getUser(username, first_name, last_name, profile_pic, id){
    return {
        type: GET_USER,
        payload: {
            username,
            first_name,
            last_name,
            profile_pic,
            id
        }
    }
}



export function logoutUser(){
    return{
        type: LOGOUT_USER,
        payload: initialState
    }
}

export function editProfile(picture){
    return{
        type: EDIT_PROFILE,
        payload: picture
    }
}


export default function (state = initialState, action){
    
    switch(action.type) {
        case GET_USER:
            const {username, first_name, last_name, profile_pic, id} = action.payload
            return {...state, username: username, first_name: first_name, last_name: last_name, profile_pic: profile_pic, id: id}
        case LOGOUT_USER:
            return {...state, ...action.payload}
        case EDIT_PROFILE:
            return {...state, profile_pic: action.payload}
        default:
            return initialState
    }
}