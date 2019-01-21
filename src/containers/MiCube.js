import { connect } from "react-redux"
import { MiCube } from "../components/MiCube"

const mapStateToProps = ({ MiCube }) => ({ ...MiCube })

export default connect(mapStateToProps)(MiCube)
