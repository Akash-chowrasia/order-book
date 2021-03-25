import './modules/db';
import { finishApp, getAnApp } from './app';

const PORT = 8001;

const app = getAnApp();


finishApp(app);

(async () => {
  try {
    await app.listen(PORT);
    console.log('-------   Server Started  ------');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
})();
