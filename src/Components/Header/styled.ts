import styled from 'styled-components';
import colors from '../../Assets/colors';

export const StyledHeader = styled.header`
  background: ${colors['purple-1']};
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 0 32px;
`;

export const Logo = styled.img`
  &:nth-of-type(1) {
    width: 151px;
    height: 55px;
    margin-right: 20px;
  }

  &:nth-of-type(2) {
    width: 151.99px;
    height: 37.24px;
  }
`;
