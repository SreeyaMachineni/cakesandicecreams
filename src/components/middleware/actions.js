export const requestDog = () => {
  console.log('request')
    return { type: 'API_CALL_REQUEST' }
  };
  
  export const requestDogSuccess = (data) => {
    console.log('success',data)
    return { type: 'API_CALL_SUCCESS', url: data.message }
  };
  
  export const requestDogError = () => {
    console.log('err')
    return { type: 'API_CALL_FAILURE' }
  };
  
  export const fetchDog = () => {
    console.log('in action')
    return { type: 'FETCHED_DOG' }
  };
  