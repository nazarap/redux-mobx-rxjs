import React from 'react'
import { observer, inject } from 'mobx-react'
import { observable, action } from 'mobx'

@inject((stores) => ({ temperature: stores.temperature }))
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

export default TemperatureInput
