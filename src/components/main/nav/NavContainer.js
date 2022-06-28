import { connect } from "react-redux";
import { setCategory ,sortPizza} from "../../../redux/cards-reducer";
import {toggleTabs,toggleSort,setSortBy} from '../../../redux/tabs-reducers'
import Nav from "./Nav";

let mapStateToProps = (state)=>({
    tabs:state.nav.tabs,
    sort:state.nav.sort,
    sortBy : state.nav.sortBy
})



export default connect(mapStateToProps, {toggleTabs,toggleSort, setSortBy,setCategory,sortPizza}) (Nav)