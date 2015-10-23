import {createStore, applyMiddleware } from 'redux'
import I from 'immutable'

var initialState = I.fromJS({
  tracks: [
    { id: 0, title: 'Ascuns', artist: 'ENVIRONMENTS'},
    { id: 1, title: 'Antennas to Heaven', artist: 'GY!BE'},
    { id: 2, title: 'Reichriddle', artist: 'Sickoakes'},
  ],
  activeIndex: 0
})

var reducer = function(state = initialState, action) {
  console.log('running reducer')
  switch (action.type) {
    case 'SELECT_ITEM':
      return state.set('activeIndex', action.payload)
    default:
      return state
  }
}

let store = createStore(reducer)

export default store
