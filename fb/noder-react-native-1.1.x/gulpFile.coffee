gulp = require 'gulp'
replace = require 'gulp-replace'
gutil = require 'gulp-util'
runSequence = require 'run-sequence'
devIp = require 'dev-ip'


child_process = require 'child_process'

appDelegateSrc = './ios/noder/AppDelegate.m'
port = 8081


gulp.task 'replace', ->
  ip = devIp()[0]
  reg = ///
        jsCodeLocation\s=\s
        \[NSURL\sURLWithString:
        @"http:.*\n
    ///g
  #  ip = 'localhost'
  gulp.src appDelegateSrc
  .pipe replace reg, "jsCodeLocation = [NSURL URLWithString:@\"http://#{ip}:#{port}/index.ios.bundle?platform=ios&dev=true\"];\n"
  .pipe gulp.dest './ios/noder'


gulp.task 'package', (cb)->
  cmd = "node"
  start = child_process.spawn cmd, ['node_modules/react-native/local-cli/cli.js', 'start', '--port', port]
  start.stdout.on 'data', (data)->
    gutil.log data.toString()
  start.stderr.on 'data', (data)->
    gutil.log data.toString()


gulp.task 'start', ->
  runSequence 'replace', 'package'
