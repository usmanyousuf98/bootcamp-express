const { create, authenticate, find } = require("../services/users");

const handleSignup = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await find({ email });

    if (user) {
      throw new Error("Email already exists!");
    }
    // Create a token for the user
    const { token } = await create({ name, email, password });
    console.log("yoyo");

    // Send a token to the client when a user signs up
    res.json({ token });
    console.log(token);
  } catch (error) {
    next(error);
  }
};

const handleLogin = async (req, res, next) => {
  console.log("reqq ", req.body);
  try {
    const { email, password } = req.body;
    const user = await find({ email });

    if (!user) {
      throw new Error("Unable to login");
    }

    // Create a token for the user, if successfully authenticated
    const token = await authenticate({ email, password });

    res.json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  handleSignup,
  handleLogin,
};
