import React from 'react'
import { getLocation, getUsername, getImage} from './helpers'
import styles from './styles'

export const Header = (props) => {
  const {data} = props
  return (
    <div style={styles.container}>
      <img src={getImage(data)} style={styles.image} />
      <div style={styles.text}>
        <h5>{getUsername(data)}</h5>
        <h5>{getLocation(data)}</h5>
      </div>
    </div>
  )
}
