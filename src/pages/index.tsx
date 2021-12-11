import { GetStaticProps } from 'next/types';
import { mapData } from '../api/mapData';
import homepage from '../api/data.json';
import Home, { HomeProps } from '../templates/Home';

export default function Index({ data }: HomeProps) {
  return <Home data={data} />;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  let data = null;
  try {
    // data = await loadPages('home');
    data = mapData(homepage);
  } catch (e) {
    //TODO
  }
  if (!data || !data.length) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      data,
    },
  };
};
