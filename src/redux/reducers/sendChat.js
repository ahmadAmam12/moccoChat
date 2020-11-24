const initialState = {
    isChat: false,
    isError: false,
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type){
        case 'SEND_CHAT_PENDING': {
            return {
                ...state,
                isLoading: true
            }
        }
        case 'SEND_CHAT_REJECTED': {
            return{
                ...state,
                isLoading: false,
                isError: true,
                message: 'cannot send chat'
            }
        }
        case 'SEND_CHAT_FULFILLED':{
            return{
                ...state,
                isError: false,
                isLoading:false,
                isChat: true,
                message: 'send chat success'
            }
        }
        default:{
            return state
        }
    }
}