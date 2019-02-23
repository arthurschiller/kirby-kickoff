# Kirby Kickoff
This is a simple kickstarter project for the Kirby CMS (Version 3).
https://getkirby.com

## Installation
First make sure you have nodeJS installed on your machine.
You can get it here: <https://nodejs.org>

Then install gulp globally:
```sh
$ sudo npm install gulp -g
```
*»sudo«* is only needed on a Mac.

Now open the project directory in a console and follow these steps:

_If you downloaded the raw zip file you might wanna initalise a git repo first:_
```sh
$ git init
```

If you cloned the repo or already have one in place you can start with removing the temporary kirbycore directory.
```sh
$ rm -R kirbycore
```

Add kirby as a submodule into the kirbycore directory:
```sh
$ git submodule add https://github.com/getkirby/kirby.git kirbycore
```

Install the NPM modules:
```sh
$ npm install
```

And finally start gulp and enjoy developing your fresh kirby project:
```sh
$ gulp
```

### Additional gulp Tasks
Optimize SVG files and put them into a spritesheet:
```sh
$ gulp svg
```

### Development
Feedback, improvements, forks etc. are of course welcome! :)
