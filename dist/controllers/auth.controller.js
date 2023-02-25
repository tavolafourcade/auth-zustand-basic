"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileHandler = exports.loginHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginHandler = (req, res) => {
    const token = jsonwebtoken_1.default.sign({
        test: 'test'
    }, 'secret', {
        expiresIn: '100d'
    });
    return res.json({
        token
    });
};
exports.loginHandler = loginHandler;
// Solo llegaría a esta ruta si está protegida por el middleware de autenticación
const profileHandler = (req, res) => {
    return res.json({
        message: 'Profile data'
    });
};
exports.profileHandler = profileHandler;
