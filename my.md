* 忽略node-modules和gitignore本身等
```js
/node_modules
/dist
package-lock.json
.idea/
.gitignore
```

* 清除gitignore缓存
```js
git rm -r --cached .
```