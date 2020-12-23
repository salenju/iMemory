import React from 'react'
import { Layout } from 'antd'
import styled, { ThemeProvider } from 'styled-components'

import Header from './Header'
import Footer from './Footer'
import { Config } from '../../const'

const { Content } = Layout

const LayoutWrapper = (props) => {
  return (
    <Wrapper className="ime-layout-wrapper">
      <ThemeProvider theme={Config.THEME_CONFIG}>
        <header>
          <Header />
        </header>
        <Content className="ime-layout-content"> {props.children}</Content>
        <footer>
          <Footer />
        </footer>
      </ThemeProvider>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .ime-layout-content {
    margin: 90px 0 0;
    min-height: calc(100vh - 100px);
  }
`

export default LayoutWrapper
