import React from 'react'
import ReactDom from 'react-dom'

import Player from './components/Player'

import store from './store'

require('./styles/styles.sass')

var itemClickHandler = (index) => {
  store.dispatch({ type: 'SELECT_ITEM', payload: index })
}

var App = React.createClass({
  unsubscribe: null,
  componentDidMount() {
    let component = this
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))
  },
  render() {
    return <div><Player itemClick={itemClickHandler}/></div>
  }
})

ReactDom.render(<App />, document.getElementById('mainContent'))
