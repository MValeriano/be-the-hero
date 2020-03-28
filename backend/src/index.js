const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);



/**
 * ROTA                  / Recurso
 * http://127.0.0.1:3333/alunos
 * 
 */

 /**
  * 
  * Métodos HTTP:
  * 
  * GET : buscar/listar uma informação do back-end
  * POST: Criar uma informacao no back end
  * PUT : Alterar uma informação no back-end
  * DELETE : Deletar uma informação no back-end
  */

/**
 * Tipos de parâmetros:
 * 
 * query params: Paramêtros NOMEADOS enviados na rota após "?" (filtros, paginação)
 * ex.:
 * app.get('/alunos',(request,response) => {
 *
 *   const params = request.query;
 *
 *   console.log(params);
 *
 *   return response.json({
 *       evento:'Semana OmniStack 11.0',
 *       aluno:'Marcelo Vieira',
 *       endereco:{rua:'alga verde',numero:77,bairro:'Jardim Guanabara'},
 *       arraia:[1,2,'pin',4,5,'pin']
 *   })
 * });
 *
 * Route Params: Paramêtros ultilizados para identificar recursos
 * 
 *   ex.:
 * app.get('/alunos/:id',(request,response) => {
 *
 *   const id = request.params;
 *
 *   console.log(id);
 *
 *   return response.json({
 *       evento:'Semana OmniStack 11.0',
 *       aluno:'Marcelo Vieira',
 *       endereco:{rua:'alga verde',numero:77,bairro:'Jardim Guanabara'},
 *       arraia:[1,2,'pin',4,5,'pin']
 *   })
 * });
 * 
 * Request Body : Corpo da requisição, ultilizado para criar ou alterar  
 * 
  *   ex.:
 * app.get('/alunos',(request,response) => {
 *
 *   const body = request.body;
 * 
 *  {converter para json app.use(express.json()); o requesrt retorna como json }
 * 
 *   console.log(body);
 *
 *   return response.json({
 *       evento:'Semana OmniStack 11.0',
 *       aluno:'Marcelo Vieira',
 *       endereco:{rua:'alga verde',numero:77,bairro:'Jardim Guanabara'},
 *       arraia:[1,2,'pin',4,5,'pin']
 *   })
 * });
 */


 /**
  * 
  * SQL   : MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
  * NoSQL : MongoDB, CouchDB,etc
  * 
  */

app.listen(3333);