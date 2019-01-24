import React, {Component} from "react"
import styled from 'styled-components'

import MiNav from "./containers/MiNav"
import MiHeader from "./containers/MiHeader"
import {MiSearch, DropDownList} from "./components/MiHeader"
import MiHero from "./containers/MiHero"
import {MiHeroCategories} from "./components/MiHero"
import MiCube from "./containers/MiCube"
import MiFlash from "./containers/MiFlash"
import {
  MiBanner_1st,
  MiBanner_2nd,
  MiBanner_3rd,
  MiBanner_4th,
  MiBanner_5th,
  MiBanner_6th,
  MiBanner_7th
} from "./containers/MiBanner"
import {
  MiCardBoardA_shouji,
  MiCardBoardB_jiadian,
  CarouselCardBoard_tuijian,
  HotCardBoard_reping,
  SlideCardBoard_neirong,
  VideoCardBoard_shipin
} from "./containers/MiCard"
import {MiFooter} from './components/MiFooter'

const withMargin = ({top = 0, bottom = 0} = {}) => comp => (
  <div style={{margin: `${top}px auto ${bottom}px`, width: "fit-content"}}>{comp}</div>
);

class App extends Component {
  render() {
    return (
      <div>
        <MiNav/>
        <MiHeader RightSlot={MiSearch} Dropdown={DropDownList}/>
        <MiHero Slot={MiHeroCategories}/>
        {withMargin({top: 14, bottom: 26})(<MiCube/>)}
        {withMargin({bottom: 26})(<MiFlash/>)}
        {withMargin({bottom: 42})(<MiBanner_1st/>)}
        {/*添加浅灰色背景*/}
        <div style={{background: "#f5f5f5", paddingBottom: "60px", minWidth: '1226px'}}>
          {withMargin({top: 22, bottom: 8})(<MiCardBoardA_shouji/>)}
          {withMargin({top: 28, bottom: 22})(<MiBanner_2nd/>)}
          {withMargin({top: 22, bottom: 8})(<MiCardBoardB_jiadian/>)}
          {withMargin({top: 28, bottom: 22})(<MiBanner_3rd/>)}
          {withMargin({top: 22, bottom: 8})(<MiCardBoardB_jiadian/>)}
          {withMargin({top: 28, bottom: 22})(<MiBanner_4th/>)}
          {withMargin({top: 22, bottom: 8})(<MiCardBoardB_jiadian/>)}
          {withMargin({top: 28, bottom: 22})(<MiBanner_5th/>)}
          {withMargin({top: 22, bottom: 8})(<MiCardBoardB_jiadian/>)}
          {withMargin({top: 28, bottom: 22})(<MiBanner_6th/>)}
          {withMargin({top: 22, bottom: 8})(<MiCardBoardB_jiadian/>)}
          {withMargin({top: 28, bottom: 22})(<MiBanner_7th/>)}
          {withMargin({bottom: 22})(<CarouselCardBoard_tuijian/>)}
          {withMargin({bottom: 22})(<HotCardBoard_reping/>)}
          {withMargin({bottom: 22})(<SlideCardBoard_neirong/>)}
          {withMargin()(<VideoCardBoard_shipin/>)}
        </div>
        {withMargin()(<MiFooter/>)}
      </div>
    )
  }
}

export default App
