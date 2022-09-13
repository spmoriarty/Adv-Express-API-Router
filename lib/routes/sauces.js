const sauces = [{ sauce: 'buffalo', type: 'hot' }, { sauce: 'Ranch', type: 'savory' }];

// const body = [{ sauce: '', type: ''}];


export default {
    name : 'sauces',

    get(req, res) {
        res.write(JSON.stringify(sauces));
        res.end();
    },
    post(req, res) {
        sauces.push(req.body);
        res.status = 204;
        res.end();
    },
    put(req, res) {
        sauces.splice(sauces.length - 1, 1, req.body);
        res.write(JSON.stringify(sauces));
        res.end();

    },
    delete(req, res) {
        res.statusCode =  400;
        res.send('Never throw out half empty sauces')
    },
  }