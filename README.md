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
