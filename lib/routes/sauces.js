const sauces = [{ sauce: 'buffalo', type: 'hot' }, { sauce: 'Ranch', type: 'savory' }];



export default {
    name : 'sauces',

    get(req, res) {
        res.write(JSON.stringify(sauces));
        res.end();
    },
    post(req, res) {
        sauces.push(req.body);
        res.statusCode = 204;
        res.end();
    },
    put(req, res) {
        const index = sauces.findIndex(sauce => sauces.sauce === req.body.sauce);
        sauces.splice(index, 1, req.body);
        res.write(JSON.stringify(sauces));
        res.end();

    },

    delete(req, res) {
        res.statusCode =  400;
        res.send('Never throw out half empty sauces')
    },
  };