/* eslint-disable @typescript-eslint/no-explicit-any */
import { PageDataProps } from '../templates/Home';
import { mapMenu } from './mapMenu';
import { mapSections } from './mapSections';

export const mapData = (pagesData = [{}] as any): PageDataProps[] => {
  return pagesData.map((data: any): PageDataProps => {
    const {
      footer_text: footerHtml = '',
      slug = '',
      title = '',
      sections = [],
      menu = {},
    } = data;

    return {
      footerHtml,
      slug,
      title,
      sections: mapSections(sections),
      menu: mapMenu(menu),
    };
  });
};
