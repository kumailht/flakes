// package metadata file for Meteor.js
'use strict';

var packageName = 'flakes:flakes';  // https://atmospherejs.com/flakes/flakes
var where = 'client';  // where to install: 'client' or 'server'. For both, pass nothing.

Package.describe({
  name: packageName,
  summary: 'flakes (official) - Design & Frontend Framework for internal business applications',
  version: '1.0.0',
  git: 'https://github.com/ls42/flakes.git' // Should change later to a MeteorPackaging URL
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.0');
  api.addFiles([
    'css/all.css',
    'js/base.js'
  ], where
  );
});

