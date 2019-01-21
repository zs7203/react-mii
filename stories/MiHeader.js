import React from "react"
import { storiesOf } from "@storybook/react"

import Centered from "./utils/Centered"
import {
  MiHeader,
  MiSearch,
  DropDownCard,
  DropDownList
} from "../src/components/MiHeader/index.js"

import {initState as data} from '../store'

storiesOf("页头 下拉导航 - MiHeader", module)
  .add("组件 - 搜索框", () => (
    <Centered>
      <MiSearch />
    </Centered>
  ))
  .add("组件 - 导航条", () => <MiHeader />)
  .add("模块 - 导航条 + 搜索框", () => <MiHeader RightSlot={MiSearch} />)
  .add("组件 - 卡片 - 类型1", () => <DropDownCard {...data.MiHeader.categoryList[0][4]} />)
  .add("组件 - 卡片 - 类型2", () => <DropDownCard {...data.MiHeader.categoryList[0][0]} />)
  .add("模块 - 弹出卡片组", () => <DropDownList list={data.MiHeader.categoryList[3]} />)
  .add("模块 - 页头二级导航", () => (
    <MiHeader
      categoryList={data.MiHeader.categoryList}
      RightSlot={MiSearch}
      Dropdown={DropDownList}
    />
  ))
