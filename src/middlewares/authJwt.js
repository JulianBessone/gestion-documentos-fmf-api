import jwt from 'jsonwebtoken'
import config from '../config';
import User from '../models/User';
import Role from '../models/Role';

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["x-access-token"];

        if(!token) return res.status(403).json({message: 'No token provided'})

        const decoded = jwt.verify(token, config.SECRET);
        req.userId = decoded.id;
    
        const user = await User.findById(req.userId, {password: 0})
        if(!user) return res.status(404).json({message: "no user found"})

        next()

    } catch (error) {
        return res.status(401).json({message: "No Auth"})
    }
}

export const isModerador = async (req, res, next) =>{
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    
    for (let i = 0; i < roles.length; i++){
        if(roles[i].name === "moderador"){
            next()
            return;
        }
    }

    return res.status(403).json({message: "Moderador role is required"})
}

export const isAdmin = async (req, res, next) =>{
    const user = await User.findById(req.userId)
    const roles = await Role.find({_id: {$in: user.roles}})
    
    for (let i = 0; i < roles.length; i++){
        if(roles[i].name === "admin"){
            next()
            return;
        }
    }

    return res.status(403).json({message: "admin role is required"})
}

//token con admin y moderator: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2EzOWFmY2E5YmU2ZjY1ZjgyZmQzMiIsImlhdCI6MTY4MTUzNzQ1NSwiZXhwIjoxNjgxNjIzODU1fQ.Yk5ZErTqlZvjaWNa4pAyHmmWzzohEQ2xoALmyGkTvAI

//token con user: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0M2EzYjI3YzEyMTdhZDQ0ODc1ZDRhNCIsImlhdCI6MTY4MTUzNzgzMiwiZXhwIjoxNjgxNjI0MjMyfQ.YXyoTpjaxAe9Kf5wy-aFRpuhqWFSKciB6g2MOv5F5kQ