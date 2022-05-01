import React, { useState } from 'react';

import { LikedIcon } from '../footer/button/children/liked_icon';
import { UnLikedIcon } from './button/children/unLiked_icon';

import styles from './styles';

export const Footer = () => {
  const [isClicked, setIsClicked] = useState(false)
  const [count, setCount] = useState(6244)

  const iconHandler = () => {
    setIsClicked((isClicked) => !isClicked)
    setCount(count + 1)

    if (isClicked) {
      setCount(count - 1)
    }
  }

  return (
    <div style={styles.container}>
      <div>
        <li key="likes" style={styles.likes}>{count} likes</li>
        <li key="days" style={styles.days}>4 days ago</li>
      </div>
      <button style={styles.button} onClick={iconHandler}>
        {isClicked ? <LikedIcon /> : <UnLikedIcon />}
      </button>
    </div>
  )
}
