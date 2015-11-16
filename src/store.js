import {createStore, applyMiddleware } from 'redux'
import I from 'immutable'

var initialState = I.fromJS({
  tracks: [
    { id: 0, title: 'Ascuns', artist: 'ENVIRONMENTS', filename: 'a'},
    { id: 1, title: 'Antennas to Heaven', artist: 'GY!BE', filename: 'b'},
    {
      id: 2, title: 'Resurrection',
      artist: 'Brotherhood of Pagans',
      filename: '01 Resurrection'
    },
  ],
  activeIndex: 2
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
