import styled, { css } from 'styled-components';
import { Container as TextComponent } from '../../components/TextComponent/styles';
import { Container as SectionContainer } from '../../components/SectionContainer/styles';

export const Container = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    text-align: center;
    border-top: 0.1rem solid ${theme.colors.mediumGray};
    width: 100%;

    a {
      color: inherit;
      text-decoration: none;
    }

    & ${TextComponent} {
      font-size: ${theme.font.sizes.small};
    }

    & ${SectionContainer} {
      padding-top: 0;
      padding-bottom: 0.4rem;
    }
  `}
`;
