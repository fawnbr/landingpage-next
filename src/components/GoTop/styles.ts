import styled, { css } from 'styled-components';

export const Container = styled.a`
  ${({ theme }) => css`
    position: fixed;
    z-index: 5;
    background: ${theme.colors.white};
    color: ${theme.colors.primaryColor};
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    bottom: 2rem;
    right: 2rem;
    opacity: 0.7;
    border: 1px solid ${theme.colors.primaryColor};
    border-radius: 50%;
  `}
`;
