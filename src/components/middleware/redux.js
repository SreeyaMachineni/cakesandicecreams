const API_CALL_REQUEST = "API_CALL_REQUEST";
const API_CALL_SUCCESS = "API_CALL_SUCCESS";
const API_CALL_FAILURE = "API_CALL_FAILURE";

const initialState = {
    loading: false,
    url: ' ',
    error: false
  };

export function reducer(state=initialState,action){
    switch(action.types) {
        case API_CALL_REQUEST:
            return {
                
                url:'',
                loading:true,
                error:false
            };
        case API_CALL_SUCCESS:
            return {
                
                url:action.url,
                loading:false,
                error:false
            };
        case API_CALL_FAILURE:
            return {
                
                url:'',
                loading:false,
                error:true
            }
        default:
            return state
    }
}


