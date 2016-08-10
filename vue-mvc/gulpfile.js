/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

const gulp = require('gulp');
const fs = require('fs');
const path = require('path');
const browserify = require('browserify');
const watchify = require('watchify');
const gutil = require('gulp-util');
const fsPath = require('fs-path');
//const mkdirp = require('mkdirp');
const scriptsPath = 'ViewModels';


function getFolders(dir) {
    return fs.readdirSync(dir)
      .filter(function (file) {
          return fs.statSync(path.join(dir, file)).isDirectory();
      });
}

const paths = [
    process.env.INIT_CWD + '\\ViewModels\\home',
    process.env.INIT_CWD + '\\ViewModels\\home\\components'
];

function buildBundle(folder, input, output) {
    //mkdirp(folder);
    return browserify({
        entries: [input],
        basedir: process.env.INIT_CWD,
        paths: paths
    })
        .bundle()
        .pipe(fs.createWriteStream(output));
}

function watchFolder(input, output) {
    var b = browserify({
        entries: [input],
        cache: {},
        packageCache: {},
        plugin: [watchify],
        basedir: process.env.INIT_CWD,
        paths: paths
});

    function bundle() {
        b.bundle()
            .on('error', function (err) {
                // print the error (can replace with gulp-util)
                gutil.log(err.message);
                // end this stream
                this.emit('end');
            })
            .pipe(fs.createWriteStream(output));
        gutil.log("Bundle rebuilt!");
    }
    b.on('update', bundle);
    bundle();
}

gulp.task('build', function () {
    var folders = getFolders(scriptsPath);
    gutil.log(folders);
    folders.map(function (folder) {
        buildBundle("Scripts//app//" + folder, scriptsPath + "//" + folder + "//main.js", "Scripts//app//" + folder + "//bundle.js");
    });
});

gulp.task('default', function () {
    var folders = getFolders(scriptsPath);
    gutil.log(folders);
    folders.map(function (folder) {
        watchFolder(scriptsPath + "//" + folder + "//main.js", "Scripts//app//" + folder + "//bundle.js");
    });

});

