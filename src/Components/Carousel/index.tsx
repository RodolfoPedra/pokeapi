import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import { pokesRandom } from '../../api/randomPokemons.js';
import { useAppSelector, useAppDispatch } from '../../store/hooks';
import CardPoke, { Props as PropsCard } from '../Card';
import { StyledCarousel } from './styled';

const responsive = {
  0: { items: 0 },
  568: { items: 2 },
  1024: { items: 2 },
  1284: { items: 4 },
  1500: { items: 5 },
};

const RandomPokesCarousel = () => {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(pokesRandom(40));
  }, [dispatch]);

  const [pokemons] = useAppSelector((state) => [
    state.randomPokes.randomPokes.data?.results,
  ]);

  const items =
    pokemons &&
    pokemons.map((item: PropsCard) => (
      <CardPoke name={item.name} url={item.url} />
    ));

  return (
    <>
      <StyledCarousel />
      <AliceCarousel mouseTracking items={items} responsive={responsive} />
    </>
  );
};

export default RandomPokesCarousel;
