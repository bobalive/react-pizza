import { connect } from "react-redux";
import Header from "./Header";
import {SetPizzaThunkCreator} from '../../redux/cards-reducer'

const mapStateToProps = (state)=>({
    totalPrice:state.nav.totalPrice,
    totalCount:state.nav.totalCount
})

export default connect(mapStateToProps,{SetPizzaThunkCreator})(Header)