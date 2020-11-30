import React from 'react'
import styled from 'styled-components'

import Config from '../../const/Config'

const { FOOTER_CONFIG } = Config

const Footer = (props) => {
  return <Wrapper className="ime-layout-footer">Footer</Wrapper>
}

const Wrapper = styled('div')`
  width: 100%;
  height: 5rem;
  padding: 10px 20px;
  color: #ffffff;
  background: ${(props) =>
    props.theme && props.theme['@ime-footer-background']};
`

export default Footer
