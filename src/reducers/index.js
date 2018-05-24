import {
  FETCH_CHEESES_ERROR,
  FETCH_CHEESES_REQUEST,
  FETCH_CHEESES_SUCCESS
}
from '../actions'

const initialState = {
  cheeses: [],
  error: null,
  loading: false
}

export function cheeseReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CHEESES_ERROR:
      return { ...state, loading: false, error: action.error }
    case FETCH_CHEESES_REQUEST:
      return { ...state, loading: true, error: null }
    case FETCH_CHEESES_SUCCESS:
      return { ...state, loading: false, cheeses: action.cheeses, error: null }
    default:
      return state
  }
}
