/*
 * grunt-cleanx
 * https://github.com/99corps/grunt-cleanx
 *
 * Copyright (c) 2012 JO YONG-HYU
 * Licensed under the MIT license.
 */
var path = require('path'),
	fs = require('fs');

module.exports = function(grunt) {

	// Please see the grunt documentation for more information regarding task and
	// helper creation: https://github.com/cowboy/grunt/blob/master/docs/toc.md

	// ==========================================================================
	// TASKS
	// ==========================================================================
	
	grunt.registerMultiTask('cleanx', 'Clean directory', function () {
		var dirs = this.data.dirs;

		for (var i = 0, dlen = dirs.length; i < dlen; i += 1) {
			if (path.existsSync(dirs)) {
				try {
					var files = fs.readdirSync(dirs[i]);
				} catch(e) {
					grunt.log.writeln('cant read directoty. cause by error message :', e); 
					return;
				}   
					
				if (files.length > 0) {
					for(var j = 0, flen = files.length; j < flen; j += j) {
						var filePath = dirs[i] + files[j];
						if (fs.statSync(filePath).isFile()) {
							fs.unlinkSync(filePath);
						}   
					}   
				}   
				fs.rmdirSync(dirs[i]);
				grunt.log.writeln(dirs[i],'has been deleted.');
			}   
		}   
	});

	// ==========================================================================
	// HELPERS
	// ==========================================================================

	grunt.registerHelper('cleanx', function() {
		return 'cleanx!!!';
	});
};
