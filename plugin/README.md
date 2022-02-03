# 커맨드 새로 추가하기

`sources/Command/` 아래에 새 파일을 추가하고 커맨드의 기능을 작성합니다.
그 후, 작성한 커맨드를 `sources/index.ts`의 `commands` 리스트에 추가합니다.
커맨드를 실행 및 업데이트하기 위해선 root에서 `yarn plugin:build`를 실행시켜야 합니다.
