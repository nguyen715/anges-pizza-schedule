import godown from './templates/godown.js';
import smoky from './templates/smoky.js';
import edit from './templates/edit.js';

let contentDiv = document.getElementById('content');

console.log(contentDiv);

console.log(godown);

let routes = {
  // '/': homepage,
  // '/index.html': homepage,
  '/godown': godown,
  '/smoky': smoky,
  '/edit': edit,
};

console.log('hello');
console.log(window.location.pathname);
// contentDiv.innerHTML = routes[window.location.pathname];