var express = require('express');
var router = express.Router();
const username="gladson"
const password="12345"

/* GET home page. */
router.get('/', function(req, res, next) {
  
  res.render('index');
});  
router.post('/login',(req,res)=> {

if(username==req.body.username && password==req.body.password)
{
  console.log("succes");
  res.redirect('/home')
}
else

{
  res.redirect('/login')
}
})

module.exports = router;
