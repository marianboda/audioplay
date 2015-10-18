import React from 'react'
import ReactDom from 'react-dom'

import Player from './components/Player'

var App = (props) => {
  return <div><Player /></div>
}

ReactDom.render(<App />, document.getElementById('mainContent'))
