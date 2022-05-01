import React from 'react'
import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/liked_icon'

export const Button = (onClick) => {
  return (
    <button onClick={onClick} />
  )
}
