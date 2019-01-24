import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'

import Centered from './utils/Centered'

import { MiFooterPolicy, MiFooterNav, MiFooterLink } from '../src/components/MiFooter'
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: #fff;
  & > div:first-child {
    border-bottom: 1px solid #e0e0e0;
  }
`;

storiesOf('页脚 - MiFooter', module)
  .addDecorator(story => <Centered>{story()}</Centered>)
  .add('组件 - 政策', () => <MiFooterPolicy />)
  .add('组件 - 导航', () => <MiFooterNav />)
  .add('组件 - 认证', () => <MiFooterLink />)
  .add('模块 - 页脚模块', () => (
    <Container>
      <MiFooterPolicy />
      <MiFooterNav />
      <MiFooterLink />
    </Container>
  ));
