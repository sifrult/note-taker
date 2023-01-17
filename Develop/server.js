const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;
const notes = require('./routes/notes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/notes', notes);
app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes
app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, '/public/notes.html'))
)

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
