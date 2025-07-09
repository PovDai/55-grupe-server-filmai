import express from 'express';
import { PORT } from './env.js';
import { PageError404 } from './pages/public/Error404.js';
import { publicApiRouter } from './routes/publicApiRouter.js';
import { cookieParser } from './middleware/cookieParser.js';
import { userData } from './middleware/userData.js';
import { publicPageRouter } from './routes/publicPageRouter.js';
import { adminPageRouter } from './routes/adminPageRouter.js';


const app = express();

app.use(cookieParser);
app.use(userData);




app.use(express.json()); // reikalinga isparsinti json faila kad suvaiksciotu 
app.use(express.static('public'));
app.use('/', publicPageRouter);
app.use('/', publicApiRouter);
app.use('/', adminPageRouter);


app.get('*error', (req, res) => res.send(new PageError404(req).render()));

app.listen(PORT, () => {
    console.log(`WEB URL: http://localhost:${PORT}`);
});