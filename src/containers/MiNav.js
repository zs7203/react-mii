import { connect } from "react-redux"
import MiNav from "../components/MiNav"

const mapStateToProps = ({ MiNav }) => ({ ...MiNav });

export default connect(mapStateToProps)(MiNav)
