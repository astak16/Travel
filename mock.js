const city = require('./static/mock/city.json');
const detail = require('./static/mock/detail.json');
const index = require('./static/mock/index.json');

function Mock(app) {
  app.get('/city', function(req, res) {
    console.log('getPower111');
    res.json(city);
  });
  app.get('/detail', function(req, res) {
    console.log('reConfig111');
    res.json(detail);
  });
  app.get('/index', function(req, res) {
    console.log('reConList111');
    res.json(index);
  });
}

module.exports = Mock;
