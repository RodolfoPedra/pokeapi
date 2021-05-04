import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { GridProps } from '@material-ui/core';

export default function GridItem(props: GridProps) {
  const { children, ...rest } = props;
  return (
    <Grid item {...rest}>
      {children}
    </Grid>
  );
}

GridItem.propTypes = {
  children: PropTypes.node,
};
