// controllers/userController.js

const getUsers = (req, res) => {
  res.status(200).json({
    message: "Success",
    data: [
      { id: 1, name: "Alice" },
      { id: 2, name: "Bob" }
    ]
  });
};

const createUser = (req, res) => {
  const { name } = req.body;
  res.status(201).json({
    message: "User created successfully",
    user: { id: 3, name: name || "Unknown" }
  });
};

module.exports = {
  getUsers,
  createUser
};