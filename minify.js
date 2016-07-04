var compressor = require('node-minify');

// Using Google Closure 
new compressor.minify({
  type: 'gcc',
  fileIn: 'cookieconsent.js',
  fileOut: 'dist/cookieconsent.min.js',
  callback: function(err, min){
    console.log(err);
    //console.log(min); 
  }
});

// Using YUI Compressor for CSS 
new compressor.minify({
  type: 'yui-css',
  fileIn: 'cookieconsent.css',
  fileOut: 'dist/cookieconsent.min.css',
  callback: function(err, min){
    console.log(err);
    //console.log(min); 
  }
});