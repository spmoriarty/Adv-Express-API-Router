const cats = [{name: 'Garfield', thickness: 'Very'}, {name: 'Sylvester', thickness: 'Slim Jim'}];

export default {

  

  get(req, res) {
    res.write(JSON.stringify(cats));
    res.statusCode = 200;
    res.end();
  },
  post(req, res) {
    cats.push(req.body);
    res.statusCode = 204;
    res.end();
  },
  put(req, res) {
    const index = cats.findIndex(cat => cats.name === req.body.name);
    cats.splice(index, 1, req.body);
    res.write(JSON.stringify(cats));
    res.statusCode = 200;
    res.end();
  },
  delete(req, res) {
    cats.pop();
    res.statusCode = 204;
    res.end();
  },
};
