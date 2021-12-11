import { mapData } from './mapData';

export const loadPages = async (slug = '') => {
  const cleanSlug = slug ? `?slug=${slug.replace(/[^a-z0-9-_]/gi, '')}` : '';
  const url = `/pages/${cleanSlug}`;

  const req = await fetch('urlBackendHere' + url);
  const page = await req.json();
  const pageData = mapData(page.data);

  return pageData;
};
