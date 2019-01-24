import { connect } from "react-redux"
import { MiHeader } from "../components/MiHeader"

const mapStateToProps = ({ MiHeader }) => ({ ...MiHeader });

export default connect(mapStateToProps)(MiHeader)
