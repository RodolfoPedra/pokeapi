import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';

const styles = {
  grid: {},
};

const useStyles = makeStyles(styles);

export default function GridItem(props) {
  const classes = useStyles();
  const { children, heigth, ...rest } = props;
  return (
    <GridStyled item _heigth={heigth} {...rest}>
      {children}
    </GridStyled>
  );
}

GridItem.propTypes = {
  children: PropTypes.node,
};

const GridStyled = styled(Grid)`
  height: ${({ _heigth }) => (_heigth ? `${_heigth}px` : 'fit-content')};
`;
