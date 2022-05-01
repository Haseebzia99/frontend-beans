/* global it */
import React from 'react';
import App from '../index.js';
import data from '../../data.json';

it('renders without crashing', () => {
  render(<App data={data} />)
})
