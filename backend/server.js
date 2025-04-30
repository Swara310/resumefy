const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

dotenv.config(); // Load environment variables

const app = express();
const server = http.createServer(app); // Create HTTP server
const io = new Server(server, {
  cors: { origin: "*" }
});


app.use(express.json()); // Middleware to parse JSON requests
app.use(cors({ origin: "*" })); // Enable CORS for all origins

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Import auth routes
//const authRoutes = require("./routes/authRoutes");
//app.use("/api/auth", authRoutes);

// Make socket.io accessible inside routes
app.set("socketio", io);

// Routes
const authRoutes = require("./routes/authRoutes");
const contactRoutes = require("./routes/contactRoutes");
app.use("/api/auth", authRoutes);
app.use("/api/contacts", contactRoutes);

// Root Route
app.get("/", (req, res) => {
  res.send("Welcome to the Authentication API");
});

// Socket.io connection
io.on("connection", (socket) => {
  console.log("🧩 New client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
