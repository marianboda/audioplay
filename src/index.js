import React from 'react'
import ReactDom from 'react-dom'

import Player from './components/Player'

require('./styles/styles.sass')

var itemClickHandler = (event) => {
  console.log('item clicked', event)
}

var App = (props) => {
  return <div><Player itemClick={itemClickHandler}/></div>
}

ReactDom.render(<App />, document.getElementById('mainContent'))
