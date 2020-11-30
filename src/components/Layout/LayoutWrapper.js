import React from 'react'
import { Layout } from 'antd'
import styled from 'styled-components'

import Header from './Header'
import Footer from './Footer'

const { Content } = Layout

const LayoutWrapper = (props) => {
  return (
    <Wrapper className="ime-layout-wrapper">
      <header>
        <Header />
      </header>
      <Content className="ime-layout-content"> {props.children}</Content>
      <footer>
        <Footer />
      </footer>
    </Wrapper>
  )
}

const Wrapper = styled('div')``

export default LayoutWrapper
