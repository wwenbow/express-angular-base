var javainit = require("../javainit");
var java = javainit.getJavaInstance();

module.exports = java.import("com.mapr.db.MapRDB");
