import styled, { createGlobalStyle } from 'styled-components';
import colors from '../../Assets/colors';

export const ContainerPagination = styled.div`
  margin: 0 0 0 auto;
  margin-top: 37px;
`;

export const StyledCarousel = createGlobalStyle`

  .alice-carousel__dots .alice-carousel__dots-item{
    border: 2px solid #100b16;
    width: 24px;
    height: 24px;
    background: ${colors['purple-2']};
  }

  .alice-carousel__dots .alice-carousel__dots-item.__active{
    background: ${colors['bg-info-level']} !important;
  }
`;
