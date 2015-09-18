//student.js

var db = require(__dirname+'/../lib/mysql');  //imported to connect


exports.find = function(req,res,next){//funtion that returns all student records
      //res.send('Hello World!!!');

      console.log(req.ip+"find()");
      db.query('SELECT * FROM student', //query fxn(mysqlstatement,callback fxn)
        function(err,rows){
          if(err) return next(err);//skip
          res.send(rows);//sends the result rows
      });
};


exports.find1 = function(req,res,next){//function for finding a particular studrecord using studid-->> localhost:5000/student/<enter id here>
      //res.send('Hello World!!!');

       console.log(req.ip+"find1()");
      db.query('SELECT * FROM student where studNo=?',[req.params.id], //query fxn(mysqlstatement, requestedparam, callback fxn)
        function(err,rows){
        
          if(err) return next(err);//skip
          
          if(rows.length==0)
            res.status(404).send(">> Student NOT FOUND!!<<");    //if no result or empty
          else res.send(rows[0]);                              //sends the resulting row
      });
};


exports.insert = function(req,res,next){//function for finding a particular studrecord using studid-->> localhost:5000/student/<enter id here>
      //res.send('Hello World!!!');
      db.query('insert into student values(?,?,?)',[req.body.studNo,req.body.name,req.body.bdate], //query fxn(mysqlstatement, requestedparam, callback fxn)
        function(err,rows){
        
          if(err) return next(err);//skip
          res.send();                              //sends the resulting row
      });
};







exports.update = function(req,res,next){//function for finding a particular studrecord using studid-->> localhost:5000/student/<enter id here>
      //res.send('Hello World!!!');
      db.query('UPDATE student set ? where studNo= ? ',[req.body,req.params.id], //query fxn(mysqlstatement, requestedparam, callback fxn)
        function(err,rows){
        
          if(err) return next(err);//skip
          
           res.send(rows[0]);                              //sends the resulting row
      });
};



exports.remove = function(req,res,next){//function for finding a particular studrecord using studid-->> localhost:5000/student/<enter id here>
      //res.send('Hello World!!!');
      db.query('DELETE from student where studNo= ? ',[req.params.id], //query fxn(mysqlstatement, requestedparam, callback fxn)
        function(err,rows){
        
          if(err) return next(err);//skip
          
           res.send(rows[0]);                              //sends the resulting row
      });
};



















