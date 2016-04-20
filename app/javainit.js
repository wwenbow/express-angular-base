"use strict";
var fs = require("fs");
var java = require("java");
var baseDir = "./target/dependency";
var dependencies = fs.readdirSync(baseDir);

dependencies.forEach(function(dependency){
    java.classpath.push(baseDir + "/" + dependency);
})

exports.getJavaInstance = function() {
    return java;
}
