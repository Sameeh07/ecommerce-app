const express = require("express");
const productRoutes = require("./routes/productRoutes");

const app = express();

// Serve static files from the 'public' folder
app.use(express.static("public"));

// API routes
app.use("/api", productRoutes);

// Root route for the homepage
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Use an environment variable for the PORT (important for Docker & Kubernetes)
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
