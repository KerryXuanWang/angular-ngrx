const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const DB = require('./db.json');

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(
  jsonServer.rewriter({
    '/api/v1/*': '/$1',
  }),
);

// Add custom routes before JSON Server router
server.get('/total-users', (req, res) => {
  const { gender } = req.query;
  if (!gender || Array.isArray(gender)) {
    return res.status(200).json(DB.users.length);
  }
  res.status(200).json(DB.users.filter((u) => u.gender === gender).length);
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running at port 3000.');
});
