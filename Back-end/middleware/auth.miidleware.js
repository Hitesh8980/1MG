const jwt =require('jsonwebtoken')
const authenticateToken=(req,res,next)=>{
    const token =req.headers.authorization.split(' ')[1]
    if(!token){
         return res.sendStatus(401); //(Token is null, unauthorized)
    }else{
        jwt.verify(token,process.env.SECRET_KEY,(err,decoded)=>{
            if (err) return res.sendStatus(403); //Token is invalid or expired, forbidden
            req.user=decoded;
            next()
        })
    }

}
module.exports= authenticateToken