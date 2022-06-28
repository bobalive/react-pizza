import { connect } from "react-redux";
import { Cards } from "./Cards";
import {SetPizzaThunkCreator,togglePizzaType,togglePizzaSize,decreasePizzaPrice ,addPizzaPrice} from '../../../redux/cards-reducer'
import { increasePrice } from "../../../redux/tabs-reducers";

const mapStateToProps =(state)=>({
    pizza:state.pizza
})

export default connect(mapStateToProps, {
    SetPizzaThunkCreator,increasePrice,
    togglePizzaType,togglePizzaSize,
    decreasePizzaPrice ,addPizzaPrice})(Cards)