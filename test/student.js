//test/student.js

var request = require('supertest'),
	should= require('should-http');
	
describe('student',function(){//for whole student
	var url= 'localhost:5000';
	
	
	
	describe('find()',function(){//each unit
		
		it('should retrieve all student records',function(done){//test case
			//assert.equal(example.add(0,7),7);
			request(url).get('/student').end(function(err,res){
				if(err) throw err;
				res.should.have.status(200);				//response 
				res.body.should.be.an.instanceOf(Array);
				done();
			});
		
	
		});
	});
	
	
	describe('find1()',function(){//each unit
		
		it('should retrieve one existing student record',function(done){//test case
			//assert.equal(example.add(0,7),7);
			request(url).get('/student/2013-09918').end(function(err,res){
				if(err) throw err;
				
				res.should.have.status(200);				//response 
				res.body.should.be.an.instanceOf(Object);
				
				done();
				
				
			});
		
	
		});
	});



	describe('insert()',function(){//each unit
		
		it('should return newly created record',function(done){//test case
			//assert.equal(example.add(0,7),7);
			request(url).post('/student')
			.send({'studNo':'2013-04087','name':'Aleli','bdate':'1996-12-28'})
			.end(function(err,res){
				if(err) throw err;
				
				res.should.have.status(200);				//response 
				res.body.should.be.an.instanceOf(Object);
				res.body.should.have.properties('studNo','name','bdate');

				(res.body).studNo.should.have.a.lengthOf(10);							//test for studNo
				res.body.studNo.should.match(/(\d{4})-(\d{5})/);
				res.body.should.have.property('studNo', 2013-04087);


				res.body.name.should.be.type('string');	
				res.body.should.have.property('name', 'Aleli');							//test for name

				res.body.bdate.should.match(/\d{1,4}-(0[0-9]|1[0-2])-(0[1-9]|(1|2)[0-9]|3[0-1])/);
				res.body.should.have.property('bdate', '1996-12-28');																	//test for bdate
				


				//res.body.should.have.property('affectedRows', 1);




				
				done();
				
				
			});
		
	
		});
	});




















});