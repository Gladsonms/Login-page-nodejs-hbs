var express = require('express');
const session = require('express-session');
var router = express.Router();
const username="gladson"
const password="12345"

/* GET home page. */
router.get('/', function(req, res, next) {
  
  if(req.session.loggedIn)
  {
   res.redirect('/home') 
  }
  else
  {

    res.render('index');
  }
});  
let response={};
router.post('/login',(req,res)=> {

if(username==req.body.username && password==req.body.password)
{

  
  req.session.loggedIn=true;
  req.session.name=username;
  req.session.password=password;
  
  res.redirect('/home')
  
  
}
else

{

  res.render('index',{message:"Please enter valid username and password"})
}
})
router.get('/logout',(req,res)=> {
  req.session.destroy()
  res.redirect('/')
})

module.exports = router;
