"use strict";

const User = use("App/Models/User");
const UnauthorizedException = use("App/Exceptions/UnauthorizedException")
const Hash = use('Hash')

class AuthController {
  async login({ request, response, auth }) {
    const { email, password } = request.post();

    const user = await User.query().where("email", email).first();
    if (!user) {
      throw new UnauthorizedException("Email is not found");
    }

    const isCorrectPassword = await Hash.verify(password, user.password);
    if (!isCorrectPassword) {
      throw new UnauthorizedException("Email or password is invalid");
    }

    const token = await auth.attempt(email, password);

    return response.json({
      ...token,
      user: user.toJSON(),
    });
  }

  async register({ request, response, auth }) {
    const { email } = request.post();

    const user = await User.query().where("email", email).first();
    if (user) {
      throw new UnauthorizedException("Email is realdy used");
    }

    const newUser = await User.create(
      request.only(["email", "name", "password"])
    );

    const token = await auth.generate(newUser);
    return response.json({
      ...token,
      user: newUser.toJSON()
    });
  }
}

module.exports = AuthController;
