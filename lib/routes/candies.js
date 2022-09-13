const candies = [{ name: 'Mars Bars', type: 'Chocolate Bar'}, {name: 'Skittles', type: 'Fruity'}];



export default {

  name: 'Sugary stuff',

  get(req, res) {
    res.write(JSON.stringify(candies));
        res.end();
  },
  post(req, res) {
    candies.push(req.body);
    res.statusCode = 204;
    res.end();
  },

  put(req, res) {
    const index = candies.findIndex(candy => candies.name === req.body.name);
    candies.splice(index, 1, req.body);
    res.write(JSON.stringify(candies));
    res.end();
  },

  delete(req, res) {
    res.statusCode = 400;
    res.send('Dont delete them, just give them away')
  },

};
