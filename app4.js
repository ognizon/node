const path = require('path');
console.log('Welcome');
var x =10;
console.log(x);

//dirname
console.log(__dirname);
//filname
console.log(__filename);


//dir name using path module
console.log(path.dirname(__filename));
//base name using path module
console.log(path.basename(__filename));
//extension name using path module
console.log(path.extname(__filename));
//parse using path module
console.log(path.parse(__filename));