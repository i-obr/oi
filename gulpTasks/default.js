import gulp  from 'gulp';
import run   from 'run-sequence';

gulp.task('default', () => {
  run(
      'clean',
      ['copy:fonts', 'copy:html', 'copy:img', 'style',  'images'],
      'symbols',
      'scripts',
      'server',
      'watch'
    );
});
