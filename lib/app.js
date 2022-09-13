import cats from './routes/cats.js';
import candies from './routes/candies.js';
import sauces from './routes/sauces.js';
import notFound from './not-found.js';

const routes = {
  cats,
  candies,
  sauces,
};

export default async function (req, res) {
  const httpMethod = req.method.toLowerCase();
  const urlSegments = req.url.split('/');
  if (urlSegments.length && urlSegments[0] === 'api' ) {
    req.body = await bodyParser(req);
  }
  const resourcePath = urlSegments[urlSegments.length[1]];
  const resource = routes[resourcePath];
  const handler = resource[httpMethod];


  handler(req, res);
  return;
  }


