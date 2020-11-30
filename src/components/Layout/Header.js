import React from 'react'
import styled from 'styled-components'

import Config from '../../const/Config'

const { HEADER_CONFIG } = Config

const Header = (props) => {
  return (
    <Wrapper className="ime-layout-header">
      <div className="ime-layout-header-logo">
        <a href={HEADER_CONFIG.title.link}>
          {HEADER_CONFIG.title.logo || ''}
          {HEADER_CONFIG.title.value || ''}
        </a>
      </div>
      <ul className="ime-layout-header-menu">
        {HEADER_CONFIG.menuItems &&
          HEADER_CONFIG.menuItems.map((item) => (
            <li key={item.value}>
              <a href={item.link}>{item.value}</a>
            </li>
          ))}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 5rem;
  background: #141414;
  padding: 10px 20px;

  a {
    text-decoration-color: #ff8a00;
    font-weight: 700;
    color: #ffffff;
  }
  a:hover {
    background: linear-gradient(90deg, #ff8a00, #e52e71);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .ime-layout-header-menu {
      display: flex;
      justify-content: space-around;
      > li {
          padding: 0 10px;
      }

  }
`

export default Header
