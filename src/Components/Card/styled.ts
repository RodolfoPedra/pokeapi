import styled from 'styled-components';
import colors from '../../Assets/colors';

type PropsTypeLevel = {
  fontBlack?: boolean;
  layout?: 'primary' | 'secondary';
};

export const StyledContainer = styled.div`
  width: 224px;
  height: 203px;
  background: ${colors['purple-3']};
  border: 2px solid #000;
  border-radius: 5px;
  position: relative;
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NamePokemon = styled.p`
  width: 145px;
  height: 55px;
  background: ${colors['purple-2']};
  position: absolute;
  bottom: -26px;
  right: 37px;
  border-radius: 16px;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

export const TypePoke = styled.span<PropsTypeLevel>`
  height: 30px;
  padding: 0 16px;
  background-color: ${({ color }) => (color ? color : colors['purple-2'])};
  position: absolute;
  top: ${({ layout }) => (layout === 'primary' ? '-15px' : '154px')};
  right: ${({ layout }) => layout === 'primary' && '18px'};
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.fontBlack ? '#000' : '#fff')};
  z-index: 1;
`;

export const LevelPoke = styled.div<PropsTypeLevel>`
  width: 44.69px;
  height: 46.35px;
  background: ${colors['bg-info-level']};
  position: absolute;
  top: ${({ layout }) => (layout === 'primary' ? '-12px' : '-23px')};
  left: ${({ layout }) => layout === 'primary' && '-23px'};
  border-radius: 16px;
  border: 2px solid #000;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  transform: rotate(45deg);

  span {
    transform: rotate(-45deg);
  }
`;

export const ImgPoke = styled.img`
  width: 180px;
  height: 180px;
`;
