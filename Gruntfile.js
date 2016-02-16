module.exports = function(grunt) {
	var projectFile = grunt.file.readJSON('project.json'),
		watch = projectFile.watch,
		conf = {
			bsFiles: {
				src: [
				]
			},
			bsOptions: {
				proxy: projectFile.proxy,
				ghostMode: {
					clicks: false,
					forms: false,
					scroll: false,
					links: false
				},
				open: 'local',
				notify: false
			}
		};

	// Configure additional watch files
	conf.bsFiles.src = watch.concat(conf.bsFiles.src);

	// Configure proxy
	if (projectFile.proxy === false) {
		conf.bsOptions.open = false;
	}

	grunt.initConfig({
		conf: conf,
		projectFile: projectFile,
		browserSync: {
			bsFiles: conf.bsFiles,
			options: conf.bsOptions
		}
	});

	grunt.loadNpmTasks('grunt-browser-sync');

	grunt.registerTask('default', [
		'browserSync'
	]);
};
