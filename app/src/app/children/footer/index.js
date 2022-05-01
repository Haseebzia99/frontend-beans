import React, { useState } from 'react'
import styles from './styles'
import { Button } from './button'

export const Footer = (props) => {
  return (
    <div style={styles.container}>
      <div>
        <li><strong>6,244 likes</strong></li>
        <li>4 days ago</li>
      </div>
      <Button />
    </div>
  )
}
