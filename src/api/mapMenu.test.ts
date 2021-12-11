import { mapMenu, mapMenuLinks } from './mapMenu';

describe('mapMenu', () => {
  it('should return a predefined object when there is no data', () => {
    const menu = mapMenu();
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('');
    expect(menu.image).toBe('');
    expect(menu.link).toBe('');
  });

  it('should map menu to match keys and values required', () => {
    const menu = mapMenu({
      new_tab: false,
      text: 'Landing Page',
      logo_link: '#home',
      menu_links: [
        {
          new_tab: false,
          link_text: 'pricing',
          url: '#pricing',
        },
        {
          new_tab: false,
          link_text: 'contact',
          url: '#contact',
        },
      ],
      image: {
        url: 'a.svg',
      },
    });
    expect(menu.newTab).toBe(false);
    expect(menu.text).toBe('Landing Page');
    expect(menu.image).toBe('a.svg');
    expect(menu.link).toBe('#home');
    expect(menu.links[0].newTab).toBe(false);
    expect(menu.links[0].children).toBe('pricing');
    expect(menu.links[0].link).toBe('#pricing');
  });

  it('should return an empty array if there are no links', () => {
    const menuLinks = mapMenuLinks();
    expect(menuLinks).toEqual([]);
  });

  it('should map links if there are links', () => {
    const menuLinks = mapMenuLinks([
      {
        new_tab: false,
        link_text: 'pricing',
        url: '#pricing',
      },
      {},
    ]);
    expect(menuLinks[0].newTab).toBe(false);
    expect(menuLinks[0].children).toBe('pricing');
    expect(menuLinks[0].link).toBe('#pricing');
  });
});
