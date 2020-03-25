const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);
/**
 * Metodos HTTP:
 * GET: Buscar/Listar uma informação do back-end
 * POST: Criar uma informação do back-end
 * PUT: Alterar uma informação do back-end
 * DELETE: Deletar uma inforamação no back-end
 */

 /**
  * Tipos de parâmetros:
  * Query Params: Parâmetros nomeados enviados na rota após o "?" (Filtros, Paginação etc...)
  * Route Params: Parâmetros utilizados para identificar recursos (ex: tabela do banco que quer buscar os dados )
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
  */

  /**
   * SQL: MySQL, SQLite, PostGreSQL, Oracle
   * NoSQL: MongoDB, CouchDB, etc...
   */

   /**
    * Driver: SELECT * FROM users
    * Query Builder: table('users').select('*').where()
    */

app.listen(3333);