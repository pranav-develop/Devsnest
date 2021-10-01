var express = require('express');
var router = express.Router();

var registerInitialCheck = require('../middleware/registerChecks');
var register = require('../controllers/regsiterController');

/* GET home page. */
router.get('/', function (req, res, next) {
  const sess = req.session;
  sess.username = 'rachit';
  sess.hi = 'afldsaf';
  console.log(sess)
  res.render('index', { title: 'Express' });
});


/**
 * @requires { email, firstName, lastName, password, confirmPassword} - req.body
 * @description
 * Security, Performance, Edge-cases
 * email validation - abc@x.com
 * password validation - min 6
 * password === confirm
 * JS / SQL injection

 */
router.post('/register', registerInitialCheck, register)

module.exports = router;
