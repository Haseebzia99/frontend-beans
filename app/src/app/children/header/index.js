import React from 'react';
import PropTypes from 'prop-types';

import { getLocation, getUsername, getImage } from './helpers';

import styles from './styles';

export const Header = (props) => {
  const { data } = props
  return (
    <div data-testid="header" style={styles.container}>
      <img src={getImage(data)} style={styles.image} alt={getUsername(data)} />
      <div style={styles.text}>
        <li key={data.owner.id}><strong>{getUsername(data)}</strong></li>
        <li key={data.location.is} style={styles.location}>{getLocation(data)}</li>
      </div>
    </div>
  )
}

Header.propTypes = {
  props: PropTypes.object
}
