module.exports = function (grunt) {
	"use strict";

	grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-build");
	grunt.registerTask("buildProject", [
		"clean",
		"lint",
		"build"
	]);

	grunt.loadNpmTasks("@sap/grunt-sapui5-bestpractice-test");
	grunt.registerTask("testProject", [
		"test"
	]);
	grunt.config.merge({
		coverage_threshold: {
			statements: 0,
			branches: 0,
			functions: 0,
			lines: 0
		}
	});

	grunt.log.write("Display Grunt config: " + JSON.stringify(grunt.config.get()));
	grunt.log.write("Display Grunt config: " + JSON.stringify(grunt.config.get("karma")));

};