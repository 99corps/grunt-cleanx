[![build status](https://secure.travis-ci.org/99corps/grunt-cleanx.png)](http://travis-ci.org/99corps/grunt-cleanx)

# grunt-cleanx

Clean Build Directory and File

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-cleanx`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-cleanx');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
Configure which directories or files to delete in your `initConfig`:

```javascript
grunt.initConfig({
  // ... other configs

  clean: {
	js : {
    	dirs: [
			"js/dist/",
			"./js/dist" (directory name does not contain a slash("/") in last string, but will run well)
		],
		files: [
			"js/example1.js",
			"js/example2.js"
		]
	}
  }

  // ... other configs
});
```


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt][grunt].

## Release History
* 2012/7/26 - v0.1.0 - initial release
* 2012/7/27 - v0.3.0
* 2012/8/8 - v0.4.0 - added a new option to clean files
* 2012/9/21 - v0.4.2 - add check logic, whether slash("/")  directory name contain slash("/") or does not contain in last string
* 2012/9/24 - v0.5.0 - add build.js file for runninig test and verify in travis
* 2012/11/27 - v0.5.3 - remove registerHelpers of task

## License
Copyright (c) 2012 JO YONG-HYU  
Licensed under the MIT license.
