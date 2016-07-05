# Common Code

This is common code accroes the global modules

# Dev dependencies

The following must be performed on development and deployment systems to install project dependencies.

1. Install nodejs - used to run Bower and Grunt
2. Install Bower (global npm install)
 - ```npm install -g bower```
3. Install Grunt (global npm install) 
 - ```npm install -g grunt-cli```

Within the project directory, run the following commands: 

1. Install configured node modules. *Requires packages.json configuration file.*
 - ```npm install```
2. Install configured bower dependencies. *Requires bower.json configuration file.*
 - ```bower install```

# Build

Build the app in `target`

```bash
grunt
```

or on any file modification

```bash
grunt build
```
