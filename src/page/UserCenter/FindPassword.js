import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { UploadAndDrag } from '../../components'

const FindPassword = () => {
  return (
    <Wrapper className="find-password">
      <UploadAndDrag />
    </Wrapper>
  )
}

const Wrapper = styled('div')``

export default FindPassword
