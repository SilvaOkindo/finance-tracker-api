import jwt from 'jsonwebtoken'
import { CustomError } from '../utils/custom-error.js'
import { JWT_SECRET } from '../helpers/dotenv-secrets.js'

export const verifyToken = (req, res, next) => {
    let token
    const authHeaders = req.headers.authorization || req.headers.Authorization

    if(authHeaders && authHeaders.startsWith('Bearer')) {
        token = authHeaders.split(' ')[1]
    }

    if(!token) {
        return next(new CustomError(403, "No token provided, authorization needed"))
    }

    try {

        const decoded = jwt.verify(token, JWT_SECRET)
    req.user = decoded
    next()
        
    } catch (error) {
        next(error)
    }
}