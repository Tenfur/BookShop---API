import jwt from "jsonwebtoken";

const generateJsonWebToken = (id) => {
    return new Promise((resolve, reject) => {
        const payload = {id};
        jwt.sign(payload, process.env.SECRET_KEY,{
            expiresIn: "4h"
        }, (err, token) => {
            if(err){
                reject("There's an error")
            }
            else{
                resolve(token)
            }
        })
    });
}

export default generateJsonWebToken;