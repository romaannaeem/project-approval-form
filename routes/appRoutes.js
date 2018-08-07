const mongoose = require('mongoose');
const Form = mongoose.model('forms');

module.exports = app => {
  app.get('/test', (req, res) => {
    res.send('Hi');
  });

  app.post('/api/send', (req, res) => {
    const {
      firstName,
      lastName,
      company,
      contactEmail,
      domain,
      dateSent,
      approvedBy
    } = req.body;

    const submission = new Form({
      firstName,
      lastName,
      company,
      contactEmail,
      domain,
      dateSent: Date.now(),
      approvedBy
    });
    submission.save();
  });
};
