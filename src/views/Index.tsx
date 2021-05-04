import React from 'react';
import GridContainer from '../Components/Grids/GridContainer';
import GridItem from '../Components/Grids/GridItem';
import PokeMain from '../Components/PokeMain';
import CardPoke, { Props as PropsCard } from '../Components/Card';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { listPokes } from '../api/pokemonInit.js';
import AliceCss from '../Assets/jss/alice-carousel';
import Pagination from '@material-ui/lab/Pagination';
import RandomPokesCarousel from '../Components/Carousel';
import { StyledPagination, ContainerPagination } from './styled';

const InitialPage = () => {
  const [pokeCard, setPokeCard] = React.useState<PropsCard[]>([]);
  const [pagination, setPagination] = React.useState(0);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(listPokes(pagination));
  }, [pagination, dispatch]);

  const [pokemons, poke, searchPoke] = useAppSelector((state) => [
    state.pokes.pokesUrl.data?.results,
    state.pokes.pokeFilter?.data,
    state.SearchBar.namePokemon.filterValue,
  ]);

  React.useEffect(() => {
    setPokeCard(pokemons);
  }, [pokemons]);

  return (
    <>
      <AliceCss />
      <StyledPagination />
      <PokeMain>
        <h1>Initial Page</h1>
        <GridContainer>
          {pokeCard &&
            pokeCard.map((item: PropsCard) => (
              <GridItem xs={12} md={6} lg={4} key={item.name}>
                <CardPoke name={item.name} url={item.url && item.url} />
              </GridItem>
            ))}
          <ContainerPagination>
            <Pagination
              count={50}
              variant="outlined"
              shape="rounded"
              onChange={(event: any, page: number) =>
                setPagination(page * 6 - 6)
              }
            />
          </ContainerPagination>
        </GridContainer>
      </PokeMain>
      <RandomPokesCarousel />
    </>
  );
};

export default InitialPage;
