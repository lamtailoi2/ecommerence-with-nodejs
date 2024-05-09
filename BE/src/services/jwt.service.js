import jwt from "jsonwebtoken"
import refreshTokenModel from "../models/refreshToken.js";
class jwtService {
    static createToken = async (id, email, role) => {
        const payload = {
            id, email, role
        }
        const accessToken = jwt.sign(payload, process.env.SECRET_ACCESS_TOKEN, {expiresIn: "30 seconds"})
        const refreshToken = jwt.sign(payload, process.env.SECRET_REFRESH_TOKEN, {expiresIn: "1 days"})
        // await refreshTokenModel.create({
        //     userId: id, refreshToken
        // })
        return {accessToken, refreshToken}
    }
}

export default jwtService