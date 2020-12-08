import React from 'react'
import styled from 'styled-components'

import { ImgCard } from '../components'
import { MockUtil } from '../utils'

const Home = () => {
  const _imgList1 = MockUtil.ramdomImgs({ width: 434, length: 15 })
  const _imgList2 = MockUtil.ramdomImgs({ width: 434, length: 15 })
  const _imgList3 = MockUtil.ramdomImgs({ width: 434, length: 15 })
  return (
    <Wrapper className="ime-home">
      <div className="ime-photos">
        <div className="ime-photos-column">
          {_imgList1.map((item, index) => (
            <ImgCard imgData={item} key={index} />
          ))}
        </div>
        <div className="ime-photos-column">
          {_imgList2.map((item, index) => (
            <ImgCard imgData={item} key={index} />
          ))}
        </div>
        <div className="ime-photos-column">
          {_imgList3.map((item, index) => (
            <ImgCard imgData={item} key={index} />
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  margin: auto;
  max-width: 1400px;
  min-height: 1500px;
  padding: 0 2rem;
  .ime-photos-column {
    display: block;
    flex-basis: 0;
    -webkit-box-flex: 1;
    flex-grow: 1;
    flex-shrink: 1;
    margin-right: 1.45rem;
  }
  .ime-photos {
    display: flex;
    width: 100%;
    margin: 2rem 0;
  }
`

export default Home
