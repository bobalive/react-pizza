const ToggleTabs = 'ToggleTabs',
ToggleSort ='ToggleSort',
SetSortBy='SetSortBy',
IncreasePriceCount ='IncreasePriceCount',
DecreasePriceCount='DecreasePriceCount'

const initialState = {
    tabs:[
        {name:'все',id:1 ,isActive:true},
        {name:'мясные',id:2,isActive:false},
        {name:'вегетарианские',id:3 ,isActive:false},
        {name:'гриль',id:4,isActive:false},
        {name:'острые',id:5 ,isActive:false},
        {name:'закрытые',id:6 ,isActive:false}
    ],
    sort:[
        {name:'популярности',id:1, isActive:true},
        {name:'цене', id:2,isActive:false},
        {name:'алфавиту',id:3, isActive:false}
    ],
    sortBy:'популярности',
    totalCount:0,
    totalPrice:0
}

let tabsReducer=  (state = initialState, action)=>{
    switch (action.type){
        case ToggleTabs:
            return({...state, 
            tabs: state.tabs.map(item =>{
                if(action.id === item.id){
                    return({...item , isActive:true})
                }else{
                    return({...item, isActive:false})
                }
            })
        })
        case ToggleSort:
            return({...state, 
            sort: state.sort.map(item =>{
                if(action.id === item.id){
                    return({...item , isActive:true})
                }else{
                    return({...item, isActive:false})
                }
            })
        })
        case SetSortBy:
            return({...state, sortBy:action.sortBy})
        case IncreasePriceCount:
            return({...state, totalCount:state.totalCount+1,totalPrice:state.totalPrice + Number( action.price)})
        case DecreasePriceCount:
            return({...state,  totalCount:state.totalCount+1,totalPrice:state.totalPrice - Number(action.price)})
        default:
            return state
    }
}

export default tabsReducer

export const toggleTabs = (id)=>({type:ToggleTabs, id})
export const toggleSort = (id) =>({type:ToggleSort, id})
export const setSortBy = (sortBy)=>({type:SetSortBy , sortBy})
export const increasePrice = (price) =>({type:IncreasePriceCount, price})
export const decreasePrice = (price)=>({type:DecreasePriceCount, price})