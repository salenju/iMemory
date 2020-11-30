import React from 'react'
import styled from 'styled-components'
import {} from 'antd'
import _ from 'loadsh'

import { ImgCard } from '../components'
import { MockData } from '../mock'
import { Config } from '../const'

const Home = () => {
  const { HOME } = MockData
  return (
    <Wrapper className="home" bgUrl={HOME.BACKGROUND_IMGS[_.random(0, 5)]}>
      <ImgCard />
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  section {
    /* background: url(${(props) =>
      props.bgUrl
        ? props.bgUrl
        : 'https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_960_720.jpg'})
      no-repeat; */
    background-position: center;
    background-size: cover;
    min-height: 100vh;
    transition: all 0.5s ease;
  }
`

export default Home
