import React, { Children } from 'react';
import ContainerMaterial from '../Grids/Container';
import { InfoUpLine, InfoDownLine, StyledContainer } from './styled';
import { WithChildren } from '../helpers/WithChildren';

type Props = WithChildren<{}>;

const PokeMain = ({ children }: Props) => {
  return (
    <>
      <ContainerMaterial maxWidth="lg">
        <StyledContainer>
          <>
            {Children.map(children, (item: any, index: number) => (
              <>
                {index === 0 && <InfoUpLine>{item}</InfoUpLine>}
                {index > 0 && <InfoDownLine>{item}</InfoDownLine>}
              </>
            ))}
          </>
        </StyledContainer>
      </ContainerMaterial>
    </>
  );
};

export default PokeMain;
