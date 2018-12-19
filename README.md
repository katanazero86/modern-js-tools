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