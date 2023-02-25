"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
// Esta función se ejecutará primero para validar el /profile
const requireAuth = (req, res, next) => {
    // Bearer token
    const authHeader = req.headers.authorization;
    if (!authHeader)
        return res.status(401).json({
            message: 'Unauthorized'
        });
    const token = authHeader.split(' ')[1];
    if (!token)
        return res.status(401).json({
            message: 'Unauthorized'
        });
    // Verificar el token
    jsonwebtoken_1.default.verify(token, 'secret', (err, user) => {
        if (err)
            return res.status(403).json({
                message: 'Unauthorized'
            });
        // Si el token es válido, se ejecuta el siguiente middleware
        req.user = user;
        next();
    });
    next();
};
exports.requireAuth = requireAuth;
