import { types } from "mobx-state-tree"

export default types
  .model('Temperature', {
    message: types.string,
    location: types.string,
    loading: types.boolean
  })
  .actions(self => ({
    fetch() {
      self.loading = true
      window.fetch(`https://api.openweathermap.org/data/2.5/weather?q=${self.location}&units=metric`)
        .then(res => res.json()
          .then(json => {
            self.update(json)
          }))
    },
    setLocation(city) {
      self.location = city
      self.fetch()
    },
    update(data) {
      self.message = data.message
      self.location = data.cod
      self.loading = false
    }
  }))

