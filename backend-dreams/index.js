const express = require('express');
const authRoutes = require('./routes/auth.js');

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.listen(8800, () => {
  console.log("Connected!");
});