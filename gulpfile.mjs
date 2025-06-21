import { src, dest, watch, series, parallel } from 'gulp';
import less from 'gulp-less';
import rename from 'gulp-rename';
import minifycss from 'gulp-clean-css';
import autoprefixer from 'gulp-autoprefixer'; // 直接导入，无需 .default
import uglify from 'gulp-uglify';
import jshint from 'gulp-jshint';
import stylish from 'jshint-stylish';
import notify from 'gulp-notify';
import plumber from 'gulp-plumber';
import htmlclean from 'gulp-htmlclean';
import htmlmin from 'gulp-htmlmin';
import rev from 'gulp-rev-append';
import path from 'path';

const paths = {
  root: './',
  source: './themes/hexo-theme-snippet/source/'
};

/*====================================================
       开发任务
====================================================*/

// 编译 Less -> CSS
function compileLess() {
  return src(paths.source + 'css/less/_style.less')
    .pipe(
      plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
      })
    )
    .pipe(less())
    .pipe(rename({ basename: 'style' }))
    .pipe(dest(paths.source + 'css'))
    .pipe(notify({ message: 'LESS 编译完成', disableHtml: true }));
}

// 校验 JS 代码
function lintJs() {
  return src(paths.source + 'js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(dest(paths.source + 'js/'))
    .pipe(notify({ message: 'JS 校验完成', disableHtml: true }));
}

// 开发模式监听
function watchFiles() {
  watch(paths.source + 'css/less/*.less', compileLess);
  watch(paths.source + 'js/*.js', lintJs);
}

/*====================================================
      生产构建任务
====================================================*/

// 压缩 CSS 并添加前缀
function optimizeCss() {
  return src('./public/**/*.css')
    .pipe(
      autoprefixer({
        overrideBrowserslist: [
          'last 10 versions',
          'Firefox >= 20',
          'Opera >= 36',
          'ie >= 9',
          'Android >= 4.0'
        ],
        cascade: true,
        remove: false
      })
    )
    .pipe(minifycss())
    .pipe(dest('./public'))
    .pipe(notify({ message: 'CSS 优化完成', disableHtml: true }));
}

// 压缩 JS
function optimizeJs() {
  return src('./public/js/*.js')
    .pipe(uglify())
    .pipe(dest('./public/js'))
    .pipe(notify({ message: 'JS 压缩完成', disableHtml: true  }));
}

// 压缩 HTML
function optimizeHtml() {
  return src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(
      htmlmin({
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true
      })
    )
    .pipe(dest('./public'));
}

// 添加版本号
function addVersion() {
  return src('./public/**/*.html')
    .pipe(rev())
    .pipe(dest('./public'));
}

/*====================================================
      任务组合
====================================================*/

// 完整构建流程
const build = series(
  parallel(optimizeCss, optimizeJs),
  addVersion,
  optimizeHtml
);

// 开发模式
const dev = series(
  parallel(compileLess, lintJs),
  watchFiles
);

// 导出任务
export { build, dev };
export default build; // gulp 默认执行 build