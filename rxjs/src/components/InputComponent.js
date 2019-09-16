import React from 'react'
import MediaService from '../services/media'
import observable from '../hoc/observable'

const ViewComponent = ({ setQuery, fetch }) => (
  <aside>
    <input onChange={e => setQuery(e.target.value)}/>
    <button onClick={fetch}>fetch</button>
  </aside>
)

const stateToProps = {}

const stateToTriggers = {
  fetch: MediaService.fetch,
  setQuery: MediaService.setQuery
}

export default observable(stateToProps, stateToTriggers)(ViewComponent)
