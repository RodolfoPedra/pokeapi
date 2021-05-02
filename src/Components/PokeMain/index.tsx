import React, { ReactNode, Children } from 'react';
import ContainerMaterial from '../Grids/Container';
import { StyledContainer } from './styled';

interface Props {
  children: ReactNode;
}

const PokeMain: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <StyledContainer>
        <ContainerMaterial maxWidth="lg">
          <>
            {Children.map(children, (item: any, index: number) => (
              <>{item}</>
            ))}
          </>
        </ContainerMaterial>
      </StyledContainer>
    </>
  );
};

export default PokeMain;
