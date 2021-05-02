import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { GridProps } from '@material-ui/core';

export default function GridContainer(props: GridProps) {
  const { children, ...rest } = props;
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  children: PropTypes.node,
};
