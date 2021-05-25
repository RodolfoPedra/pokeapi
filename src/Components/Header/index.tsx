import React from 'react';
import competi from '../../Assets/svgs/competi.svg';
import pokemon from '../../Assets/svgs/pokemon.svg';
import GridContainer from '../Grids/GridContainer';
import GridItem from '../Grids/GridItem';
import SearchBar from '../SearchBar';
import { Logo, StyledHeader } from './styled';

const Header: React.FC = () => {
  return (
    <>
      <GridContainer>
        <GridItem xs={12}>
          <StyledHeader>
            <Logo src={pokemon} />
            <SearchBar />
          </StyledHeader>
        </GridItem>
      </GridContainer>
    </>
  );
};

export default Header;
