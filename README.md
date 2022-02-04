### IDE
vscode 사용자라면 `ZipFS - a zip file system` extension 설치

### Node.js
```
$ node -v
```
16.x를 사용합니다. [`nvm`](https://github.com/nvm-sh/nvm)을 통해서 노드 버전을 16.x로 사용할 수 있습니다.

### ProtoBuf

기본적으로 protoc를 사용하기 때문에 먼저 설치합니다.

```bash
curl -OL https://github.com/protocolbuffers/protobuf/releases/download/v3.6.1/protoc-3.6.1-osx-x86_64.zip
# 다른 OS일 경우 https://github.com/protocolbuffers/protobuf/releases/tag/v3.6.1 참고
unzip protoc-3.6.1-osx-x86_64.zip -d protoc3
sudo mv protoc3/bin/* /usr/local/bin/
sudo mv protoc3/include/* /usr/local/include/
sudo chown $USER /usr/local/bin/protoc
sudo chown -R $USER /usr/local/include/google
```

# Getting Started

```bash
yarn bootstrap # proto 파일이 바뀔때마다 bootstrap 한번은 해줘야 변경사항이 반영된다.
# 혹은 'yarn proto:gen'으로 proto파일 변경 사항 반영 가능
yarn dev <-p,--project> {{projectName}} # ex) rider-passport / rider-trip / driver-feedback

yarn workspaces new # 프로젝트 새로 생성
```

<br/>

# Install Library

Yarn2 PnP모드와 workspace를 사용하고 있습니다. 해당 패키지를 설치하려면 다음 명령어를 실행해주세요.

```bash
// projects
yarn workspace
/[scope] add [lib name]

// 1. shared - 디펜던시로 번들에 포함하는 라이브러리 (특수한 상황)
yarn workspace @dragonball-shared/[scope] add [lib name]
// 2. shared - 번들에 포함하지 않는 라이브러리 (일반적인 상황)
yarn workspace @dragonball-shared/[scope] add -D [lib name] \ # devDependency
   && yarn workspace @dragonball-shared/[scope] add -P [lib name] # peerDependency

// 2, - shortcut
yarn i -p [scope] -n [lib name] # yarn i -p util-format -n i18next
```

## Caveat

라이브러리 설치 후 동작하지 않으면 다음과 같은 문제가 있을 가능성이 있습니다.

### 1. 라이브러리 내부에서 node_modules를 참조하는 경우

- 런타임에서 무언가 라이브러리 동작이 의도와 다르게 되는거 같은 경우. 다음 명령어를 통해서 해결할 수 있습니다.

```bash
yarn unplug [lib name]
```

### 2. 라이브러리에서 [Module not found]와 같이 모듈을 Resolve할 수 없는 경우

- 해당 문제가 있는 경우 `.yanrrc.yml` 파일에 `packageExtensions` 필드에 리졸브가 안되는 모듈을 추가해줘서 해결할 수 있습니다.
