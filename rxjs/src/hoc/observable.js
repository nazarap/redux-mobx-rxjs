import React from 'react'
import { combineLatest } from 'rxjs'
import { distinctUntilChanged } from 'rxjs/operators'

export default (observableMap, triggers, initialState = {}) => Component => {
  return class extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        ...initialState,
      }
    }

    componentDidMount() {
      const observables = Object.values(observableMap)
      if  (observables.length === 0) return

      const keys = Object.keys(observableMap)
      const observable = combineLatest(
        ...observables,
        (...values) => keys.reduce((a, c, i) => ({...a, [c]: values[i]}), {})
      )

      this.subscription = observable.pipe(distinctUntilChanged()).subscribe(newState =>
        this.setState({ ...newState }),
      )
    }

    componentWillUnmount() {
      if (this.subscription) {
        this.subscription.unsubscribe()
      }
    }

    render() {
      return (
        <Component {...this.props} {...this.state} {...triggers} />
      )
    }
  }
}
