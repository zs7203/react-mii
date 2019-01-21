import React from 'react'
import {storiesOf} from '@storybook/react'

import {initState as data} from '../store'

import MiNav from '../src/components/MiNav'

storiesOf('页头 导航条 - MiNav', module).add('模块 - 页头顶部导航条', () => (
  <MiNav {...data.MiNav}/>
))
