import { connect } from "react-redux";
import { Cards } from "./Cards";
import {SetPizzaThunkCreator,togglePizzaType,togglePizzaSize,decreasePizzaPrice ,addPizzaPrice,sortPizza} from '../../../redux/cards-reducer'
import { setSortBy,toggleSort } from "../../../redux/tabs-reducers";
import { increasePrice } from "../../../redux/tabs-reducers";

const mapStateToProps =(state)=>({
    pizza:state.pizza
})

export default connect(mapStateToProps, {
    SetPizzaThunkCreator,increasePrice,
    togglePizzaType,togglePizzaSize,
    decreasePizzaPrice ,addPizzaPrice,
    setSortBy,sortPizza,toggleSort})(Cards)