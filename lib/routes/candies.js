


export default {
  get(req, res) {
    res.write(JSON.stringify(candies));
        res.end();
  },
  post(req, res) {},
};
