Docx-parser
===================


A simple module to get the plain text from a docx file.

----------

**exemple**
```
var docxParser = require('docx-parser');

docxParser.parseDocx("example.docx", function(data){
        console.log(data)
})
```
