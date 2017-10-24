var mysql = require('mysql');
// FACTORY METHOD 
var connectMYSQL = function() {
  if(!process.env.NODE_ENV){
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Michaheo10!',
      database: 'casadocodigo_nodejs'
    });
  }

  if(process.env.NODE_ENV == 'production'){
    //var urlDeConexao = process.env.CLEARDB_DATABASE_URL;
    //var grupos = urlDeConexao.match(/mysql:\/\/(.*):(.*)@(.*)\/(.*)\?reconnect=true/);
    return mysql.createConnection({
      host: 'us-cdbr-iron-east-05.cleardb.net',
      user: 'b43745cbd4ac7f',
      password: '93b51f67',
      database: 'heroku_4ad6e71ed4ab6e2'
    });
  }
}

// WRAPPER
module.exports = function() {
  return connectMYSQL;
}
