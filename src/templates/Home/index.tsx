import Head from 'next/head';
import {
  GridTwoColumns,
  GridTwoColumnsProps,
} from '../../components/GridTwoColumns';
import { GridContent, GridContentProps } from '../../components/GridContent';
import { GridText, GridTextProps } from '../../components/GridText';
import { GridImage, GridImageProps } from '../../components/GridImage';
import { Base } from '../Base';
import { LogoLinkProps } from '../../components/LogoLink';
import { MenuLinkProps } from '../../components/MenuLink';

export type PageDataProps = {
  menu: LogoLinkProps & { links: MenuLinkProps[] };
  title: string;
  footerHtml: string;
  sections: SectionProps[];
  slug: string;
};

export type SectionProps =
  | GridTwoColumnsProps
  | GridContentProps
  | GridTextProps
  | GridImageProps;

export type HomeProps = {
  data: PageDataProps[];
};

function Home({ data }: HomeProps) {
  const siteName = 'Landing Page';
  const { menu, sections, footerHtml, title } = data[0];
  const { links, text, link, image } = menu;

  return (
    <Base
      links={links}
      footerHtml={footerHtml}
      logoData={{ text, link, image }}
    >
      <Head>
        <title>
          {title} | {siteName}
        </title>
      </Head>
      {sections.map((section, index) => {
        const { component } = section;

        if (component === 'section.section-two-columns') {
          return (
            <GridTwoColumns
              key={`${index}`}
              {...(section as GridTwoColumnsProps)}
            />
          );
        }
        if (component === 'section.section-content') {
          return (
            <GridContent key={`${index}`} {...(section as GridContentProps)} />
          );
        }
        if (component === 'section.section-grid-text') {
          return <GridText key={`${index}`} {...(section as GridTextProps)} />;
        }
        if (component === 'section.section-grid-image') {
          return (
            <GridImage key={`${index}`} {...(section as GridImageProps)} />
          );
        }
      })}
    </Base>
  );
}

export default Home;
