/* global fetch */
import { API_BASE_URL } from '../config'

export const FETCH_CHEESES_REQUEST = 'FETCH_CHEESES_REQUEST'
export const fetchCheesesRequest = () => {
  // eslint-disable-next-line
  type: FETCH_CHEESES_REQUEST
}

export const FETCH_CHEESES_SUCCESS = 'FETCH_CHEESES_SUCCESS'
export const fetchCheesesSuccess = (cheeses) => {
  // eslint-disable-next-line
  type: FETCH_CHEESES_SUCCESS,
  cheeses
}

export const FETCH_CHEESES_ERROR = 'FETCH_CHEESES_ERROR'
export const fetchCheesesError = (error) => {
  // eslint-disable-next-line
  type: FETCH_CHEESES_ERROR,
  error
}

export const fetchCheeses = () => dispatch => {
  dispatch(fetchCheesesRequest())
  fetch(`${API_BASE_URL}/cheeses`)
    .then(cheeses => dispatch(fetchCheesesSuccess(cheeses)))
    .catch(err => dispatch(fetchCheesesError(err)))
}
