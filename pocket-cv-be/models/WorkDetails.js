const mongoose = require('mongoose');

const workDetails = new mongoose.Schema({
  id: { type: String, required: false },
  pName: { type: String, required: true },
  desc:{ type:String, required:true },
  stack:{ type:String, required:true },
  role:{ type : String ,required:true },
  responsibilities:{ type :String, required:true },
  size:{ type:String, reuired:true }
},{ collection: 'projects'});

module.exports = mongoose.model('WorkDetails', workDetails);
