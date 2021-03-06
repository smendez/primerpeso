var gulp = require('gulp');
var config = require('../config');
var db = require('../../models');


gulp.task('migrate', ['dbsync', 'dbmigrate']);

gulp.task('dbsync', function() {
  console.log('Running Sync.');
  return db.sequelize.sync({ force: false }).complete(function(err) {
    if (err) throw err;
    else console.log('DB SYNC OK');
    return;
  });
});

gulp.task('dbmigrate', function() {
  var migrator = db.sequelize.getMigrator({
    path:        process.cwd() + '/migrations',
  });
  migrator.migrate();
});
