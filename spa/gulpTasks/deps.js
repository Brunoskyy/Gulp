const gulp = require('gulp')
const uglifycss = require('gulp-uglifycss')
const concat = require('gulp-concat')

gulp.task('deps', ['deps.css', 'deps.fonts'])

gulp.task('deps.css', () => {
    return gulp.src([
            'node_modules/font-awesome/font-awesome.css'
        ])
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(concat('deps.min.css'))
        .pipe(gulp.dest('build/assets/css'))
})

gulp.task('deps.fonts', () => {
    return gulp.src(['node-modules/font-awesome/fonts/*.*'])
        .pipe(gulp.dest('build/assets/fonts'))
})