import express from "express";
import path from "path";

const app = express();
const port = 3000;

// Serve the image
app.get("/image", (req, res) => {
  console.log("RECEIVED");
  const imagePath = path.join(import.meta.dirname, "image.png"); // Replace with your image filename
  res.sendFile(imagePath);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
