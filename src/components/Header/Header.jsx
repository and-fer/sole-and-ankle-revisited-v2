import React from 'react'
import styled from 'styled-components'
import { Dialog } from 'radix-ui'

import { QUERIES } from '../../constants'
import Logo from '../Logo'
import SuperHeader from '../SuperHeader'
import MobileMenu from '../MobileMenu'

import SearchInput from '../SearchInput'
import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false)

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href='/sale'>Sale</NavLink>
          <NavLink href='/new'>New&nbsp;Releases</NavLink>
          <NavLink href='/men'>Men</NavLink>
          <NavLink href='/women'>Women</NavLink>
          <NavLink href='/kids'>Kids</NavLink>
          <NavLink href='/collections'>Collections</NavLink>
        </Nav>
        <Side />

        <MobileIcons>
          <UnstyledButton>
            <Icon id='shopping-bag' strokeWidth={2} size={26} />
          </UnstyledButton>
          <UnstyledButton>
            <Icon id='search' strokeWidth={2} size={26} />
          </UnstyledButton>

          <Dialog.Root
            modal={true}
            open={showMobileMenu}
            onOpenChange={setShowMobileMenu}
          >
            <Dialog.Trigger asChild>
              <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                <Icon id='menu' strokeWidth={2} size={26} />
              </UnstyledButton>
            </Dialog.Trigger>
            <MobileMenu
              isOpen={showMobileMenu}
              onDismiss={() => setShowMobileMenu(false)}
            />
          </Dialog.Root>
        </MobileIcons>
      </MainHeader>
    </header>
  )
}

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid var(--gray-300);
  @media (${QUERIES.phoneAndSmaller}) {
    align-items: center;
  }
`

const Nav = styled.nav`
  display: flex;
  gap: clamp(1rem, 3.6vw + -0.25rem, 5rem);
  margin: 0px 48px;
  overflow-x: auto;
  white-space: nowrap;

  @media (${QUERIES.phoneAndSmaller}) {
    display: none;
  }
`

const Side = styled.div`
  flex: 1;
`

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--secondary);
  }
`

const MobileIcons = styled.div`
  height: 100%;
  display: none;
  gap: 18px;

  @media (${QUERIES.phoneAndSmaller}) {
    display: flex;
    align-items: center;
  }
`

export default Header
