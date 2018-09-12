var gulp = require('gulp');// Gulp 모듈 호출
var concat = require('gulp-concat')// Gulp concat 모듈 호출

// task 정의 

gulp.task('comfile:js',function(){
    console.log('comfile 진행중....')
    return gulp.src('js/**/*.js')
    .pipe(concat('scriptAll.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['comfile:js']);

// gulp.task('default',function(){
//     console.log('gulp default 가 실행되었습니다.');
// });