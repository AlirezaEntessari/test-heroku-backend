require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const pool = require('./db');

app.use(cors());
app.use(express.json()); // Add this line to parse JSON request bodies

app.get("/test", async (req, res) => {
    try {
      const { rows, fields } = await pool.query("SELECT * FROM test_table;");
      const columnNames = fields.map((field) => field.name);
      res.json({ columnNames, rows });
    } catch (error) {
      console.error("Error fetching table data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.get("/test-2", async (req, res) => {
    try {

      res.json('test');
    } catch (error) {
      console.error("Error fetching table data:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));



  