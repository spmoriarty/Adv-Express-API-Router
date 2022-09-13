const sauces = [{ sauce: 'buffalo', type: 'hot' }, { sauce: 'Ranch', type: 'savory' }];
const saucesExample = [];


export default {

    get(req, res) {
        res.write(JSON.stringify(sauces));
        res.end();
    },
    post(req, res) {
        req.body()
        const sauce = req.body;
        sauces.push(sauce)
        res.write(JSON.stringify(sauces));
        res.end();
    },
    put(req, res) {

    },
    delete(req, res) {
        res.statusCode =  400;
        res.send('Never throw out half empty sauces')
    },
  }