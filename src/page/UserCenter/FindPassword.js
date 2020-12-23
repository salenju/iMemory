import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import UploadAndDrag01 from '../../components/common/UploadAndDrag/UploadAndDrag01'
import UploadMockData from '../../mock/UploadMockData'

const FindPassword = () => {
    const getFileList = (value) => {
      console.log('=====>>>Parent-filelist:',value)
    }

  return (
    <Wrapper className="find-password">
      <UploadAndDrag01 defaultData={UploadMockData} callback={getFileList} />
    </Wrapper>
  )
}

const Wrapper = styled('div')``

export default FindPassword
