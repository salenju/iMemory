import React from 'react'
import styled from 'styled-components'

import Config from '../../const/Config'

const { HEADER_CONFIG } = Config

const Header = (props) => {
  return (
    <Wrapper className="ime-layout-header">
      <a
        className="ime-layout-header-logo flex"
        href={HEADER_CONFIG.title.link}
      >
        <span>{HEADER_CONFIG.title.logo || ''}</span>
        <span>{HEADER_CONFIG.title.value || ''}</span>
      </a>
      <ul className="ime-layout-header-menu flex">
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
  background: ${(props) =>
    props.theme && props.theme['@ime-header-background']};
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

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .ime-layout-header-logo {
    > span {
      margin: 0 6px;
    }
  }
  .ime-layout-header-menu {
    > li {
      padding: 0 10px;
    }
  }
`

export default Header
