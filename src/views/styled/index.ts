import styled, { createGlobalStyle } from 'styled-components';
import colors from '../../Assets/colors';

export const ContainerPagination = styled.div`
  margin: 0 0 0 auto;
  margin-top: 37px;
`;

export const StyledPagination = createGlobalStyle`

  .MuiPagination-ul li .MuiButtonBase-root {
    border-radius: 10px;
    border: 2px solid #100b16;
    background: ${colors['purple-2']};
    color: #fff;
    width: 38px;
    height: 40px;
    font-size: 22px;    
  }

  .MuiPagination-ul li .MuiButtonBase-root[aria-current='true'] {
    background: ${colors['bg-info-level']};
  }

  .MuiPagination-ul li:first-child .MuiButtonBase-root {
    background: ${colors['purple-3']}
  }

  .MuiPagination-ul li:last-child .MuiButtonBase-root {
    background: ${colors['purple-3']}
  }
`;
