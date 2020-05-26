import next from 'next';
import config from './config';
import createServer from './lib/createServer';

const dev = config.app.env !== 'production';
const app = next({ dev });

function startServer() {
  const server = createServer(app);
  server.listen(config.app.port, (err: Error) => {
    if (err) {
      throw err;
    }
    console.log(`> 🚀 Ready on http://localhost:${config.app.port}`);
  });
}

app.prepare().then(startServer);
