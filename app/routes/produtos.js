module.exports = function(app) {

  app.get('/produtos', function(req, res, next){
    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);

    produtosDAO.lista(function(err, result) {
      if(err){
        return next(err);
      }

      res.format({
        html: function() {
          res.render('produtos/lista', {lista:result});
        },
        json: function() {
          res.json(result);
        }
      });
    });

    connection.end();
  });

  app.get('/produtos/form', function(req, res) {
    res.render('produtos/form',
      {
        errosValidacao: {},
        produto:{}
      });
  });

  app.post('/produtos', function(req, res){

    var produto = req.body;

    req.assert('titulo', 'Titulo é obrigatório').notEmpty();
    req.assert('preco', 'Formato Inválido').isFloat();

    var erros = req.validationErrors();
    if(erros){
      res.format({
        html: function(){
          res.status(400).render('produtos/form',{errosValidacao: erros});
        },
        json: function(){
          res.status(400).json(erros);
        }
      });
      return;
    }

    var connection = app.infra.connectionFactory();
    var produtosDAO = new app.infra.ProdutosDAO(connection);
    produtosDAO.salva(produto, function(erros, resultados){
      console.log(erros);
      res.redirect('/produtos')
    })

  })

}
