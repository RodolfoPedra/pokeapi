import { get } from '../services/specsDetailsPokes.service';

type Props = {
  name: string;
  url?: string;
};

export const typesPoke = async (url: string) => {
  const json = await get<Props>(url);

  return json;
};
