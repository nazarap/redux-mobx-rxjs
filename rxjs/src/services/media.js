import axios from 'axios'
import { Subject, BehaviorSubject } from 'rxjs'

import { from } from 'rxjs'
import { first, mergeMap } from 'rxjs/operators'

class MediaService {

  constructor() {
    this.data$ = new BehaviorSubject([])
    this.query$ = new BehaviorSubject('')
    this.fetching$ = new Subject(false)
  }

  fetch = () => {
    const request = value => axios(`https://api.openweathermap.org/data/2.5/weather?q=${value}&units=metric`)

    this.setFetching(true)
    this.query$.pipe(
      first(),
      mergeMap(value => from(request(value)))
    ).subscribe({
      next: response => {
        this.setFetching(false)
        if (response.status !== 200) {
          this.setData(response.data.message)
        } else {
          this.setData(response.data)
        }
      }
    })
  }

  setQuery = value => this.query$.next(value)

  setData = value => this.data$.next(value)

  setFetching = value => this.fetching$.next(value)

}

export default new MediaService()
