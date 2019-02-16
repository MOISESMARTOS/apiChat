var express = require('express');
var Router = express.Router();

Router.get('/users', function(req, res){
  //get usuario
})

Router.get('/messages', function(req, res){
  //get mensajes
})

Router.post('/users', function(req, res){
  //post usuarios
})

Router.post('/messages', function(req , res){
  //post mensajes
})


module.exports = Router;
