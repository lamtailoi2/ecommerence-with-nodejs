import userModel from "../models/userModel.js";
import AppError from "./errorService.js";

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
    console.log(user);
    // if (!user)
    //     throw new AppError("User is existed", 401);
    return user;
  };
  static signIn = async (email, password) => {
    const user = await userModel
      .findOne({
        email,
      })
      .select("+password")
    console.log(user.password); 
    console.log(await user.comparePassword(password, user.password));
    if (!user) 
        throw new AppError("User not found!!!", 401);
    if ( !(await user.comparePassword(password, user.password)))
      throw new AppError("Password is not correct!!!", 401);
    
    return user;
  };
}

export default AccessService;
