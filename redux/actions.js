import firebase from 'firebase';

export function userLoggedin(bool){
  return{
    type:'USER_LOGGED_IN',
    status:bool
  };
}
export function isLoading(bool){
  return{
    type:'IS_LOADING',
    status:bool
  };
}

export function setUser(uid) {
    return {
        type: 'SET_USER',
        uid:uid
     };
}
export function registerUser(email, password){
  return dispatch =>{
    dispatch(isLoading(true));
    firebase.auth().createUserWithEmailAndPassword(email,password)
               .then((result) =>{
                dispatch(isLoading(false));
                alert('account scuccessfully created')
              })
              .catch((error)=>alert('Sorry, could not create account, try again '+error.message))
  };
}

export function signInUser(email, password) {
  var uid='';
    return dispatch => {
        dispatch(isLoading(true));

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((result) => {
              uid = result.user.uid;
              dispatch(isLoading(false));
              dispatch(userLoggedIn(true));
              dispatch(setUser(result.user.uid))
            })
            .catch((error) => {
              var errorCode = error.code;
              var errorMesssage = error.message;
              dispatch(loginError(true,errorCode, errorMessage))
            });
    };
  }


export function loginError(bool,errorCode,errorMessage) {
    return {
        type: 'LOGIN_ERROR',
        errorMessage:errorMessage,
        errorCode:errorCode,
    };
}
