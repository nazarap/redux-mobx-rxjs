import axios from 'axios'
import { createAction } from 'redux-actions'

const UPDATE_MEDIA = 'UPDATE_MEDIA'
const UPDATE_MEDIA_REQUEST = 'UPDATE_MEDIA_REQUEST'

const mediaRequest = createAction(UPDATE_MEDIA_REQUEST)
const updateMedia = createAction(UPDATE_MEDIA)

const mediaFetch = value => (dispatch) => {
  dispatch(mediaRequest())
  return axios(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric`)
    .then(response => {
      if (response.status !== 200) {
        dispatch(updateMedia(response.data.message))
      } else {
        dispatch(updateMedia(response.data))
      }
    })
}

export {
  mediaFetch,
  updateMedia,
  mediaRequest
}
