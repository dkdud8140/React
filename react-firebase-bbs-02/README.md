

## firebase에 호스팅

- 내가만든 프로젝트를 다른 사람이 다른 컴퓨터에서 다른 브라우져도 접속할수 있도록 외부의 서버에 deploy 하기

## 배포 도구 설치

- npm install -g firebase-tools / firebase-cli
- firebase-tools를 설치하는데 오류가 나는 경우 : npm uninstall -g firebase-cli

## react 프로젝트를 firebase 에 배포하기

- 프로젝트를 build : yarn build
- firebase login 하기 : firebase login
- 프로젝트에 firebase deploy 설정하기 : firebase init hosting
- 프로젝트를 firebase에 Deploy(배포하기)  
  : firebase deploy --only hosting

## 수정후 재 배포

- yar build
- firebase deploy --only hosting
