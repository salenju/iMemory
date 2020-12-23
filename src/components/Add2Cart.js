import React from 'react'
import styled from 'styled-components'
import { ShoppingCartOutlined } from '@ant-design/icons'
import PropTypes from 'prop-types'

const Add2Cart = (props) => {
  return (
    <Wrapper margin={props.margin}>
      <div className="icon-cart">
        <ShoppingCartOutlined style={{ color: '#0F8AEC', fontSize: '21px' }} />
      </div>
      <div className="add-cart">ADD TO CART</div>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 140px;
  height: 30px;
  background: #e6f8ff;
  border-radius: 2px;
  font-size: 12px;
  font-family: Roboto;
  font-weight: bold;
  margin: ${(props) => (props.margin ? `${props.margin}` : 0)};
  cursor: pointer;
  .icon-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100%;
    background-color: #ffffff;
    border: 1px solid #8ad8ff;
  }

  .add-cart {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 100%;
    border: 1px solid #8ad8ff;
    border-left: none;
    > span {
      color: #0f8aec;
      font-weight: normal;
    }
  }
`

Add2Cart.propTypes = {
  margin: PropTypes.string,
}
export default Add2Cart
