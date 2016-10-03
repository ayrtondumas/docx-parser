const decompress = require('decompress');

var parseDocx = function(filename, callback){
  decompress(filename, 'dist').then(files => {
    fs = require('fs')
    fs.readFile('dist/word/document.xml', 'utf8', function (err,data) {
	     if (err) {
   	     return console.log(err);
 	     }

    	var plain_text = data.replace(/(<w:p )[\s\S]*?>/g,"\n<w:p").replace(/(<([^>]+)>)/ig, "");
    	callback(plain_text);
    });
  });
}


module.exports.parseDocx = parseDocx;
