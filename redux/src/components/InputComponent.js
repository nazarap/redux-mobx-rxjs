import React, { useState } from 'react'
import { connect } from 'react-redux'
import { mediaFetch } from '../actions/media'

const ViewComponent = ({ mediaFetch }) => {
  const [query, setQuery] = useState('')

  return (
    <aside>
      <input onChange={e => setQuery(e.target.value)}/>
      <button onClick={() => mediaFetch(query)}>fetch</button>
    </aside>
  )
}

const stateToProps = () => ({})

const stateToTriggers = dispatch => ({
  mediaFetch: value => dispatch(mediaFetch(value))
})

export default connect(stateToProps, stateToTriggers)(ViewComponent)
