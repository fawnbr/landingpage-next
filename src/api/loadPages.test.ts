import { loadPages } from './loadPages';
import * as mapDataModule from './mapData';

jest.mock('./mapData', () => {
  return {
    mapData: jest.fn().mockResolvedValue({ mapped: 1 }),
  };
});

let mockFetch = null;
let mockJson = null;

describe('loadPages', () => {
  beforeEach(() => {
    global.fetch = jest.fn();
    mockJson = jest.fn().mockResolvedValue(Promise.resolve({ toJson: 1 }));

    mockFetch = global.fetch;
    mockFetch.mockResolvedValue({
      json: mockJson,
    });

    jest.clearAllMocks();
  });

  it('should call api and mapData with correct values', async () => {
    const result = await loadPages();
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith('http://localhost:1337/pages/');
    expect(mockJson).toHaveBeenCalledTimes(1);
    expect(mapDataModule.mapData).toHaveBeenCalledTimes(1);
    // expect(mapDataModule.mapData).toHaveBeenCalledWith({ toJson: 1 });
    expect(result).toEqual({ mapped: 1 });
  });
  it('should call api with correct slug', async () => {
    const result = await loadPages('a test');
    expect(mockFetch).toHaveBeenCalledTimes(1);
    expect(mockFetch).toHaveBeenCalledWith(
      'http://localhost:1337/pages/?slug=atest',
    );
    expect(result).toEqual({ mapped: 1 });
  });
});
