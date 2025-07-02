import express from 'express';
import { PORT } from './env.js';
import { PageHome } from './pages/Home.js';
import { PageError404 } from './pages/Error404.js';
import { PageCategories } from './pages/Categories.js';
import { PageRegister } from './pages/Register.js';
import { PageMovies } from './pages/Movies.js';
import { PageLogin } from './pages/Login.js';
import { PageTest } from './pages/Something.js';
import { publicRouter } from './routes/publicRouter.js';


const app = express();


app.use(express.static('public'));
app.use('/',publicRouter)



app.get('*error', (req, res) => res.send(new PageError404().render()));

app.listen(PORT, () => {
    console.log(`WEB URL: http://localhost:${PORT}`);
});