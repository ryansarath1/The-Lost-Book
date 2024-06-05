const mongoose = require('mongoose');

const mongoURI = process.env.MONGO_URI || 'mongodb+srv://ryan:Winners123@cluster0.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
