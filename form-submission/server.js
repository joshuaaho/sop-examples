import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

// Middleware to parse the request body
app.use(bodyParser.urlencoded({ extended: true }));

// Handle form submission
app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  console.log(`Name: ${name}, Email: ${email}`);
  res.send(`Thank you, ${name}! Your email (${email}) has been received.`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
