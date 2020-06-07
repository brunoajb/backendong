const express = require('express');
const connection = require('../database/connection');
const routes = express.Router();

routes.get('/', async(req,res)=>{
  try{
    const casos = await connection('casos').select();
    return res.json(casos);

  }catch(e){
    return({message: e.message})
  }
});

module.exports = routes;