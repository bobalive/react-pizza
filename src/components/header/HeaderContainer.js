import { connect } from "react-redux";
import Header from "./Header";

const mapStateToProps = (state)=>({
    totalPrice:state.nav.totalPrice,
    totalCount:state.nav.totalCount
})
export default connect(mapStateToProps)(Header)