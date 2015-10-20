import {createStore, applyMiddleware } from 'redux'
import I from 'immutable'

var initialState = I.fromJS({
  tracks: [
    { title: 'Ascuns', artist: 'ENVIRONMENTS'},
    { title: 'Antennas to Heaven', artist: 'GY!BE'},
    { title: 'Reichriddle', artist: 'Sickoakes'},
  ],
  activeIndex: 0
})

var reducer = function(state = initialState, action) {
  console.log('running reducer')
  switch (action.type) {
    default:
      return state
  }
}

let store = createStore(reducer)

export default store
