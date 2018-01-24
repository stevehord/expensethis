var gulp = require("gulp");

gulp.task("copy", function() {
    gulp.src("./src/config/*.json")
    .pipe(gulp.dest("./dist/config"))
  });