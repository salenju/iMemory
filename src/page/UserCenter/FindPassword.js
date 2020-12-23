import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import UploadAndDrag from '../../components/common/UploadAndDrag/UploadAndDrag'
import UploadMockData from '../../Mock/UploadMockData'

const FindPassword = () => {
    const getFileList = (value) => {
      console.log('=====>>>Parent-filelist:',value)
    }

  return (
    <Wrapper className="find-password">
      <UploadAndDrag defaultData={UploadMockData} callback={getFileList} />
    </Wrapper>
  )
}

const Wrapper = styled('div')``

export default FindPassword
