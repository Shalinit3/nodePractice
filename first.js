function task2() {
    var sum = 0;
    for(i = 2; i < process.argv.length ;i++ ){
        sum += parseInt(process.argv[i]);
   }
   console.log(sum);
}

function task3() {
    var fs = require ('fs') ;
    var fileName = fs.readFileSync(process.argv[2]);
    var targetFile = fileName.toString();
    var arr = targetFile.split('\n');
    console.log(arr.length-1);
}

function task4() {
    var fs = require ('fs') ;
    fs.readFile( process.argv[2] ,function(err, contents){
        if(err){
            console.log('Error');
        }
        else{
            var targetFile = contents.toString();
            var arr = targetFile.split('\n');
            console.log(arr.length-1);       
        }
             
        
    } );
}

function task5() {
    var fs = require('fs');
    var path = require('path')
    fs.readdir( process.argv[2], function(err,list) {
        if(err) {
            console.log('Error');
        }
        else{
            var ext = '.' + process.argv[3];
            list.forEach(function(val) {
                if(path.extname(val) === ext) {
                    console.log(val);
                }
            }); 
        }
    });
}
 function task6() {
    const main = require('/home/shalini/Desktop/node/exportFile.js') ;
    main(process.argv[2], process.argv[3], function(err, list) {
        {
            if(err) {
                console.log (err);
            }
            else {
                list.forEach(function (file) {
                    console.log(file);
                });
            }
        }
    });
}

function testClass() {
    "use strict";
   class student {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }

        details() {
            console.log('Name : ' + this.name + '\nAge : ' + this.age); 
        }
    }

   const std = new student('Shalini' , '21');
   std.details();
}

function testInheritance() {
    'use strict';
    class parent {
        constructor(no1, no2) {
            this.num1 = no1;
            this.num2 = no2;
        }

        diff() {
            return (this.num1 - this.num2);
        }
    }

    class child extends parent {
        sum() {
            return (this.num1 + this.num2);
        }
    }

    const obj = new child(20, 10);
    console.log (obj.sum());
    console.log (obj.diff());
}

function testStatic() {
    'use strict';
    class testClass {
        constructor(no1, no2) {
            this.num1 = no1;
            this.num2 = no2;
        }

        static diff(h) {
            const a = h.num1 - h.num2;
            return a;
        }
    }
    const obj = new testClass(20, 10);
    console.log (testClass.diff(obj));
}

function testPromises() {
    
    var promise = new Promise(function(resolve, reject) {
        if(8 < 20) {
            resolve ('A is Smaller than max');
        }
        else {
            reject ('A is greater');
        }
    });

    promise.then(function(result) {
        console.log(result);
    }, function(err) {
        console.log(err);
    });
}

function task8() {
    var http = require('http');
    http.get( process.argv[2], function(response) {
        response.setEncoding('utf8');
        response.on('data', function (data) {
            console.log(data);
        });
    });
}
task8();

