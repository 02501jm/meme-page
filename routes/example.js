const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) =>{
  res.render('example', {title:'example'});
});

module.exports = router;