import jwt from 'jsonwebtoken';

import config from '../config/config';
const authMiddleware = async (req, res, next) => {
    try{
        const token = req.cookies.loginToken;
        if(!token){
            return res.status(401).json({
                error: "Unauthorized"
            });
        }
        const decoded = jwt.verify(token, config.JWT_SECRET);
        req.user = decoded;
        next();
    }catch(err){
        next(err);
    }
}

export default authMiddleware;