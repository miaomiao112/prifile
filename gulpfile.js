var gulp = require('gulp');
/*var sass = require('gulp-sass');*/

gulp.task("copy-html",function(){
	gulp.src("*")
	.pipe(gulp.dest("F:\\phpStudy\\WWW\\for_you_love"))
})
/*
gulp.task("copy-css",function(){
	gulp.src("css/*.css")
	.pipe(gulp.dest("F:\phpStudy\WWW\for_you_love/css/"))
})
gulp.task("images",function(){
	gulp.src("img/*.{jpg,png,gif,bmp}")
	.pipe(gulp.dest("F:\phpStudy\WWW\for_you_love/img/"))
})
gulp.task("js",function(){
	gulp.src("js/*.js")
	.pipe(gulp.dest("F:\phpStudy\WWW\for_you_love/js/"))
})

gulp.task("php",function(){
	gulp.src("*.php")
	.pipe(gulp.dest("F:\phpStudy\WWW\for_you_love/"))
})

gulp.task("watchAll",function(){
	gulp.watch(["*.html"],["copy-html"]);
	gulp.watch(["css/*.css"],["copy-css"]);
	gulp.watch(["scss/*.scss"],["sass"]);
	gulp.watch(["js/*.js"],["js"]);
	gulp.watch(["*.php"],["php"]);
})*/



