import styled, { css, DefaultTheme } from 'styled-components';

type Background = {
  background?: boolean;
};

const activateBackgroundContainer = (theme: DefaultTheme) => css`
  background: ${theme.colors.primaryColor};
  color: ${theme.colors.white};
`;

export const Container = styled.div<Background>`
  ${({ theme, background }) => css`
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    ${background && activateBackgroundContainer(theme)};
    min-height: 100vh;
    display: flex;
    align-items: center;
  `}
`;
