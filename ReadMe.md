# kolorobot maven archetype

- kolorobot maven archetype - spring mvc quickstart archetype
- [kolorobot/spring-mvc-quickstart-archetype](https://github.com/kolorobot/spring-mvc-quickstart-archetype)

## v0.1
- add "react" page to main menu (copied from about)
## v0.2
- copy javascript/build stuff from webpack-demo09212018_v4.zip
- add front-end plugin to pom

```aidl
> C:\IntelliJ_WS_tutorials\kolorobot-scaffolding>mvn clean install
...
[INFO] --- frontend-maven-plugin:1.2:install-node-and-npm (install node and npm) @ scaffolding-mvc ---
[INFO] Installing node version v4.4.5
...
[INFO] Running 'npm install' in C:\IntelliJ_WS_tutorials\kolorobot-scaffolding
[WARNING] npm WARN prefer global node-gyp@3.8.0 should be installed with -g
...
[INFO] --- frontend-maven-plugin:1.2:webpack (webpack build) @ scaffolding-mvc ---
[INFO] Running 'webpack.js ' in C:\IntelliJ_WS_tutorials\kolorobot-scaffolding
[ERROR] C:\IntelliJ_WS_tutorials\kolorobot-scaffolding\node_modules\webpack\bin\webpack.js:89
[ERROR]         let notify =
[ERROR]         ^^^
[ERROR]
[ERROR] SyntaxError: Block-scoped declarations (let, const, function, class) not yet supported outside strict mode
[ERROR]     at exports.runInThisContext (vm.js:53:16)
[ERROR]     at Module._compile (module.js:373:25)
[ERROR]     at Object.Module._extensions..js (module.js:416:10)
[ERROR]     at Module.load (module.js:343:32)
[ERROR]     at Function.Module._load (module.js:300:12)
[ERROR]     at Function.Module.runMain (module.js:441:10)
[ERROR]     at startup (node.js:139:18)
[ERROR]     at node.js:968:3
[INFO] ------------------------------------------------------------------------
[INFO] BUILD FAILURE
[INFO] ------------------------------------------------------------------------
[INFO] Total time: 01:11 min
[INFO] Finished at: 2018-09-22T18:38:55-04:00
[INFO] Final Memory: 17M/307M
[INFO] ------------------------------------------------------------------------
[ERROR] Failed to execute goal com.github.eirslett:frontend-maven-plugin:1.2:webpack (webpack build) on project scaffolding-mvc: Failed to run task: 'webpack.js ' failed. (error code 1) -> [Help 1]

```

Google> frontend-maven-plugin:1.2:webpack (webpack build) [ERROR] SyntaxError: Block-scoped declarations (let, const

```aidl
C:\IntelliJ_WS_tutorials\kolorobot-scaffolding>npm run build

> webpack-demo@1.0.0 build C:\IntelliJ_WS_tutorials\kolorobot-scaffolding
> webpack --mode production

Hash: 0a19d60a218642f2891f
Version: webpack 4.19.1
Time: 2662ms
Built at: 2018-09-22 18:50:46
 2 assets
Entrypoint main = bundle.js
 [4] (webpack)/buildin/harmony-module.js 573 bytes {0} [built]
 [5] ./src/main/js/code.png 82 bytes {0} [built]
 [7] ./src/main/js/style.scss 1.21 KiB {0} [built]
 [8] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/main/js/style.scss 1.41 KiB {0} [built] [failed] [1 error]
[11] (webpack)/buildin/global.js 489 bytes {0} [built]
[12] ./src/main/js/index.js + 122 modules 85.1 KiB {0} [built]
     | ./src/main/js/index.js 457 bytes [built]
     | ./src/main/js/people.js 152 bytes [built]
     | ./src/main/js/image-example.js 191 bytes [built]
     |     + 120 hidden modules
    + 520 hidden modules

ERROR in ./src/main/js/style.scss (./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/main/js/style.scss)
Module build failed (from ./node_modules/sass-loader/lib/loader.js):
Error: Missing binding C:\IntelliJ_WS_tutorials\kolorobot-scaffolding\node_modules\node-sass\vendor\win32-x64-57\binding.node
Node Sass could not find a binding for your current environment: Windows 64-bit with Node.js 8.x

Found bindings for the following environments:
  - Windows 64-bit with Node.js 4.x

This usually happens because your environment has changed since running `npm install`.
Run `npm rebuild node-sass` to download the binding for your current environment.
    at module.exports (C:\IntelliJ_WS_tutorials\kolorobot-scaffolding\node_modules\node-sass\lib\binding.js:15:13)
    at Object.<anonymous> (C:\IntelliJ_WS_tutorials\kolorobot-scaffolding\node_modules\node-sass\lib\index.js:14:35)
    at Module._compile (C:\IntelliJ_WS_tutorials\kolorobot-scaffolding\node_modules\v8-compile-cache\v8-compile-cache.js:178:30)
    at Object.Module._extensions..js (module.js:663:10)
    at Module.load (module.js:565:32)
    at tryModuleLoad (module.js:505:12)
    at Function.Module._load (module.js:497:3)
    at Module.require (module.js:596:17)
    at require (C:\IntelliJ_WS_tutorials\kolorobot-scaffolding\node_modules\v8-compile-cache\v8-compile-cache.js:159:20)
    at Object.sassLoader (C:\IntelliJ_WS_tutorials\kolorobot-scaffolding\node_modules\sass-loader\lib\loader.js:46:72)
 @ ./src/main/js/style.scss 2:14-129
 @ ./src/main/js/index.js
npm ERR! code ELIFECYCLE
npm ERR! errno 2
npm ERR! webpack-demo@1.0.0 build: `webpack --mode production`
npm ERR! Exit status 2
npm ERR!
npm ERR! Failed at the webpack-demo@1.0.0 build script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\Alexei\AppData\Roaming\npm-cache\_logs\2018-09-22T22_50_46_479Z-debug.log
```

Run 
> C:\IntelliJ_WS_tutorials\kolorobot-scaffolding>npm rebuild node-sass
> C:\IntelliJ_WS_tutorials\kolorobot-scaffolding>npm run build
```
  > webpack-demo@1.0.0 build C:\IntelliJ_WS_tutorials\kolorobot-scaffolding
  > webpack --mode production
  
  Hash: 4d6769da8fcf250f2da1
  Version: webpack 4.19.1
  Time: 2390ms
  Built at: 2018-09-22 19:20:19
                                 Asset       Size  Chunks             Chunk Names
  037f8de8f5e98abaf1c418a997e9b805.png  894 bytes          [emitted]
                             bundle.js   23.7 KiB       0  [emitted]  main
  Entrypoint main = bundle.js
   [3] ./src/main/js/code.png 82 bytes {0} [built]
   [5] (webpack)/buildin/harmony-module.js 573 bytes {0} [built]
   [7] ./src/main/js/style.scss 1.21 KiB {0} [built]
   [8] ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./src/main/js/style.scss 576 bytes {0} [built]
  [13] (webpack)/buildin/global.js 489 bytes {0} [built]
  [14] ./src/main/js/index.js + 122 modules 85.1 KiB {0} [built]
       | ./src/main/js/index.js 457 bytes [built]
       | ./src/main/js/people.js 152 bytes [built]
       | ./src/main/js/image-example.js 191 bytes [built]
       |     + 120 hidden modules
      + 522 hidden modules
  
  C:\IntelliJ_WS_tutorials\kolorobot-scaffolding>
```  

build  succeed , produce src/main/webapp/WEB-INF/views/home/bundle.js
but > C:\IntelliJ_WS_tutorials\kolorobot-scaffolding>mvn clean install
FAILED with same ERROR

Suppose that bundle.js in place run intellij project
ERROR when hit React page
Refused to execute script from 'http://localhost:8080/bundle.js' because its MIME type ('text/html') is not executable, and strict MIME type checking is enabled.
https://stackoverflow.com/questions/40574159/refused-to-execute-script-strict-mime-type-checking-is-enabled

## manipulate js locations 

add react page to security setting

`.antMatchers("/", "/favicon.ico", "/resources/**", "/signup", "/about", "/react" ).permitAll()`

comment `//import people from "./people"` in index.js

move bundle.js and image to `resources/js`

>npm run build

>restart app

change output path in webpack config

>C:\IntelliJ_WS_tutorials\kolorobot-scaffolding>npm run build

>restart app

```aidl
Uncaught ReferenceError: people is not defined
    at Module.<anonymous> (bundle.js:1)
    at r (bundle.js:1)
    at bundle.js:1
    at bundle.js:1
```

## incompatible node version

```aidl
<nodeVersion>v4.4.5</nodeVersion>
<npmVersion>3.9.2</npmVersion>
```

current
```aidl
Alexei@Alexei-PC MINGW64 /c/IntelliJ_WS_tutorials/kolorobot-scaffolding
$ node -v
v8.11.4
Alexei@Alexei-PC MINGW64 /c/IntelliJ_WS_tutorials/kolorobot-scaffolding
$ npm -v
5.8.0

```
need to update in maven pom

```aidl

```

Run 

>C:\IntelliJ_WS_tutorials\kolorobot-scaffolding>mvn clean install

```aidl
[INFO] BUILD SUCCESS
```

**WOW!!!**

search generated `037f8de8f5e98abaf1c418a997e9b805.png` in built bundle.js => Exists
