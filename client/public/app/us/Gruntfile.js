module.exports=function(grunt){
 //initconfig
 grunt.initConfig({
 	pkg:grunt.file.readJSON('package.json')
 })
 grunt.registerTask('default',function(){
   grunt.log.writeln("us list goes")
 });
};