const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/nails', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for storing user tokens
const userTokenSchema = new mongoose.Schema({
  token: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: '7d' } // Token expires after 7 days
});

const UserToken = mongoose.model('UserToken', userTokenSchema);

app.post('/send-notification', async (req, res) => {
  const { token, title, body } = req.body;

  // Save the token to the database
  const userToken = new UserToken({ token });
  await userToken.save();

  // Here you would implement the logic to send the notification using a service like web-push
  // For example, using web-push library to send notifications

  res.status(200).json({ success: true, message: 'Notification sent' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});