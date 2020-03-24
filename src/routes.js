const express = require('express');

const routes = express.Router();
/**
 * 
 * Métodos HTTP:
 * 
 * GET: buscar listar uma informacao do backend
 * POST: criar uma informacao no backend
 * PUT: alterar uma informacao no backend
 * DELETE: deletar uma informacao no backend
 * 
 * 
 */


 /**
  * Tipos de parâmetros  
  * 
  * Query Params:  Parâmetro nomeados enviados na rota após "?" (Filtros, paginação)
  * Route Params: Parâmetros utilizados para indentificar recursos
  * Request Body: 
  * 
  */


routes.get('/', (request, response) => {
    return response.json({
        "evento": "Semana Omnistack 11",
        "aluno": "Luiz Carvalho"
    });
});

module.exports = routes;