module.exports=function(grunt){
 grunt.initConfig({
 	pkg: grunt.file.readJSON('package.json')
 })

grunt.registerTask('default',function(){
	console.log("india task");
})

};