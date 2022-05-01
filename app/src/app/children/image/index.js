import React from 'react';
import PropTypes from 'prop-types';

import { getCaptionFromEdges } from './helpers';

import styles from './styles';

export const Image = (props) => {
  const { data } = props
  return (
    <img
      data-testid="image"
      src={data.display_url}
      style={styles}
      alt={getCaptionFromEdges(data.edge_media_to_caption)}
    />
  )
}

Image.propTypes = {
  props: PropTypes.string
}
