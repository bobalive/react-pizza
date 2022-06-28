const axios = require('axios'),
path = 'https://react-pizza-test-default-rtdb.firebaseio.com/db.json'

export const PizzaApi ={
    getPizza:()=>{
        return(axios.get(path))
    }
}