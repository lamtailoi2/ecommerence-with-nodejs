import userModel from "../models/userModel.js";
import JwtService from "./jwt.service.js";
import AppError from "./errorService.js";
import refreshTokenModel from "../models/refreshToken.js";

class AccessService {
  static signUp = async (email, username, password, confirmPassword) => {
    const foundEmail = await userModel.findOne({ email }).lean();
    const foundUsername = await userModel.findOne({ username }).lean();
    if (foundEmail) {
      throw new AppError("Email is existed", 401);
    }
    if (foundUsername) {
      throw new AppError("Username is existed", 401);
    }

    const user = await userModel.create({
      email,
      username,
      password,
      confirmPassword,
    });
    const { accessToken, refreshToken } = await JwtService.createToken(
      user._id,
      user.email,
      user.role
    );
    await refreshTokenModel.create({
      userId: user._id,
      refreshToken,
    });
    // if (!user)
    //     throw new AppError("User is existed", 401);
    return {
      user,
      accessToken,
    };
  };
  static signIn = async (email, password) => {
    const user = await userModel
      .findOne({
        email,
      })
      .select("+password");
    if (!user) throw new AppError("User not found!!!", 401);
    if (!(await user.comparePassword(password, user.password)))
      throw new AppError("Password is not correct!!!", 401);
    const { accessToken, refreshToken } = await JwtService.createToken( //generate token
        user._id,
        user.email,
        user.role
      );
    const found = await refreshTokenModel.findOne({
      userId: user._id,
    });
    // console.log(user._id);
    // console.log(
    //   await refreshTokenModel.findOne({
    //     userId: user._id,
    //   })
    // );
    if (!found) {
        await refreshTokenModel.create({
            userId: user_id,
            refreshToken
        })
    } else {
        await refreshTokenModel.findOneAndUpdate({
            userId: user._id
        }, {
            refreshToken
        })
    }
    return {
      user,
      accessToken,
    };
  };
}

export default AccessService;
