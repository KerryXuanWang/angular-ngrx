const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(
  jsonServer.rewriter({
    '/api/v1/*': '/$1',
  }),
);

// Add custom routes before JSON Server router
server.get('/echo/admin', (req, res) => {
  res.jsonp(req.query);
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running at port 3000.');
});
