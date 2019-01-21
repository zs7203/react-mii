import {connect} from "react-redux"
import {
  ProductCardBoardA,
  ProductCardBoardB,
  CarouselCardBoard,
  HotCardBoard,
  SlideCardBoard,
  VideoCardBoard
} from "../components/MiCard"

// 手机-产品展板模块
const mapStateToProps_shouji = ({MiCard}) => ({...MiCard[0]})
const MiCardBoardA_shouji = connect(mapStateToProps_shouji)(ProductCardBoardA)

// 家电-产品展板模块
const mapStateToProps_jiadian = ({MiCard}) => ({...MiCard[1]})
const MiCardBoardB_jiadian = connect(mapStateToProps_jiadian)(ProductCardBoardB)

// 推荐轮播展板模块
const mapStateToProps_tuijian = ({MiCard}) => ({...MiCard[2]})
const CarouselCardBoard_tuijian = connect(mapStateToProps_tuijian)(CarouselCardBoard)

// 热评产品展板模块
const mapStateToProps_reping = ({MiCard}) => ({...MiCard[3]})
const HotCardBoard_reping = connect(mapStateToProps_reping)(HotCardBoard)

// 内容滑动展板模块
const mapStateToProps_neirong = ({MiCard}) => ({...MiCard[4]})
const SlideCardBoard_neirong = connect(mapStateToProps_neirong)(SlideCardBoard)

// 视频展板模块
const mapStateToProps_shipin = ({MiCard}) => ({...MiCard[5]})
const VideoCardBoard_shipin = connect(mapStateToProps_shipin)(VideoCardBoard)

export {
  MiCardBoardA_shouji,
  MiCardBoardB_jiadian,
  CarouselCardBoard_tuijian,
  HotCardBoard_reping,
  SlideCardBoard_neirong,
  VideoCardBoard_shipin
}
