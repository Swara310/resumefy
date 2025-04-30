const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");

// POST /api/contacts - save a contact form submission
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Please fill in all fields" });
    }

    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // (Optional) Emit event using Socket.io if you want
    req.app.get("socketio").emit("newContact", newContact);

    res.status(201).json({ message: "Message received successfully!" });
  } catch (error) {
    console.error("Error saving contact:", error);
    res.status(500).json({ message: "Server error. Please try again later." });
  }
});

module.exports = router;
