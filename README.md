# modern-js-tools

Modern JavaScript Tools

- Babel
- Webpack
- Axios


#### Babel

```
바벨이란?
- 최신 JS를 사용하게 도와주는 JS 컴파일러
- 최신 JS를 지원하지 않는 브라우저에서 실행되는 호환가능한 JS로 변환(IE..) 

npm i --save-dev @babel/cli
npm i --save-dev @babel/preset-env
npm i --save-dev @babel/core

.babelrc 파일을 생성하여, preset을 설정해 주자.
.babelrc는 바벨에 대해 설정을 하는 파일입니다. 여기에 preset이나 plugin을 연결하면 됩니다.
{
  "presets": [...],
  "plugins": [...]
}

{
  "presets": [
    ["@babel/preset-env"]
  ]
}


아니면, package.json 파일에
"babel":{
		// config
}
위와 같이 사용을 해도 된다.

밑에는 babel 명령어 옵션이다.(@babel/cli의 역할)
https://babeljs.io/docs/en/babel-cli
--out-file or -o.
--watch or -w.
--out-dir or -d.

"presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "browsers": ["last 2 versions", "safari >= 7"]
          }
        }
      ]
    ]
각 브라우저의 최신 두 버전과 버전 7 이상의 Safari를 지원하는 데 필요한 변형이 로드됩니다.
사용가능한 옵션은 여기서 확인 https://github.com/browserslist/browserslist#queries

```

#### Webpack
```
웹팩이란?
- 웹팩은 모듈 번들러 입니다. 
- 웹팩은 상호 의존성이 있는 모듈들을 사용해 그 모듈들과 같은 역할을 하는 정적 에셋들을 생성
(모듈을 모아서 컴파일 후, 하나의 번들 파일로 만든다.)
웹팩4부터는 webpack-cli를 같이 설치해야 커맨드라인에 webpack이란 명령어를 사용
 
npm i --save-dev webpack
npm i --save-dev webpack-cli
npm i --save-dev webpack-dev-server
npm i --save-dev babel-loader


설치를 완료했으면, 설정파일을 하나 만들어주자.(root dir)
webpack.config.js


mode
웹팩4에서 추가되었습니다. 
mode가 development면 개발용, production이면 배포용입니다. 
배포용일 경우에는 알아서 최적화가 적용

entry
entry 부분이 웹팩이 파일을 읽어들이기 시작하는 부분
설정에 따라, 코드 분할(Code	splitting)도 가능하다.

output
path는 output으로 나올 파일이 저장될 경로입니다. 
publicPath는 파일들이 위치할 서버 상의 경로
filenmame은 결과물 파일명 입니다.

loader

로더를 사용하면, 웹팩이 모듈을 컴파일 하기전에 프리 프로세스를 실행할 수 있다.
options 에 보면, modules: false라는 옵션이 있는데
이 설정은 Babel이 import 및 export 명령문을 ES5로 
변환하는 것을 방지하고 동적 가져 오기를 활성화합니다.

webpack-dev-server
webpack-dev-server는 간단한 웹 서버를 제공하며 
실시간 재로드를 제공하므로 페이지를 
수동으로 새로 고침하여 변경 사항을 확인할 필요가 없습니다.
 
 devServer: {
         port: 9000,
         hot: true,
         contentBase: path.resolve(__dirname, 'dist'),
         watchContentBase: true,
         compress: true,
         open: true,
         index: 'index.html',
},
옵션참고 : https://webpack.js.org/configuration/dev-server/
```