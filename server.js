const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the 'professional' folder

app.use(express.static(path.join(__dirname, 'professional')));

// Handle form submission

app.post('/submit-contact', (req, res) => {
  console.log(req.body);  // Log submitted form data
  res.send('Form submitted successfully!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

