import React from 'react'
import store from '../store'

export default function Player(props) {
  let items = store.getState().get('tracks').map((item) => {
    return <li>{item.get('artist')} - {item.get('title')}</li>
  })
  return (
    <div className="player">
    <h2>{store.getState().get('tracks').get(store.getState().get('activeIndex')).get('title')}</h2>
    <audio controls>
      <source src="assets/01 Ascuns.mp3" type="audio/mpeg" />
    </audio>
    <ul>
      {items}
    </ul>
    </div>
  )
}
