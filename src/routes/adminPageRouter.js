import express from 'express';
import { PageDashboard } from '../pages/admin/Dashboard.js';
import { PageAdminCategories } from '../pages/admin/categories/Categories.js';
import { PageAdminCategoriesPublished } from '../pages/admin/categories/CategoriesPublished.js';
import { PageAdminCategoriesDraft } from '../pages/admin/categories/CategoriesDraft.js';
import { PageAdminCategoriesNew } from '../pages/admin/categories/CategoriesNew.js';
import { PageAdminMovies } from '../pages/admin/movies/Movies.js';
import { PageAdminMoviesDraft } from '../pages/admin/movies/MoviesDraft.js';
import { PageAdminMoviesNew } from '../pages/admin/movies/MoviesNew.js';
import { PageAdminMoviesPublished } from '../pages/admin/movies/MoviesPublished.js';

export const adminPageRouter = express.Router();

adminPageRouter.get('/admin', (req, res) => res.send(new PageDashboard(req).render()));

adminPageRouter.get('/admin/categories', (req, res) => res.send(new PageAdminCategories(req).render()));
adminPageRouter.get('/admin/categories/published', (req, res) => res.send(new PageAdminCategoriesPublished(req).render()));
adminPageRouter.get('/admin/categories/draft', (req, res) => res.send(new PageAdminCategoriesDraft(req).render()));
adminPageRouter.get('/admin/categories/new', (req, res) => res.send(new PageAdminCategoriesNew(req).render()));

adminPageRouter.get('/admin/movies', (req, res) => res.send(new PageAdminMovies(req).render()));
adminPageRouter.get('/admin/movies/published', (req, res) => res.send(new PageAdminMoviesPublished(req).render()));
adminPageRouter.get('/admin/movies/draft', (req, res) => res.send(new PageAdminMoviesDraft(req).render()));
adminPageRouter.get('/admin/movies/new', (req, res) => res.send(new PageAdminMoviesNew(req).render()));