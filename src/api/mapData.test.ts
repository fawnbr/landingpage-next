import { mapData } from './mapData';

describe('mapData', () => {
  it('should map data even when the map is empty', () => {
    const pagesData = mapData()[0];
    expect(pagesData.footerHtml).toBe('');
    expect(pagesData.slug).toBe('');
    expect(pagesData.title).toBe('');
  });
  it('should map data when there is data ', () => {
    const pagesData = mapData([
      { footer_text: '<p>Test</p>', slug: 'slug', title: 'title' },
    ])[0];
    expect(pagesData.footerHtml).toBe('<p>Test</p>');
    expect(pagesData.slug).toBe('slug');
    expect(pagesData.title).toBe('title');
  });
});
