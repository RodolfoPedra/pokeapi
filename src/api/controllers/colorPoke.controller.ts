import { get } from '../services/specsDetailsPokes.service';

type Props = {
  color: {
    name: string;
  };
};

export const colorPoke = async (url: string) => {
  const {
    color: { name },
  } = await get<Props>(url);

  return name;
};
