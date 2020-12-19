import React, { useState, useEffect } from 'react'
import { Upload, Modal, Button } from 'antd'
import styled from 'styled-components'

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

const UploadAndDrag01 = () => {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState([
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: 'https://www.marineonline.com/api/common/r/oss?path=prod/mol/03dc2bd0-14e1-11eb-9430-dd4737ecb596.jpg?x-oss-process=image/resize,m_pad,h_86,w_86',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: 'https://www.marineonline.com/api/common/r/oss?path=prod/mall/172546Z200671.jpg?x-oss-process=image/resize,m_pad,h_180,w_180',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: 'https://www.marineonline.com/api/common/r/oss?path=prod/mol/6a9d4e00-1408-11eb-8585-e946ae499d51.jpg?x-oss-process=image/resize,m_pad,h_180,w_180',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: 'https://www.marineonline.com/api/common/r/oss?path=prod/mall/172366Z200633.jpg?x-oss-process=image/resize,m_pad,h_180,w_180',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'error',
    },
  ])

  const handleCancel = () => {
    setPreviewVisible(false)
  }

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj)
    }
    setPreviewImage(file.url || file.preview)
    setPreviewVisible(true)
  }

  const handleChange = ({ fileList }) => {
    setFileList(fileList)
  }

  const uploadButton = (
    <div>
      +<div className="ant-upload-text">Upload</div>
    </div>
  )

  useEffect(() => {
    //收集图片dom
    let images = Array.from(document.querySelectorAll('#picWall .ant-upload-list-item-image'))

    if (images && images.length > 0) {
      //收集图片dom所在的item dom 准备查看item是否有remove className
      let items = Array.from(document.querySelectorAll('#picWall .ant-upload-list-item'))
      let removeIndex = items.findIndex(el =>[...el.classList].includes('ant-upload-list-item-removed') || [...el.classList].includes('ant-upload-animate-inline-leave'))

      //如果image所在的item有remove class 则必须过滤掉
      let els = images.filter((el, index) => index !== removeIndex)
      els.forEach((el, index) => {
        console.log('-----我被执行了：',index+1)
        // 每次触发重新设置key
        el.setAttribute('key', index)
        //如果已经设置draggable说明已经添加事件监听，无需再添加监听
        if (!el.attributes.draggable) {
          el.setAttribute('draggable', true)
          el.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('key', Number(e.target.attributes.key.value))
          })
          el.addEventListener('dragenter', (e) => {})
          el.addEventListener('dragover', (e) => e.preventDefault())
          el.addEventListener('drop', (e) => {
            e.preventDefault()
            e.stopPropagation()
            const oldIndex = Number(e.dataTransfer.getData('key'))
            const newIndex = Number(e.target.attributes.key.value)
            if (oldIndex != newIndex) {
              // console.log(oldIndex, newIndex, getFieldValue('files'))
              let _fileList = fileList
              //拖拽后的逻辑
              let temp = _fileList[oldIndex]
              if (newIndex > oldIndex) {
                for (let i = Number(oldIndex); i < Number(newIndex); i++) {
                  _fileList[i] = fileList[i + 1]
                }
              } else {
                for (let i = Number(oldIndex); i > Number(newIndex); i--) {
                  _fileList[i] = _fileList[i - 1]
                }
              }
              _fileList[newIndex] = temp

              setFileList(_fileList)
              console.log('-----AAAA:',fileList)
            }
          })
        }
      })
    }
    
    return () => {
      let els = document.querySelectorAll(
        '#picWall .ant-upload-list-item-image'
      )
      ;[].forEach.call(els, (el) => {
        el.removeEventListener('dragstart', () => {})
        el.removeEventListener('drop', () => {})
        el.removeEventListener('dragenter', (e) => {})
        el.removeEventListener('drageover', (e) => {})
      })
    }
  }, [
    // getFieldValue('files'),
    //当上传图片后getFieldValue('files')发生变化，但是还没有异步获取上传图片路径时，此时document.querySelectorAll('#picWall .ant-upload-list-item-image')没有变化
    //通过监听图片dom长度再次触发useEffect,监听新增的图片dom
    // fileList.length,
  ])

  console.log('----->fileList:',fileList)
  return (
    <Wrapper className="upload-drag" id="picWall">
      <Upload
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        listType="picture-card"
        fileList={fileList}
        onPreview={handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .ant-upload-list-picture-card .ant-upload-list-item-info::before {
    height: 20px;
  }
  .ant-upload-list-picture-card .ant-upload-list-item-actions {
    top: 8px;
    transform: translate(-50%, 0);
  }
`

export default UploadAndDrag01
