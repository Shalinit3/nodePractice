 module.exports = function(dir, extn, callback) {
        var fs = require('fs');
        var path = require('path');
        fs.readdir( dir, function(err,list) {
            if(err) {
                return callback(err);
            }
            else{
                var ext = '.' + extn;
                list = list.filter(function (file) {
                    return path.extname(file) === ext;
                });
                callback(null, list); 
            }
        });
} 


