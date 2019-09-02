import React from 'react';
import styled from 'styled-components'

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="container">
        <Text>Made with <span style={{color: `red`}}>❤</span> by Nigerian Developers</Text>
      </div>
    </FooterWrapper>
  )
}

export default Footer

const FooterWrapper = styled.footer`
  background: #22262B;
  padding: 40px 0;
  
  @media (max-width: 570px) {
    padding: 20px 0;
  }
`

const Text = styled.p`
  color: #F9FAFB;
  margin: 0;
  font-size: 15.4px;
  text-align: center;
  color: white;
  
  @media (max-width: 570px) {
    font-size: 14px;
  }
`
