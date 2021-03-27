const Item = require('../item');
const express = require('express');

const router = express.Router();

/** GET / => [item, ...] */
router.get('', (req, res, next) => {
    try {
      return res.json({ items: Item.findAll() });
    } catch(err){
      return next(err)
    }
  });