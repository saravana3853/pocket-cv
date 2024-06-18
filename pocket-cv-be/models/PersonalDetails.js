const mongoose = require('mongoose');

const personalDetails = new mongoose.Schema({
  name: { type: String, required: true },
  tagline: { type: String, required: true },
},{ collection: 'personal_details'});

module.exports = mongoose.model('PersonalDetails', personalDetails);
