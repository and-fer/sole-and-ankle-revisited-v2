import React from 'react'
import styled from 'styled-components'
import { Dialog } from 'radix-ui'

import UnstyledButton from '../UnstyledButton'
import Icon from '../Icon'
import VisuallyHidden from '../VisuallyHidden'

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null
  }

  return (
    <>
      <ModalOverlay />
      <ModalContent>
        <Dialog.Close asChild>
          <CloseButton>
            <Icon id='close' size={28} onClick={onDismiss} />
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </CloseButton>
        </Dialog.Close>
        <Nav>
          <a href='/sale'>Sale</a>
          <a href='/new'>New&nbsp;Releases</a>
          <a href='/men'>Men</a>
          <a href='/women'>Women</a>
          <a href='/kids'>Kids</a>
          <a href='/collections'>Collections</a>
        </Nav>
        <Footer>
          <a href='/terms'>Terms and Conditions</a>
          <a href='/privacy'>Privacy Policy</a>
          <a href='/contact'>Contact Us</a>
        </Footer>
      </ModalContent>
    </>
  )
}

const CloseButton = styled(UnstyledButton)`
  align-self: flex-end;
`

const ModalOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(96, 100, 108, 0.8);
  backdrop-filter: blur(4px);
  z-index: 9998;
`

const ModalContent = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 32px;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  height: 100%;
  background: white;
  z-index: 9999;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 32px;
  margin-bottom: 32px;

  a {
    text-decoration: none;
    color: black;
    font-size: 1.2rem;
  }
`

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;

  a {
    text-decoration: none;
    color: gray;
    font-size: 0.9rem;
  }
`

export default MobileMenu
