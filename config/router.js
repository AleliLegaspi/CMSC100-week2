//router.js - 

var student = require('./../controllers/student');
var teacher = require('./../controllers/teacher');

module.exports = function(router){
      router.route('/student')
            .get(student.find);
      
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


