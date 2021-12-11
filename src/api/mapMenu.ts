/* eslint-disable @typescript-eslint/no-explicit-any */
import { MenuLinkProps } from '../components/MenuLink';
import { PageDataProps } from '../templates/Home';

export const mapMenu = (menu = {} as any): PageDataProps['menu'] => {
  const {
    open_in_new_tab: newTab = false,
    text = '',
    logo_link: link = '',
    menu_links: links = [],
  } = menu;
  const image = menu.image && menu.image.url ? menu.image.url : '';
  return { newTab, text, link, image, links: mapMenuLinks(links) };
};

export const mapMenuLinks = (links = [] as any[]): MenuLinkProps[] => {
  return links.map((item: any): MenuLinkProps => {
    const {
      new_tab: newTab = false,
      link_text: children = '',
      url: link = '',
    } = item;
    return { newTab, children, link };
  });
};
