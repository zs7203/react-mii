import MiBanner from "../components/MiBanner/index"
import { connect } from "react-redux"

const mapStateToProps_1st = ({ MiBanner }) => ({ ...MiBanner[0] })
const mapStateToProps_2nd = ({ MiBanner }) => ({ ...MiBanner[1] })
const mapStateToProps_3rd = ({ MiBanner }) => ({ ...MiBanner[2] })
const mapStateToProps_4th = ({ MiBanner }) => ({ ...MiBanner[3] })
const mapStateToProps_5th = ({ MiBanner }) => ({ ...MiBanner[4] })
const mapStateToProps_6th = ({ MiBanner }) => ({ ...MiBanner[5] })
const mapStateToProps_7th = ({ MiBanner }) => ({ ...MiBanner[6] })

const MiBanner_1st = connect(mapStateToProps_1st)(MiBanner)
const MiBanner_2nd = connect(mapStateToProps_2nd)(MiBanner)
const MiBanner_3rd = connect(mapStateToProps_3rd)(MiBanner)
const MiBanner_4th = connect(mapStateToProps_4th)(MiBanner)
const MiBanner_5th = connect(mapStateToProps_5th)(MiBanner)
const MiBanner_6th = connect(mapStateToProps_6th)(MiBanner)
const MiBanner_7th = connect(mapStateToProps_7th)(MiBanner)

export {
  MiBanner_1st,
  MiBanner_2nd,
  MiBanner_3rd,
  MiBanner_4th,
  MiBanner_5th,
  MiBanner_6th,
  MiBanner_7th
}
