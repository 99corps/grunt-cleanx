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

	grunt.registerMultiTask('clean', 'Clean directory', function () {
		var dirs = this.data.dirs;
		var files = this.data.files;
		var existsSync = fs.existsSync || path.existsSync;
			
		var fileArr, filePath, dlen, flen;
		var i, j = 0;

		if (dirs && dirs.length > 0) {
			for (i = 0, dlen = dirs.length; i < dlen; i += 1) {
				if (existsSync(dirs[i])) {
					try {
						fileArr = fs.readdirSync(dirs[i]);
					} catch(e) {
						grunt.log.writeln('cant read directoty. cause by error message :', e);
						return;
					}				
					if (fileArr.length > 0) {
						for(j = 0, flen = fileArr.length; j < flen; j += 1) {
							filePath = dirs[i].substring(dirs[i].length-1) === "/" ? dirs[i] : dirs[i] + "/";
							filePath = filePath + fileArr[j];
							if (fs.statSync(filePath).isFile()) {
								fs.unlinkSync(filePath);
							}   
						} 
					}   
					fs.rmdirSync(dirs[i]);
					grunt.log.writeln(dirs[i],'has been deleted.');
				} else {
					console.log(dirs[i], "is not exist directory or incorrect directory, check your clean task's configuration in grunt.js");
				}  
			}
		}

		if (files && files.length > 0) {
			for (i = 0, flen = files.length; i < flen; i += 1) {
				try {
					if (fs.statSync(files[i]).isFile()) {
						fs.unlinkSync(files[i]);
					}   
				} catch (er) {	// if there is no such file or directory
					if (er.code === "ENOENT") {
						return;
					}   
					throw er; 
				}   
				grunt.log.writeln(files[i], 'has been deleted.');
			}   
		}   
	}); 
};
