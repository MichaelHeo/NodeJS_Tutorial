function ProdutosDAO(connection){
  this._connection = connection; 
  // A gente coloca _ para dizer que é privado
}

// Prototype define a estrutura padrão da classe
ProdutosDAO.prototype.lista = function(callback) {
  this._connection.query('select * from produtos', callback);
}

ProdutosDAO.prototype.salva = function(produto, callback) {
  this._connection.query('insert into produtos set ?', produto, callback);
}

module.exports = function() {
  return ProdutosDAO;
}
