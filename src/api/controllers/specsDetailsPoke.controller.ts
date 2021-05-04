import { get } from '../services/specsDetailsPokes.service';
import { colorPoke } from './colorPoke.controller';

type Pokemon = {
  name: string;
  types: any;
  sprites: any;
  game_indices: any;
  species: {
    url: string;
  };
};

export const specsDetails = async (urlParam: string) => {
  const json = await get<Pokemon>(urlParam);

  const {
    species: { url },
  } = json;

  const color = await colorPoke(url);

  return Object.assign(json, { color });
};
