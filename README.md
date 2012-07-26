# grunt-cleanx

Clean Build Directory

## Getting Started
Install this grunt plugin next to your project's [grunt.js gruntfile][getting_started] with: `npm install grunt-cleanx`

Then add this line to your project's `grunt.js` gruntfile:

```javascript
grunt.loadNpmTasks('grunt-cleanx');
```

[grunt]: https://github.com/cowboy/grunt
[getting_started]: https://github.com/cowboy/grunt/blob/master/docs/getting_started.md

## Documentation
Configure which directories to delete in your `initConfig`:
```javascript
grunt.initConfig({
  // ... other configs

  clean: {
	js : {
    	dirs: [
			"js/dist/"
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

## License
Copyright (c) 2012 JO YONG-HYU  
Licensed under the MIT license.
