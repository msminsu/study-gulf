const gulp = require('gulp'); // gulp 플러그인 호출 
const concat = require('gulp-concat');
const sourcemaps = require('gulp-sourcemaps'); // sourcemaps 호출 
const sass = require('gulp-sass'); // sass 호출
const watch = require('gulp-watch'); // watch
const autoPrefixer = require('gulp-autoprefixer');// 



const autoprefixer_browsers = ['last 4 version', 'not IE 8'];
/** * ==============================+ * 경로들을 담을 객체 생성 * ==============================+ */
const src = 'src';
const dist = 'dist';
const paths = {
    local:`${__dirname}`,

    js: src + '/js/**/*.js',

    scss: src + '/sass/**/*.scss'
};


/** * =====================================+ * @task : Script 병합,압축,min 파일 생성 * =====================================+ */
gulp.task('js:combine', function () {
    return gulp.src(paths.js)
    .pipe(concat('combined.js'))
    .pipe(gulp.dest(dist + '/js'));
});

let compileJS = () => {
    gulp.src(`${paths.js}`)
    .pipe(concat('combined.js'))
    .pipe(gulp.dest(dist + '/js'));
};

 /** * ==============================+ * @SCSS : SCSS Config(환경설정) * ==============================+ */
const scssOptions = { 
    /** 
    * outputStyle (Type : String , Default : nested) 
    * CSS의 컴파일 결과 코드스타일 지정 
    * Values : nested, expanded, compact, compressed 
    * */
    outputStyle: "expanded",
    /** 
     * indentType (>= v3.0.0 , Type : String , Default : space) 
     * 컴파일 된 CSS의 "들여쓰기" 의 타입 
     * Values : space , tab 
     * */
    indentType: "tab",
    /** * indentWidth (>= v3.0.0, Type : Integer , Default : 2) * 컴파일 된 CSS의 "들여쓰기" 의 갯수 */
    indentWidth: 1, // outputStyle 이 nested, expanded 인 경우에 사용 
    /** * precision (Type : Integer , Default : 5) * 컴파일 된 CSS 의 소수점 자리수. */
    precision: 6,
    /** * sourceComments (Type : Boolean , Default : false) * 컴파일 된 CSS 에 원본소스의 위치와 줄수 주석표시. */
    sourceComments: true
};
/** * ==================================+ * @task : SCSS Compile & sourcemaps * ==================================+ */
gulp.task('scss:compile', function () {
    return gulp // SCSS 파일을 읽어온다. 
        .src(paths.scss) // 소스맵 초기화(소스맵을 생성) 
        .pipe(sourcemaps.init()) // SCSS 함수에 옵션갑을 설정, SCSS 작성시 watch 가 멈추지 않도록 logError 를 설정 
        .pipe(scss(scssOptions).on('error', scss.logError)) // 위에서 생성한 소스맵을 사용한다. 
        .pipe(sourcemaps.write()) // 목적지(destination)을 설정 
        .pipe(gulp.dest(dist + '/css'))
});


let compileSass = () =>{
    gulp.src(`${paths.scss}`)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compact'}).on('error',sass.logError))
    .pipe(autoPrefixer(autoprefixer_browsers))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dist+'/css'));
}

gulp.task('dev', ()=>{
    compileJS();
    compileSass();
// console.log(`${paths.local}`, '--------------check-----------')
    watch(`${paths.local}/src/js/**/*.js`,compileJS);
    watch(`${paths.local}/src/sass/**/*.scss`, compileSass);
}); // gulp 를 실행하면 default 로 js:combine task, scss:compile task 그리고 watch task 를 실행하도록 한다. 



// gulp.task('default', ['js:combine','scss:compile','watch']);
gulp.task('default',function(){
    
});
