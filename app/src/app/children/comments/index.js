import React from 'react'
import { getUser, getProfileUser } from './helpers'
import { getCaptionFromEdges } from '../image/helpers'
import styles from './styles'
import PropTypes from 'prop-types';

export const Comments = (props) => {
  const { data } = props
  return (
    <div style={styles.container}>
      <div style={styles.scroll}>
        <li><strong>{getProfileUser(data)}</strong>{getCaptionFromEdges(data.edge_media_to_caption)}</li>
        {getUser(data.edge_media_to_comment)}
      </div>
    </div>
  )
}

Comments.propTypes = {
  props: PropTypes.string,
};
