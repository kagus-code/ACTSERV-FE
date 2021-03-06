import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,

  USER_LOGOUT,

  
  MOBILE_LOGIN_REQUEST,
  MOBILE_LOGIN_SUCCESS,
  MOBILE_LOGIN_FAIL,

  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,


  USER_TOKEN_REQUEST,
  USER_TOKEN_SUCCESS,
  USER_TOKEN_FAIL,


  MOBILE_TOKEN_REQUEST,
  MOBILE_TOKEN_SUCCESS,
  MOBILE_TOKEN_FAIL,


  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_DETAILS_RESET,

  VERIFY_EMAIL_REQUEST,
  VERIFY_EMAIL_SUCCESS,
  VERIFY_EMAIL_FAIL,
} from '../constants/userConstants'





export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true }

    case USER_LOGIN_SUCCESS:
      return { loading: false, success: true, details: action.payload }

    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }

    case USER_LOGOUT:
      return {}

    default:
      return state



  }
}


export const mobileLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case MOBILE_LOGIN_REQUEST:
      return { loading: true }

    case MOBILE_LOGIN_SUCCESS:
      return { loading: false, success: true, details: action.payload }

    case MOBILE_LOGIN_FAIL:
      return { loading: false, error: action.payload }

  

    default:
      return state



  }
}


export const userTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_TOKEN_REQUEST:
      return { loading: true }

    case USER_TOKEN_SUCCESS:
      return { loading: false, jwt: action.payload }

    case USER_TOKEN_FAIL:
      return { loading: false, error: action.payload }



    default:
      return state



  }
}




export const mobileTokenReducer = (state = {}, action) => {
  switch (action.type) {
    case MOBILE_TOKEN_REQUEST:
      return { loading: true }

    case MOBILE_TOKEN_SUCCESS:
      return { loading: false, jwt: action.payload }

    case MOBILE_TOKEN_FAIL:
      return { loading: false, error: action.payload }



    default:
      return state



  }
}


export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true }

    case USER_REGISTER_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload }

    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }

    case USER_LOGOUT:
      return {}

    default:
      return state



  }
}


export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true }

    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload }

    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload }


    case USER_DETAILS_RESET:
      return { user: {} }


    default:
      return state



  }
}



export const emailVerifyReducer = (state = {}, action) => {
  switch (action.type) {
    case VERIFY_EMAIL_REQUEST:
      return { loading: true }

    case VERIFY_EMAIL_SUCCESS:
      return { loading: false, details: action.payload }

    case VERIFY_EMAIL_FAIL:
      return { loading: false, error: action.payload }



    default:
      return state



  }
}