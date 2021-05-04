import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { ContainerProps } from '@material-ui/core';

export default function ContainerMaterial(props: ContainerProps) {
  const { children } = props;
  return <Container maxWidth="lg">{children}</Container>;
}

ContainerMaterial.propTypes = {
  children: PropTypes.node,
};
