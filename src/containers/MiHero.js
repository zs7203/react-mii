import { connect } from "react-redux"
import { MiHero } from "../components/MiHero"

const mapStateToProps = ({ MiHero }) => ({ ...MiHero });

export default connect(mapStateToProps)(MiHero)
