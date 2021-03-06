import React, { useState, useEffect } from 'react'
import { Upload, Modal, notification } from 'antd'
import styled from 'styled-components'
import { Drag } from 'mys-react'

const acceptedFileTypes = [
  '.pdf',
  '.xls',
  '.doc',
  '.jpg',
  '.jpeg',
  '.png',
  '.tif',
  '.xlsx',
]

const getFileExt = (file) => {
  let ext = file.name.split('.').pop().toLowerCase()
  return `.${ext}`
}

const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = (error) => reject(error)
  })
}

const UploadAndDrag = (props) => {
  const [previewVisible, setPreviewVisible] = useState(false)
  const [previewImage, setPreviewImage] = useState('')
  const [fileList, setFileList] = useState(props.defaultData || [])
  const [maxSize] = useState(props.maxSize || 2)
  const [maxLength] = useState(props.maxLength || 9)

  const handleCancel = () => {
    setPreviewVisible(false)
  }

  const handlePreview = async (file) => {
    debugger
    if (file && file.url) {
      setPreviewImage(file.url)
      setPreviewVisible(true)
    }
  }

  const handleDelete = (file) => {
    if (file && file.uid) {
      let _fileList = [...fileList]
      _fileList = _fileList.filter((item) => item.uid !== file.uid)
      setFileList(_fileList)
    }
  }

  const handleCallBack = (fileList) => {
    props.callback && props.callback(fileList)
  }

  const beforeUploadProp = (file) => {
    let reader = new FileReader()
    if (file === undefined || file === null) {
      return
    }
    reader.readAsDataURL(file)
    return false
  }

  const beforePostFileList = async (_fileList, file) => {
    if (file === undefined || file === null) {
      return
    }

    let fileExt = getFileExt(file)

    if (fileList.length >= maxLength) {
      notification.warn({ message: `最多只能上传${maxSize}个文件` })
      return false
    }

    if (fileList !== null && fileList.length > 0) {
      const fs = fileList.filter((iter) => iter.name === file.name)
      let isOK = fs.length === 0
      if (!isOK) {
        notification.warn({ message: '文件已存在' })
        return
      }
    }

    let isCorrectFormat = acceptedFileTypes.includes(fileExt)
    let isMoreThanMaxSize = file.size / 1024 / 1024 > maxSize

    if (isMoreThanMaxSize) {
      notification.warn({ message: `单个文件最大不能超过${maxSize} MB` })
      return
    } else if (!isCorrectFormat) {
      notification.warn({
        message: '文件格式不支持',
      })
      return
    }

    const lastDot =
      typeof file.name === 'string' ? file.name.lastIndexOf('.') : ''
    if (lastDot === -1) {
      Modal.warn({
        title: 'File format not found!',
      })
      return
    }
    const fileNamePart = file.name.substring(0, lastDot)
    let newName = fileNamePart.replace(/\s/g, '')
    const extensionPart = file.name.substring(lastDot)
    const newExten = extensionPart.replace(/\s/g, '')
    const newFileName = newName + '.' + Date.now() + newExten

    // let url = await OssUploader.upload(file, `mall/${newFileName}`)
    // if (!url) {
    //   return
    // }

    // let fileItem = {
    //   uid: file.uid,
    //   url: url,
    //   name: file.name,
    //   size: file.size,
    // }
    // fileList.push(fileItem)
    // handleChange(fileList)
    // handleCallBack(fileList)
  }

  const uploadButton = (
    <div>
      +<div className="ant-upload-text">Upload</div>
    </div>
  )

  console.log('------->>>>>>>fileList:', fileList)
  return (
    <Wrapper className="upload-drag" id="picWall">
      <Drag
        onChange={(list) => handleCallBack(list)}
        list={fileList}
        className="img-list"
      >
        {fileList &&
          fileList.map((item) => (
            <div className="upload-list-item" key={item.uid}>
              <div className="upload-list-item-info">
                <img src={item.url} />
                <div className="upload-list-item-actions">
                  <span onClick={() => handlePreview(item)}>查看</span>
                  <span onClick={() => handleDelete(item)}>删除</span>
                </div>
              </div>
            </div>
          ))}
      </Drag>

      <Upload
        multiple={props.multiple === false ? false : true}
        listType={props.listType || 'picture-card'}
        beforeUpload={(file) => beforeUploadProp(file)}
        defaultFileList={fileList}
        showUploadList={false}
        onChange={({ fileList, file }) => beforePostFileList(fileList, file)}
        fileList={fileList}
        className={props.className}
        disabled={props.disabled || false}
        accept={props.accept || acceptedFileTypes.toString()}
      >
        {fileList.length >= maxLength ? null : uploadButton}
      </Upload>

      <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
        <img alt="example" style={{ width: '100%' }} src={previewImage} />
      </Modal>
    </Wrapper>
  )
}

const Wrapper = styled('div')`
  .upload-list-item {
    width: 104px;
    height: 104px;
    padding: 8px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    margin: 8px;

    .upload-list-item-info {
      height: 100%;
      position: relative;
      overflow: hidden;
      > img {
        width: 100%;
        height: 100%;
      }
    }
    .upload-list-item-actions {
      position: absolute;
      left: 0;
      right: 0;
      height: 30px;
      line-height: 30px;
      bottom: 8px;
      text-align: center;
      z-index: 1;
      background-color: rgba(0, 0, 0, 0.5);
      -webkit-transition: all 0.3s;
      transition: all 0.3s;
      display: none;
      span {
        cursor: pointer;
        padding: 3px;
        color: #fff;
      }
    }
    .upload-list-item-actions:hover {
      display: block;
    }
  }
  .upload-list-item:hover .upload-list-item-actions {
    display: block;
  }

  .img-list {
    display: flex;
    li {
      width: 80px;
      height: 80px;
      border: 1px solid #f40;
      list-style: none;
      margin: 4px;
      img {
        width: 100%;
      }
    }
  }
`

export default UploadAndDrag
