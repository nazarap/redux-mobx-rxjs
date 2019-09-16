import React, { useEffect } from 'react'
import MediaService from '../services/media'
import observable from '../hoc/observable'

const ViewComponent = ({ data, fetching, fetch }) => {

  useEffect(() => {
    if (!fetching && !data) {
      fetch()
    }
  }, [data])

  return (
    <h1>{fetching ? '..loading' : data}</h1>
  )
}

const stateToProps = {
  data: MediaService.data$,
  fetching: MediaService.fetching$
}

const stateToTriggers = {
  fetch: MediaService.fetch
}

export default observable(stateToProps, stateToTriggers)(ViewComponent)
