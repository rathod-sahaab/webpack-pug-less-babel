# webpack-pug-less-babel template
This repository is a template project if you want to do front-end development using 
**pug**, **less**, **es6** and you want **dependency management**, **compression**, **bundling** 
and **automatic reload** for development, this repository provides that **out of the box!**

## Setup
This is a template repository so use this to create a repository from GitHub.

Clone your repository go in the folder and run
```
npm install
```

## Using
To **develop** with live reloading
```
npm run develop
```
It opens up a new browser window with address `localhost:9600`

To **build** for production _a.k.a._ render
```
npm run build
```


## Hacking

### JavaScript
Use **ES6** for your development without worrying about backwards compatibility powered
by **babel**.

There is only one file `app.js` importing modules setting up things in your `scripts`
directory the files you need to import, you can make any number of js files in the import any
structure just it should be imported once in already imported file.

**vendor.js** imports your files that need to be linked to your html files.

### less
`includes` contains all files that are not imported as reference

`reference` is used when you `@import (reference) ...`

### pug 
`includes` inline substitutions

`bases` the layouts that you extend

to add more pages see `html-webpack-plugin`

### assets
Just a folder to keep do anything

### root
All files and folder are put in root as is, in root of `dist` _e.g._ `favicon.ico`

---
## #JustAsk
Feel free to raise an issue if you encounter any problem or are unclear about something.
