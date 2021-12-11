import { useState } from 'react';
import * as Styled from './styles';
import { SectionContainer } from '../SectionContainer';
import { LogoLink, LogoLinkProps } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { MenuLinkProps } from '../MenuLink';

export type MenuProps = {
  links?: MenuLinkProps[];
  logoData: LogoLinkProps;
};

export const Menu = ({ links = [], logoData }: MenuProps) => {
  const [visibleMenu, setVisibleMenu] = useState(false);

  return (
    <>
      <Styled.Button
        isVisible={visibleMenu}
        onClick={() => setVisibleMenu(true)}
        aria-label="Open/Close menu"
      >
        {visibleMenu ? (
          <CloseIcon aria-label="Close menu" />
        ) : (
          <MenuIcon aria-label="Open menu" />
        )}
      </Styled.Button>
      <Styled.Container
        isVisible={visibleMenu}
        onClick={() => setVisibleMenu(false)}
      >
        <SectionContainer>
          <Styled.MenuContainer>
            <LogoLink {...logoData} />
            <NavLinks links={links} />
          </Styled.MenuContainer>
        </SectionContainer>
      </Styled.Container>
    </>
  );
};
