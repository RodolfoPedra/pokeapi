import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';

export default function StyledContainer(props) {
  const { children, ...rest } = props;
  return <Container maxWidth="lg">{children}</Container>;
}

StyledContainer.propTypes = {
  children: PropTypes.node,
};
