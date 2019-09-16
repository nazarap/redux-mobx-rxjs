import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { mediaFetch } from '../actions/media'

const ViewComponent = ({ data, fetching, mediaFetch }) => {

  useEffect(() => {
    if (!fetching && !data) {
      mediaFetch()
    }
  }, [data])

  return (
    <h1>{fetching ? '..loading' : data}</h1>
  )
}

const stateToProps = state => ({
  data: state.media.data,
  fetching: state.media.isFetching
})

const stateToTriggers = dispatch => ({
  mediaFetch: value => dispatch(mediaFetch(value))
})

export default connect(stateToProps, stateToTriggers)(ViewComponent)
