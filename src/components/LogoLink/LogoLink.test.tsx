import { renderTheme } from '../../styles/render-theme';
import { screen } from '@testing-library/react';
import { LogoLink } from '.';

describe('<LogoLink />', () => {
  it('should render logo text', () => {
    renderTheme(<LogoLink link="#target" text="Test" />);
    const heading = screen.getByRole('heading', { name: 'Test' });
    expect(heading.firstChild).toHaveAttribute('href', '#target');
  });
  it('should render logo image', () => {
    renderTheme(<LogoLink link="#target" text="Test" image="image.jpg" />);
    const image = screen.getByRole('img', { name: 'Test' });
    expect(image).toHaveAttribute('src', 'image.jpg');
  });
  it('should match snapshot', () => {
    const { container } = renderTheme(
      <LogoLink link="#target" text="Test" image="image.jpg" />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
