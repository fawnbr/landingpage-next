import { renderTheme } from '../../styles/render-theme';
// import { screen } from '@testing-library/react';
import { GridTwoColumns } from '.';
import mock from './mock';

describe('<GridTwoColumns />', () => {
  it('should render grid with two columns', () => {
    const { container } = renderTheme(<GridTwoColumns {...mock} />);
    expect(container).toMatchSnapshot();
  });
});
