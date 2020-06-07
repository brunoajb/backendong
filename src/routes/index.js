const express=require('express');
const routes = express.Router();

routes.get('/', (req,res)=>{
  return res.send('<h1>Api Artêmis | Todos por um!</h1>')
});

module.exports = routes;