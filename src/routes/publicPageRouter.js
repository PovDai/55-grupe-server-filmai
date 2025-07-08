import express from 'express';
import { PageHome } from '../pages/public/Home.js';
import { PageMovies } from '../pages/public/Movies.js';
import { PageCategories } from '../pages/public/Categories.js';
import { PageLogin } from '../pages/public/Login.js';
import { PageRegister } from '../pages/public/Register.js';

export const publicPageRouter = express.Router();

publicPageRouter.get('/', (req, res) => res.send(new PageHome().render()));

publicPageRouter.get('/movies', (req, res) => res.send(new PageMovies().render()));

publicPageRouter.get('/categories', (req, res) => res.send(new PageCategories().render()));

publicPageRouter.get('/login', (req, res) => res.send(new PageLogin().render()));
publicPageRouter.get('/register', (req, res) => res.send(new PageRegister().render()));