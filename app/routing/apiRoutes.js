var tableData=require('../data/tables.js');

var waitListData=require('../data/waitlist.js');

var path=require('path');


//Routing
module.exports=function(app){
  app.get('/api/tables', function(req,res){
    res.json(tableData);
  });

  app.get('/api/waitlist', function(req,res){
    res.json(waitListData);
  });

  //api post request
  app.post('/api/tables', function (req,res){
    if(tableData.length<5){
      tableData.push(req.body);
      res.json(true);
    }
  })
}
