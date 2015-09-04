//student.js

var db = require(__dirname+'/../lib/mysql');  //imported to connect


exports.find = function(req,res,next){//funtion that returns all student records
      //res.send('Hello World!!!');
      db.query('SELECT * FROM students', //query fxn(mysqlstatement,callback fxn)
        function(err,rows){
          if(err) return next(err);//skip
          res.send(rows);//sends the result rows
      });
};


exports.find1 = function(req,res,next){//function for finding a particular studrecord using studid-->> localhost:5000/student/<enter id here>
      //res.send('Hello World!!!');
      db.query('SELECT * FROM students where studNo=?',[req.params.id], //query fxn(mysqlstatement, requestedparam, callback fxn)
        function(err,rows){
        
          if(err) return next(err);//skip
          
          if(rows.length==0)
            res.status(404).send(">> Student NOT FOUND!!<<");    //if no result or empty
          else res.send(rows[0]);                              //sends the resulting row
      });
};


exports.insert = function(req,res,next){//function for finding a particular studrecord using studid-->> localhost:5000/student/<enter id here>
      //res.send('Hello World!!!');
      db.query('insert into students values(?,?,?)',[req.body.studNo,req.body.name,req.body.bdate], //query fxn(mysqlstatement, requestedparam, callback fxn)
        function(err,rows){
        
          if(err) return next(err);//skip
          res.send(rows);                              //sends the resulting row
      });
};







exports.update = function(req,res,next){//function for finding a particular studrecord using studid-->> localhost:5000/student/<enter id here>
      //res.send('Hello World!!!');
      db.query('UPDATE students set ? where studNo= ? ',[req.body,req.params.id], //query fxn(mysqlstatement, requestedparam, callback fxn)
        function(err,rows){
        
          if(err) return next(err);//skip
          
           res.send(rows[0]);                              //sends the resulting row
      });
};



exports.remove = function(req,res,next){//function for finding a particular studrecord using studid-->> localhost:5000/student/<enter id here>
      //res.send('Hello World!!!');
      db.query('DELETE from students where studNo= ? ',[req.params.id], //query fxn(mysqlstatement, requestedparam, callback fxn)
        function(err,rows){
        
          if(err) return next(err);//skip
          
           res.send(rows[0]);                              //sends the resulting row
      });
};



















