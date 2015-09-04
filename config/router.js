//router.js - 

var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){//somewhat specifies the link
      router.route('/student')
            .get(student.find) //http method get--->> do fxn .find
            .post(student.insert);
            
            
           
            
      router.route('/student/:id')//yung may mga WHERE
            .get(student.find1)   //.httprequest method
            .put(student.update)
            .delete(student.remove);
      
            
            
            
            
            
            
            
      
      router.route('/teacher')   
            .get(teacher.get);
      router.route('/teacher')   
            .post(teacher.post);
      router.route('/teacher')  
            .put(teacher.put);
      router.route('/teacher')  
            .delete(teacher.delete);
      
            
      return router;

};


