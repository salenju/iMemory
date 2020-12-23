// import React, { useState, useEffect } from 'react'
// import { Upload, Modal, notification } from 'antd'
// import styled from 'styled-components'
// import { OssUploader } from 'bmo-oss'

// let ossSetting = {
//   env: OssUploader.env(),
//   project: 'mol',
// }
// OssUploader.init(ossSetting)

// const acceptedFileTypes = [
//   '.pdf',
//   '.xls',
//   '.doc',
//   '.jpg',
//   '.jpeg',
//   '.png',
//   '.tif',
//   '.xlsx',
// ]

// const getFileExt = (file) => {
//   let ext = file.name.split('.').pop().toLowerCase()
//   return `.${ext}`
// }

// const getBase64 = (file) => {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onload = () => resolve(reader.result)
//     reader.onerror = (error) => reject(error)
//   })
// }

// const UploadAndDrag = (props) => {
//   const [previewVisible, setPreviewVisible] = useState(false)
//   const [previewImage, setPreviewImage] = useState('')
//   const [fileList, setFileList] = useState(props.defaultData || [])
//   const [maxSize] = useState(props.maxSize || 2)
//   const [maxLength] = useState(props.maxLength || 9)

//   const handleCancel = () => {
//     setPreviewVisible(false)
//   }

//   const handlePreview = async (file) => {
//     if (!file.url && !file.preview) {
//       file.preview = await getBase64(file.originFileObj)
//     }
//     setPreviewImage(file.url || file.preview)
//     setPreviewVisible(true)
//   }

//   const handleCallBack = (fileList) => {
//     props.callback && props.callback(fileList)
//   }

//   const beforeUploadProp = (file) => {
//     let reader = new FileReader()
//     if (file === undefined || file === null) {
//       return
//     }
//     reader.readAsDataURL(file)
//     return false
//   }

//   const beforePostFileList = async (_fileList, file) => {
//     if (file === undefined || file === null) {
//       return
//     }

//     let fileExt = getFileExt(file)

//     if (fileList.length >= maxLength) {
//       notification.warn({ message: `最多只能上传${maxSize}个文件` })
//       return false
//     }

//     if (fileList !== null && fileList.length > 0) {
//       const fs = fileList.filter((iter) => iter.name === file.name)
//       let isOK = fs.length === 0
//       if (!isOK) {
//         notification.warn({ message: '文件已存在' })
//         return
//       }
//     }

//     let isCorrectFormat = acceptedFileTypes.includes(fileExt)
//     let isMoreThanMaxSize = file.size / 1024 / 1024 > maxSize

//     if (isMoreThanMaxSize) {
//       notification.warn({ message: `单个文件最大不能超过${maxSize} MB` })
//       return
//     } else if (!isCorrectFormat) {
//       notification.warn({
//         message: '文件格式不支持',
//       })
//       return
//     }

//     const lastDot =
//       typeof file.name === 'string' ? file.name.lastIndexOf('.') : ''
//     if (lastDot === -1) {
//       Modal.warn({
//         title: 'File format not found!',
//       })
//       return
//     }
//     const fileNamePart = file.name.substring(0, lastDot)
//     let newName = fileNamePart.replace(/\s/g, '')
//     const extensionPart = file.name.substring(lastDot)
//     const newExten = extensionPart.replace(/\s/g, '')
//     const newFileName = newName + '.' + Date.now() + newExten

//     let url = await OssUploader.upload(file, `mall/${newFileName}`)
//     if (!url) {
//       return
//     }

//     let fileItem = {
//       uid: file.uid,
//       url: url,
//       name: file.name,
//       size: file.size,
//     }
//     fileList.push(fileItem)
//     handleChange(fileList)
//     handleCallBack(fileList)
//   }

//   const handleChange = (fileList) => {
//     setFileList(fileList)
//   }

//   // 拖拽
//   useEffect(() => {
//     //收集图片dom
//     let images = Array.from(
//       document.querySelectorAll('#picWall .ant-upload-list-item-image')
//     )
//     let _fileList = [...fileList]

//     if (images && images.length > 0) {
//       //收集图片dom所在的item dom 准备查看item是否有remove className
//       let items = Array.from(
//         document.querySelectorAll('#picWall .ant-upload-list-item')
//       )
//       let removeIndex = items.findIndex(
//         (el) =>
//           [...el.classList].includes('ant-upload-list-item-removed') ||
//           [...el.classList].includes('ant-upload-animate-inline-leave')
//       )

//       //如果image所在的item有remove class 则必须过滤掉
//       let els = images.filter((el, index) => index !== removeIndex)
//       els.forEach((el, index) => {
//         // 每次触发重新设置key
//         el.setAttribute('key', index)

//         //如果已经设置draggable说明已经添加事件监听，无需再添加监听
//         if (!el.attributes.draggable) {
//           el.setAttribute('draggable', true)
//         }
//         el.addEventListener('dragstart', (e) => {
//           e.dataTransfer.setData('key', Number(e.target.attributes.key.value))
//         })
//         el.addEventListener('dragenter', (e) => {})
//         el.addEventListener('dragover', (e) => e.preventDefault())
//         el.addEventListener('drop', (e) => {
//           e.preventDefault()
//           e.stopPropagation()

//           const oldIndex = Number(e.dataTransfer.getData('key'))
//           const newIndex = Number(e.target.attributes.key.value)
//           if (oldIndex != newIndex) {
//             //拖拽后的逻辑
//             let temp = _fileList[oldIndex]
//             if (newIndex > oldIndex) {
//               for (let i = Number(oldIndex); i < Number(newIndex); i++) {
//                 _fileList[i] = _fileList[i + 1]
//               }
//             } else {
//               for (let i = Number(oldIndex); i > Number(newIndex); i--) {
//                 _fileList[i] = _fileList[i - 1]
//               }
//             }
//             _fileList[newIndex] = temp
//           }
//           setFileList(_fileList)
//         })
//       })
//     }

//     handleCallBack(_fileList)

//     return () => {
//       let els = document.querySelectorAll(
//         '#picWall .ant-upload-list-item-image'
//       )
//       ;[].forEach.call(els, (el) => {
//         el.removeEventListener('dragstart', () => {})
//         el.removeEventListener('drop', () => {})
//         el.removeEventListener('dragenter', (e) => {})
//         el.removeEventListener('drageover', (e) => {})
//       })
//     }
//   }, [fileList])

//   const uploadButton = (
//     <div>
//       +<div className="ant-upload-text">Upload</div>
//     </div>
//   )
//   console.log('------->>>>>>>fileList:', fileList)
//   return (
//     <Wrapper className="upload-drag" id="picWall">
//       <Upload
//         multiple={props.multiple === false ? false : true}
//         listType={props.listType || 'picture-card'}
//         beforeUpload={(file) => beforeUploadProp(file)}
//         defaultFileList={fileList}
//         onChange={({ fileList, file }) => beforePostFileList(fileList, file)}
//         onPreview={handlePreview}
//         fileList={fileList}
//         className={props.className}
//         disabled={props.disabled || false}
//         accept={props.accept || acceptedFileTypes.toString()}
//       >
//         {fileList.length >= maxLength ? null : uploadButton}
//       </Upload>
//       <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
//         <img alt="example" style={{ width: '100%' }} src={previewImage} />
//       </Modal>
//     </Wrapper>
//   )
// }

// const Wrapper = styled('div')`
//   .ant-upload-list-picture-card .ant-upload-list-item-info::before {
//     height: 20px;
//   }
//   .ant-upload-list-picture-card .ant-upload-list-item-actions {
//     top: 8px;
//     transform: translate(-50%, 0);
//   }
// `

// export default UploadAndDrag
