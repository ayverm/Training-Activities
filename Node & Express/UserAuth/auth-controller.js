const storage = require("node-persist");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
async function register(req, res) {
  const { name, username, email, password } = req.body;
  if (!name || !email || !username || !password) {
    return res.status(400).send({ message: "Allfileds are mandatory" });
  }

  const user = await storage.getItem(email);
  if (user) {
    return res.status(400).send({ message: "Enail id already registered" });
  }

  const hashPassword = await bcrypt.hash(password, 10);
  const newUser = {
    name,
    username,
    email,
    password: hashPassword,
  };

  const resp = await storage.setItem(email, newUser);
  res.status(201).send({ message: "User Registered successfully", resp });
}

async function login(req, res) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send({ message: "Allfileds are mandatory" });
  }

  const user = await storage.getItem(email);
  if (!user) {
    return res.status(400).send({ message: "Enail id not registered" });
  }

  const check = await bcrypt.compare(password, user.password);
  if (check) {
    const token = jwt.sign(user.email, "iamayushverma");
    res.cookie("token", token);
    res
      .status(200)
      .send({ message: "User Logged in successfully", user, token });
  } else {
    res.status(403).send({ message: "Invalid Credentials" });
  }
}

async function changePassword(req, res) {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    return res.status(400).send({ message: "Allfileds are mandatory" });
  }

  const email = req.email;
  const user = await storage.getItem(email);
  if (!user) {
    return res.status(400).send({ message: "Enail id not registered" });
  }

  const pw = user.password;
  console.log(oldPassword);
  const check = await bcrypt.compare(oldPassword, pw);
  if (check) {
    user.password = await bcrypt.hash(newPassword, 10);
    storage.setItem(email, user);
    return res
      .status(200)
      .send({ message: "User password changed successfully" });
  } else {
    return res
      .status(403)
      .send({ message: "Password not matching with current password" });
  }
}
module.exports = { register, login, changePassword };
