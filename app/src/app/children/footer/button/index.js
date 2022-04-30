import React, {useState} from 'react'
import LikedIcon from './children/liked_icon'
import UnlikedIcon from './children/liked_icon'


export const Button = () => {
  const [click, setClick ] = useState(false)

  return (
    <button onClick={!setClick}> 
      {click ? <LikedIcon/>  : <UnlikedIcon/>}
    </button>
  )
}

