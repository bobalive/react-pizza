const axios = require('axios'),
path = 'http://localhost:3000/db.json'

export const PizzaApi ={
    getPizza:()=>{
        return(axios.get(path))
    }
}