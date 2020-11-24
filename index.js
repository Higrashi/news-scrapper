const express = require('express');
const bodyParser =require('body-parser');
const cors = require('cors');
const app = express();
const path = require('path');
const scrapper = require('./functions');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
require('dotenv').config()
app.use(cors());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
  
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }

  // Get article link from client
  app.post('/api/article/',(req,res) => {
    
    const getArticle = async () => await scrapper(req.body.url);
    
    getArticle().then((resp) => {
      res.send(resp)
    }).catch(err => {
      console.log(err)
      res.send(err)
    })
      
  })


const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`running on  ${PORT}`);
})