import linksMock from '../../components/NavLinks/mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';
import { BaseProps } from '.';

export const mockBase = {
  children: (
    <>
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
      <GridText {...gridMock} background />
      <GridText {...gridMock} />
    </>
  ),
  links: linksMock,
  logoData: {
    text: 'Logo',
    link: '#',
  },
  footerHtml: '<p>Teste</p>',
} as BaseProps;
