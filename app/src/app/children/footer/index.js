import React from 'react'
import styles from './styles'
import { Button } from './button'
import { getLikes } from './helpers'


export const Footer = (props) => {
  const {data} = props
  return (
    <div>
      <div>
        <h1>{getLikes(data)} likes</h1>
        4 days agp
      </div>
      <Button />
    </div>
  )
}
