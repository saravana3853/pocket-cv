const express = require('express');
const router = express.Router();
const PersonalDetails = require('../models/PersonalDetails');

router.get('/details', async (req, res) => {
  try {
    const details = await PersonalDetails.find();
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/save', async (req, res) => {
  try {
    console.log(req.body.name);
    console.log(req.body.tagline);
    const details = new PersonalDetails({
      name: req.body.name,
      tagline: req.body.tagline 
    });
    
   const result =await details.save();
   res.status(204).json({});

  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

