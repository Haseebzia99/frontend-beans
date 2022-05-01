import React, { useState } from 'react'

import LikedIcon from '../footer/button/children/liked_icon'
import UnlikedIcon from '../footer/button/children/unliked_icon'

import styles from './styles'

export const Footer = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [count, setCount] = useState(6244);

  const iconHandler = () => {
    setIsClicked((isClicked) => !isClicked)
    setCount(count + 1)

    if (isClicked) {
      setCount(count - 1);
    }
  }

  return (
    <div style={styles.container}>
      <div>
        <li style={styles.likes}>{count} likes</li>
        <li style={styles.days}>4 days ago</li>
      </div>
      <button style={styles.button} onClick={iconHandler}>
        { isClicked ? <LikedIcon /> : <UnlikedIcon/> }
      </button>
    </div>
  )
}
