import React from 'react'
import {storiesOf} from '@storybook/react'

import {initState as data} from '../store'

import Centered from './utils/Centered'
import {MiHero, MiHeroCategories} from '../src/components/MiHero/index.js'

storiesOf('页头 产品分类导航 - MiHero', module)
  .addDecorator(story => <Centered>{story()}</Centered>)
  .add('组件 - 轮播图', () => <MiHero {...data.MiHero}/>)
  .add('组件 - 多级弹出导航', () => (
    <div style={{width: '1226px'}}>
      <MiHeroCategories {...data.MiHero} />
    </div>
  ))
  .add('模块 - 轮播图 + 二级导航', () => (
    <MiHero {...data.MiHero} Slot={MiHeroCategories}/>
  ))
