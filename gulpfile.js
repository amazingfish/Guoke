const gulp=require('gulp');
const sass=require('gulp-sass');

gulp.task('sass',function(){
	gulp.src('sass/*.{sass,scss}')
  	.pipe(sass().on('error',function(){}))
  	.pipe(gulp.dest('css'))
});

gulp.task('watch', function(){
  gulp.watch('sass/*.{sass,scss}', ['sass']);
});

gulp.task('default', ['watch','sass']);