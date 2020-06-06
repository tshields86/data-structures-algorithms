/*
| cwd      | cd (arg)       | output
| -------- | -------------- | ----
| /        | a              | /a
| /b       | /c             | /c
| /foo/bar | ../../../../.. | /
| /foo/bar | ../../../../a  | /a
| /x/y     | ../p/../q      | /x/q
| /x/y     | /p/./q         | /p/q
| /x/y     | p/./q          | /x/y/p/q
*/

const cd = (cwd, arg) => {
  if (arg[0] === '/') {
    cwd = '/';
    arg = arg.slice(1);
  }

  const directories = cwd.split('/').filter(x => x !== '');
  const actions = arg.split('/');

  actions.forEach(action => {
    if (action === '.') return;
    if (action === '..') directories.pop();
    else directories.push(action)
  });

  return `/${directories.join('/')}`;
};

console.log(cd('/', 'a'));
console.log(cd('/b', '/c'));
console.log(cd('/foo/bar', '../../../../..'));
console.log(cd('/foo/bar', '../../../../a'));
console.log(cd('/x/y', '../p/../q'));
console.log(cd('/x/y', '/p/./q'));
console.log(cd('/x/y', 'p/./q '));