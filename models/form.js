const mongoose = require('mongoose');
const { Schema } = mongoose;

const formSchema = new Schema({
  firstName: String,
  lastName: String,
  company: String,
  contactEmail: String,
  domain: String,
  dateSent: Date,
  approvedBy: String
});

mongoose.model('forms', formSchema);
