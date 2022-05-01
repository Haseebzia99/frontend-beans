import React from 'react'
import { getLocation, getUsername, getImage } from './helpers'
import styles from './styles'
import PropTypes from 'prop-types'

export const Header = (props) => {
  const { data } = props
  return (
    <div style={styles.container}>
      <img src={getImage(data)} style={styles.image} />
      <div style={styles.text}>
        <li><strong>{getUsername(data)}</strong></li>
        <li>{getLocation(data)}</li>
      </div>
    </div>
  )
}

Header.propTypes = {
  props: PropTypes.string
}
