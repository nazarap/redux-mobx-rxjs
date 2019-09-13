import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'

@observer
class TemperatureInput extends React.Component {
  @observable input = ''

  componentDidMount() {
    const { message, loading } = this.props.temperature
    if (!loading && !message) {
      this.props.temperature.fetch()
    }
  }

  render() {
    return (
      <div>
        <input
          onChange={this.onChange}
          value={this.input}
        />
        <button onClick={this.onSubmit}>Get Weather</button>
      </div>
    )
  }

  @action onChange = (e) => {
    this.input = e.target.value
  }

  @action onSubmit = () => {
    this.props.temperature.setLocation(this.input)
  }
}

@inject((stores) => ({ temperature: stores.temperature }))
@observer
class App extends React.Component {
  render () {
    const { temperature } = this.props
    return (
      <div>
        <TemperatureInput temperature={temperature}/>
        <h2>
          {`${temperature.location} ${temperature.loading ? 'loading..' : temperature.message}`}
        </h2>
      </div>
    )
  }
}

export default App
