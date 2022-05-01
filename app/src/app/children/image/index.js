import React from 'react'
import styles from './styles'
import { getCaptionFromEdges } from './helpers'
import PropTypes from 'prop-types'

export const Image = (props) => {
  const { data } = props
  return (
    <img
      src={data.display_url}
      style={styles}
      alt={getCaptionFromEdges(data.edge_media_to_caption)}
    />
  )
}

Image.propTypes = {
  props: PropTypes.string
}
