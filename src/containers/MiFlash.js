import { connect } from "react-redux"
import { MiFlash } from "../components/MiFlash"

const mapStateToProps = ({ MiFlash }) => ({ ...MiFlash })

export default connect(mapStateToProps)(MiFlash)
