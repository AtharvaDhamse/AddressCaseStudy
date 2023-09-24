const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// MySQL Database Connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'manager',
    database: 'fb',
  });

  db.connect((err) => {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to MySQL database as id ' + db.threadId);
  });

  // API endpoints for CRUD operations
app.get('/api/profiles', (req, res) => {
    const sql = 'SELECT * FROM profiles';
  
    db.query(sql, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      } else {
        res.json(result);
      }
    });
  });

  app.post('/api/profiles', (req, res) => {
    const { name, photo, description } = req.body;
    const sql = 'INSERT INTO profiles (name, photo, description) VALUES (?, ?, ?)';
  
    db.query(sql, [name, photo, description], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      } else {
        res.status(201).json({ message: 'Profile created' });
      }
    });
  });
  
  app.put('/api/profiles/:id', (req, res) => {
    const { name, photo, description } = req.body;
    const { id } = req.params;
    const sql = 'UPDATE profiles SET name = ?, photo = ?, description = ? WHERE id = ?';
  
    db.query(sql, [name, photo, description, id], (err, result) => {
      if (err) {
        console.error(err);
      res.status(500).json({ message: 'Server error' });
    } else {
      res.json({ message: 'Profile updated' });
    }
  });
});

app.delete('/api/profiles/:id', (req, res) => {
    const { id } = req.params;
    const sql = 'DELETE FROM profiles WHERE id = ?';
  
    db.query(sql, [id], (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
      } else {
        res.json({ message: 'Profile deleted' });
      }
    });
  });
  
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });


  

