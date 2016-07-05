module.exports=function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json')
	});
	// load the task
	grunt.registerTask('default',function(){
		console.log("ca list goes");
	})
};