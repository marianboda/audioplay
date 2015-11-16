import React from 'react'
import store from '../store'

export default function Player(props) {
  let items = store.getState().get('tracks').map((item) => {
    let classes = store.getState().get('activeIndex') == item.get('id') ? 'playlist-item selected' : 'playlist-item'
    return <li onClick={() => props.itemClick(item.get('id'))} className={classes}>{item.get('artist')} - {item.get('title')}</li>
  })
  const activeIndex = store.getState().get('activeIndex')
  return (
    <div className="player">
    <h2>{store.getState().getIn(['tracks', activeIndex, 'title'])}</h2>
    <audio controls>
      <source src={'assets/' + store.getState().getIn(['tracks', activeIndex, 'filename' ]) + '.mp3'} type="audio/mpeg" />
    </audio>
    <ul>
      {items}
    </ul>
    </div>
  )
}
