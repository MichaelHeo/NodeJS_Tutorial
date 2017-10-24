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

  if(process.env.NODE_ENV == 'test'){
    return mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'Michaheo10!',
      database: 'casadocodigo_nodejs_test'
    });
  }
}

// WRAPPER
module.exports = function() {
  return connectMYSQL;
}
