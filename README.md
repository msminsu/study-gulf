# study-gulp

## step-01 : gulp 설치방법, 간단한 task 작성 실행
gulp 연습

자동화 빌드 시스템 : start Gulp

gulp로 할 수 있는것
1. 웹 서버 동작
2. sass 를 css로 컴파일
3. 편집기 툴에서 파일을 저장할 때마다 웹브라우저를  새로고침
4. 리소스  최적화

이 모든 작업을 Gulp task를 작성해서 실행

node.js 의 스트림 기반으로 작동되기 때문에 node.js 설치

node package manager: NPM   node.js 기반의 패키지 모듈들을 관리하는 도구


1. node.js 설치 ( npm 도 함께 설치 됨) :  cli 버전 확인 $node -v
2. npm -v              : npm 버전 확인
3. npm install gulp -g : gulp 설치 글로벌에
4. gulp - v            : gulp 번전 확인
5. npm i gulp --save-dev : 로컬로 설치 (디펜던시 )
6. npm init : 질문식 package.json 생성됨 -배포시 필요한 파일 > enter키로 생성

사용자 프로젝트에 Gulp 설치 완료

--save-dev 플래그 :  개발당시에만 필요한  모듈 설치시   약자 : -D

--save  플래그 : 배포시에도 필요한 모듈 설치시 npm i gulp --save  약자 : -S


~~~c
>gulp 
Local gulp not found in D:\My-Lab\study-gulp
Try running: npm install gulp
~~~
현재 디렉토리에 gulp 패키지가 설치가 안돼있어서 에러발생

-g 로 왜 전역으로 설치? 

gulp cil를 사용할때 어느용도까지 사용할건지에 따라서 global, local 설치 기준
대게 -g 로설치후 local로도 설치하여 사용



gulp가 수행할 항목은 gulp.js에 task로 정의 해야 실행됨


1. gulp.js 파일 생성


```c
//step -01
var gulp = require('gulp');// Gulp 모듈 호출

// 해야 할 task 정의 
gulp.task('default',function(){
    console.log('gulp default 가 실행되었습니다.');
});
```
~~~
> gulp deafult 
~~~
 cil 명령으로 실행

## step-02 : Gulp 사용법



gulp  사용전 기본적으로 package.json 과 gulpfile.js 생성 

디렉토리 생성 src(최적화 전 리소스들), dist(빌드된 파일들) 폴더 생성하기


~~~c
$npm install gulp-concat -D
~~~
gulp-concat 패키지 모듈을 사용하기 위해 설치

