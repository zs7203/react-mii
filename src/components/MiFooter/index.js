import React from 'react'
import styled from 'styled-components'

import MiFooterPolicy from './MiFooterPolicy.jsx'
import MiFooterNav from './MiFooterNav.jsx'
import MiFooterLink from './MiFooterLink.jsx'

const Container = styled.div`
  & > div:first-child {
    border-bottom: 1px solid #e0e0e0;
  }
`

const MiFooter = () =>(
  <Container>
    <MiFooterPolicy/>
    <MiFooterNav/>
    <MiFooterLink/>
  </Container>
)

export {MiFooterPolicy, MiFooterNav, MiFooterLink, MiFooter}
