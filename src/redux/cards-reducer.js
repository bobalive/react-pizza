import { PizzaApi } from "../api/api";

const SetPizza = "SetPizza",
  ToggleIsFetching = "ToggleIsFetching",
  SetCategory = "SetCategory",
  TogglePizzaType = "TogglePizzaType",
  TogglePizzaSize ='TogglePizzaSize',
  AddPizzaPrice='AddPizzaPrice',
  DecreasePizzaPrice='DecreasePizzaPrice',
  SortPizza='SortPizza',
  RemoveActive='RemoveActive'

const initialState = {
  cards: [],
  sortedCards: [],
  isFetching: true,
};

let pizzaReducer = (state = initialState, action) => {
  switch (action.type) {

    case SetPizza:
      return {
        ...state,

        cards: action.pizza.map((card) => {
          return {
            ...card,
            pizzaType: card.types.map((type, i) => {
              return {
                name: type === 0 ? "тонкое" : "традиционное",
                isActive: i === 0 ? true : false,
              };
            }),
            pizzaSize: card.sizes.map((size, i) => {
              return { name: size, isActive: i === 0 ? true : false };
            }),
            isActive: false,
            count:0
          };
        }),
        sortedCards: action.pizza.map((card) => {
          return {
            ...card,
            pizzaType: card.types.map((type, i) => {
              return {
                name: type === 0 ? "тонкое" : "традиционное",
                isActive: i === 0 ? true : false,
              };
            }),
            pizzaSize: card.sizes.map((size, i) => {
              return { name: size, isActive: i === 0 ? true : false };
            }),
            isActive: false,
            count:0
          };
        }),
      };



    case ToggleIsFetching:
      return { ...state, isFetching: action.isFetching };

    case SetCategory:
      return {
        ...state,
        sortedCards: state.cards.filter((card) => {
          if (action.category != 0) {
            return card.category == action.category;
          } else {
            return true;
          }
        }),
      };
    case TogglePizzaType:
      return { ...state ,
        sortedCards:state.sortedCards.map(card=>{
            if(card.id === action.id){
                return {...card,
                pizzaType: card.pizzaType.map((type)=>{
                    if(type.name === action.name){
                        return{...type, isActive:true}
                    }
                    return{...type,isActive:false}
                    
                }) }
            }
            return {...card}
        }),
        cards:state.cards.map(card=>{
            if(card.id === action.id){
                return {...card,
                pizzaType: card.pizzaType.map((type)=>{
                    if(type.name === action.name){
                        return{...type, isActive:true}
                    }
                    return{...type, isActive:false}
                    
                }) }
            }
            return {...card}
        })
    };

    case TogglePizzaSize:{
        return{...state,
        sortedCards: state.sortedCards.map(card=>{
            if(card.id === action.id){
                return {...card, 
                    pizzaSize: card.pizzaSize.map(size=>{
                        if(size.name == action.name){
                            return{...size, isActive:true}
                        }
                        return {...size , isActive:false}
                    })}
            }
            return{...card}
        }),
        cards:state.cards.map(card=>{
            if(card.id === action.id){
                return {...card, 
                    pizzaSize: card.pizzaSize.map(size=>{
                        if(size.name === action.name){
                            return{...size, isActive:true}
                        }
                        return {...size , isActive:false}
                    })}
            }
            return{...card}
        })
        }
    }
    case AddPizzaPrice:
        return{...state,
        cards: state.cards.map(card=>{
            if(card.id === action.id){
             return{...card, count:card.count+1, isActive:true}
            }
            return{...card}
        }),
        sortedCards:state.sortedCards.map(card=>{
            if(card.id === action.id){
             return{...card, count:card.count+1, isActive:true}
            }
            return{...card}
        })
        }
    case DecreasePizzaPrice:
        return{...state,
            cards:state.cards.map(card=>{
                if(card.id == action.id){
                  if(action.count){
                    return {...card, count:0, isActive:false}
                  }
                    return{...card, count:card.count>0?card.count-1:0 , isActive:card.count != 0}
                }
                return{...card}
            }),
            sortedCards:state.sortedCards.map(card=>{
                if(card.id == action.id){
                  if(action.count){
                    return{...card, count:0, isActive:false}
                  }
                    return{...card, count:card.count>0?card.count-1:0, isActive:card.count != 0}
                }
                return{...card}
            })
        }
    case SortPizza: 
        if(action.sort==='популярности'){
            return{...state,
                sortedCards:state.sortedCards.sort((a,b)=>{
                    return Number(a.rating)- Number(b.rating) 
                })
            }  
        }
        else if( action.sort ==='алфавиту'){
            return{...state,
                sortedCards:state.sortedCards.sort((a,b)=>{
                    if(a.name> b.name){
                        return 1
                    }else if(a.name<b.name){
                        return -1
                    }
                    return 0
                })
            }
        }
        else if(action.sort ==='цене'){
            return{
                ...state,
                sortedCards:state.sortedCards.sort((a,b)=>{
                    return a.price- b.price
                })
            }
        }
        return{...state}

    
      case RemoveActive:
        return{...state,
          cards:state.cards.map(card=>{
            if(card.id == action.id){
              return{...card, isActive:false}
            }
            return{...card}
          }),
          sortedCards :state.cards.map(card=>{
            if(card.id == action.id){
              return{...card, isActive:false}
            }
            return{...card}
          })}
    default:
      return { ...state };
  }
};
const setPizza = (pizza) => ({ type: SetPizza, pizza });
const toggleIsFetching = (isFetching) => ({
  type: ToggleIsFetching,
  isFetching,
});
export const SetPizzaThunkCreator = () => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    PizzaApi.getPizza().then((res) => {
      dispatch(setPizza(res.data.pizzas));
      dispatch(toggleIsFetching(false));
    });
  };
};

export const setCategory = (category) => ({ type: SetCategory, category });
export const togglePizzaType =(id, name) =>({type:TogglePizzaType, id, name})
export const togglePizzaSize =(id, name) =>({type:TogglePizzaSize, id, name})
export const addPizzaPrice =(id)=>({type:AddPizzaPrice, id})
export const decreasePizzaPrice =(id, count)=>({type:DecreasePizzaPrice, id, count})
export const sortPizza = (sort)=>({type:SortPizza, sort})
export const removeActive = (id)=>({type:RemoveActive, id})
export default pizzaReducer;
