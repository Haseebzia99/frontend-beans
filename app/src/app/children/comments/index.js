import React from 'react'
import { getComments } from './helpers'
import { getCaptionFromEdges } from '../image/helpers'
import styles from './styles'

export const Comments = (props) => {
  const { data } = props
  return (
    <div style={styles.container}>
      <div style={styles.scroll}>
        {getCaptionFromEdges(data.edge_media_to_caption)}
        {getComments(data.comments.map(comment => {
          return (
            <li>{comment.text}</li>
          )
        }))}
      </div>
    </div>
  )
}
