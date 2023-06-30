const mongoose = require('mongoose');

const connectDatabase = async () => {
  try {
    await mongoose.connect('mongodb+srv://lekha:Lekhapass@cluster0.f03h823.mongodb.net/Database1?retryWrites=true&w=majority', {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Database connection error:', error);
  }
};

module.exports = connectDatabase;
