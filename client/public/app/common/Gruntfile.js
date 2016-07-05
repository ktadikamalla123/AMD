module.exports=function(grunt){
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

   grunt.initConfig({
   	pkg:grunt.file.readJSON('package.json'),
    //clean task need clarity dev prod
    clean:['dist'],
    //js validaton
    jshint:{
      options: {
        jshintrc: true
      },
      src: ['client/public/js/**/*.js'],
    },
    //watch files
    watch:{
      js:{
        task:['concat']
      }
    },
   	concat: {
      dist: {
        src: ['public/app/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    htmlmin:{
      options: {                                 // Target options 
        removeComments: true,
        collapseWhitespace: true
      },
      files: {                                   
        'dist/index.html': 'public/index.html',    // Dictionary of files 
        
      }
    }
   });

    grunt.registerTask('default',['clean','jshint','concat','htmlmin']);

    grunt.registerTask('watch',['watch'])

    grunt.registerTask("build",function(){
      console.log("production build")
    });

    grunt.registerTask('dev',function(){
      console.log("dev task done");
    })


   
};