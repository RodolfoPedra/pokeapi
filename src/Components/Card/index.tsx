import React from 'react';
import { specsDetails } from '../../api/controllers/specsDetailsPoke.controller';
import {
  StyledContainer,
  NamePokemon,
  TypePoke,
  LevelPoke,
  ImgPoke,
} from './styled';

export type Props = {
  name: string;
  url?: string;
};

const CardPoke = ({ name, url }: Props) => {
  const [typePoke, setTypePoke] = React.useState(null);
  const [imgPoke, setImgPoke] = React.useState('');
  const [color, setColor] = React.useState('');
  const [fontBlack, setFontBlack] = React.useState(false);

  const pokemonId = url?.split('/')[url.split('/').length - 2];

  React.useEffect(() => {
    const verifyFontBlack = ['yellow', 'white'];
    if (url) {
      (async () => {
        const { types, sprites, color } = await specsDetails(
          `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`,
        );

        setTypePoke(types[0].type.name);
        setImgPoke(sprites.front_default);
        setColor(color);
        const _isFontBlack = verifyFontBlack.includes(color);
        setFontBlack(_isFontBlack);
      })();
    }
  }, [url, pokemonId]);

  return (
    <>
      <StyledContainer>
        <LevelPoke layout="primary">
          <span>{pokemonId}</span>
        </LevelPoke>
        <TypePoke layout="primary" fontBlack={fontBlack} color={color}>
          {typePoke}
        </TypePoke>
        <ImgPoke src={imgPoke} />
        <NamePokemon>{name}</NamePokemon>
      </StyledContainer>
    </>
  );
};

export default CardPoke;
