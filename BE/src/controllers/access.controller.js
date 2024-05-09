import AccessService from "../services/access.service.js";
import AppError from "../services/errorService.js";

class AccessController {
  signUp = async (req, res, next) => {
    const { email, username, password, confirmPassword } = req.body;
    if (!email) next(new AppError("Email is empty", 401));
    if (!username) next(new AppError("Username is empty", 401));
    if (!password) next(new AppError("Password is empty", 401));
    if (!confirmPassword || confirmPassword !== password)
      next(new AppError("Confirm Password is not match", 401));
    const { user, accessToken } = await AccessService.signUp(
      email,
      username,
      password,
      confirmPassword
    );
    if (!user) next(new AppError("User is existed"));
    res.json({
      metadata: user,
      token: accessToken,
      status: "successful"
    });
  };

  signIn = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email) next(new AppError("Email is empty", 401));
    if (!password) next(new AppError("Password is empty", 401));
    const { user, accessToken} = await AccessService.signIn(
      email,
      password
    )
    console.log(user)
    if (!user) next (new AppError("User is not existed", 401))
    res.json({
      status: "successful",
      token: accessToken,
      metadata: user,
  })
  };
}

export default new AccessController();
