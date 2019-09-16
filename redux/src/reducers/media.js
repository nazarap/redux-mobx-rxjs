import { handleActions } from 'redux-actions'
import { updateMedia, mediaRequest } from '../actions/media'

const initialState = {
  data: null,
  isFetching: false
}

export default handleActions({
  [updateMedia]: (state, action) => (
    { ...state, data: action.payload, isFetching: false }
  ),
  [mediaRequest]: state => (
    { ...state, isFetching: true }
  )
}, initialState)
