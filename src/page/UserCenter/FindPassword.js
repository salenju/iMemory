import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import UploadAndDrag01 from '../../components/common/UploadAndDrag/UploadAndDrag01'

const FindPassword = () => {
  return (
    <Wrapper className="find-password">
      <UploadAndDrag01 />
    </Wrapper>
  )
}

const Wrapper = styled('div')``

export default FindPassword
