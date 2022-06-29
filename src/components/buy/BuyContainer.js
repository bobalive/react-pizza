import { connect } from "react-redux";
import { decreasePrice, increasePrice } from "../../redux/tabs-reducers";
import{addPizzaPrice,decreasePizzaPrice,removeActive} from '../../redux/cards-reducer'
import { Buy } from "./Buy";


const mapStateToProps = (state)=>({
    activePizza: state.pizza.cards.filter(card=> card.isActive),
    totalCount:state.nav.totalCount,
    totalPrice:state.nav.totalPrice
})

export default connect(mapStateToProps, 
    {increasePrice,decreasePrice,
    addPizzaPrice,decreasePizzaPrice,
    removeActive})(Buy)

