import {Schema, model} from "mongoose"

/*
    1. create schema

*/

const refreshTokenSchema = new Schema ({
    userId: {
        type: String,
        require: true,
        unique: true,
    },
    refreshToken: {
        type: String,
        require: true,
        unique: true,
    },
    date: {
        type: Date,
        default: Date.now()
    }
}, {
    collection: "refreshTokens"
})

const refreshTokenModel = model("refreshTokens", refreshTokenSchema)
export default refreshTokenModel