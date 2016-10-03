var docxParser = require('../index.js');

docxParser.parseDocx("example.docx", function(data){
        console.log(data)
})
