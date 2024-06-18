const express = require('express');
const router = express.Router();
const WorkDetails = require('../models/WorkDetails');

router.get('/details', async (req, res) => {
  try {
    const details = await WorkDetails.find();
    res.json(details);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});


router.post('/save', async (req, res) => {
  try {
    const details = new WorkDetails({
      pName: req.body.pName,
      desc: req.body.desc,
      stack: req.body.stack,
      role: req.body.role,
      responsibilities: req.body.responsibilities,
      size: req.body.size,
    });

   const result =await details.save();
   res.status(204).json({});

  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;

