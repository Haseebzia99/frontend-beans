import React from 'react'
import PropTypes from 'prop-types'

import { getCaptionFromEdges } from '../image/helpers'

import { getUser, getProfileUser } from './helpers'
import styles from './styles'

export const Comments = (props) => {
  const { data } = props

  return (
    <div style={styles.container}>
      <div style={styles.scroll}>
        <li style={styles.userComment}>
          <strong style={styles.userName}>{getProfileUser(data)}</strong>
          {getCaptionFromEdges(data.edge_media_to_caption)}
        </li>
        {getUser(data.edge_media_to_comment)}
      </div>
    </div>
  )
}

Comments.propTypes = {
  props: PropTypes.object
}
