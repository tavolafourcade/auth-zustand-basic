"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const requireAuth_1 = require("../middlewares/requireAuth");
const router = (0, express_1.Router)();
router.post('/login', auth_controller_1.loginHandler);
/*
  El middleware de autenticación se ejecuta antes de la función de controlador
*/
router.get('/profile', requireAuth_1.requireAuth, auth_controller_1.profileHandler);
exports.default = router;
