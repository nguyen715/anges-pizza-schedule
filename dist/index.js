'use strict';

var _godown = require('./templates/godown');

var _godown2 = _interopRequireDefault(_godown);

var _smoky = require('./templates/smoky');

var _smoky2 = _interopRequireDefault(_smoky);

var _edit = require('./templates/edit');

var _edit2 = _interopRequireDefault(_edit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentDiv = document.getElementById('content');

var routes = {
  // '/': homepage,
  // '/index.html': homepage,
  '/godown': _godown2.default,
  '/smoky': _smoky2.default,
  '/edit': _edit2.default
};

console.log('hello');
console.log(window.location.pathname);
contentDiv.innerHTML = routes[window.location.pathname];