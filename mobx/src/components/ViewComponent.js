import React from 'react'
import { observer, inject } from 'mobx-react'

@inject((stores) => ({ temperature: stores.temperature }))
@observer
class App extends React.Component {
  render () {
    const { temperature } = this.props
    return (
      <h2>
        {`${temperature.location} ${temperature.loading ? 'loading..' : temperature.message}`}
      </h2>
    )
  }
}

export default App
