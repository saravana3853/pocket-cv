const mongoose = require('mongoose');

const MONGO_URI = 'mongodb+srv://mongo_user:mongo_user@cluster0.knd28qu.mongodb.net/personal_db?retryWrites=true&w=majority&appName=Cluster0';

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });
