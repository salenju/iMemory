import React from 'react'
import styled from 'styled-components'

/**
 * @description
 * @param {*} props
 * @param {*} props
 * @param {*} props
 */

const ImgCard = (props) => {
  const { imgData } = props
  return (
    <Wrapper className="ime-img-card">
      <article>
        <a href="">
          <img src={imgData.imgUrl} alt={imgData.altValue} />
        </a>
      </article>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  margin: 0 0 1.45rem;
`

export default ImgCard
