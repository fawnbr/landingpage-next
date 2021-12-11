import { GetStaticPaths, GetStaticProps } from 'next';
import { loadPages } from '../api/loadPages';
import { HomeProps } from '../templates/Home';

export default function DynamicPage() {
  return <h1>Hello world</h1>;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // const paths = (await loadPages()).map((page) => {
  //   return {
  //     params: { slug: page.slug },
  //   };
  // });

  return {
    paths: [
      {
        params: { slug: 'teste' },
      },
    ],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<HomeProps> = async (context) => {
  let data = null;
  try {
    data = await loadPages(context.params?.slug as string);
  } catch (e) {
    data = null;
  }
  if (!data) {
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
