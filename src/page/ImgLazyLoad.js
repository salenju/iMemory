import React from 'react'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'

import { MockUtil } from '../utils'

const ImgLazyLoad = () => {
  const _imgList1 = MockUtil.ramdomImgs({ width: 434, length: 25 })
  return (
    <Wrapper className="ime-img-lazy-load">
      <div className="ime-photos">
        <div className="ime-photos-column">
          {_imgList1.map((item, index) => (
            <LazyLoad key={index} height={100} offset={100} scroll={true}>
              <img src={item.imgUrl} />
            </LazyLoad>
          ))}
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  margin: auto;
  max-width: 1400px;
  padding: 0 2rem;
  .ime-photos {
    display: flex;
    width: 100%;
    margin: 2rem 0;
  }
`

export default ImgLazyLoad
