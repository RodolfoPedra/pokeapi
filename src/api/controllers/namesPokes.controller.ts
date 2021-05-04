import { get } from '../services/specsDetailsPokes.service';

type Props = {
  results: [];
};

export const namesPokes = async (url: string) => {
  const { results } = await get<Props>(url);

  return results;
};
