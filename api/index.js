// api/index.js

const express = require("express");
const userRoutes = require("../routes/userRoutes");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the router.
// Note: Since Vercel rewrites the URL, the base path is /api
app.use("/api/users", userRoutes);

// A simple health check route
app.get("/api", (req, res) => {
  res.json({ message: "Vercel Express API is running!" });
});

// Conditionally listen if running locally
if (process.env.NODE_ENV !== "production") {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Local server is running on http://localhost:${PORT}`);
  });
}

// CRITICAL for Vercel: Export the app
module.exports = app;
