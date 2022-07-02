const axios = require('axios'),
path = 'https://react-pizza-jade.vercel.app/db.json'

export const PizzaApi ={
    getPizza:()=>{
        return(axios.get(path))
    }
}