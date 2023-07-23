const express = require('express');
const router = express.Router();
const users = require('../models/UsersSchema');

// Add the express.json() middleware to parse the request body
router.use(express.json());

// register user
router.post('/register', async (req, res) => {
  const { name, email, age, phone, work, address, description } = req.body;

  if (!name || !email || !age || !phone || !work || !address || !description) {
    return res.status(422).json('Please fill all the required data');
  }

  try {
    const preuser = await users.findOne({ email: email });

    if (preuser) {
      return res.status(422).json('This user is already present');
    } else {
      const adduser = new users({
        name,
        email,
        age,
        phone,
        work,
        address,
        description,
      });

      await adduser.save();
      res.status(201).json(adduser);
      console.log(adduser);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json('Server Error');
  }
});

// delete users
router.delete('/delete', async (req, res) => {});

module.exports = router;
