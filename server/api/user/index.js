'use strict';

import {Router} from 'express';
import * as controller from './user.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/', auth.hasRole('admin'), controller.index);
router.post('/', auth.hasRole('admin'), controller.create);
router.get('/me', auth.isAuthenticated(), controller.me);
router.get('/:id', auth.isAuthenticated(), controller.show);
router.post('/resetPassword', auth.hasRole('admin'), controller.resetPassword);
router.post('/login', controller.login);
router.post('/logout', auth.isAuthenticated(), controller.logout);

module.exports = router;
