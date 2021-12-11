import {
  mapSectionTwoColumns,
  mapSectionContent,
  mapImageGrid,
  mapSections,
  mapTextGrid,
} from './mapSections';
import pageData from './data.json';

describe('mapSections', () => {
  it('should return a predefined object when there is no data', () => {
    const sectionData = mapSections();
    expect(sectionData).toEqual([]);
  });

  it('should render sections based on data', () => {
    const sectionData = mapSections(pageData[0].sections);
    expect(sectionData[0].component).toBe('section.section-two-columns');
  });

  it('should test section with invalid data', () => {
    const sectionGridElse = mapSections([
      { __component: 'section.section-grid' },
    ]);
    const generalElse = mapSections([{}]);

    expect(sectionGridElse).toEqual([{ __component: 'section.section-grid' }]);
    expect(generalElse).toEqual([{}]);
  });

  it('should map section two columns when there is no data', () => {
    const sectionData = mapSectionTwoColumns();

    expect(sectionData.background).toBe(false);
    expect(sectionData.component).toBe('');
    expect(sectionData.sectionId).toBe('');
    expect(sectionData.text).toBe('');
    expect(sectionData.title).toBe('');
    expect(sectionData.image).toBe('');
  });

  it('should map section two columns when there is data', () => {
    const sectionData = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      _id: '611ae7765e1e55222ccc79e2',
      title: 'January Brings Us Firefox 85',
      description: 'text 123',
      metadata: {
        background: true,
        section_id: 'home',
      },
      image: {
        url: 'a.svg',
      },
    });

    expect(sectionData.background).toBe(true);
    expect(sectionData.component).toBe('section.section-two-columns');
    expect(sectionData.sectionId).toBe('home');
    expect(sectionData.text).toBe('text 123');
    expect(sectionData.title).toBe('January Brings Us Firefox 85');
    expect(sectionData.image).toBe('a.svg');
  });

  it('should map section content when there is no data', () => {
    const sectionData = mapSectionContent();

    expect(sectionData.background).toBe(false);
    expect(sectionData.component).toBe('');
    expect(sectionData.sectionId).toBe('');
    expect(sectionData.html).toBe('');
    expect(sectionData.title).toBe('');
  });

  it('should map section content when there is data', () => {
    const sectionData = mapSectionContent({
      __component: 'section.section-content',
      title: 'test title',
      content: 'test 123',
      metadata: {
        background: false,
        section_id: 'intro',
      },
    });

    expect(sectionData.background).toBe(false);
    expect(sectionData.component).toBe('section.section-content');
    expect(sectionData.sectionId).toBe('intro');
    expect(sectionData.html).toBe('test 123');
    expect(sectionData.title).toBe('test title');
  });

  it('should map section grid text when there is no data', () => {
    const sectionData = mapTextGrid();

    expect(sectionData.background).toBe(false);
    expect(sectionData.component).toBe('section.section-grid-text');
    expect(sectionData.sectionId).toBe('');
    expect(sectionData.description).toBe('');
    expect(sectionData.title).toBe('');
    expect(sectionData.grid).toEqual([]);
  });

  it('should map section grid text when there is data', () => {
    const sectionData = mapTextGrid({
      __component: 'section.section-grid',
      title: 'My Grid',
      description: 'desc',
      text_grid: [
        {
          description: 'test',
          title: 'Teste 1',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        section_id: 'grid-one',
      },
    });

    expect(sectionData.background).toBe(true);
    expect(sectionData.component).toBe('section.section-grid-text');
    expect(sectionData.sectionId).toBe('grid-one');
    expect(sectionData.description).toBe('desc');
    expect(sectionData.title).toBe('My Grid');
    expect(sectionData.grid[0].title).toBe('Teste 1');
    expect(sectionData.grid[0].description).toBe('test');
  });

  it('should map section grid image when there is no data', () => {
    const sectionData = mapImageGrid();

    expect(sectionData.background).toBe(false);
    expect(sectionData.component).toBe('section.section-grid-image');
    expect(sectionData.sectionId).toBe('');
    expect(sectionData.description).toBe('');
    expect(sectionData.title).toBe('');
    expect(sectionData.grid).toEqual([]);
  });

  it('should map section grid image when there is data', () => {
    const sectionData = mapImageGrid({
      title: 'test title',
      description: 'desc',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'alt here',
            url: 'a.svg',
          },
        },
      ],
      metadata: {
        background: false,
        section_id: 'gallery',
      },
    });

    expect(sectionData.background).toBe(false);
    expect(sectionData.component).toBe('section.section-grid-image');
    expect(sectionData.sectionId).toBe('gallery');
    expect(sectionData.description).toBe('desc');
    expect(sectionData.title).toBe('test title');
    expect(sectionData.grid[0].altText).toBe('alt here');
    expect(sectionData.grid[0].image).toBe('a.svg');
  });
});
