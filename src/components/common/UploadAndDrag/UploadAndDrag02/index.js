import React from 'react'
import styled from 'styled-components'

/**
 * @description
 * @param {*} props
 * @param {*} props
 * @param {*} props
 */

const UploadAndDrag02 = (props) => {
  const dragCon = document.getElementById('container')
  dragCon.addEventListener('dragstart', startDrag, false)
  dragCon.addEventListener(
    'dragover',
    function (e) {
      e.preventDefault()
    },
    false
  )
  dragCon.addEventListener('drop', exchangeElement, false)

  // dragstart时记住需要交换的元素及其父元素
  function startDrag(e) {
    e.dataTransfer.setData('te', `${e.target.id};${e.target.parentElement.id}`)
  }

  function exchangeElement(e) {
    e.preventDefault()
    let el = e.target
    let PE, CE
    if (el.tagName.toUpperCase() !== 'LI') {
      PE = el.parentElement
      CE = el
    } else {
      PE = el
      CE = el.querySelector('img')
    }

    if (!PE.classList.contains('ele')) {
      return
    }

    let data = e.dataTransfer.getData('te').split(';')

    // 交换元素
    document.getElementById(data[1]).appendChild(CE)
    PE.appendChild(document.getElementById(data[0]))
  }

  return (
    <Wrapper className="ime-upload-img">
      <ul id="container">
        <li className="ele" id="wrap1">
          <img src="https://picsum.photos/200/200?random=1" alt="" id="img1" />
        </li>
        <li className="ele" id="wrap2">
          <img src="https://picsum.photos/200/200?random=2" alt="" id="img2" />
        </li>
        <li className="ele" id="wrap3">
          <img src="https://picsum.photos/200/200?random=3" alt="" id="img3" />
        </li>
        <li className="ele" id="wrap4">
          <img src="https://picsum.photos/200/200?random=4" alt="" id="img4" />
        </li>
        <li className="ele" id="wrap5">
          <img src="https://picsum.photos/200/200?random=5" alt="" id="img5" />
        </li>
        <li className="ele" id="wrap6">
          <img src="https://picsum.photos/200/200?random=6" alt="" id="img6" />
        </li>
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  ul {
    display: flex;
    list-style: none;
    margin: 200px;
    font-size: 0;
  }
  .ele {
    font-size: 16px;
    width: 200px;
    height: 200px;
    margin: 4px;
    border-radius: 10px;
    color: white;
    cursor: move;
  }
  .ele img {
    width: 100%;
    height: 100%;
  }
`

export default UploadAndDrag02
